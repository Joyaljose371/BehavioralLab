export const storylineTherapy = [
  {
    id: "story_therapy_01",
    clientProfile: "Anjali, 24 • Academic Burnout & Absolute Perfectionism Structures",
    chapters: [
      {
        dialogue: "I sat down to study for my final practical record submissions last night, but my hands just started shaking. I feel like if I don't get an A+, my entire career path is completely over and I'll disappoint everyone who ever supported me.",
        options: [
          {
            id: "t1_c1_o1",
            type: "REBT Cognitive Reframing",
            text: "Let's explore that absolute demand. Where is it written that your worth as a professional depends entirely on a singular score, or that not getting an A+ equates to total failure?",
            impact: "Highly Effective. Safely targets the client's irrational 'musturbatory' thinking patterns, opening up healthy cognitive flexibility.",
            isOptimal: true
          },
          {
            id: "t1_c1_o2",
            type: "Passive Reassurance",
            text: "Don't worry, you are a wonderful student and I am completely sure you will pass with flying colors. Just take a deep breath.",
            impact: "Sub-optimal. Offers superficial comfort while missing the deeper core belief causing the emotional vulnerability.",
            isOptimal: false
          }
        ]
      },
      {
        dialogue: "Internalizing that... I guess nobody explicitly wrote it down. But when I look at the remaining practical records, I still feel this crushing weight that if I stop to rest even for an hour, I'm falling behind and proving that I can't handle real research.",
        options: [
          {
            id: "t1_c2_o1",
            type: "Behavioral Pacing Calibration",
            text: "You're operating under an all-or-nothing framework: either you work to exhaustion or you are a complete failure. Can we design an experiment this week where you study for 50 minutes and purposefully take a 10-minute structural break to measure your anxiety levels?",
            impact: "Highly Effective. Converts cognitive insight into an active behavioral experiment to break the perfectionist loop.",
            isOptimal: true
          },
          {
            id: "t1_c2_o2",
            type: "Direct Catharsis Facilitation",
            text: "Just close your eyes right now and lean into that crushing weight. Let yourself cry it out so your body can shed this performance pressure naturally.",
            impact: "Sub-optimal. Over-emphasizes affective release without giving the client concrete cognitive structure to handle the impending workload.",
            isOptimal: false
          }
        ]
      }
    ]
  },
  {
    id: "story_therapy_02",
    clientProfile: "Anjali, 24 • Corporate Employee • Chronic Perfectionism & Maladaptive Coping Loops",
    chapters: [
      {
        dialogue: "I don't even know why I'm here, honestly. My HR recommended I talk to someone because I missed a couple of deadlines. But it's not like talking is going to magically fix my workload or make my manager less of a micro-manager.",
        options: [
          {
            id: "t2_c1_o1",
            type: "Defensive / Deflecting",
            text: "Well, therapy isn't magic, Anjali. It requires hard work from your end too. If you don't want to be here, we can't achieve much.",
            impact: "Incorrect. This sounds accusatory and confrontational. It validates her fear of being judged and will likely cause her to shut down.",
            isOptimal: false
          },
          {
            id: "t2_c1_o2",
            type: "Overly Directive / Problem-Solving",
            text: "I understand your manager is difficult. Let’s look at those deadlines. How can we organize your calendar better so HR doesn't get involved again?",
            impact: "Premature Intervention. You are treating a symptom (deadlines) before understanding the emotional driver or building trust.",
            isOptimal: false
          },
          {
            id: "t2_c1_o3",
            type: "Reflective & Validating",
            text: "It sounds like you feel backed into a corner by HR, and it’s frustrating to be told you need 'fixing' when the real issue feels like an exhausting environment.",
            impact: "Correct. This aligns you with the client against the problem, rather than aligning you with HR. It validates her frustration, which lowers her defenses.",
            isOptimal: true
          }
        ]
      },
      {
        dialogue: "Exactly! It’s just... if I don't check a report four or five times, I'm terrified there's a typo. If there's a typo, my manager will think I'm incompetent. So I end up staying up until 3:00 AM refining the same email. Then the next day, I'm too exhausted to start the next project, and the cycle repeats.",
        options: [
          {
            id: "t2_c2_o1",
            type: "Diagnostic / Labeling",
            text: "It sounds like you have classic Obsessive-Compulsive tendencies and perfectionism. We need to treat this anxiety disorder.",
            impact: "Clinical Error. Dropping labels on a client prematurely can induce panic or alienate them. It focuses on the diagnosis rather than her internal experience.",
            isOptimal: false
          },
          {
            id: "t2_c2_o2",
            type: "Socratic Questioning / Pattern Identification",
            text: "So, to prevent the scary thought of being 'incompetent,' you double-check until 3:00 AM. But it seems like the very tool you're using to protect yourself—the over-checking—is what’s actually causing the missed deadlines. What do you make of that connection?",
            impact: "Correct. This is a gentle, collaborative challenge. You are highlighting the paradox of her coping mechanism so she can recognize the pattern herself.",
            isOptimal: true
          },
          {
            id: "t2_c2_o3",
            type: "Passive Listening",
            text: "That sounds incredibly exhausting. No wonder you are tired during the day.",
            impact: "Too Passive. While empathetic, it fails to move the client toward insight or interrupt the maladaptive loop.",
            isOptimal: false
          }
        ]
      },
      {
        dialogue: "Wow. I never thought about it that way. I'm staying up late to save my job, but staying up late is exactly what's ruining it.",
        options: [
          {
            id: "t2_c3_o1",
            type: "Flooding / Too High Risk",
            text: "For your next report, I want you to write it once, don't read it back at all, and hit send immediately. Let's see what happens.",
            impact: "Too Extreme. The anxiety spike will be too severe, and if there is a major typo, it might damage her professional standing, destroying her trust in therapy.",
            isOptimal: false
          },
          {
            id: "t2_c3_o2",
            type: "Collaborative Behavioral Experiment",
            text: "What if we test this out in a safe way this week? For internal team emails—not client reports—limit yourself to exactly two proofreads before sending. Then, we can log your anxiety level before and after to see if the world actually falls apart.",
            impact: "Correct. It scales down the risk (internal emails only) and frames the action as a scientific experiment to gather data rather than a forced rule.",
            isOptimal: true
          },
          {
            id: "t2_c3_o3",
            type: "Insight-Only / No Action",
            text: "I want you to just sit with that insight this week. Every time you feel like checking a report, just remind yourself that it's your anxiety talking.",
            impact: "Weak Intervention. Insight alone rarely changes deep-seated behavioral habits. She needs an experiential shift.",
            isOptimal: false
          }
        ]
      },
      {
        dialogue: "[Session 3] I tried the experiment with the internal emails, and nobody noticed any mistakes. But yesterday, my manager left a vague comment on our shared sheet: 'Needs improvement. Let's sync tomorrow.' My stomach dropped. I immediately relapsed and spent four hours analyzing old emails to find out where I failed.",
        options: [
          {
            id: "t2_c4_o1",
            type: "Catastrophizing Escalation",
            text: "That is a scary comment to receive. Do you think he's preparing a performance improvement plan or tracking you for termination?",
            impact: "Clinical Error. This reinforces the client's cognitive distortion of catastrophizing and amplifies active panic instead of grounding her.",
            isOptimal: false
          },
          {
            id: "t2_c4_o2",
            type: "Decatastrophizing & Cognitive Restructuring",
            text: "Notice how your mind instantly jumps to fill in 'vague data' with the absolute worst-case scenario: 'I failed.' What are alternative, realistic meanings for 'needs improvement' that don't mean your job is ending?",
            impact: "Highly Effective. Introduces cognitive restructuring for ambiguity. It separates objective corporate feedback from her personalized catastrophic projections.",
            isOptimal: true
          },
          {
            id: "t2_c4_o3",
            type: "Premature Problem Solving",
            text: "Let's prepare a script for tomorrow's meeting so you can defend your work and show him your behavioral tracking sheets to explain your delayed deadlines.",
            impact: "Sub-optimal. Focuses on outward performance defense before de-escalating the internal anxious loop generated by the ambiguous text trigger.",
            isOptimal: false
          }
        ]
      },
      {
        dialogue: "[Session 4] We traced that 'I am incompetent if I make a mistake' rule. It's not just corporate pressure. I remembered my dad screaming at me over a B+ in middle school, telling me that if I relaxed even once, I'd end up a failure. I've been carrying his standards this whole time, thinking they were mine.",
        options: [
          {
            id: "t2_c5_o1",
            type: "Down Arrow Technique / Schema Tracking",
            text: "You've uncovered a powerful root cause. That internal critic isn't your voice—it's a learned survival blueprint. If we look at that 14-year-old self through your current eyes, did she deserve that extreme pressure?",
            impact: "Highly Effective. Uses Schema Conceptualization to isolate the historical critic from the client's core identity, creating a foundation for schema transformation.",
            isOptimal: true
          },
          {
            id: "t2_c5_o2",
            type: "Externalizing Blame / Venting Focus",
            text: "Your father's parenting style was clearly toxic and deeply conditional. It's fully understandable that you resent him for putting that heavy burden on a child.",
            impact: "Sub-optimal. While validating of family history, it encourages unconstructive external resentment rather than resolving how the schema functions within her today.",
            isOptimal: false
          }
        ]
      },
      {
        dialogue: "[Session 6 - Termination Phase] I feel much lighter now that I can recognize my 'Perfectionist Critic.' But I want to make sure I don't fall right back into the over-checking trap when my quarterly performance reviews arrive next month. How do I maintain this structurally?",
        options: [
          {
            id: "t2_c6_o1",
            type: "Relapse Prevention / Self-Correction Protocol",
            text: "Let's build a structural 'Review Blueprint.' We'll set an absolute time-cap on final tasks and draft a 'Compassionate Script' your healthy adult self can read when anxiety flares during evaluation season.",
            impact: "Highly Effective. Establishes long-term self-management protocols and structural limits, protecting therapeutic gains against future systemic corporate stress.",
            isOptimal: true
          },
          {
            id: "t2_c6_o2",
            type: "Avoidance Strategy",
            text: "If this corporate environment continues triggering these deep family schemas, it might be safest to resign and look for a lower-stress job entirely.",
            impact: "Incorrect. Encourages behavior avoidance rather than reinforcing the coping competencies and emotional resilience she has built within her current role.",
            isOptimal: false
          }
        ]
      }
    ]
  },
  {
    id: "story_therapy_03",
    clientProfile: "Vikram, 28 • Creative Director • High-Functioning Substance Use & Impulsive Compensatory Loops",
    chapters: [
      {
        dialogue: "Look, I only drink and party from Friday night to Sunday morning because my brain runs at 200 miles an hour pitching campaigns all week. It's not an addiction; it's an off-switch. I wouldn't need it if my agency wasn't constantly running on crisis mode.",
        options: [
          {
            id: "t3_c1_o1",
            type: "Confrontational/Labeling",
            text: "Binge drinking every weekend to force a shutdown is a clear sign of substance dependence. We need to address this substance issue before we can discuss your work stress.",
            impact: "Incorrect. This abrupt, moralistic framing instantly triggers deep ego defense mechanisms, causing the high-functioning client to detach from treatment.",
            isOptimal: false
          },
          {
            id: "t3_c1_o2",
            type: "Motivational Interviewing / Functional Balance Check",
            text: "So your weekend choices serve as a functional toolkit—a direct response to the absolute exhaustion of holding up the agency's creative line all week. How reliable has that off-switch been when Monday morning calls arrive?",
            impact: "Correct. Validates the utilitarian purpose of his behavior without affirming the substance abuse, gently prompting him to evaluate the negative systemic feedback loops.",
            isOptimal: true
          }
        ]
      },
      {
        dialogue: "Monday mornings are brutal... my anxiety spikes, I use double shots of espresso to pull through the brain-fog, and I end up aggressive in team reviews. I thought I was just burning out from the creative demands, but the transition days are becoming a nightmare.",
        options: [
          {
            id: "t3_c2_o1",
            type: "Socratic Cognitive Chain Analysis",
            text: "Let's trace this neurochemical and behavioral cascade. The weekend crash depletes your system, requiring stimulant compensation on Monday, which amplifies irritability during reviews. What does this tell us about the actual cost of your 'off-switch'?",
            impact: "Correct. Maps out the cyclic pattern with clinical clarity, guiding the client to discover the maintenance loop of his distress without feeling judged.",
            isOptimal: true
          },
          {
            id: "t3_c2_o2",
            type: "Direct Substitution / Advice",
            text: "You should immediately swap the weekend drinking for mindfulness apps and replace the Monday morning espresso with chamomile tea to keep your irritation low.",
            impact: "Sub-optimal. Offers superficial behavior modifications that underestimate the structural intensity of his physical exhaustion and chemical dependency patterns.",
            isOptimal: false
          }
        ]
      },
      {
        dialogue: "It's exhausting to realize my solution is making the problem worse. But if I don't use that intense release on weekends, I honestly don't know how to sit with my thoughts when the office goes completely quiet. The silence feels intolerable.",
        options: [
          {
            id: "t3_c3_o1",
            type: "Distraction Reinforcement",
            text: "Then we should make sure your weekend schedule is packed with healthy hobbies, like hiking or running, so you never have to deal with that quiet space.",
            impact: "Incorrect. Endorses behavioral avoidance structures, replacing substance dependence with performance distraction rather than expanding distress tolerance.",
            isOptimal: false
          },
          {
            id: "t3_c3_o2",
            type: "ACT Mindfulness / Distress Tolerance Integration",
            text: "When the noise of the office drops, your mind tries to rush in and fill the silence with urgent performance anxiety. Can we practice taking a 5-minute window this Saturday to lean into that quietness, tracking the waves of discomfort without acting on them?",
            impact: "Correct. Employs Acceptance and Commitment protocols to build somatic tolerance for distressing psychological states, disrupting the impulsive substance-seeking trigger.",
            isOptimal: true
          }
        ]
      }
    ]
  }
];