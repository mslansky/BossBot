
const convoStages = ["Start", "WhatPrompted", "Performance", "OtherTopics", "Salary", "Finish"]

const HintBotPrompts = {
  "Start": `Hi I'm HintBot, your assistant for today's practice. To start, you'll need to ask your 'manager' to talk 
  about compensation. This is often the hardest part of the conversation so remember to be direct! It's normal and reasonable to ask for a raise.`,
  "WhatPrompted": `*Hintbot Here!* This is a good chance to provide context to the conversation. There are many opportunities to talk 
  about your salary. Maybe you've had new responsibilities at work, completed an impactful project, been putting in 
  extra hours or just been in your role for quite some time. If your company has a specifc time when raises occur, 
  it's important to know it and talk early!`,
  "Performance": `*Hintbot Here!* When talking about your performance it's important to create a clear narrative. Discuss how you've
  added value and gone above your role's requirements. Metrics can also help when appropriate. The more info you 
  provide the easier it is for your manager to advocate on your behalf. Consider creating some documentation in prep.
  Also consider discussing how you plan to continue your success and what your future goals are.`,
  "OtherTopics": `*Hintbot Here!* Other topics you may want to consider discussing is if any new responsibilities will be required. Take this time to ask your boss about expectations or certain changes. Some companies may require management duties at certain pay grades.`,
  "Salary": `*Hintbot Here!* Getting down to 'brass tax' can be scary but don't undersell yourself and be specific! Do your research 
  and understand what your local market rate is. Ask for a very specific number.`,
  "Finish": "Great Job! Please check out our other resources or practice again!"
};

const BossBotPrompts = {
  "Start": null,
  "WhatPrompted": "BossBot: What prompted you to bring this up?",
  "Performance": "BossBot: Okay, Let's talk about your performance in detail.",
  "OtherTopics": "BossBot: You're making a compelling case. Is there anything else you'd like to discuss?",
  "Salary": "BossBot: Those are some great questions. I'll have to get back to you on those.",
  "Finish": "BossBot: Okay, thanks for being specific. That makes my job easier. You've given me the right info to take the next steps, I will let you know what I decide.",
};

let currentStage = "Start"

const prompt = () => {
  const response = {
    "HintBot": HintBotPrompts[currentStage],
    "BossBot": BossBotPrompts[currentStage]
  }
  currentStage = convoStages[convoStages.indexOf(currentStage) + 1];
  return response;
}

export default prompt;