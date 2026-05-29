export const storylineTherapy = [
 {
  id: "case_02",
  title: "The Imposter's Shadow: A Learning Journey",
  description: "A conversation-based case study focusing on building a helping relationship.",
  chapters: [
    {
      stepId: "stage_01",
      sessionStage: "Starting the Relationship",
      clientDialogue: "Everyone at work seems like a genius. I’m just waiting for the day they realize I have no idea what I'm doing and fire me.",
      aiHighlight: "MENTOR: Take a breath! You’re just starting. Before you try to fix their fear, remember the core rule: be a human first. Which response sounds like you are actually listening?",
      options: [
        { 
          id: "r1", type: "Empathetic Connection", text: "It sounds like you're carrying a lot of weight on your shoulders, and it feels pretty lonely, even when you're surrounded by talented people.", isOptimal: true, 
          feedback: "\"Spot on. This is called 'Unconditional Positive Regard'. You aren't judging them or trying to solve their problem yet; you’re just letting them know you hear them. That is the bedrock of a good counselling relationship.\"", 
          nextStepId: "stage_02" 
        },
        { 
          id: "r2", type: "Quick Fix", text: "You shouldn't feel that way. You were hired for a reason, so you just need to look at your positive performance reviews.", isOptimal: false, 
          feedback: "\"Not quite. This is 'guidance' or advice-giving, which can accidentally make the client feel like you aren't listening to their actual pain. In counselling, our job is to help them find their own answers, not to just give them a checklist of why they're wrong[cite: 1].\"", 
          nextStepId: "stage_01" 
        }
      ]
    },
    {
      stepId: "stage_02",
      sessionStage: "Understanding the Problem",
      clientDialogue: "I spent four hours checking a simple piece of work today because I was so scared of making a mistake. It ruined my whole day.",
      aiHighlight: "MENTOR: We're in the 'exploration' phase now. We want to understand what's happening without taking the steering wheel away from the client. How do we do that?",
      options: [
        { 
          id: "i1", type: "Open Exploration", text: "Four hours is a long time to spend on that. Can you walk me through what was going through your mind while you were double-checking?", isOptimal: true, 
          feedback: "\"Excellent. You're using an open-ended question to help the client reflect on their own behavior[cite: 1]. This helps them see their own patterns—like perfectionism—without you having to label it for them[cite: 1].\"", 
          nextStepId: "stage_03" 
        },
        { 
          id: "i2", type: "Directive", text: "You're clearly overworking yourself. You need to set a timer for thirty minutes and force yourself to move on.", isOptimal: false, 
          feedback: "\"A bit too bossy for a counsellor. If you tell them what to do, they become dependent on you instead of learning to handle their own stress[cite: 1]. A good counsellor guides the person to discover their own way forward[cite: 1].\"", 
          nextStepId: "stage_02" 
        }
      ]
    },
    {
      stepId: "stage_03",
      sessionStage: "Finding a Goal",
      clientDialogue: "I just want the constant stress to stop. I want to feel normal, like I'm not always on the verge of a breakdown.",
      aiHighlight: "MENTOR: Remember, we aren't just here to put a bandage on a wound (remedial). We are here to help them grow and handle future challenges, too (developmental)[cite: 1].",
      options: [
        { 
          id: "g1", type: "Growth-Oriented", text: "I hear that you want relief, which is very important. Looking forward, what kind of changes would help you feel more confident in your role at work?", isOptimal: true, 
          feedback: "\"Perfect. You acknowledged their immediate pain but also invited them to think about their personal growth[cite: 1]. This keeps the focus on their long-term potential rather than just 'fixing' a symptom[cite: 1].\"", 
          nextStepId: "stage_04" 
        },
        { 
          id: "g2", type: "Short-term Only", text: "Let's work together to just make sure you don't have another breakdown this week.", isOptimal: false, 
          feedback: "\"This is too limited. If we only focus on preventing a 'breakdown,' we miss the chance to help the client build actual resilience for the rest of their career[cite: 1].\"", 
          nextStepId: "stage_03" 
        }
      ]
    },
    {
      stepId: "stage_04",
      sessionStage: "Trying Something New",
      clientDialogue: "Maybe I can start by setting a time limit for my reviews, instead of working until I'm totally burnt out.",
      aiHighlight: "MENTOR: This is a great moment! They have come up with a 'behavioral experiment.' As their guide, how do you handle this safely?",
      options: [
        { 
          id: "c1", type: "Collaborative Action", text: "That sounds like a really practical experiment. How do you think you'll feel when that time limit ends, and how will you check in with yourself then?", isOptimal: true, 
          feedback: "\"Bravo. You are encouraging the client to be the scientist of their own life[cite: 1]. This builds 'Self-Efficacy,' which is the belief that they have the power to change their own circumstances[cite: 1].\"", 
          nextStepId: "termination" 
        },
        { 
          id: "c2", type: "Taking Control", text: "Good idea. I'll make sure you stick to that time limit, and we can discuss it in our next meeting.", isOptimal: false, 
          feedback: "\"Careful! If you promise to 'make sure' they do it, you become a supervisor rather than a counsellor[cite: 1]. The client needs to take ownership of their own actions for the change to actually stick[cite: 1].\"", 
          nextStepId: "stage_04" 
        }
      ]
    },
    {
      stepId: "termination",
      sessionStage: "Wrapping Up",
      clientDialogue: "I actually feel relieved. I have a plan now that feels like it’s mine, not just something someone told me to do.",
      aiHighlight: "MENTOR: You made it! Termination is just the final step. Remind them of the work they did.",
      options: [
        { 
          id: "t1", type: "Empowerment", text: "You’ve done a lot of brave work identifying your habits and creating your own plan. I'm really proud of how you've handled this.", isOptimal: true, 
          feedback: "\"Exactly. Acknowledging their growth reinforces that *they* did the work, not you. You've helped them become a more confident, independent person—that’s the true goal of counselling[cite: 1].\"", 
          nextStepId: "finish" 
        }
      ]
    }
  ]
},
{
  id: "case_02",
  title: "The Imposter's Shadow: Pedagogical Edition",
  description: "A case study guided by an educator focusing on the technical and ethical application of counselling skills.",
  chapters: [
    {
      stepId: "stage_01",
      sessionStage: "Rapport Formation",
      clientDialogue: "Everyone here is a genius. I feel like I'm just waiting for the day they realize I have no idea what I'm doing.",
      aiHighlight: "AI MENTOR (Teacher): Let's pause, student. You are currently in the 'Rapport' stage. Recall that your first job is not to fix the anxiety, but to establish the 'therapeutic climate'. Which option aligns with Rogerian principles?",
      options: [
        { 
          id: "r1", type: "Empathetic Reflection", text: "It sounds like you're carrying a heavy burden of feeling like an outsider, despite your professional accomplishments.", isOptimal: true, 
          feedback: "\"Correct. A teacher-counsellor knows that before you can teach a student or counsel a client, you must build the alliance. By reflecting the client's feelings, you demonstrate active listening—a core micro-skill.\"", 
          nextStepId: "stage_02" 
        },
        { 
          id: "r2", type: "Rational-Logical", text: "If you were truly incompetent, you wouldn't have been hired. Look at your reviews.", isOptimal: false, 
          feedback: "\"Not quite. This is 'guidance,' or simple logic-giving. As a student of counselling, remember that 'guidance' is distinct from 'counselling.' We aren't here to lecture, but to facilitate.\"", 
          nextStepId: "stage_01" 
        }
      ]
    },
    {
      stepId: "stage_02",
      sessionStage: "Identification of Issues",
      clientDialogue: "I spent four hours double-checking every line of code. I didn't even get my actual work done.",
      aiHighlight: "AI MENTOR (Teacher): You're approaching the 'Identification of Issues' phase. How do we ensure we aren't just giving advice, but helping the client reach their own realization[cite: 1]?",
      options: [
        { 
          id: "i1", type: "Process Exploration", text: "How does that fear change the way you approach your tasks during the day?", isOptimal: true, 
          feedback: "\"Excellent. You are applying a 'Facilitative' approach. You're encouraging the client to analyze their own behavior, which is the cornerstone of helping a client become a 'fully functioning person'[cite: 1].\"", 
          nextStepId: "stage_03" 
        },
        { 
          id: "i2", type: "Directive Correction", text: "You need to trust your work more and stop over-analyzing.", isOptimal: false, 
          feedback: "\"Incorrect. As your instructor, I must remind you: if the counsellor takes the authority, the client loses the opportunity to develop internal coping resources. This creates dependency, not growth[cite: 1].\"", 
          nextStepId: "stage_02" 
        }
      ]
    },
    {
      stepId: "stage_03",
      sessionStage: "Exploration & Goals",
      clientDialogue: "I just want to be able to finish my tasks without feeling like I'm about to collapse.",
      aiHighlight: "AI MENTOR (Teacher): As we discussed in class, counselling has remedial, preventive, and developmental goals. Don't settle for the bare minimum[cite: 1].",
      options: [
        { 
          id: "g1", type: "Strengths-Oriented", text: "Beyond just surviving the day, what kind of professional identity would you like to build?", isOptimal: true, 
          feedback: "\"Spot on. You've pivoted from a 'remedial' focus (symptom removal) to a 'developmental' focus (building potential). That is how you elevate your practice to a professional standard[cite: 1].\"", 
          nextStepId: "stage_04" 
        },
        { 
          id: "g2", type: "Symptom Focus", text: "Let's focus only on lowering your anxiety levels.", isOptimal: false, 
          feedback: "\"Too narrow. Remember, effective counselling looks at the individual as a whole. Don't reduce the client to a collection of symptoms; look at their growth potential[cite: 1].\"", 
          nextStepId: "stage_03" 
        }
      ]
    },
    {
      stepId: "stage_04",
      sessionStage: "Future Course of Action",
      clientDialogue: "Maybe I can start by setting a time limit for my reviews, instead of working until I'm exhausted.",
      aiHighlight: "AI MENTOR (Teacher): This is a 'Behavioral Experiment.' A crucial part of clinical work is evaluating the results. How do we keep the agency with the client[cite: 1]?",
      options: [
        { 
          id: "c1", type: "Collaborative Planning", text: "That sounds like a constructive experiment. How will you track how you feel when that time limit is up?", isOptimal: true, 
          feedback: "\"Excellent. You are teaching the client how to use their own data. By facilitating this self-monitoring, you ensure they can cope independently once the counselling ends[cite: 1].\"", 
          nextStepId: "termination" 
        },
        { 
          id: "c2", type: "Supervision", text: "I'll keep a close eye on you to ensure you stick to that limit.", isOptimal: false, 
          feedback: "\"Be careful. You've stepped into an authoritative role that limits the client's freedom. The goal of a mentor-counsellor is to help the client *own* their success, not provide it for them[cite: 1].\"", 
          nextStepId: "stage_04" 
        }
      ]
    },
    {
      stepId: "termination",
      sessionStage: "Termination",
      clientDialogue: "I feel like I have a plan that's actually mine. Thank you.",
      aiHighlight: "AI MENTOR (Teacher): You've navigated the session well. Remember: Termination isn't just an end—it's a celebration of the client's new-found ability to function independently[cite: 1].",
      options: [
        { 
          id: "t1", type: "Empowerment", text: "You've taken a brave step in defining your own boundaries. I look forward to hearing how your experiment goes.", isOptimal: true, 
          feedback: "\"Correct. By acknowledging their work, you reinforce their sense of self-efficacy. Class dismissed—you've done well today.\"", 
          nextStepId: "finish" 
        }
      ]
    }
  ]
}

];