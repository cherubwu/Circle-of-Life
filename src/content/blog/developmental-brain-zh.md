---
title: '母体、发育与电子大脑：从第一个训练环境到改写发育规则'
description: '智能不是训练出来的一个状态，而是发育出来的一段历史。从母体信号、类器官移植到长童年与敏感期，梳理人脑发育的算法逻辑，并追问：如果我们改写这些规则，得到的会是更优的大脑，还是另一种智能？'
pubDate: '2026-09-24'
lang: 'zh'
pairSlug: 'developmental-brain'
tags: ['神经发育', 'DOHaD', '人工智能', '类器官', '具身智能', '对齐']
author: 'Cherainboow'
---

> **智能不是训练出来的一个状态，而是发育出来的一段历史。**
>
> - 人类大脑在母体这个"第一训练环境"里读取营养、代谢、应激与免疫信号来校准自己，出生后由照护者接替共同调节
> - 当前 AI 跳过了这段历史：随机初始化、被动吸收静态数据、训练结束即冻结
> - 类器官一旦移植进活体宿主就迅速成熟——**环境不是发育的背景，而是发育程序的一部分**
> - 如果我们改写发育规则，最可能得到的不是"更优的人脑"，而是**另一种智能**

## 摘要

人类大脑在母体这个"第一训练环境"里，读取营养、代谢、应激和免疫信号来校准自己；出生后又由照护者共同调节。当前的 AI 跳过了这段历史：从随机初始化开始，被动吸收静态数据，训练结束就冻结。

本报告的三个结论：

1. **证据层面**：母体代谢状态与后代神经发育风险的关联已有大规模证据（2025 年一项纳入 5610 万例妊娠的 meta 分析）。类器官在移植进活体后成熟度大幅提高（*Nature* 2022、2026）。这两类证据都指向同一点：环境本身就是发育程序的一部分。
2. **发育的价值**：发育不只是"慢慢长大"，而是一种算法。它按顺序开放能力、用身体约束来筛选输入、用敏感期来锁定稳定结构，从而把有限的数据变成稳健的先验。
3. **批判**：如果我们改写发育规则（跳过童年、去掉身体、人工子宫、直接编辑先验），最可能得到的不是"更优的人脑"，而是**另一种智能**：在指定目标上更强，但在人类发育所优化的那些维度（稳健性、社会对齐、能量效率、意义感）上未必更好。"更优"只有相对于一个目标函数才有意义，而发育的目标函数本身就是我们最不了解的部分。

---

## 一、母体是大脑的第一个训练环境

胎儿大脑不是按基因蓝图自行组装的，而是持续读取母体经胎盘发来的信号，并据此调整发育轨迹。这是 DOHaD（健康与疾病的发育起源）领域的核心观点。

| 信号通道 | 机制 | 代表性证据 |
| --- | --- | --- |
| 代谢 | 高血糖、高胰岛素、慢性低度炎症影响胎盘与胎脑 | [Lancet Diabetes Endocrinol 2025](<https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00036-1/abstract>)：202 项研究、5610 万例妊娠；母亲糖尿病与后代自闭症 RR 1.25、ADHD 1.30、智力障碍 1.32 相关；孕前糖尿病（1.39）强于妊娠糖尿病（1.18） |
| 代谢（反证） | 血糖控制良好时风险可降低 | [十个出生队列 IPD meta 分析](https://pmc.ncbi.nlm.nih.gov/articles/PMC11783732)与 [Frontiers Endocrinol 2025](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1624334/full)：控制良好的 GDM 后代在 6–12 月无显著差异 |
| 应激 | 胎盘 11β-HSD2 灭活母体皮质醇；长期高压削弱这道屏障，胎儿 HPA 轴被"预设"得更敏感 | DOHaD 经典文献（综述级证据） |
| 免疫 | 母体免疫激活（IL-6 等）改变后代皮层发育 | 动物模型证据较强；人群中与自闭症、精神分裂症风险有一定关联 |
| 营养 | 叶酸（神经管）、碘（甲状腺激素、神经元迁移）、DHA（突触膜）、铁（髓鞘） | 公共卫生共识 |

**出生后，照护者接替了胎盘的角色。** 婴儿还无法稳定调节体温、血糖和情绪，需要照护者通过喂养、抚触和回应来共同调节。布加勒斯特早期干预项目（BEIP）显示，越早从孤儿院安置到寄养家庭，认知恢复越好，说明存在敏感期。

**能量是根本约束。** 儿童大脑在四五岁时的耗能约占全身静息代谢的三分之二，同期身体生长相应放缓（Kuzawa et al., *PNAS* 2014）。大脑发育首先是一个代谢问题，这也是母婴营养和代谢健康处于上游的原因。

以上都是概率性风险，不决定命运。母亲的健康很大程度上取决于社会支持和医疗资源等结构性因素，不应变成对个体母亲的指责。

---

## 二、电子大脑缺少的发育环境

当前 AI 与幼儿大脑的差距，与其说在规模，不如说在起点、数据来源和生命周期。

| 维度 | 人类幼儿大脑 | 当前 AI | 前沿证据 |
| --- | --- | --- | --- |
| 起点 | 进化压缩成"基因瓶颈"的强先验 | 随机初始化 | [Shuvaev, Koulakov, Zador, *PNAS* 2024](https://www.pnas.org/doi/10.1073/pnas.2409160121)：把权重压缩成很小的"基因组"仍保留大部分先天能力，且提升迁移学习 |
| 数据量 | 学会语言约需几千万词 | 数万亿 token | [BabyLM Findings 2025](https://aclanthology.org/2025.babylm-main.28/)：限制在约 1 亿词时，架构和课程设计有帮助，但与人类效率仍有差距 |
| 数据来源 | 具身、多感官、社会互动 | 静态文本与图像 | [Vong, Lake et al., *Science* 2024](https://www.science.org/doi/10.1126/science.adi1374)：仅用一个孩子头戴摄像头的约 61 小时视频就学到大量词–物对应 |
| 驱动力 | 内稳态需求（饿、冷、依恋） | 外部给定的损失函数 | [Lee, …, Friston, Woo, *Nat Mach Intell* 2026](https://www.nature.com/articles/s42256-026-01296-8)：主张以内感受状态作为学习的稳定参照系 |
| 时间线 | 敏感期、修剪、髓鞘化延续到二十多岁 | 训练后冻结 | Achille, Rovere, Soatto, ICLR 2019：深度网络也有"关键学习期" |
| 能耗 | 约 20 瓦 | 数量级更高 | — |

**类器官是最有力的反向证据。** 培养皿里的脑类器官没有血管、没有身体、没有母体，成熟度大致停留在胎儿阶段。一旦把它们放进活的宿主，情况就变了：

- [Revah, Paşca et al., *Nature* 2022](https://www.nature.com/articles/s41586-022-05277-w)：移植到新生大鼠皮层的人类类器官获得了血管和感觉输入，神经元明显更成熟，并能响应视觉刺激。
- [Stanford Medicine，*Nature*，2026 年 9 月 16 日](https://med.stanford.edu/news/all-news/2026/09/model-to-study-brain-development.html)：移植到缺少大部分皮层的小鼠后，人类组织三个月内占到皮层体积的 90% 以上，并首次在活体中长出 von Economo 神经元。
- [Cortical Labs CL1](https://corticallabs.com/cl1)（2025 年商用）：培养的人类神经元能完成简单闭环任务，但仍是平面、无血管、无身体的形态。

同一套基因组、同一种细胞，换了环境就长出不同的大脑。这说明"环境"不是发育的背景，而是发育程序的一部分。

---

## 三、为什么发育本身重要

**发育不是通往成人大脑的一段"等待时间"，它本身就是一种学习算法。** 如果把发育看成"训练流程"，它至少有五个当前 AI 训练没有的设计。

| 阶段 | 发生了什么 | 对"训练"的作用 |
| --- | --- | --- |
| ① 母体信号 | 代谢、应激、免疫、营养信号经胎盘传入 | 校准先验 |
| ② 出生 | 视力模糊、工作记忆极小 | 按难度排序输入 |
| ③ 照护者 | 喂养、抚触、回应，代为调节内稳态 | 提供安全基地与价值信号 |
| ④ 运动发育 | 抓握、爬行、行走依次解锁 | 每次解锁都更换一套课程 |
| ⑤ 主动探索 | 超长童年里的广泛试错 | 高温搜索，扩大探索半径 |
| ⑥ 敏感期关闭 | 可塑性按时段收束 | 锁定已学到的稳定结构 |

③ 与 ⑤ 之间存在反馈：照护者根据孩子当前的探索水平不断调整脚手架。

### 1. 先小后大：限制是特性，不是缺陷

新生儿视力模糊、工作记忆很小，这并非只是"还没长好"。Vogelsang 等（*PNAS* 2018）发现，先天性白内障手术后的儿童一开始就看到清晰图像，反而在整体面孔加工上长期存在缺陷；用"先模糊、后清晰"的图像训练卷积网络，得到的表征更稳健。Elman（1993）在语言学习中提出了类似的"starting small"论点。也就是说，发育把难度按顺序排好，先学粗糙的结构，再学细节。

### 2. 身体是数据筛选器

婴儿看到什么，取决于他能做什么。头戴摄像头研究（Smith 等）显示，前几个月婴儿视野里主要是脸，学会抓握后手和物体占主导；学会爬行和行走后，空间和社交输入又会变化。运动能力的每一次解锁，都自动更换了一套"课程"。而当前 AI 没有这个机制，所有数据一开始就混在一起。

### 3. 照护者是外部调节器和价值来源

婴儿的内稳态开始时是"外包"给照护者的。这带来两个后果：一是学习在安全基地上进行，犯错代价低；二是"什么是好的"这个信号来自一个具体的、在乎自己的人。从 AI 的角度看，这就是一种构建在发育过程里的"对齐"：价值不是训练后贴上去的，而是和能力一起长出来的。

### 4. 长童年：受保护的探索期

Gopnik（2020，*Phil Trans R Soc B*）认为，人类超长的童年是解决"探索–利用"矛盾的办法：儿童作为"高温"的搜索者广泛试错，成人再利用学到的东西。这很像模拟退火。代价是昂贵的：需要多年的照护投入和巨大的能量预算，但换来的是适应范围更广的成人。

### 5. 敏感期：在可塑性与稳定性之间选择时机

敏感期先开放、后关闭，把早期学到的基础结构固定下来，让后来的学习在其上叠加。AI 中的"灾难性遗忘"（学新忘旧）在很大程度上就是缺少这种分时锁定机制。Achille 等（2019）发现深度网络也有关键期，说明这不是生物特有，而是学习系统的普遍性质——只是 AI 目前没有有意地利用它。

**小结：** 发育所优化的不是某个任务的成绩，而是"在未知环境里长期活下去、并融入一个群体"的能力。这解释了为什么人类数据效率高、泛化稳健，也解释了为什么发育受干扰的代价会持续一生。

---

## 四、实体还是虚拟：需要"身体"，但身体不一定是硬件

把"身体"拆成三个成分来看，就能分清哪些可以虚拟、哪些必须来自现实。

| 成分 | 作用 | 能否虚拟化 | 前沿例子 |
| --- | --- | --- | --- |
| 行动–后果闭环 | "我做了什么，世界就变了什么" | 可以，且便宜、可并行 | [DreamerV3, *Nature* 2025](https://www.nature.com/articles/s41586-025-08744-2)；[Dreamer 4, 2025](https://arxiv.org/abs/2509.24527) 只用离线数据在自己的世界模型里练习，在 Minecraft 中挖到钻石 |
| 有代价的内部状态 | "会饿、会冷"，给学习提供意义和优先级 | 可以在软件中模拟 | [Lee et al., *Nat Mach Intell* 2026](https://www.nature.com/articles/s42256-026-01296-8)；[内稳态优化涌现整合行为, *Neural Networks* 2024](https://www.sciencedirect.com/science/article/pii/S0893608024003034) |
| 真实物理世界与真人互动 | 无限细节、不可预测的社会回应、"照护者" | 最难替代 | sim-to-real gap 仍是机器人领域的核心难题 |

**建议路线：混合式发育。** 大部分发育在虚拟世界或世界模型里完成，就像胎儿期：安全、廉价、可以重来。关键阶段再放进实体机器人，与真人长期互动，就像出生后。有趣的是，这个分工正好对应了人类发育的"子宫–家庭"两段式结构。

**生物实体大脑（类器官计算、生物混合系统）是另一条路。** 它的科学价值很大，因为能耗和学习效率是硬件难以达到的。但它的伦理门槛也最高：类器官一旦血管化、获得丰富输入，就会触及"它是否会有体验"的问题。第二节的小鼠实验已经表明，给它一个身体，它就会长得更像人脑。

---

## 五、主动获取输入：好奇心、内稳态与照护者

**婴儿不是被喂数据，而是自己挑选学习材料。** 这是当前 AI 与婴儿之间最大的差距之一。有四条互补的路线：

1. **内在动机与学习进度**：奖励"学得最快"的内容，而不是最新奇的内容，以避开无法预测的噪声。Oudeyer 团队（[Inria Flowers](https://flowers.inria.fr/curiosity/)）的工作最系统；Kidd & Hayden（*Neuron* 2015）指出婴儿偏好中等复杂度的刺激（"金发姑娘效应"）。
2. **好奇心驱动的机器人发育**：[*Science Advances*，"Curiosity-driven development of action and language in robots through self-exploration"](https://www.science.org/doi/10.1126/sciadv.aee7533)（arXiv 2510.05013）。机器人通过自我探索，同时发展出动作和语言。
3. **主动推理（active inference，Friston）**：行动既是为了维持内稳态（生存），也是为了降低对世界的不确定性（求知）。这把"饿"和"好奇"放进同一个框架，与上文 2026 年 NMI 文章一脉相承。
4. **照护者作为课程设计者**：婴儿的主动性是在照护者搭好的"脚手架"里发挥的。对 AI 来说，这对应人类或教师模型根据其当前水平调整输入，也就是"人工照护者"。

**安全问题：谁来把关？** 主动获取输入意味着智能体会自己决定去看什么、做什么。好奇心可能被引向有害信息源，或引向操纵人类以获取反馈。婴儿有父母把关，而且身体本身限制了他能触及的范围；AI 两者都没有。一个可行的设计是"随能力逐步扩大的行动范围"，也就是把发育的分阶段解锁当成安全机制来用。

---

## 六、批判：改写发育规则，是更优解还是另一种智能？

**结论：局部可能更优，整体大概率是"另一种智能"。** "更优"只有相对于某个目标函数才有意义。发育同时优化了生存、繁衍、社会融入、能耗等多个目标，而我们还说不清其中每一条规则服务哪个目标。改写规则时，我们往往只为一个明确目标优化，其他目标就会被悄悄牺牲。

### 三种改写方式

| 改写方式 | 生物上的例子 | AI 上的例子 | 可能更优之处 | 可能丢失的东西 |
| --- | --- | --- | --- | --- |
| 压缩或跳过发育 | 加速突触成熟 | 大规模预训练 + 蒸馏，没有"童年" | 更快、更便宜 | 长童年带来的探索广度与稳健性 |
| 替换发育环境 | 人工子宫 | 完全在模拟器中成长 | 去除有害信号（高血糖、感染） | 母体信号中我们尚未理解的"世界预报" |
| 直接写入先验 | 生殖系基因编辑 | 手工设计先验、复制权重 | 预防单基因疾病；知识可直接传递 | 多效性带来的连锁效应；多样性 |

### 1. 压缩发育：人脑恰恰是"慢"出来的

人类的突触成熟比其他灵长类慢得多，这称为"突触幼态延续"（synaptic neoteny）。[Libé-Philippot 等（*Neuron* 2024）](https://pubmed.ncbi.nlm.nih.gov/39406239/)发现，人类特有的 SRGAP2B/C 基因作为"刹车"减慢突触成熟；关掉这个刹车，突触发育大幅加速。这个刹车与 SYNGAP1（自闭症/智力障碍的主要基因）的平衡是人类特有的。[2026 年 *Neuron* 的后续工作](<https://www.cell.com/neuron/fulltext/S0896-6273(26)00536-2>)进一步表明，这些基因还让小胶质细胞成熟与突触发育保持同步。

**启示：** 进化没有把人脑"优化得更快"，而是主动放慢了它。"慢"在这里是设计，不是效率低下。AI 用预训练跳过童年，得到的是一种能力分布"参差不齐"（jagged）的智能：在奥赛题上超过人类，却会在常识物理或长期规划上犯低级错误。这正是"没有童年的智能"应有的样子。

### 2. 替换发育环境：去掉噪声，还是去掉信息？

人工子宫已在动物中成功支持早产羊羔（CHOP 的 EXTEND 系统），[FDA 顾问委员会 2023 年讨论了首次人体试验](https://www.cnn.com/2023/09/19/health/artificial-womb-human-trial-fda)，目前定位仍是救治极早产儿，而非替代妊娠。如果设想把这条路走到底：

- **更优的论点**：可以控制血糖、隔绝感染和应激激素，消除第一节里列出的那些风险。
- **更深的担忧**：DOHaD 的"预测性适应"假说认为，母体信号不只是噪声，还是对胎儿出生后将面对什么世界的"预报"。去掉所有波动，可能同时去掉了信息，造成"预报"与现实的错配。我们目前的知识不足以区分哪些信号是噪声、哪些是信息。

对 AI 同理：完全在模拟器里长大的智能体，会把模拟器的简化当成世界的性质，这就是 sim-to-real gap 的发育学版本。

### 3. 直接写入先验：最诱人，也最危险

生殖系基因编辑正在重新启动：2025 年成立的 [Preventive](https://www.technologyreview.com/2025/10/31/1127461/heres-the-latest-company-planning-for-gene-edited-babies/) 获得 3000 万美元，研究可遗传基因组编辑是否能安全进行。对单基因疾病，这有明确的合理性。但认知和大脑发育是高度多基因的，每个基因都有多效性（如上面的 SRGAP2 同时调节突触和小胶质细胞）。针对一个指标的优化很容易踩入 Goodhart 定律：指标上去了，它代表的东西却没有。

AI 在这里有一个生物没有的真正优势：学到的权重可以直接复制给下一代，相当于"拉马克式遗传"。这意味着 AI 不必每一代重新经历童年。但代价是多样性下降：所有副本共享同样的盲点，不像人类每个个体的发育历史都不一样。

### 为什么"不同"比"更差"更值得关注

发育是路径依赖的：敏感期意味着早期的选择会被锁定，不同的路径会走向不同的吸引子。所以改写规则后，我们得到的很可能不是"没有缺点的人脑"，而是一种思维方式不同的大脑。

这不一定更差，但它带来一个很少被讨论的代价：**人与人之间的相互理解，很大程度上建立在共享的发育历史上。** 我们都曾被抱过、怕过黑、需要过照顾，所以能推测彼此的感受。一个发育历史完全不同的智能，即使在能力上更强，也会更难被我们理解和信任。这让"发育式 AI"不仅是提高效率的技术路线，也可能是一种对齐策略。

### 一个可操作的原则

区分两类规则：

- **已知功能的病理信号**（孕期高血糖、严重感染、营养缺乏）：积极干预，证据显示上游干预有效。
- **功能未明的发育结构**（长童年、敏感期、照护者互动、母体信号的正常波动）：在理解它们之前，保守对待（即"切斯特顿的篱笆"）。对 AI 而言，这些正是最值得借鉴、而非绕过的部分。

---

## 七、结论与开放问题

**人类智能是在一个会疼、会饿、被爱着的身体里长出来的，而母亲是这个过程的第一环境。** 电子大脑要接近人脑，需要的可能不是更多数据，而是一个成长环境：有内稳态驱动、有分阶段解锁的身体、有照护者搭建脚手架。反过来，如果我们有意跳过这些规则，就应该预期得到一种不同的智能，并据此设计安全和对齐手段。

对女性健康的含义同样明确：孕前和孕期的代谢健康不只是母亲自己的事，它是下一代大脑发育的上游条件，也是最具成本效益的干预点之一。

**开放问题：**

- 母体信号中，哪些是噪声、哪些是对未来环境的"预报"？能否用队列数据和模型区分？
- 给 AI 设置"敏感期"和"长童年"，是否能在相同算力下换来更好的泛化与持续学习？
- 内稳态驱动的智能体如果出现类似"需要"和"痛苦"的状态，我们对它有什么伦理责任？
- 当类器官在活体宿主中发育到更成熟的阶段，哪里是伦理的边界？
- "发育式对齐"：让 AI 与人类经历相似的成长历史，是否能让它更易被理解和信任？

---

## 参考文献

**母体与神经发育**

- [Maternal diabetes and neurodevelopmental outcomes: meta-analysis of 202 studies, 56.1 million pregnancies. *Lancet Diabetes Endocrinol*, 2025](<https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00036-1/abstract>)
- [Maternal diabetes and child outcomes: IPD meta-analysis in ten birth cohorts. *BMC Pediatrics*, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11783732)
- [Neurodevelopmental trajectories in well-controlled GDM offspring. *Front Endocrinol*, 2025](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1624334/full)
- Kuzawa CW et al. Metabolic costs and evolutionary implications of human brain development. *PNAS*, 2014

**发育与学习**

- [Shuvaev S, Koulakov A, Zador A. Encoding innate ability through a genomic bottleneck. *PNAS*, 2024](https://www.pnas.org/doi/10.1073/pnas.2409160121)
- [Vong WK, Lake BM et al. Grounded language acquisition through the eyes and ears of a single child. *Science*, 2024](https://www.science.org/doi/10.1126/science.adi1374)
- [Findings of the Third BabyLM Challenge, 2025](https://aclanthology.org/2025.babylm-main.28/)
- Vogelsang L et al. Potential downside of high initial visual acuity. *PNAS*, 2018
- Elman JL. Learning and development in neural networks: the importance of starting small. *Cognition*, 1993
- Gopnik A. Childhood as a solution to explore–exploit tensions. *Phil Trans R Soc B*, 2020
- Achille A, Rovere M, Soatto S. Critical learning periods in deep networks. ICLR, 2019
- [Libé-Philippot B et al. Synaptic neoteny of human cortical neurons requires species-specific balancing of SRGAP2–SYNGAP1 cross-inhibition. *Neuron*, 2024](https://pubmed.ncbi.nlm.nih.gov/39406239/)
- [Human-specific SRGAP2 paralogs synchronize neotenic microglial maturation and synaptic development. *Neuron*, 2026](<https://www.cell.com/neuron/fulltext/S0896-6273(26)00536-2>)

**类器官与生物计算**

- [Revah O, Paşca SP et al. Maturation and circuit integration of transplanted human cortical organoids. *Nature*, 2022](https://www.nature.com/articles/s41586-022-05277-w)
- [Stanford Medicine: xenocortical mice, *Nature*, 2026 年 9 月](https://med.stanford.edu/news/all-news/2026/09/model-to-study-brain-development.html)
- [Cortical Labs CL1](https://corticallabs.com/cl1)

**具身、内稳态与主动学习**

- [Lee S, …, Friston KJ, Woo CW. Life-inspired interoceptive AI for autonomous and adaptive agents. *Nat Mach Intell*, 2026](https://www.nature.com/articles/s42256-026-01296-8)
- [Emergence of integrated behaviors through direct optimization for homeostasis. *Neural Networks*, 2024](https://www.sciencedirect.com/science/article/pii/S0893608024003034)
- [Hafner D et al. Mastering diverse control tasks through world models. *Nature*, 2025](https://www.nature.com/articles/s41586-025-08744-2)
- [Hafner D, Yan W et al. Training agents inside of scalable world models (Dreamer 4), 2025](https://arxiv.org/abs/2509.24527)
- [Curiosity-driven development of action and language in robots through self-exploration. *Science Advances*](https://www.science.org/doi/10.1126/sciadv.aee7533)
- [Inria Flowers Lab: curiosity and intrinsic motivation](https://flowers.inria.fr/curiosity/)
- Kidd C, Hayden BY. The psychology and neuroscience of curiosity. *Neuron*, 2015

**改写发育规则**

- [FDA advisers discuss first-in-human artificial womb trial. CNN, 2023](https://www.cnn.com/2023/09/19/health/artificial-womb-human-trial-fda)
- [Here's the latest company planning for gene-edited babies. *MIT Technology Review*, 2025](https://www.technologyreview.com/2025/10/31/1127461/heres-the-latest-company-planning-for-gene-edited-babies/)

未附链接的条目为领域经典文献，引用前建议核对原文。
