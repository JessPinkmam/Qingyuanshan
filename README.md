# Qingyuanshan · Research Hub

[打开调研知识库首页](https://jesspinkmam.github.io/Qingyuanshan/)

集中收录亚马逊选品、产品研究、旅行徒步和生活决策相关的 HTML 报告与交互工具。首页支持关键词搜索、三级联动筛选和标签筛选，点击报告名称即可在线阅读。

报告按三级实体文件夹归档，一级为大领域，二级为品类或管理分类，三级为具体研究方向。

| 一级领域 `domain` | 二级分类 `category` | 三级方向 `topic` |
| --- | --- | --- |
| 跨境电商 | 喷泉 | 成本与利润 |
| 跨境电商 | Light | 市场与选品 |
| 跨境电商 | 耳环 | 广告与流量 |
| 旅行徒步 | 泉州徒步 | 清源山 |
| 生活决策 | 居住与装修 | 租房 |

现有 21 篇报告，分为 3 个领域、7 个二级分类。完整元数据见 [reports.json](reports.json)。

## 目录结构

```text
跨境电商/
├── 喷泉/
│   ├── 市场与竞品/
│   ├── 款式与选型/
│   ├── 用户与差评/
│   ├── 成本与利润/
│   ├── 包装与物流/
│   └── 品牌与知识产权/
├── Light/
│   └── 市场与选品/
├── 耳环/
│   ├── 市场与选品/
│   ├── 成本与利润/
│   └── 广告与流量/
└── 通用选品/
    ├── 选品方法/
    └── 新手带教/
旅行徒步/
└── 泉州徒步/
    ├── 清源山/
    ├── 紫帽山/
    └── 笔架山/
生活决策/
├── 居住与装修/
│   ├── 买房与装修/
│   └── 租房/
└── 汽车/
    └── 提车检查/
```

根目录的 `index.html` 提供知识库首页，`assets/` 存放首页样式和脚本，`img/` 与 `images/` 存放报告使用的公共图片。`404.html` 根据索引里的 `legacy_paths` 为原有独立报告地址提供浏览器跳转，并保留查询参数和页内锚点。

| 领域 | 品类 / 管理分类 | 报告数 |
| --- | --- | --- |
| [跨境电商](#跨境电商) | 喷泉（9）、Light（1）、耳环（3）、通用选品（2） | 15 |
| [旅行徒步](#旅行徒步) | 泉州徒步（3） | 3 |
| [生活决策](#生活决策) | 居住与装修（2）、汽车（1） | 3 |

## 跨境电商

按喷泉、Light、耳环等品类归档。Light 收录 Figurine Lights 等造型灯报告，通用选品收录跨品类的方法和带教材料。

### 喷泉（9 篇）

#### 市场与竞品

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [桌面喷泉 Top 100 素材库](跨境电商/喷泉/市场与竞品/amazon-tabletop-fountain-media-top100.html) | 商品主图、附图、A+ 与视频。 | `喷泉` `桌面` `竞品分析` | [源码](跨境电商/喷泉/市场与竞品/amazon-tabletop-fountain-media-top100.html) |
| [亚马逊美国户外喷泉 Top 100 · 落地款目录 · 2026-11-11](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E5%B8%82%E5%9C%BA%E4%B8%8E%E7%AB%9E%E5%93%81/amazon-outdoor-fountain-top100.html) | 落地款目录、销量预估、差评与购买用户画像。 | `喷泉` `竞品分析` `差评分析` | [源码](跨境电商/喷泉/市场与竞品/amazon-outdoor-fountain-top100.html) |

#### 款式与选型

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [亚马逊户外大喷泉 · 款式与选购交互指南](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E6%AC%BE%E5%BC%8F%E4%B8%8E%E9%80%89%E5%9E%8B/outdoor-fountain-guide.html) | 款式、在售产品、材质、动力与空间适配。 | `喷泉` `户外` `选购指南` | [源码](跨境电商/喷泉/款式与选型/outdoor-fountain-guide.html) |

#### 用户与差评

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [Table Top Fountain · 差评分门别类（图文版）](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E7%94%A8%E6%88%B7%E4%B8%8E%E5%B7%AE%E8%AF%84/tabletop-fountain-bad-reviews.html) | 18 款产品的差评分类、产品改进方向及论坛反馈。 | `喷泉` `桌面` `差评分析` | [源码](跨境电商/喷泉/用户与差评/tabletop-fountain-bad-reviews.html) |

#### 成本与利润

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [喷泉大小件选品与利润对比工具 · 亚马逊美国站（2026-11-10）](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E6%88%90%E6%9C%AC%E4%B8%8E%E5%88%A9%E6%B6%A6/fountain-large-vs-tabletop-decision-tool.html) | 调整成本和销量假设，对比利润、盈亏平衡与资金回收。 | `喷泉` `利润测算` `选品` | [源码](跨境电商/喷泉/成本与利润/fountain-large-vs-tabletop-decision-tool.html) |
| [喷泉大小件对比校验 · 亚马逊美国站（2026-11-10）](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E6%88%90%E6%9C%AC%E4%B8%8E%E5%88%A9%E6%B6%A6/fountain-size-comparison-check.html) | 核对尺寸分档、数据来源、成本与首批备货资金。 | `喷泉` `利润测算` `FBA` | [源码](跨境电商/喷泉/成本与利润/fountain-size-comparison-check.html) |

#### 包装与物流

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [桌面喷泉：亚马逊尺寸控制](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E5%8C%85%E8%A3%85%E4%B8%8E%E7%89%A9%E6%B5%81/fountain-amazon-size-control.html) | FBA 尺寸、配送费估算、包装标识与摔箱测试。 | `喷泉` `FBA` `包装物流` | [源码](跨境电商/喷泉/包装与物流/fountain-amazon-size-control.html) |

#### 品牌与知识产权

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [喷泉五款 · 版权与亚马逊在售核查报告（2026-11-08 / 落地款 2026-11-10）](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E5%93%81%E7%89%8C%E4%B8%8E%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83/%E5%96%B7%E6%B3%89%E4%B8%A4%E6%AC%BE-%E7%89%88%E6%9D%83%E4%B8%8E%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%A0%B8%E6%9F%A5%E6%8A%A5%E5%91%8A-20261108.html) | 五款产品的在售链接、知识产权核查与利润重算。 | `喷泉` `知识产权` `竞品分析` | [源码](跨境电商/喷泉/品牌与知识产权/喷泉两款-版权与亚马逊核查报告-20261108.html) |
| [聚泉阁 喷泉商标](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E5%96%B7%E6%B3%89/%E5%93%81%E7%89%8C%E4%B8%8E%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83/juquange-fountain-trademark.html) | 品牌候选、USPTO 检索及商标名称核查。 | `喷泉` `商标` `品牌` | [源码](跨境电商/喷泉/品牌与知识产权/juquange-fountain-trademark.html) |

### Light（1 篇）

#### 市场与选品

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [Outdoor Figurine Lights 畅销拆解 · Amazon Best Sellers](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/Light/%E5%B8%82%E5%9C%BA%E4%B8%8E%E9%80%89%E5%93%81/outdoor-figurine-lights-bestsellers.html) | 畅销造型、选品元素、产品筛选及选品公式生成器。 | `户外造型灯` `竞品分析` `选品` | [源码](跨境电商/Light/市场与选品/outdoor-figurine-lights-bestsellers.html) |

### 耳环（3 篇）

#### 市场与选品

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [耳环选品全链路：市场调研 → 选品 → 上架 → 推广](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E8%80%B3%E7%8E%AF/%E5%B8%82%E5%9C%BA%E4%B8%8E%E9%80%89%E5%93%81/amazon-earrings-xuanpin.html) | 从市场调研、选品、Listing 到推广，含评论分析与合规方向。 | `亚马逊` `耳环` `选品` | [源码](跨境电商/耳环/市场与选品/amazon-earrings-xuanpin.html) |

#### 成本与利润

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [耳环纯利润模板：钱分几类，又流向哪里](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E8%80%B3%E7%8E%AF/%E6%88%90%E6%9C%AC%E4%B8%8E%E5%88%A9%E6%B6%A6/amazon-earrings-profit-template.html) | 订单资金分类、支出时间线和交互利润计算器。 | `耳环` `利润测算` `现金流` | [源码](跨境电商/耳环/成本与利润/amazon-earrings-profit-template.html) |

#### 广告与流量

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [耳环投放透视：流量从哪里来，到哪里成交](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E8%80%B3%E7%8E%AF/%E5%B9%BF%E5%91%8A%E4%B8%8E%E6%B5%81%E9%87%8F/amazon-earrings-ads-overview.html) | 流量渠道、转化路径、预算分配与投放节奏。 | `耳环` `广告投放` `流量渠道` | [源码](跨境电商/耳环/广告与流量/amazon-earrings-ads-overview.html) |

### 通用选品（2 篇）

#### 选品方法

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [亚马逊选品方法论](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E9%80%9A%E7%94%A8%E9%80%89%E5%93%81/%E9%80%89%E5%93%81%E6%96%B9%E6%B3%95/amazon-xuanpin-fangfalun.html) | 选品框架、案例、评分器及测款方法。 | `亚马逊` `选品` `方法论` | [源码](跨境电商/通用选品/选品方法/amazon-xuanpin-fangfalun.html) |

#### 新手带教

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [亚马逊选品与市场调研：新手带教方案](https://jesspinkmam.github.io/Qingyuanshan/%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86/%E9%80%9A%E7%94%A8%E9%80%89%E5%93%81/%E6%96%B0%E6%89%8B%E5%B8%A6%E6%95%99/amazon-xuanpin-daijiao.html) | 选品流程、利润测算、候选清单及报告草稿生成。 | `亚马逊` `选品` `新手入门` | [源码](跨境电商/通用选品/新手带教/amazon-xuanpin-daijiao.html) |


## 旅行徒步

### 泉州徒步（3 篇）

#### 清源山

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [维维和威威 · 清源山徒步指南](https://jesspinkmam.github.io/Qingyuanshan/%E6%97%85%E8%A1%8C%E5%BE%92%E6%AD%A5/%E6%B3%89%E5%B7%9E%E5%BE%92%E6%AD%A5/%E6%B8%85%E6%BA%90%E5%B1%B1/index.html) | 三条路线、高德交互地图、景点导航与出发检查。 | `泉州` `清源山` `徒步` | [源码](旅行徒步/泉州徒步/清源山/index.html) |

#### 紫帽山

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [紫帽山徒步指南 &#124; 晋江第一高峰](https://jesspinkmam.github.io/Qingyuanshan/%E6%97%85%E8%A1%8C%E5%BE%92%E6%AD%A5/%E6%B3%89%E5%B7%9E%E5%BE%92%E6%AD%A5/%E7%B4%AB%E5%B8%BD%E5%B1%B1/zimaoshan.html) | 推荐路线、景点、行程建议与装备清单。 | `泉州` `紫帽山` `徒步` | [源码](旅行徒步/泉州徒步/紫帽山/zimaoshan.html) |

#### 笔架山

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [笔架山桫椤谷徒步路线](https://jesspinkmam.github.io/Qingyuanshan/%E6%97%85%E8%A1%8C%E5%BE%92%E6%AD%A5/%E6%B3%89%E5%B7%9E%E5%BE%92%E6%AD%A5/%E7%AC%94%E6%9E%B6%E5%B1%B1/bijiashan.html) | 登科桥进谷环线、自驾落点、实拍参考与出发清单。 | `泉州` `笔架山` `徒步` | [源码](旅行徒步/泉州徒步/笔架山/bijiashan.html) |


## 生活决策

### 居住与装修（2 篇）

#### 买房与装修

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [买房装修避坑指南 · 先算清，再下定，再装好](https://jesspinkmam.github.io/Qingyuanshan/%E7%94%9F%E6%B4%BB%E5%86%B3%E7%AD%96/%E5%B1%85%E4%BD%8F%E4%B8%8E%E8%A3%85%E4%BF%AE/%E4%B9%B0%E6%88%BF%E4%B8%8E%E8%A3%85%E4%BF%AE/maifang-zhuangxiu-bikeng.html) | 买房总账、看房清单、装修预算、施工流程与验收。 | `买房` `装修` `预算规划` | [源码](生活决策/居住与装修/买房与装修/maifang-zhuangxiu-bikeng.html) |

#### 租房

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [租房避坑指南：从找房到退租，一步都不踩坑](https://jesspinkmam.github.io/Qingyuanshan/%E7%94%9F%E6%B4%BB%E5%86%B3%E7%AD%96/%E5%B1%85%E4%BD%8F%E4%B8%8E%E8%A3%85%E4%BF%AE/%E7%A7%9F%E6%88%BF/renting-pitfalls-guide.html) | 风险自测、房租预算、验房、合同与退租押金。 | `租房` `验房` `合同` | [源码](生活决策/居住与装修/租房/renting-pitfalls-guide.html) |

### 汽车（1 篇）

#### 提车检查

| 报告 | 内容 | 标签 | 文件 |
| --- | --- | --- | --- |
| [🎈 维维的威兰达提车清单](https://jesspinkmam.github.io/Qingyuanshan/%E7%94%9F%E6%B4%BB%E5%86%B3%E7%AD%96/%E6%B1%BD%E8%BD%A6/%E6%8F%90%E8%BD%A6%E6%A3%80%E6%9F%A5/weilandacheck.html) | 提车前准备与交车检查项目。 | `汽车` `威兰达` `提车检查` | [源码](生活决策/汽车/提车检查/weilandacheck.html) |

## Muse / Codex 归档约定

详细的 Agent 归档说明见 [AGENTS.md](AGENTS.md)。新增或更新报告时按以下步骤维护。

1. 阅读 HTML 标题和正文，按 `domain → category → topic` 确定三级分类。优先复用已有领域、品类、研究方向和标签。
2. 将 HTML 放入 `领域/品类或管理分类/具体研究方向/文件名.html`，依据文件所在位置计算页面内链、图片及脚本资源的相对路径。
3. 在 [reports.json](reports.json) 中登记稳定的 `id`、实际 `path`、标题、三级分类、标签、简介和报告更新日期。首页自动读取这份索引。
4. 更新报告时保留原 `id`。迁移文件时把旧路径追加到 `legacy_paths`，新增报告的 `legacy_paths` 使用空数组。每份报告对应一条索引记录。
5. 同步更新 README 的目录结构、阅读链接及数量，核对全部索引路径、报告内链和图片地址。

`updated_at` 记录研究内容实际更新的日期，格式为 `YYYY-MM-DD`。初始日期取自各 HTML 归档前最近一次 Git 提交。迁移目录时沿用研究内容的更新日期。

## 调整分类和目录结构

领域、品类和研究方向可以随内容增长而新增、重命名、合并或拆分。每次调整后，请同步更新文件夹、索引和本 README，让仓库目录与首页筛选保持一致。

例如，将一份报告从 `跨境电商/喷泉/成本与利润/` 调整到 `跨境电商/喷泉/利润分析/`，按以下顺序处理。

1. 将报告 HTML 移入新文件夹。分类下有多份受影响的报告时，逐份检查并迁移。
2. 在 `reports.json` 中找到对应的 `id`，更新 `domain`、`category`、`topic` 和 `path`，将迁移前的完整相对路径追加到 `legacy_paths`。保留原 `id` 和已有旧路径，避免重复登记。仅调整目录时沿用 `updated_at`。
3. 检查移动后的报告与其他报告之间的链接，以及图片、样式和脚本的相对路径。引用该报告的其他页面也要更新到新路径。
4. 更新本 README 的「目录结构」树、领域和分类的报告数量、对应三级标题、报告简介及在线阅读和源码链接。新增、删除或合并分类时，同步修改目录中的相关分组。
5. 核对 `reports.json` 中每条 `path` 指向实际文件，README 中的链接和数量与索引一致。在首页检查搜索、三级筛选和报告打开是否正常，并检查旧地址的浏览器跳转。

首页从 `reports.json` 读取分类和报告，按现有三级结构调整名称或路径后，首页会使用更新后的索引。若需要增加或减少分类层级，还需同步调整 `reports.json` 字段、`assets/hub.js` 的筛选逻辑、首页筛选控件、README 和 `AGENTS.md` 中的归档说明。

可以直接让 Muse 或 Codex 执行，例如「把喷泉的成本与利润分类改名为利润分析，并同步更新文件夹、索引、README 和相关链接」。
