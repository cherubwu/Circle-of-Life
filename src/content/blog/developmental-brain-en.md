---
title: 'The Womb, Development, and the Electronic Brain: From the First Training Environment to Rewriting the Rules'
description: "Intelligence is not a state you train into existence — it is a history you develop through. From maternal signalling and organoid transplants to long childhoods and sensitive periods, this is the algorithmic logic of human brain development, and the question that follows: if we rewrite these rules, do we get a better brain, or simply a different kind of mind?"
pubDate: '2026-09-24'
lang: 'en'
pairSlug: 'developmental-brain'
tags: ['Neurodevelopment', 'DOHaD', 'Artificial Intelligence', 'Organoids', 'Embodied AI', 'Alignment']
author: 'Cherainboow'
---

> **Intelligence is not a state you train into existence — it is a history you develop through.**
>
> - The human brain calibrates itself inside the womb, its "first training environment," reading nutritional, metabolic, stress and immune signals — then caregivers take over as co-regulators after birth
> - Today's AI skips that history entirely: random initialisation, passive absorption of static data, frozen the moment training ends
> - Brain organoids mature dramatically once transplanted into a living host — **the environment is not the backdrop to development, it is part of the developmental program**
> - Rewrite the rules of development and what you most likely get is not a better human brain, but **a different kind of mind**

## Abstract

The human brain calibrates itself inside the womb — its "first training environment" — by reading nutritional, metabolic, stress and immune signals. After birth, caregivers take over as co-regulators. Current AI skips this history: it starts from random initialisation, passively absorbs static data, and freezes when training ends.

Three conclusions:

1. **On evidence.** The link between maternal metabolic state and offspring neurodevelopmental risk is now supported at scale (a 2025 meta-analysis covering 56.1 million pregnancies). Organoids mature substantially once transplanted into a living body (*Nature* 2022, 2026). Both lines of evidence point the same way: the environment is itself part of the developmental program.
2. **On the value of development.** Development is not merely "growing up slowly" — it is an algorithm. It unlocks capabilities in sequence, uses bodily constraints to filter input, and uses sensitive periods to lock in stable structure, converting limited data into robust priors.
3. **On the critique.** If we rewrite the rules of development — skipping childhood, removing the body, using artificial wombs, editing priors directly — the most likely outcome is not "a better human brain" but **a different kind of intelligence**: stronger on specified objectives, but not necessarily better along the dimensions human development actually optimises for (robustness, social alignment, energy efficiency, a sense of meaning). "Better" only means something relative to an objective function — and the objective function of development is precisely the part we understand least.

---

## I. The Womb Is the Brain's First Training Environment

The fetal brain does not assemble itself from a genetic blueprint. It continuously reads signals arriving from the mother through the placenta and adjusts its developmental trajectory accordingly. This is the central claim of DOHaD (the Developmental Origins of Health and Disease).

| Channel | Mechanism | Representative evidence |
| --- | --- | --- |
| Metabolic | Hyperglycaemia, hyperinsulinaemia and chronic low-grade inflammation affect both placenta and fetal brain | [Lancet Diabetes Endocrinol 2025](<https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00036-1/abstract>): 202 studies, 56.1M pregnancies; maternal diabetes associated with offspring autism RR 1.25, ADHD 1.30, intellectual disability 1.32; pre-gestational diabetes (1.39) stronger than gestational (1.18) |
| Metabolic (counter-evidence) | Risk falls when glycaemic control is good | [IPD meta-analysis across ten birth cohorts](https://pmc.ncbi.nlm.nih.gov/articles/PMC11783732) and [Front Endocrinol 2025](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1624334/full): no significant difference at 6–12 months in offspring of well-controlled GDM |
| Stress | Placental 11β-HSD2 inactivates maternal cortisol; sustained stress weakens this barrier and the fetal HPA axis is "pre-set" to be more reactive | Classic DOHaD literature (review-level evidence) |
| Immune | Maternal immune activation (IL-6 and others) alters offspring cortical development | Strong in animal models; moderate population-level association with autism and schizophrenia risk |
| Nutritional | Folate (neural tube), iodine (thyroid hormone, neuronal migration), DHA (synaptic membranes), iron (myelination) | Public health consensus |

**After birth, caregivers take over the placenta's role.** Infants cannot yet stably regulate temperature, blood glucose or emotion; they depend on caregivers to co-regulate through feeding, touch and responsiveness. The Bucharest Early Intervention Project (BEIP) showed that the earlier a child moved from institutional care into foster care, the better the cognitive recovery — evidence of a sensitive period.

**Energy is the fundamental constraint.** At age four or five, a child's brain consumes roughly two-thirds of whole-body resting metabolism, and bodily growth slows correspondingly during the same window (Kuzawa et al., *PNAS* 2014). Brain development is first and foremost a metabolic problem — which is why maternal and infant nutrition sit so far upstream.

All of the above are probabilistic risks, not destiny. Maternal health depends heavily on structural factors such as social support and access to care, and should never be turned into blame directed at individual mothers.

---

## II. What the Electronic Brain Is Missing

The gap between current AI and a young human brain lies less in scale than in starting point, data source and life cycle.

| Dimension | Young human brain | Current AI | Frontier evidence |
| --- | --- | --- | --- |
| Starting point | Strong priors compressed by evolution into a "genomic bottleneck" | Random initialisation | [Shuvaev, Koulakov, Zador, *PNAS* 2024](https://www.pnas.org/doi/10.1073/pnas.2409160121): compressing weights into a tiny "genome" retains most innate capability and improves transfer learning |
| Data volume | Tens of millions of words to acquire language | Trillions of tokens | [BabyLM Findings 2025](https://aclanthology.org/2025.babylm-main.28/): capped at ~100M words, architecture and curriculum help — but a gap to human efficiency remains |
| Data source | Embodied, multisensory, socially interactive | Static text and images | [Vong, Lake et al., *Science* 2024](https://www.science.org/doi/10.1126/science.adi1374): ~61 hours of head-cam video from a single child sufficed to learn substantial word–object mappings |
| Drive | Homeostatic need (hunger, cold, attachment) | An externally specified loss function | [Lee, …, Friston, Woo, *Nat Mach Intell* 2026](https://www.nature.com/articles/s42256-026-01296-8): argues for interoceptive state as a stable reference frame for learning |
| Timeline | Sensitive periods, pruning and myelination continuing into the mid-twenties | Frozen after training | Achille, Rovere, Soatto, ICLR 2019: deep networks have "critical learning periods" too |
| Energy | ~20 watts | Orders of magnitude higher | — |

**Organoids are the strongest reverse evidence.** A brain organoid in a dish has no vasculature, no body and no mother; its maturity stalls at roughly a fetal stage. Put it inside a living host and everything changes:

- [Revah, Paşca et al., *Nature* 2022](https://www.nature.com/articles/s41586-022-05277-w): human organoids transplanted into neonatal rat cortex acquired vasculature and sensory input, became markedly more mature, and responded to visual stimuli.
- [Stanford Medicine, *Nature*, 16 September 2026](https://med.stanford.edu/news/all-news/2026/09/model-to-study-brain-development.html): transplanted into mice lacking most of their cortex, human tissue occupied over 90% of cortical volume within three months and — for the first time in a living animal — grew von Economo neurons.
- [Cortical Labs CL1](https://corticallabs.com/cl1) (commercial, 2025): cultured human neurons can complete simple closed-loop tasks, yet remain flat, avascular and disembodied.

Same genome, same cells — change the environment and a different brain grows. Environment is not the backdrop to development; it is part of the developmental program.

---

## III. Why Development Itself Matters

**Development is not waiting time on the way to an adult brain — it is a learning algorithm in its own right.** Read as a "training pipeline," it contains at least five design choices that current AI training lacks.

| Stage | What happens | Function within "training" |
| --- | --- | --- |
| ① Maternal signals | Metabolic, stress, immune and nutritional signals arrive via placenta | Calibrates priors |
| ② Birth | Blurry vision, minimal working memory | Orders input by difficulty |
| ③ Caregivers | Feeding, touch and responsiveness; homeostasis regulated externally | Supplies a secure base and a value signal |
| ④ Motor development | Grasping, crawling, walking unlock in sequence | Each unlock swaps in a new curriculum |
| ⑤ Active exploration | Broad trial and error across a long childhood | High-temperature search, widening the exploration radius |
| ⑥ Sensitive periods close | Plasticity contracts on a schedule | Locks in the stable structure already learned |

There is feedback between ③ and ⑤: caregivers continuously retune the scaffolding to the child's current level of exploration.

### 1. Start Small: The Limits Are a Feature, Not a Defect

A newborn's blurry vision and tiny working memory are not simply "not yet finished." Vogelsang et al. (*PNAS* 2018) found that children who saw sharp images immediately after congenital cataract surgery showed lasting deficits in holistic face processing; convolutional networks trained on blurry-then-sharp images learned more robust representations. Elman (1993) made a parallel "starting small" argument for language learning. Development, in other words, sorts difficulty into an order: coarse structure first, detail afterwards.

### 2. The Body Is a Data Filter

What an infant sees depends on what an infant can do. Head-mounted camera studies (Smith and colleagues) show that faces dominate the visual field in the first months; once grasping is acquired, hands and objects take over; once crawling and walking arrive, spatial and social input shift again. Every motor milestone automatically swaps in a new curriculum. Current AI has no such mechanism — all the data is mixed together from the start.

### 3. Caregivers Are External Regulators and the Source of Value

An infant's homeostasis is initially outsourced to caregivers. Two consequences follow: learning happens from a secure base, so mistakes are cheap; and the signal for "what is good" comes from a specific person who cares about you. From an AI standpoint this is alignment built into the developmental process — value is not bolted on after training, it grows alongside capability.

### 4. A Long Childhood: A Protected Period of Exploration

Gopnik (2020, *Phil Trans R Soc B*) argues that the unusually long human childhood is a solution to the explore–exploit tension: children act as "high-temperature" searchers running broad trial and error, while adults exploit what was learned. The analogy to simulated annealing is close. The cost is steep — years of caregiving investment and an enormous energy budget — but what it buys is an adult with a far wider range of adaptation.

### 5. Sensitive Periods: Timing the Trade Between Plasticity and Stability

Sensitive periods open and then close, fixing the foundational structure learned early so that later learning can stack on top of it. Catastrophic forgetting in AI — learning the new by erasing the old — is largely a consequence of lacking this time-staged locking mechanism. Achille et al. (2019) found critical periods in deep networks too, which suggests this is not a biological peculiarity but a general property of learning systems. AI simply is not exploiting it on purpose.

**In short:** development does not optimise for performance on any one task. It optimises for surviving long-term in an unknown environment while integrating into a group. That explains both human data efficiency and robust generalisation — and it explains why disruptions to development carry lifelong costs.

---

## IV. Physical or Virtual: You Need a "Body," but the Body Need Not Be Hardware

Decompose "body" into three components and it becomes clear which parts can be virtualised and which must come from reality.

| Component | Function | Virtualisable? | Frontier example |
| --- | --- | --- | --- |
| Action–consequence loop | "I did something and the world changed" | Yes — cheap and parallelisable | [DreamerV3, *Nature* 2025](https://www.nature.com/articles/s41586-025-08744-2); [Dreamer 4, 2025](https://arxiv.org/abs/2509.24527) practises inside its own world model using offline data alone, and mines diamonds in Minecraft |
| Costly internal states | "I get hungry, I get cold" — supplying meaning and priority to learning | Yes, simulable in software | [Lee et al., *Nat Mach Intell* 2026](https://www.nature.com/articles/s42256-026-01296-8); [Emergence of integrated behaviors through homeostatic optimisation, *Neural Networks* 2024](https://www.sciencedirect.com/science/article/pii/S0893608024003034) |
| Real physics and real people | Unbounded detail, unpredictable social responses, genuine "caregivers" | Hardest to replace | The sim-to-real gap remains robotics' central problem |

**A proposed path: hybrid development.** Run most of development inside a virtual world or a world model — like gestation: safe, cheap, repeatable. Then place the system into a physical robot for the critical stages, in sustained interaction with real people — like being born. It is worth noticing that this division of labour maps precisely onto the two-stage womb-then-family structure of human development.

**Biological substrate brains — organoid computing, biohybrid systems — are a separate path.** Their scientific value is considerable, since their energy efficiency and learning efficiency are hard for hardware to match. But their ethical threshold is the highest of all: once an organoid is vascularised and receiving rich input, the question of whether it has experience becomes unavoidable. The mouse experiments in Section II already showed us the pattern — give it a body and it grows more like a human brain.

---

## V. Actively Acquiring Input: Curiosity, Homeostasis, Caregivers

**Infants are not fed data — they choose their own learning material.** This is among the largest gaps between current AI and an infant. Four complementary lines of work exist:

1. **Intrinsic motivation and learning progress.** Reward what is being learned *fastest* rather than what is most novel, so the agent avoids unpredictable noise. Oudeyer's group ([Inria Flowers](https://flowers.inria.fr/curiosity/)) has developed this most systematically; Kidd & Hayden (*Neuron* 2015) note infants' preference for stimuli of intermediate complexity — the "Goldilocks effect."
2. **Curiosity-driven robot development.** [*Science Advances*, "Curiosity-driven development of action and language in robots through self-exploration"](https://www.science.org/doi/10.1126/sciadv.aee7533) (arXiv 2510.05013): robots develop action and language simultaneously through self-exploration.
3. **Active inference (Friston).** Action serves both to maintain homeostasis (survival) and to reduce uncertainty about the world (knowledge). This puts "hunger" and "curiosity" inside a single framework, continuous with the 2026 *Nat Mach Intell* paper above.
4. **Caregivers as curriculum designers.** An infant's agency operates inside scaffolding built by a caregiver. The AI analogue is a human or teacher model adjusting input to the learner's current level — an "artificial caregiver."

**The safety question: who gatekeeps?** Actively acquiring input means the agent decides what to look at and what to do. Curiosity can be steered toward harmful information sources, or toward manipulating humans to extract feedback. An infant has parents as gatekeepers, and a body that physically limits its reach; AI has neither. One workable design is an action scope that expands with demonstrated capability — using development's staged unlocking as a safety mechanism.

---

## VI. The Critique: Rewriting Development — A Better Solution, or a Different Mind?

**Conclusion: locally it may be better; globally it will most likely be a different kind of intelligence.** "Better" is meaningful only relative to an objective function. Development simultaneously optimises survival, reproduction, social integration and energy cost — and we still cannot say which rule serves which objective. When we rewrite the rules, we typically optimise for one explicit target, and the others are quietly sacrificed.

### Three Ways to Rewrite

| Rewrite | Biological example | AI example | Possibly better | Possibly lost |
| --- | --- | --- | --- | --- |
| Compress or skip development | Accelerating synaptic maturation | Large-scale pretraining plus distillation, with no "childhood" | Faster, cheaper | The exploratory breadth and robustness a long childhood buys |
| Replace the environment | Artificial womb | Growing up entirely in a simulator | Removes harmful signals (hyperglycaemia, infection) | The "weather forecast" embedded in maternal signals that we do not yet understand |
| Write priors directly | Germline gene editing | Hand-designed priors, copied weights | Prevents monogenic disease; knowledge transfers directly | Knock-on effects from pleiotropy; loss of diversity |

### 1. Compressing Development: The Human Brain Is Precisely What "Slow" Produced

Human synaptic maturation is far slower than in other primates — a phenomenon called synaptic neoteny. [Libé-Philippot et al. (*Neuron* 2024)](https://pubmed.ncbi.nlm.nih.gov/39406239/) found that the human-specific genes SRGAP2B/C act as a brake that slows synaptic maturation; release the brake and synaptic development accelerates sharply. The balance between this brake and SYNGAP1 (a major autism/intellectual disability gene) is human-specific. [Follow-up work in *Neuron* 2026](<https://www.cell.com/neuron/fulltext/S0896-6273(26)00536-2>) further showed these genes keep microglial maturation in step with synaptic development.

**The implication:** evolution did not optimise the human brain to be faster — it deliberately slowed it down. Slowness here is design, not inefficiency. AI skips childhood via pretraining and gets an intelligence with a jagged capability profile: beating humans at olympiad problems while making elementary errors in commonsense physics or long-horizon planning. That is exactly what an intelligence without a childhood should look like.

### 2. Replacing the Environment: Removing Noise, or Removing Information?

Artificial wombs have successfully supported premature lambs in animal work (CHOP's EXTEND system), and [an FDA advisory committee discussed first-in-human trials in 2023](https://www.cnn.com/2023/09/19/health/artificial-womb-human-trial-fda); the framing remains rescue of extremely premature infants, not replacement of pregnancy. Suppose we followed the path to its conclusion:

- **The case for better:** glucose can be controlled, infection and stress hormones excluded, eliminating the risks catalogued in Section I.
- **The deeper worry:** DOHaD's predictive adaptive response hypothesis holds that maternal signals are not merely noise but a *forecast* of the world the fetus will meet after birth. Strip out all the fluctuation and you may strip out the information too, producing a mismatch between forecast and reality. Our current knowledge is not sufficient to distinguish which signals are noise and which are information.

The same holds for AI: an agent raised entirely inside a simulator mistakes the simulator's simplifications for properties of the world. That is the developmental version of the sim-to-real gap.

### 3. Writing Priors Directly: The Most Tempting and the Most Dangerous

Germline editing is restarting: [Preventive](https://www.technologyreview.com/2025/10/31/1127461/heres-the-latest-company-planning-for-gene-edited-babies/), founded in 2025 with $30M, is investigating whether heritable genome editing can be done safely. For monogenic disease the rationale is clear. But cognition and brain development are highly polygenic, and every gene is pleiotropic — SRGAP2 above regulates synapses and microglia at once. Optimising against a single metric walks straight into Goodhart's law: the metric rises while the thing it stood for does not.

AI does have one genuine advantage biology lacks: learned weights can be copied directly to the next generation — a kind of Lamarckian inheritance. AI need not re-live childhood each generation. The price is diversity: every copy shares the same blind spots, unlike humans, whose developmental histories are each unique.

### Why "Different" Deserves More Attention Than "Worse"

Development is path-dependent: sensitive periods mean early choices get locked in, and different paths settle into different attractors. Rewrite the rules and what you get is most likely not "a human brain without the drawbacks" but a brain that thinks differently.

That is not necessarily worse, but it carries a cost that is rarely discussed: **mutual understanding between people rests largely on a shared developmental history.** We have all been held, been afraid of the dark, needed care — which is why we can infer each other's feelings. An intelligence with a completely different developmental history, even a more capable one, will be harder for us to understand and to trust. That makes developmental AI not merely a route to efficiency, but potentially an alignment strategy.

### An Actionable Principle

Distinguish two classes of rules:

- **Pathological signals with known function** (gestational hyperglycaemia, serious infection, nutritional deficiency): intervene actively — the evidence shows upstream intervention works.
- **Developmental structures of unknown function** (long childhood, sensitive periods, caregiver interaction, normal fluctuation in maternal signalling): treat conservatively until understood — Chesterton's fence. For AI, these are precisely the parts worth borrowing rather than bypassing.

---

## VII. Conclusions and Open Questions

**Human intelligence grew inside a body that can hurt, can go hungry, and is loved — and the mother is the first environment of that process.** For an electronic brain to approach a human one, what is needed may not be more data but a developmental environment: homeostatic drive, a body that unlocks in stages, a caregiver building scaffolding. Conversely, if we deliberately skip these rules, we should expect a different kind of intelligence — and design our safety and alignment approaches accordingly.

The implication for women's health is equally clear: metabolic health before and during pregnancy is not only the mother's own concern. It is an upstream condition for the next generation's brain development, and among the most cost-effective points of intervention available.

**Open questions:**

- Among maternal signals, which are noise and which are forecasts of the future environment? Can cohort data and modelling separate them?
- Would giving AI sensitive periods and a long childhood buy better generalisation and continual learning at equal compute?
- If homeostatically driven agents develop states resembling need and suffering, what ethical obligations do we incur?
- As organoids develop to greater maturity inside living hosts, where does the ethical boundary lie?
- Developmental alignment: would giving AI a growth history similar to a human's make it easier to understand and to trust?

---

## References

**Maternal factors and neurodevelopment**

- [Maternal diabetes and neurodevelopmental outcomes: meta-analysis of 202 studies, 56.1 million pregnancies. *Lancet Diabetes Endocrinol*, 2025](<https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00036-1/abstract>)
- [Maternal diabetes and child outcomes: IPD meta-analysis in ten birth cohorts. *BMC Pediatrics*, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11783732)
- [Neurodevelopmental trajectories in well-controlled GDM offspring. *Front Endocrinol*, 2025](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1624334/full)
- Kuzawa CW et al. Metabolic costs and evolutionary implications of human brain development. *PNAS*, 2014

**Development and learning**

- [Shuvaev S, Koulakov A, Zador A. Encoding innate ability through a genomic bottleneck. *PNAS*, 2024](https://www.pnas.org/doi/10.1073/pnas.2409160121)
- [Vong WK, Lake BM et al. Grounded language acquisition through the eyes and ears of a single child. *Science*, 2024](https://www.science.org/doi/10.1126/science.adi1374)
- [Findings of the Third BabyLM Challenge, 2025](https://aclanthology.org/2025.babylm-main.28/)
- Vogelsang L et al. Potential downside of high initial visual acuity. *PNAS*, 2018
- Elman JL. Learning and development in neural networks: the importance of starting small. *Cognition*, 1993
- Gopnik A. Childhood as a solution to explore–exploit tensions. *Phil Trans R Soc B*, 2020
- Achille A, Rovere M, Soatto S. Critical learning periods in deep networks. ICLR, 2019
- [Libé-Philippot B et al. Synaptic neoteny of human cortical neurons requires species-specific balancing of SRGAP2–SYNGAP1 cross-inhibition. *Neuron*, 2024](https://pubmed.ncbi.nlm.nih.gov/39406239/)
- [Human-specific SRGAP2 paralogs synchronize neotenic microglial maturation and synaptic development. *Neuron*, 2026](<https://www.cell.com/neuron/fulltext/S0896-6273(26)00536-2>)

**Organoids and biological computing**

- [Revah O, Paşca SP et al. Maturation and circuit integration of transplanted human cortical organoids. *Nature*, 2022](https://www.nature.com/articles/s41586-022-05277-w)
- [Stanford Medicine: xenocortical mice, *Nature*, September 2026](https://med.stanford.edu/news/all-news/2026/09/model-to-study-brain-development.html)
- [Cortical Labs CL1](https://corticallabs.com/cl1)

**Embodiment, homeostasis and active learning**

- [Lee S, …, Friston KJ, Woo CW. Life-inspired interoceptive AI for autonomous and adaptive agents. *Nat Mach Intell*, 2026](https://www.nature.com/articles/s42256-026-01296-8)
- [Emergence of integrated behaviors through direct optimization for homeostasis. *Neural Networks*, 2024](https://www.sciencedirect.com/science/article/pii/S0893608024003034)
- [Hafner D et al. Mastering diverse control tasks through world models. *Nature*, 2025](https://www.nature.com/articles/s41586-025-08744-2)
- [Hafner D, Yan W et al. Training agents inside of scalable world models (Dreamer 4), 2025](https://arxiv.org/abs/2509.24527)
- [Curiosity-driven development of action and language in robots through self-exploration. *Science Advances*](https://www.science.org/doi/10.1126/sciadv.aee7533)
- [Inria Flowers Lab: curiosity and intrinsic motivation](https://flowers.inria.fr/curiosity/)
- Kidd C, Hayden BY. The psychology and neuroscience of curiosity. *Neuron*, 2015

**Rewriting the rules of development**

- [FDA advisers discuss first-in-human artificial womb trial. CNN, 2023](https://www.cnn.com/2023/09/19/health/artificial-womb-human-trial-fda)
- [Here's the latest company planning for gene-edited babies. *MIT Technology Review*, 2025](https://www.technologyreview.com/2025/10/31/1127461/heres-the-latest-company-planning-for-gene-edited-babies/)

Entries without links are classic works in their fields; verify against the originals before citing.
