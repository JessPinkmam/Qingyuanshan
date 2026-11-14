const search = document.getElementById('search');
const domain = document.getElementById('domain');
const category = document.getElementById('category');
const topic = document.getElementById('topic');
const reportList = document.getElementById('reports');
const resultCount = document.getElementById('result-count');
const emptyState = document.getElementById('empty-state');
const loadError = document.getElementById('load-error');
let reports = [];

function fillOptions(select, values, placeholder) {
  select.replaceChildren(new Option(placeholder, ''));
  for (const value of new Set(values)) {
    select.add(new Option(value, value));
  }
}

function updateCategories() {
  const matching = reports.filter(report => !domain.value || report.domain === domain.value);
  fillOptions(category, matching.map(report => report.category), '全部分类');
  updateTopics();
}

function updateTopics() {
  const matching = reports.filter(report =>
    (!domain.value || report.domain === domain.value) &&
    (!category.value || report.category === category.value)
  );
  fillOptions(topic, matching.map(report => report.topic), '全部方向');
}

function normalize(value) {
  return value.normalize('NFKC').toLocaleLowerCase('zh-CN');
}

function renderReports() {
  const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
  const matching = reports.filter(report => {
    const text = normalize([
      report.title, report.summary, report.domain, report.category, report.topic,
      ...report.tags
    ].join(' '));
    return (!domain.value || report.domain === domain.value) &&
      (!category.value || report.category === category.value) &&
      (!topic.value || report.topic === topic.value) &&
      terms.every(term => text.includes(term));
  });
  const fragment = document.createDocumentFragment();
  for (const report of matching) {
    const card = document.createElement('article');
    card.className = 'report-card';
    const breadcrumb = document.createElement('p');
    breadcrumb.className = 'report-path';
    breadcrumb.textContent = [report.domain, report.category, report.topic].join(' / ');
    const heading = document.createElement('h3');
    const link = document.createElement('a');
    link.href = report.path.split('/').map(encodeURIComponent).join('/');
    link.textContent = report.title;
    link.target = '_blank';
    link.rel = 'noopener';
    heading.append(link);
    const summary = document.createElement('p');
    summary.className = 'report-summary';
    summary.textContent = report.summary;
    const tags = document.createElement('div');
    tags.className = 'tags';
    for (const label of report.tags) {
      const tag = document.createElement('button');
      tag.type = 'button';
      tag.className = 'tag';
      tag.textContent = label;
      tag.setAttribute('aria-label', '按标签筛选 ' + label);
      tag.addEventListener('click', () => {
        search.value = label;
        renderReports();
        search.focus();
      });
      tags.append(tag);
    }
    const date = document.createElement('p');
    date.className = 'report-date';
    const time = document.createElement('time');
    time.dateTime = report.updated_at;
    time.textContent = report.updated_at;
    date.append('报告更新于 ', time);
    card.append(breadcrumb, heading, summary, tags, date);
    fragment.append(card);
  }
  reportList.replaceChildren(fragment);
  resultCount.textContent = '显示 ' + matching.length + ' / ' + reports.length + ' 篇报告';
  emptyState.hidden = matching.length > 0;
}

function clearFilters() {
  search.value = '';
  domain.value = '';
  updateCategories();
  renderReports();
}

async function loadCatalog() {
  loadError.hidden = true;
  resultCount.textContent = '正在读取目录…';
  try {
    const response = await fetch('reports.json');
    if (!response.ok) throw new Error('Catalog request failed');
    const catalog = await response.json();
    reports = catalog.reports.toSorted((left, right) =>
      right.updated_at.localeCompare(left.updated_at) || left.title.localeCompare(right.title, 'zh-CN')
    );
    fillOptions(domain, reports.map(report => report.domain), '全部领域');
    document.getElementById('filter-fields').disabled = false;
    clearFilters();
  } catch {
    resultCount.textContent = '目录暂时不可用';
    loadError.hidden = false;
  }
}

document.getElementById('search-form').addEventListener('submit', event => event.preventDefault());
search.addEventListener('input', renderReports);
domain.addEventListener('change', () => {
  updateCategories();
  renderReports();
});
category.addEventListener('change', () => {
  updateTopics();
  renderReports();
});
topic.addEventListener('change', renderReports);
document.getElementById('clear-filters').addEventListener('click', clearFilters);
document.getElementById('retry').addEventListener('click', loadCatalog);
loadCatalog();
