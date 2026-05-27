export const netJrfPastQuestions = [
  {
    id: "net_u1",
    unit: "Unit 1: Emergence of Psychology",
    question: "Assertion (A): Academic Psychology in India has transitioned through distinct phases, moving from initial replicative Western frameworks to indigenous knowledge paradigms.\nReasoning (R): The major Eastern psychophysiological systems emphasize that subjective verification through insight is an essential aspect of knowledge paradigms, overriding purely objective behavioral reductionism.",
    correctAnswerText: "Both (A) and (R) are true and (R) is the correct explanation of (A).",
    options: [
      { 
        id: "u1_o1", 
        text: "Both (A) and (R) are true and (R) is the correct explanation of (A).", 
        isCorrect: true, 
        rationale: "True assertion loop. The indigenization movement in Indian academic psychology directly stems from re-integrating Eastern subjective, holistic paradigms to remedy the fragmented view left by Western structuralist translation frameworks." 
      },
      { 
        id: "u1_o2", 
        text: "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).", 
        isCorrect: false, 
        warning: "CRITICAL EPISTEMOLOGICAL MISALIGNED SELECTION",
        difference: "Recognizing both statements as true but pulling them apart ignores the direct causal link between Eastern insight methodologies and the systemic rejection of Western reductionism.",
        rationale: "Incorrect. The emergence of indigenous Indian psychology explicitly occurred *because* researchers found that Western behavioral reductionism omitted the deep, subjective psychophysiological frameworks found in local traditions like Yoga and Vedanta." 
      },
      { 
        id: "u1_o3", 
        text: "(A) is true but (R) is false.", 
        isCorrect: false, 
        warning: "EASTERN TEXTUAL VALIDATION OVERSIGHT",
        difference: "Claiming the reasoning statement is false incorrectly devalues Eastern epistemological systems as non-empirical or primitive frameworks.",
        rationale: "Incorrect. Major Eastern systems are heavily built on rigorous, structured internal insight paradigms that act as valid, replicable validation platforms for cognitive states." 
      }
    ]
  },
  {
    id: "net_u2",
    unit: "Unit 2: Research Methodology and Statistics",
    question: "In a psychometric study mapping quantitative data structures, a researcher calculates a correlation of -0.221 between academic AI application indices and cognitive flexibility scales. What design parameter is accurately described by this measurement?",
    correctAnswerText: "A low, inverse relationship signifying that as AI reliance scales up, cognitive flexibility indicators demonstrate a statistically sound decrement within the sample space.",
    options: [
      { 
        id: "u2_o1", 
        text: "A low, inverse relationship signifying that as AI reliance scales up, cognitive flexibility indicators demonstrate a statistically sound decrement within the sample space.", 
        isCorrect: true, 
        rationale: "Correct data evaluation. The negative sign represents an inverse relationship, while an absolute value of 0.221 matches standard low correlation parameters." 
      },
      { 
        id: "u2_o2", 
        text: "A high direct causal trajectory implying that AI utilization fully blocks structural neuroplasticity over short timelines.", 
        isCorrect: false, 
        warning: "STATISTICAL INTERPRETATION ERROR",
        difference: "Confuses a low linear association (0.221) with a high strength value, and fundamentally violates logic by deriving a direct causal mechanism from a correlational metric.",
        rationale: "Incorrect. Correlation coefficients measure linear association strength between variables within a sample; they never substantiate absolute, unmediated causal trajectories." 
      },
      { 
        id: "u2_o3", 
        text: "A strong orthogonal value proving complete measurement divergence between the two variables.", 
        isCorrect: false, 
        warning: "MATHEMATICAL MATRIX MISCLASSIFICATION",
        difference: "Misinterprets a non-zero value (-0.221) as representing complete statistical independence or orthogonality.",
        rationale: "Incorrect. Orthogonal dimensions or perfectly divergent metrics yield a correlation value at or near zero. A value of -0.221 indicates a small but mathematically real inverse relationship." 
      }
    ]
  },
  {
    id: "net_u3",
    unit: "Unit 3: Psychological Testing",
    question: "During the structural test standardization phase of a new multi-scale personality profile, which sequential operational framework must a psychometrist execute to establish robust application metrics?",
    correctAnswerText: "Item pool generation → Expert review evaluation → Pilot field run → Item Analysis (Difficulty/Discrimination indices) → Reliability/Validity anchoring → Norms formulation.",
    options: [
      { 
        id: "u3_o1", 
        text: "Item pool generation → Expert review evaluation → Pilot field run → Item Analysis (Difficulty/Discrimination indices) → Reliability/Validity anchoring → Norms formulation.", 
        isCorrect: true, 
        rationale: "Perfect psychometric order. Test construction strictly progresses from conceptual pool creation to objective quantitative item filtration, ending with normalization across demographic strata." 
      },
      { 
        id: "u3_o2", 
        text: "Norms formulation → Reliability calculation → Pilot testing → Item pool generation.", 
        isCorrect: false, 
        warning: "PSYCHOMETRIC PIPELINE INVERSION",
        difference: "Attempts to calculate population benchmarks (norms) before items are even drafted or pilot tested.",
        rationale: "Incorrect. Norm construction requires processing final, standardized test scores collected from a polished, filtered item set. It cannot occur at the beginning of the design lifecycle." 
      },
      { 
        id: "u3_o3", 
        text: "Item Analysis → Factor loading isolation → Norm collection → Item pool generation.", 
        isCorrect: false, 
        warning: "DATA EXECUTION ANACHRONISM",
        difference: "Executes mathematical filtration protocols (Item Analysis, Factor Analysis) prior to having data or test objects to analyze.",
        rationale: "Incorrect. Quantitative analysis loops cannot function before raw content items are generated, screened by subject experts, and administered in field settings." 
      }
    ]
  },
  {
    id: "net_u4",
    unit: "Unit 4: Biological Basis of Behaviour",
    question: "A client experiences a severe traumatic localized injury to the basal forebrain region. Which neurological system component is primarily degraded, and what is its immediate clinical pathology manifestation?",
    correctAnswerText: "Cholinergic projections to the neocortex are disrupted, leading to deficits in memory encoding typical of Alzheimer's-type functional profiles.",
    options: [
      { 
        id: "u4_o1", 
        text: "Cholinergic projections to the neocortex are disrupted, leading to deficits in memory encoding typical of Alzheimer's-type functional profiles.", 
        isCorrect: true, 
        rationale: "Correct neurological mapping. The basal forebrain houses key cholinergic nucleus structures essential for widespread cortical activation and normal memory processing pathways." 
      },
      { 
        id: "u4_o2", 
        text: "Dopaminergic pathways within the Substantia Nigra collapse, triggering standard resting tremors.", 
        isCorrect: false, 
        warning: "ANATOMICAL PATHWAY MISALIGNED SELECTION",
        difference: "Swaps out the forebrain-cortex pathway for a deep midbrain-basal ganglia motor pathway.",
        rationale: "Incorrect. Dopaminergic projection pathways are anchored in the midbrain mesencephalic systems (Substantia Nigra/VTA), not the basal forebrain structure." 
      },
      { 
        id: "u4_o3", 
        text: "Glutamate receptor fields block sensory parsing within the immediate peripheral nervous structures.", 
        isCorrect: false, 
        warning: "CENTRAL VS PERIPHERAL RECEPTOR MISMATCH",
        difference: "Confuses central telencephalic assemblies with peripheral local somatic reflex pathways.",
        rationale: "Incorrect. Peripheral sensory parsing systems do not depend on the forebrain's central cholinergic networks for local signal transduction." 
      }
    ]
  },
  {
    id: "net_u5",
    unit: "Unit 5: Attention, Perception, Learning, Memory and Forgetting",
    question: "According to Signal Detection Theory (SDT), if a participant's perceptual sensitivity index (d') remains completely static but they transition from a lenient response bias to a highly conservative response criterion, how will their recorded output parameters change?",
    correctAnswerText: "Both Hits and False Alarms will show a clear quantitative decrease.",
    options: [
      { 
        id: "u5_o1", 
        text: "Both Hits and False Alarms will show a clear quantitative decrease.", 
        isCorrect: true, 
        rationale: "Correct SDT analysis. A conservative bias requires higher internal signal certainty before saying 'yes.' This drop in affirmative responses naturally reduces both Hits and False Alarms simultaneously." 
      },
      { 
        id: "u5_o2", 
        text: "Hits will scale upward while False Alarms drop down to baseline absolute boundaries.", 
        isCorrect: false, 
        warning: "SDT PROBABILITY DIRECTIONAL ERROR",
        difference: "Assumes that tightening a decision threshold can selectively increase correct targets while minimizing errors.",
        rationale: "Incorrect. In SDT, if underlying sensitivity (d') is fixed, shifting to a strict, conservative criterion means you say 'yes' less often overall. Therefore, your Hit rate cannot scale upward." 
      },
      { 
        id: "u5_o3", 
        text: "Perceptual sensitivity indices will climb exponentially as random noise signals are cleared.", 
        isCorrect: false, 
        warning: "PARAMETER CONFUSION TRAIT",
        difference: "Confuses a shift in a user's decision-making strategy (criterion) with a change in their physiological ability to detect sensory details (sensitivity).",
        rationale: "Incorrect. Shifting response criteria relocates the operating point along a fixed receiver operating characteristic (ROC) curve; it does not change the physical distance parameter (d')." 
      }
    ]
  },
  {
    id: "net_u6",
    unit: "Unit 6: Thinking, Intelligence and Creativity",
    question: "An investigator presents a series of specialized structural logic problems where participants must monitor their own problem-solving steps and explain their evaluation frameworks. Which psychological construct is being directly engaged and assessed here?",
    correctAnswerText: "Metacognition via explicit executive cognitive management monitoring.",
    options: [
      { 
        id: "u6_o1", 
        text: "Metacognition via explicit executive cognitive management monitoring.", 
        isCorrect: true, 
        rationale: "Correct construct. Metacognition involves higher-order executive evaluation and monitoring of one's own immediate cognitive tracking and processing behaviors." 
      },
      { 
        id: "u6_o2", 
        text: "Concept formation tracking using implicit automated reasoning paradigms.", 
        isCorrect: false, 
        warning: "COGNITIVE SCOPE MISINTERPRETATION",
        difference: "Conflates categorical grouping mechanics with explicit, conscious self-monitoring systems.",
        rationale: "Incorrect. Concept formation addresses how minds group shared structural features into schemas. It does not look at a participant actively tracking their own step-by-step problem-solving performance." 
      },
      { 
        id: "u6_o3", 
        text: "Divergent thought production measuring novel conceptual combinations.", 
        isCorrect: false, 
        warning: "CREATIVITY FOCUS OVER-ALIGNMENT",
        difference: "Confuses targeted, rule-bound analytical evaluation systems with open-ended, non-linear ideation metrics.",
        rationale: "Incorrect. Self-monitoring logical checks measure executive error-tracking accuracy and structure rather than open-ended, fluid divergent processing speeds." 
      }
    ]
  },
  {
    id: "net_u7",
    unit: "Unit 7: Personality, Motivation, Emotion, Stress and Coping",
    question: "How does Martin Seligman's Explanatory Styles model distinguish a person with a depressive attributional signature from one with an optimistic signature when processing negative life events?",
    correctAnswerText: "The depressive profile attributes negative events to internal, stable, and global factors; the optimistic profile relies on external, unstable, and specific parameters.",
    options: [
      { 
        id: "u7_o1", 
        text: "The depressive profile attributes negative events to internal, stable, and global factors; the optimistic profile relies on external, unstable, and specific parameters.", 
        isCorrect: true, 
        rationale: "Correct model application. Depressive attribution internalizes blame ('my fault'), views the issue as permanent ('never changing'), and applies it globally ('ruins everything'). Optimists isolate errors to temporary, situational variables." 
      },
      { 
        id: "u7_o2", 
        text: "The depressive framework relies entirely on externalized Locus of Control vectors across all interactions.", 
        isCorrect: false, 
        warning: "LOCUS OF CONTROL INVERSION ERROR",
        difference: "Swaps out the foundational internalization pattern of depressive styles for an externalized locus template.",
        rationale: "Incorrect. Internalizing blame for negative events ('It's entirely my fault') forms the exact core of Seligman's learned helplessness and depressive attribution matrix, not externalization." 
      },
      { 
        id: "u7_o3", 
        text: "The optimistic loop prioritizes moral development stages over affective coping mechanisms.", 
        isCorrect: false, 
        warning: "THEORETICAL CROSS-REFERENCE INVALIDATION",
        difference: "Blends attributional coping research with distinct developmental stage theories.",
        rationale: "Incorrect. Explanatory styles trace cognitive coping habits during stress. Moral development stages belong to Lawrence Kohlberg's cognitive-developmental paradigm, which is unrelated here." 
      }
    ]
  },
  {
    id: "net_u8",
    unit: "Unit 8: Social Psychology",
    question: "A group of individuals coordinates an online open-source repository evaluation. The project manager observes that individual code-review throughput drops significantly when members operate in an unmonitored group than when working independently. Which social influence phenomenon explains this change?",
    correctAnswerText: "Social Loafing resulting from diffused responsibility and evaluation apprehension reductions.",
    options: [
      { 
        id: "u8_o1", 
        text: "Social Loafing resulting from diffused responsibility and evaluation apprehension reductions.", 
        isCorrect: true, 
        rationale: "Correct phenomenon. Social loafing occurs when individual effort diminishes in an unmonitored group setting because personal accountability blends into the collective total." 
      },
      { 
        id: "u8_o2", 
        text: "Social Facilitation driven by an optimized physiological arousal profile.", 
        isCorrect: false, 
        warning: "INVERSE IMPACT PHENOMENON ERROR",
        difference: "Selects a mechanism that describes performance gains under observation, missing the documented drop in group output.",
        rationale: "Incorrect. Social facilitation improves task performance on simple or well-learned actions when an individual is being actively observed by an audience. It does not cause a drop in performance." 
      },
      { 
        id: "u8_o3", 
        text: "Attributional displacement stemming from direct non-verbal communication blockages.", 
        isCorrect: false, 
        warning: "CONSTRUCT MANUFACTURING ERROR",
        difference: "Replaces an established group dynamics phenomenon with a fabricated linguistic concept.",
        rationale: "Incorrect. The drop in individual output within collective, unmonitored settings is uniquely accounted for by the diffusion of responsibility model in social loafing." 
      }
    ]
  },
  {
    id: "net_u9",
    unit: "Unit 9: Human Development and Interventions",
    question: "A psychotherapist implements Aaron Beck's Cognitive Therapy for a client presenting with clinical depression. The primary intervention target focuses on identifying the 'Cognitive Triad.' What components constitute this structural triad?",
    correctAnswerText: "Negative, distorted evaluations regarding the self, the immediate world experiences, and the future horizon.",
    options: [
      { 
        id: "u9_o1", 
        text: "Negative, distorted evaluations regarding the self, the immediate world experiences, and the future horizon.", 
        isCorrect: true, 
        rationale: "Correct configuration. Beck's cognitive triad specifies that vulnerable profiles hold stable negative views of themselves, their surrounding environments, and their long-term futures." 
      },
      { 
        id: "u9_o2", 
        text: "Id, Ego, and Superego structural dynamic control conflicts.", 
        isCorrect: false, 
        warning: "THEORETICAL PARADIGM MISMATCH",
        difference: "Conflates Beck's structured cognitive-behavioral model with psychodynamic personality models.",
        rationale: "Incorrect. The id-ego-superego structural system is exclusive to Sigmund Freud's classical psychoanalytical paradigm, which relies on unconscious drives rather than cognitive distortions." 
      },
      { 
        id: "u9_o3", 
        text: "Genuineness, Empathy, and Unconditional Positive Regard variables.", 
        isCorrect: false, 
        warning: "THERAPEUTIC MODALITY CONFUSION",
        difference: "Confuses specific cognitive thought targets with the core attitudes needed in relationship-focused therapy.",
        rationale: "Incorrect. These conditions represent the foundational attitudinal posture of the clinician in Carl Rogers' humanistic Person-Centered framework, not Beck's cognitive components." 
      }
    ]
  },
  {
    id: "net_u10",
    unit: "Unit 10: Emerging Areas",
    question: "As interfaces between psychology and technology expand, researchers study how software platforms impact human interaction. When analyzing user behavior with security tools like custom encrypted chat systems, what primary factor determines sustained interface engagement?",
    correctAnswerText: "Balancing the cognitive load of data protection actions with smooth user experience design.",
    options: [
      { 
        id: "u10_o1", 
        text: "Balancing the cognitive load of data protection actions with smooth user experience design.", 
        isCorrect: true, 
        rationale: "Correct emerging focus. The tech-psychology interface shows that if security workflows (like cryptographic key verification) create high cognitive friction, user compliance drops rapidly." 
      },
      { 
        id: "u10_o2", 
        text: "Replicating outdated laboratory research tests within standard mobile application frameworks.", 
        isCorrect: false, 
        warning: "INNOVATION BLINDSPOT SELECTION",
        difference: "Limits cyberpsychology to simply porting old desktop or paper experiments over to phones, missing the nuances of real-time user experience.",
        rationale: "Incorrect. Modern digital ecosystems require new, dynamic interaction research tracking active software metrics rather than just copying old laboratory tests onto a mobile screen." 
      },
      { 
        id: "u10_o3", 
        text: "Using cross-informant reporting structures to track global cloud data metrics.", 
        isCorrect: false, 
        warning: "METHODOLOGICAL MISAPPLICATION ERROR",
        difference: "Misapplies developmental psychology family data collection techniques to technical UI encryption analysis.",
        rationale: "Incorrect. Cross-informant reporting is a developmental and clinical research data gathering design (e.g., matching parent and child reports). It is not an engineering metric used to evaluate interactive software encryption tools." 
      }
    ]
  },
  {
    id: "net_u11",
    unit: "Unit 2: Research Methodology and Statistics",
    question: "A psychometrist conducts a cross-sectional research study evaluating adolescent emotional regulation profiles. If the data is derived from a parent-report scale alongside an adolescent self-report format, how should cross-informant reporting variances be conceptually evaluated?",
    correctAnswerText: "As an expression of situational specificity and behavioral masking rather than absolute measurement invalidity.",
    options: [
      {
        id: "u11_o1",
        text: "As an expression of situational specificity and behavioral masking rather than absolute measurement invalidity.",
        isCorrect: true,
        rationale: "Correct methodological frame. Discrepancies between parent-reports and self-reports often reveal real variations in how behavior is manifested across domestic versus social contexts, rather than psychometric error."
      },
      {
        id: "u11_o2",
        text: "As a mathematical validation error that requires the total elimination of parent-report arrays.",
        isCorrect: false,
        warning: "METHODOLOGICAL REDUCTIONISM ERROR",
        difference: "Treats contextual data variance as a systemic measurement flaw instead of a multi-informant asset.",
        rationale: "Incorrect. Discarding an operational vantage point oversimplifies clinical profiles. Multi-informant reporting aims to map ecological nuances, not achieve absolute numerical convergence."
      },
      {
        id: "u11_o3",
        text: "As evidence of acute cognitive regression operating within the adolescent sample space.",
        isCorrect: false,
        warning: "PATHOLOGIZING DISCREPANCY SELECTION",
        difference: "Misinterprets structural reporting divergence as an individual cognitive pathology trait.",
        rationale: "Incorrect. Variances in cross-informant reporting reflect external social interactions and systemic dynamics; they do not substantiate individual neuro-cognitive degeneration or regression traits."
      }
    ]
  },
  {
    id: "net_u12",
    unit: "Unit 3: Psychological Testing",
    question: "During item analysis for an attitude scale designed to gauge mental health seeking behavior, an item yields a Difficulty Index (p) of 0.98. What psychometric action must the test designer implement?",
    correctAnswerText: "Eliminate or structurally rewrite the item due to its critically restricted item discriminative power.",
    options: [
      {
        id: "u12_o1",
        text: "Eliminate or structurally rewrite the item due to its critically restricted item discriminative power.",
        isCorrect: true,
        rationale: "Correct psychometric protocol. An item endorsed or answered correctly by 98% of the sample space possesses almost no variance, rendering it incapable of differentiating between varying levels of the target construct."
      },
      {
        id: "u12_o2",
        text: "Anchor the item as a prime marker because near-universal endorsement confirms maximum item validity.",
        isCorrect: false,
        warning: "DISCRIMINATION METRIC OVERSIGHT",
        difference: "Confuses a high endorsement rate with structural constructive validity, ignoring the necessity of sample variance.",
        rationale: "Incorrect. If an item cannot discriminate high-trait scorers from low-trait scorers, it cannot help construct a standardized psychometric scale, regardless of its overall endorsement frequency."
      },
      {
        id: "u12_o3",
        text: "Convert the raw scoring matrix of this specific parameter into orthogonal curvilinear coordinates.",
        isCorrect: false,
        warning: "MATHEMATICAL FORMULA FABRICATION",
        difference: "Proposes a complex mathematical conversion to compensate for a foundational lack of item variance.",
        rationale: "Incorrect. No statistical transformation can inject discriminative utility into an item that yields uniform responses across the entire calibration sample."
      }
    ]
  },
  {
    id: "net_u13",
    unit: "Unit 4: Biological Basis of Behaviour",
    question: "A patient presents with fluent, syntactically correct speech articulation that is entirely devoid of semantic meaning, alongside severe spoken language comprehension deficits. Which localized cortical structure is compromised?",
    correctAnswerText: "The posterior portion of the superior temporal gyrus (Wernicke's Area).",
    options: [
      {
        id: "u13_o1",
        text: "The posterior portion of the superior temporal gyrus (Wernicke's Area).",
        isCorrect: true,
        rationale: "Accurate neurological profiling. Receptive aphasia (Wernicke's) preserves motor speech articulation mechanics while selectively dismantling language decoding and semantic synthesis loops."
      },
      {
        id: "u13_o2",
        text: "The left inferior frontal gyrus assembly controlling speech motor outputs (Broca's Area).",
        isCorrect: false,
        warning: "APHASIA TAXONOMY INVERSION",
        difference: "Swaps receptive language comprehension pathology for an expressive, non-fluent motor output disorder.",
        rationale: "Incorrect. Lesions to Broca's area impair expressive articulation networks, causing halting, telegraphic speech patterns while leaving internal language comprehension largely intact."
      },
      {
        id: "u13_o3",
        text: "The immediate ventral terminal field of the peripheral spinal somatosensory relay system.",
        isCorrect: false,
        warning: "CENTRAL TRAJECTORY AXIS ERROR",
        difference: "Attributes complex symbolic cognitive processing deficits to lower-level peripheral afferent pathways.",
        rationale: "Incorrect. Peripheral sensory receptors process basic tactile signal transductions; they are not involved in decoding higher-order language architecture or semantics."
      }
    ]
  },
  {
    id: "net_u14",
    unit: "Unit 4: Biological Basis of Behaviour",
    question: "A neuropsychological patient is capable of tracking objects in motion but fails to recognize or categorize what those physical objects are. Which anatomical visual pathway has been disrupted?",
    correctAnswerText: "The Ventral Stream running from the primary visual cortex into the inferior temporal structures.",
    options: [
      {
        id: "u14_o1",
        text: "The Ventral Stream running from the primary visual cortex into the inferior temporal structures.",
        isCorrect: true,
        rationale: "Correct pathway mapping. The ventral stream serves as the 'What' pathway, processing object features, color, and semantic identity. Its degradation leads to visual agnosia."
      },
      {
        id: "u14_o2",
        text: "The Dorsal Stream projecting up into the posterior parietal cortical architecture.",
        isCorrect: false,
        warning: "VISUAL STREAM REVERSAL ERROR",
        difference: "Conflates the object identity stream ('What') with the spatial localization and movement stream ('Where').",
        rationale: "Incorrect. The dorsal stream is the 'Where' pathway, handling spatial relations and movement metrics. If it were damaged, the client would struggle to track motion while retaining object recognition."
      },
      {
        id: "u14_o3",
        text: "The primary magnocellular lateral geniculate nucleus layers driving peripheral reflex arcs.",
        isCorrect: false,
        warning: "SUBCORTICAL TRACKING SEGREGATION",
        difference: "Confuses low-level subcortical motion detection layers with higher-level cortical cognitive recognition streams.",
        rationale: "Incorrect. Magnocellular paths feed heavily into dorsal motion tracking channels. They do not handle the fine semantic object identification managed by parvocellular-ventral networks."
      }
    ]
  },
  {
    id: "net_u15",
    unit: "Unit 5: Attention, Perception, Learning, Memory and Forgetting",
    question: "A client fails to remember their newly assigned computer login password because their previous system password of several years continually intrudes during recall. This memory failure illustrates which mechanism?",
    correctAnswerText: "Proactive Interference, where previously encoded storage tracks block the retrieval of novel target traces.",
    options: [
      {
        id: "u15_o1",
        text: "Proactive Interference, where previously encoded storage tracks block the retrieval of novel target traces.",
        isCorrect: true,
        rationale: "Correct interference identification. Proactive interference happens when older, well-consolidated memory traces compete with and disrupt the retrieval of newly encoded information."
      },
      {
        id: "u15_o2",
        text: "Retroactive Interference, where ongoing sensory updates overwrite historical storage files.",
        isCorrect: false,
        warning: "INTERFERENCE DIRECTION INVERSION",
        difference: "Flips the temporal dynamics of memory interference by suggesting that new information is blocking old information.",
        rationale: "Incorrect. Retroactive interference occurs when new learning degrades the retention of historical memories. Here, the historical memory is the active disruptor."
      },
      {
        id: "u15_o3",
        text: "Trace Decay resulting from absolute structural changes inside long-term hippocampal tissue.",
        isCorrect: false,
        warning: "BIOLOGICAL REDUCTIONISM OVER-SELECTION",
        difference: "Attributes active cognitive competition between memory traces to passive biological decay or tissue erosion over time.",
        rationale: "Incorrect. Trace decay theory asserts that memories fade simply as a function of time and disuse. It does not account for the direct, intrusive competition seen between two specific password items."
      }
    ]
  },
  {
    id: "net_u16",
    unit: "Unit 5: Attention, Perception, Learning, Memory and Forgetting",
    question: "When a participant is tasked with mentally manipulating and rotating a multi-dimensional geographic map layout to determine a novel navigation route, which component of Baddeley's working memory model is primarily engaged?",
    correctAnswerText: "The Visuospatial Sketchpad system working under Central Executive allocation.",
    options: [
      {
        id: "u16_o1",
        text: "The Visuospatial Sketchpad system working under Central Executive allocation.",
        isCorrect: true,
        rationale: "Correct working memory alignment. The visuospatial sketchpad is specialized for the temporary retention, generation, and active manipulation of visual imagery and spatial configurations."
      },
      {
        id: "u16_o2",
        text: "The Phonological Loop using subvocal articulatory rehearsal scripts.",
        isCorrect: false,
        warning: "MODALITY SEGREGATION CONFUSION",
        difference: "Attributes complex visuospatial processing tasks to the voice-based acoustic storage system.",
        rationale: "Incorrect. The phonological loop handles language-based acoustic patterns and verbal arrays. It cannot perform spatial rotations or process non-verbal topographic matrices."
      },
      {
        id: "u16_o3",
        text: "The Episodic Buffer functioning entirely independent of short-term storage registers.",
        isCorrect: false,
        warning: "ISOLATED COMPONENT MISALIGNMENT",
        difference: "Overemphasizes multi-modal integration logs while omitting the dedicated visual-spatial storage register.",
        rationale: "Incorrect. While the episodic buffer links working memory to long-term structures, the active, real-time rotation of shapes is handled directly by the visuospatial sketchpad."
      }
    ]
  },
  {
    id: "net_u17",
    unit: "Unit 6: Thinking, Intelligence and Creativity",
    question: "A client attempts to resolve business inefficiencies by relying entirely on automated formulas and rigid rule sets that guarantee a correct solution but require immense time and resource expenditure. Which problem-solving strategy is this?",
    correctAnswerText: "An Algorithmic processing framework that prioritizes exhaustive accuracy over processing efficiency.",
    options: [
      {
        id: "u17_o1",
        text: "An Algorithmic processing framework that prioritizes exhaustive accuracy over processing efficiency.",
        isCorrect: true,
        rationale: "Correct classification. Algorithms are methodical, step-by-step procedures that guarantee a solution if executed correctly, though they require high cognitive or temporal resources."
      },
      {
        id: "u17_o2",
        text: "A Heuristic shortcut structure designed to bypass systematic evaluations via intuitive cues.",
        isCorrect: false,
        warning: "COGNITIVE STRATEGY MISCLASSIFICATION",
        difference: "Confuses a systematic, exhaustive calculation method with an efficient, rule-of-thumb cognitive shortcut.",
        rationale: "Incorrect. Heuristics are mental shortcuts that speed up decision-making but do not guarantee a correct outcome. The client's rigid approach is the opposite of a heuristic."
      },
      {
        id: "u17_o3",
        text: "Lateral Thinking maneuvers that restructure the underlying problem matrix.",
        isCorrect: false,
        warning: "CREATIVE DYNAMICS CONFUSION",
        difference: "Conflates non-linear, creative reframing methods with rule-bound, linear calculations.",
        rationale: "Incorrect. Lateral thinking breaks away from established, step-by-step paths to find novel perspectives. Relying on fixed, predefined formulas is a linear, vertical approach."
      }
    ]
  },
  {
    id: "net_u18",
    unit: "Unit 6: Thinking, Intelligence and Creativity",
    question: "An investigator administers an inventory asking participants to generate as many distinct, unconventional applications for a standard wooden ruler as possible within five minutes. Which cognitive construct is being quantified?",
    correctAnswerText: "Divergent Thinking, evaluated across fluency, flexibility, and originality parameters.",
    options: [
      {
        id: "u18_o1",
        text: "Divergent Thinking, evaluated across fluency, flexibility, and originality parameters.",
        isCorrect: true,
        rationale: "Correct psychometric attribution. Generating multiple unique solutions to an open-ended prompt is the hallmark of divergent thinking, a core component of creativity."
      },
      {
        id: "u18_o2",
        text: "Convergent Reasoning focused on tracking an optimal single logical solution.",
        isCorrect: false,
        warning: "REASONING PATHWAY INVERSION",
        difference: "Flips open-ended, non-linear ideation with linear, single-answer deduplication methods.",
        rationale: "Incorrect. Convergent thinking systematically narrows down options to find the one correct answer to a problem (e.g., matching a standard logic matrix). It does not look for a broad variety of open-ended ideas."
      },
      {
        id: "u18_o3",
        text: "Crystallized Intelligence mapping formal mechanical skills acquired through education.",
        isCorrect: false,
        warning: "CHC TAXONOMY CONFUSION",
        difference: "Confuses the generation of novel ideas with the retrieval of stored, culture-bound factual knowledge.",
        rationale: "Incorrect. Crystallized intelligence (Gc) involves applying learned knowledge and skills. Coming up with unusual, novel uses for an object relies more on fluid processes and divergent ideation."
      }
    ]
  },
  {
    id: "net_u19",
    unit: "Unit 6: Thinking, Intelligence and Creativity",
    question: "A 70-year-old academic demonstrates exceptional vocabulary and deep historical expertise, but shows significant drops in novel matrix reasoning and processing speed under time constraints. How can this profile be interpreted within the CHC framework?",
    correctAnswerText: "Preserved or enhanced Crystallized Intelligence (Gc) alongside a normative age-related decline in Fluid Intelligence (Gf).",
    options: [
      {
        id: "u19_o1",
        text: "Preserved or enhanced Crystallized Intelligence (Gc) alongside a normative age-related decline in Fluid Intelligence (Gf).",
        isCorrect: true,
        rationale: "Correct developmental cognitive mapping. Fluid intelligence (Gf), which handles non-verbal, abstract problem solving, declines naturally with age, while crystallized intelligence (Gc), built on accumulated knowledge, remains stable or improves."
      },
      {
        id: "u19_o2",
        text: "Generalized, multi-domain cognitive degeneration requiring immediate neurological profiling.",
        isCorrect: false,
        warning: "PATHOLOGIZING AGING CURVES",
        difference: "Misinterprets typical age-related changes in fluid processing speed as a sign of widespread brain damage or dementia.",
        rationale: "Incorrect. A selective drop in fluid processing speed while keeping language skills intact is a well-documented aspect of healthy aging, not a sign of global clinical dementia."
      },
      {
        id: "u19_o3",
        text: "High abstract Fluid Intelligence overriding basic verbal memory retrieval tracks.",
        isCorrect: false,
        warning: "CHC TRAIT PROFILE REVERSAL",
        difference: "Flips the statuses of fluid and crystallized traits, misattributing the preserved performance to fluid channels.",
        rationale: "Incorrect. The academic's strong vocabulary and factual recall are driven by crystallized intelligence (Gc), not fluid intelligence (Gf), which is the area showing declines."
      }
    ]
  },
  {
    id: "net_u20",
    unit: "Unit 7: Personality, Motivation, Emotion, Stress and Coping",
    question: "A client presents with an unyielding fear of career failure, stating that if they make even a single error in their upcoming work evaluation, it proves they are 'fundamentally incompetent.' Which cognitive pattern and distortion does this reflect?",
    correctAnswerText: "Catastrophizing and Dichotomous Thinking reflecting an underlying maladaptive core belief.",
    options: [
      {
        id: "u20_o1",
        text: "Catastrophizing and Dichotomous Thinking reflecting an underlying maladaptive core belief.",
        isCorrect: true,
        rationale: "Correct clinical identification. The client filters reality through all-or-nothing terms ('fundamentally incompetent') and assumes the worst possible outcome ('total failure') from a single error, pointing to a rigid core belief."
      },
      {
        id: "u20_o2",
        text: "An optimistic explanatory style misapplying secondary coping mechanisms.",
        isCorrect: false,
        warning: "ATTRIBUTIONAL PROFILE MISALIGNMENT",
        difference: "Labels an internal, stable, global catastrophic thinking pattern as optimistic.",
        rationale: "Incorrect. An optimistic explanatory style attributes setbacks to temporary, specific, external factors. The client's behavior shows a highly personalized and permanent depressive attributional style."
      },
      {
        id: "u20_o3",
        text: "Substantiated ego-preservation tactics driven by high achievement motivation.",
        isCorrect: false,
        warning: "CLINICAL DEFENSE MISCLASSIFICATION",
        difference: "Validates a highly self-critical, distressing cognitive distortion as a healthy strategy for protecting self-esteem.",
        rationale: "Incorrect. High achievement motivation (nAch) drives proactive, goal-oriented behaviors. It does not manifest as paralyzing, all-or-nothing anxiety about being incompetent."
      }
    ]
  }
];