export interface CSCSBookQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  section: string;
}

export const cscsBookSections = [
  { title: "General responsibilities", startPage: 1 },
  { title: "Accident reporting and recording", startPage: 29 },
  { title: "First aid and emergency procedures", startPage: 57 },
  { title: "Health and welfare", startPage: 78 },
  { title: "Personal protective equipment", startPage: 98 },
  { title: "Dust and fumes (respiratory hazards)", startPage: 122 },
  { title: "Noise and vibration", startPage: 142 },
  { title: "Hazardous substances", startPage: 164 },
  { title: "Manual handling", startPage: 188 },
  { title: "Safety signs", startPage: 217 },
  { title: "Fire prevention and control", startPage: 245 },
  { title: "Electrical safety, tools and equipment", startPage: 265 },
  { title: "Site transport safety and lifting operations", startPage: 303 },
  { title: "Working at height", startPage: 330 },
  { title: "Excavations and confined spaces", startPage: 363 },
  { title: "Environmental awareness and waste control", startPage: 389 }
];

export const cscsBookQuestions: CSCSBookQuestion[] = [
  // General responsibilities
  {
    id: 1,
    section: "General responsibilities",
    text: "Who is responsible for reporting any unsafe conditions on site?",
    options: ["The site manager only", "The client", "Health and Safety Executive (HSE) inspectors", "Everyone on site"],
    correctAnswer: "D"
  },
  {
    id: 2,
    section: "General responsibilities",
    text: "During site induction you do not understand something the presenter says. What should you do?",
    options: ["Attend another site induction", "Ask the presenter to explain it again", "Guess what the presenter was trying to tell you", "Wait until the end then ask someone else to explain"],
    correctAnswer: "B"
  },
  {
    id: 3,
    section: "General responsibilities",
    text: "What should you do if the safety rules given in your site induction seem out of date as work progresses?",
    options: ["Do nothing, as you are not responsible for safety on site", "Speak to your supervisor about your concerns", "Speak to your workmates to see if they have any new rules", "Make up your own safety rules to suit the changing conditions"],
    correctAnswer: "B"
  },
  {
    id: 4,
    section: "General responsibilities",
    text: "What is the most important reason for keeping your work area clean and tidy?",
    options: ["To prevent slips, trips and falls", "So that you don't have to have a big clean-up at the end of the week", "So that waste skips can be emptied more often", "To recycle waste and help the environment"],
    correctAnswer: "A"
  },
  {
    id: 5,
    section: "General responsibilities",
    text: "What should you do if the work of another contractor is affecting your safety?",
    options: ["Stop work and go home", "Stop work and speak to your supervisor", "Stop work and speak to the contractor's supervisor", "Stop work and speak to the contractor who is doing the job"],
    correctAnswer: "B"
  },
  {
    id: 6,
    section: "General responsibilities",
    text: "What does it mean if the equipment you are using is issued with a prohibition notice?",
    options: ["You must not use it unless your supervisor is present", "You must not use it until it is made safe", "You can use it as long as you take more care", "Only supervisors can use it"],
    correctAnswer: "B"
  },
  {
    id: 7,
    section: "General responsibilities",
    text: "The whole site has been issued with a prohibition notice. What does this mean to you?",
    options: ["You can carry on working because it was nothing to do with you", "You are not allowed to use any power tools", "You can finish what you are doing and then go home", "You must stop work because the site is unsafe"],
    correctAnswer: "D"
  },
  {
    id: 8,
    section: "General responsibilities",
    text: "After watching you work, a Health and Safety Executive (HSE) inspector issues an improvement notice. What does this mean?",
    options: ["You are not working fast enough", "You need to improve the standard of your work", "You are not working in a safe way", "The way you are working has improved since the last time they saw you"],
    correctAnswer: "C"
  },
  {
    id: 9,
    section: "General responsibilities",
    text: "Who has legal duties under the Health and Safety at Work Act?",
    options: ["Just employers", "Just operatives", "All people at work", "Just self-employed people"],
    correctAnswer: "C"
  },
  {
    id: 10,
    section: "General responsibilities",
    text: "Why is the Health and Safety at Work Act important to you as a worker?",
    options: ["It tells you which parts of the site are dangerous", "It must be learned before starting work", "It puts legal duties on your employer to provide a safe place to work", "It tells you how to do your job", "It puts legal duties on you as a worker"],
    correctAnswer: "C and E"
  },
  {
    id: 11,
    section: "General responsibilities",
    text: "Which of these is not your legal duty as a worker?",
    options: ["To look after your own health and safety", "To look after the health and safety of anyone else who might be affected by your work", "To write your own risk assessments", "Not to interfere with anything provided for health and safety"],
    correctAnswer: "C"
  },
  {
    id: 12,
    section: "General responsibilities",
    text: "Who is responsible for managing health and safety on construction sites?",
    options: ["The company safety officer", "The Health and Safety Executive (HSE)", "The client", "The site manager"],
    correctAnswer: "D"
  },
  {
    id: 13,
    section: "General responsibilities",
    text: "What does a risk assessment identify?",
    options: ["How to report accidents", "The site working hours", "The hazards and safe way of doing the job", "Where the first-aid box is kept"],
    correctAnswer: "C"
  },
  {
    id: 14,
    section: "General responsibilities",
    text: "What does the word hazard mean?",
    options: ["Anything at work that could harm you", "The site accident rate", "A type of barrier or machine guard", "The likelihood that something might happen"],
    correctAnswer: "A"
  },
  {
    id: 15,
    section: "General responsibilities",
    text: "You are about to start a job. How will you know if it needs a permit to work?",
    options: ["Other workers will tell you and you will not be allowed to start work until the permit to work has been issued", "The Health and Safety Executive (HSE) will tell you", "You will be told during the site induction and you will not be allowed to start until the permit to work has been issued", "You don't need to know, as permits to work only affect managers"],
    correctAnswer: "C"
  },
  {
    id: 16,
    section: "General responsibilities",
    text: "What should you do if you cannot do a job in the way described in the method statement?",
    options: ["Make up your own way of doing the job", "Do not start work until you have talked to your supervisor", "Ask your workmates how they think you should do the job", "Contact the Health and Safety Executive (HSE)"],
    correctAnswer: "B"
  },
  {
    id: 17,
    section: "General responsibilities",
    text: "What does a permit to work allow?",
    options: ["The emergency services to come on to the site after an accident", "Certain jobs to be carried out safely under more strictly controlled conditions", "Health and Safety Executive (HSE) inspectors to visit the site", "Untrained people to work without supervision"],
    correctAnswer: "B"
  },
  {
    id: 18,
    section: "General responsibilities",
    text: "Which three of the following should be included in a method statement?",
    options: ["The materials, tools and equipment needed", "The people involved and the level of competency and training required", "The directions to the site", "The order and correct way the work should be done", "The risks you can take"],
    correctAnswer: "A, B and D"
  },
  {
    id: 19,
    section: "General responsibilities",
    text: "How would you expect to find out about site health and safety rules when you first arrive on site?",
    options: ["During site induction", "In a letter sent to your home", "By reading your employer's health and safety policy", "By asking others on the site"],
    correctAnswer: "A"
  },
  {
    id: 20,
    section: "General responsibilities",
    text: "Who should attend a site induction?",
    options: ["Only supervisors and managers", "Only architects and designers", "Only operative-level workers", "Everyone going on to the site"],
    correctAnswer: "D"
  },
  {
    id: 21,
    section: "General responsibilities",
    text: "Which two topics should be covered in a site induction?",
    options: ["The site rules", "The location of the cheapest car park", "Holiday dates", "The site emergency procedures", "Information on local amenities"],
    correctAnswer: "A and D"
  },
  {
    id: 22,
    section: "General responsibilities",
    text: "Why is it your employer's legal responsibility to discuss matters of health and safety with you?",
    options: ["So that you will never have to attend any other health and safety training", "So that your employer will not have any legal responsibility for your health and safety", "Because they must inform you of things that will protect your health and safety", "So you do not have any responsibilities for health and safety"],
    correctAnswer: "C"
  },
  {
    id: 23,
    section: "General responsibilities",
    text: "What is a toolbox talk?",
    options: ["A short training session on a particular safety topic", "A talk that tells you where to buy tools", "Your first training session when you arrive on site", "A sales talk given by a tool supplier"],
    correctAnswer: "A"
  },
  {
    id: 24,
    section: "General responsibilities",
    text: "What is the main reason for attending a site induction?",
    options: ["You will get to know other new starters", "Risk assessments will be handed out", "Site health and safety rules and site hazards will be explained", "Permits to work will be handed out"],
    correctAnswer: "C"
  },
  {
    id: 25,
    section: "General responsibilities",
    text: "Which of the following statements best describes a near miss?",
    options: ["An incident where you were just too late to see what happened", "An incident where someone could have been injured or caused damage to the environment, property or equipment", "An incident where someone was injured and nearly had to go to hospital", "An incident where someone was injured and nearly had to take time off work"],
    correctAnswer: "B"
  },
  {
    id: 26,
    section: "General responsibilities",
    text: "How can you help to prevent accidents?",
    options: ["By reporting unsafe working conditions", "By becoming a first aider", "By knowing where the first-aid kit is kept", "By knowing how to get help quickly"],
    correctAnswer: "A"
  },
  {
    id: 27,
    section: "General responsibilities",
    text: "What are two possible consequences for employers of not taking measures to prevent accidents and ill health at work?",
    options: ["They could be fined or imprisoned", "They will have to change the site layout for emergency vehicles", "They will lose time and money due to the cost of any accident or ill health", "They will need to employ more people", "They will damage the environment"],
    correctAnswer: "A and C"
  },
  {
    id: 28,
    section: "General responsibilities",
    text: "What are two possible consequences for you if your employer does not prevent accidents and ill health at work?",
    options: ["You will have to work harder", "You may suffer an injury", "You won't get the training you need", "You may not be able to work, which could affect your income and family life", "You will have worse welfare facilities"],
    correctAnswer: "B and D"
  },
  // Accident reporting and recording
  {
    id: 29,
    section: "Accident reporting and recording",
    text: "Which two of the following will help you to find out about the site emergency procedures and emergency telephone numbers?",
    options: ["Guidance from the Health and Safety Executive (HSE)", "Reading the site noticeboards", "Guidance from your local Jobcentre Plus", "Attending the site induction", "Looking in the telephone directory"],
    correctAnswer: "B and D"
  },
  {
    id: 30,
    section: "Accident reporting and recording",
    text: "What should you do in an emergency?",
    options: ["Leave site", "Phone home", "Follow the site emergency procedure", "Phone the Health and Safety Executive (HSE)"],
    correctAnswer: "C"
  },
  {
    id: 31,
    section: "Accident reporting and recording",
    text: "Where is the assembly point in an emergency?",
    options: ["In the site manager's office", "At the site of the incident or accident", "In the site welfare facilities", "At the designated place"],
    correctAnswer: "D"
  },
  {
    id: 32,
    section: "Accident reporting and recording",
    text: "You have witnessed a serious accident on your site and are to be interviewed by a Health and Safety Executive (HSE) inspector. What should you do?",
    options: ["Ask your supervisor what you should say to the inspector", "Not tell the inspector anything", "Co-operate and tell the inspector exactly what you saw", "Tell the inspector what your workmates have told you"],
    correctAnswer: "C"
  },
  {
    id: 33,
    section: "Accident reporting and recording",
    text: "What is the main objective of carrying out an accident investigation?",
    options: ["To find out who is at fault", "To find out the causes in order to prevent it happening again", "To find out the cost of any damage that occurred", "To record what injuries were sustained"],
    correctAnswer: "B"
  },
  {
    id: 34,
    section: "Accident reporting and recording",
    text: "A scaffold has collapsed and you saw it happen. What should you say when you are asked about the accident?",
    options: ["Nothing, as you are not a scaffold expert", "As little as possible because you don't want to get people into trouble", "Exactly what you saw", "Who you think is to blame and how they should be punished"],
    correctAnswer: "C"
  },
  {
    id: 35,
    section: "Accident reporting and recording",
    text: "When must you record an accident in the accident book?",
    options: ["If you are injured in any way", "Only if you have to be off work", "Only if you suffered a broken bone", "Only if you have to go to hospital"],
    correctAnswer: "A"
  },
  {
    id: 36,
    section: "Accident reporting and recording",
    text: "If someone is injured at work, who should record it in the accident book?",
    options: ["The site manager", "The injured person or someone acting for them", "The first aider", "Someone from the Health and Safety Executive (HSE)"],
    correctAnswer: "B"
  },
  {
    id: 37,
    section: "Accident reporting and recording",
    text: "Which of these does not have to be recorded in the accident book?",
    options: ["Your national insurance number", "The date and time of your accident", "Details of your injury", "Your home address"],
    correctAnswer: "A"
  },
  {
    id: 38,
    section: "Accident reporting and recording",
    text: "Which type of accidents should be recorded in the accident book?",
    options: ["Only specified injuries, such as a broken arm or death of a person", "Only injuries requiring hospital treatment", "All accidents causing any injury", "Only accidents where the injured person has to stop work"],
    correctAnswer: "C"
  },
  {
    id: 39,
    section: "Accident reporting and recording",
    text: "When must an accident be recorded?",
    options: ["Only when an accident causes injury to a worker as a result of working activities", "Only when a person is injured and will be off work for more than three days", "Only when an accident causes damage to plant or equipment", "Only when a person breaks a major bone or is concussed"],
    correctAnswer: "A"
  },
  {
    id: 40,
    section: "Accident reporting and recording",
    text: "When must an entry be made in the accident book?",
    options: ["When an accident causes personal injury to any worker", "When the person has been off sick for three days", "When the accident may result in a compensation claim", "When management thinks it appropriate"],
    correctAnswer: "A"
  },
  {
    id: 41,
    section: "Accident reporting and recording",
    text: "Which two of the following items do not have to be recorded in an accident book?",
    options: ["Your national insurance number", "Your telephone number", "The date and time of the accident", "The injuries sustained", "The location of the accident"],
    correctAnswer: "A and B"
  },
  {
    id: 42,
    section: "Accident reporting and recording",
    text: "You suffer an injury at work and the details are recorded into the accident book. What must happen to this accident record?",
    options: ["It must be sent to the employer's insurance company at the end of the job", "It must be kept in a place where anyone can read it", "It must be treated as confidential under the Data Protection Act and kept for at least three years", "It must be destroyed at the end of the job"],
    correctAnswer: "C"
  },
  {
    id: 43,
    section: "Accident reporting and recording",
    text: "Where should accidents that cause any injury be recorded?",
    options: ["In the main contractor's diary", "In the accident report book", "In the site engineer's day book", "In the Health & Safety Executive's (HSE) accident database"],
    correctAnswer: "B"
  },
  {
    id: 44,
    section: "Accident reporting and recording",
    text: "Which of the following is the least important reason for recording all accidents?",
    options: ["It might stop them happening again", "Some types of accident have to be reported to the Health and Safety Executive (HSE)", "Details have to be entered in the accident book", "To find out who is to blame and make sure they are prosecuted"],
    correctAnswer: "D"
  },
  {
    id: 45,
    section: "Accident reporting and recording",
    text: "Why is it important to report near miss incidents on site?",
    options: ["Because it is the law to report all near miss incidents", "To find someone to blame", "It is a requirement of the CDM Regulations", "To learn from them and stop them happening again"],
    correctAnswer: "D"
  },
  {
    id: 46,
    section: "Accident reporting and recording",
    text: "If you have a minor accident, who should report it?",
    options: ["Anyone who saw the accident happen", "A sub-contractor", "You", "The Health and Safety Executive (HSE)"],
    correctAnswer: "C"
  },
  {
    id: 47,
    section: "Accident reporting and recording",
    text: "If your doctor says that you contracted Weil's disease (leptospirosis) on site, why do you need to tell your employer?",
    options: ["Your employer has to warn your colleagues not to go near you", "Your employer will have to report it to the Health and Safety Executive (HSE)", "Your employer will need to call pest control to remove rats on site", "The site on which you contracted it will have to be closed down"],
    correctAnswer: "B"
  },
  {
    id: 48,
    section: "Accident reporting and recording",
    text: "While working on site you get a small cut on one of your fingers. What should you do?",
    options: ["Report it at the end of the day or the end of the shift", "Wash it, and if it is not a problem carry on working", "Clean it and tell your supervisor about it later", "Report it and get first aid if necessary"],
    correctAnswer: "D"
  },
  {
    id: 49,
    section: "Accident reporting and recording",
    text: "You receive an injury from an accident at work. When should you report it?",
    options: ["At the end of the day, before you go home", "Only if you have to take time off work", "Immediately, or as soon as possible afterwards", "The next day before you start work"],
    correctAnswer: "C"
  },
  {
    id: 50,
    section: "Accident reporting and recording",
    text: "You have been injured by an accident at work and, as a result, are absent for more than seven days. Which two of the following actions must be taken?",
    options: ["The accident must be recorded in the accident book", "The emergency services must be called to find out how the accident happened", "The local hospital and the benefits office must be informed", "Your employer must inform the Health and Safety Executive (HSE)", "You must pay for any first-aid equipment used to treat your injury"],
    correctAnswer: "A and D"
  },
  {
    id: 51,
    section: "Accident reporting and recording",
    text: "Why should you report an accident?",
    options: ["It helps the site find out who caused it", "It is a legal requirement", "So that everyone can find out what happened by reading the accident book", "So that your company will be held responsible"],
    correctAnswer: "B"
  },
  {
    id: 52,
    section: "Accident reporting and recording",
    text: "Who must you report a serious accident to?",
    options: ["Site security", "The police service", "Your employer", "The ambulance service"],
    correctAnswer: "C"
  },
  {
    id: 53,
    section: "Accident reporting and recording",
    text: "You are involved in a dangerous incident on site but no-one was injured. Who must you report this dangerous occurrence to?",
    options: ["Your site supervisor or the site manager", "The client for the project", "The rest of the workforce", "The first aider"],
    correctAnswer: "A"
  },
  {
    id: 54,
    section: "Accident reporting and recording",
    text: "What should you do if you have witnessed a serious accident on your site?",
    options: ["Say nothing in case you get someone into trouble", "Ask your workmates what they think you should do", "Telephone the local hospital", "Tell your supervisor that you saw what happened"],
    correctAnswer: "D"
  },
  {
    id: 55,
    section: "Accident reporting and recording",
    text: "Your doctor tells you that you have hand-arm vibration syndrome possibly caused through work. What should you do?",
    options: ["Tell no-one as it's not contagious", "Inform your site supervisor or employer", "Just inform your workmates", "Tell no-one as this is not reportable"],
    correctAnswer: "B"
  },
  {
    id: 56,
    section: "Accident reporting and recording",
    text: "Which of these helps everyone work safely on site?",
    options: ["Site induction", "Toolbox talks", "Risk assessments and method statements (RAMS)", "All of these answers"],
    correctAnswer: "D"
  },
  // First aid
  {
    id: 57,
    section: "First aid and emergency procedures",
    text: "Where will you find out about emergency assembly points?",
    options: ["A risk assessment", "A method statement", "The site induction", "The permit to work"],
    correctAnswer: "C"
  },
  {
    id: 58,
    section: "First aid and emergency procedures",
    text: "How should you be informed about what to do in an emergency?",
    options: ["By attending the site induction", "By looking in the health and safety file", "By asking the Health and Safety Executive (HSE)", "By asking at the local hospital", "By reading the site noticeboards"],
    correctAnswer: "A and E"
  },
  {
    id: 59,
    section: "First aid and emergency procedures",
    text: "What should not be in a first-aid box?",
    options: ["Bandages", "Plasters", "Safety pins", "Tablets and medicines"],
    correctAnswer: "D"
  },
  {
    id: 60,
    section: "First aid and emergency procedures",
    text: "If the first-aid box on site is always empty, what should you do?",
    options: ["Bring your own supplies", "Find out who is taking them", "Find out who looks after the box and let them know", "Ignore the problem"],
    correctAnswer: "C"
  },
  {
    id: 61,
    section: "First aid and emergency procedures",
    text: "Does your employer have to provide a first-aid box?",
    options: ["Yes, every site must have one", "Only if more than 50 people work on site", "Only if more than 25 people work on site", "No, there is no legal duty"],
    correctAnswer: "A"
  },
  {
    id: 62,
    section: "First aid and emergency procedures",
    text: "When would you expect eyewash bottles to be provided?",
    options: ["Only on demolition sites", "Only on refurbishment sites", "On all sites where people could get something in their eyes", "On all sites where showers are needed"],
    correctAnswer: "C"
  },
  {
    id: 63,
    section: "First aid and emergency procedures",
    text: "What should you do if you want to be a first aider?",
    options: ["Watch a first aider treating people", "Ask if you can do a first-aider's course", "Buy a book on first aid", "Speak to your doctor"],
    correctAnswer: "B"
  },
  {
    id: 64,
    section: "First aid and emergency procedures",
    text: "What is the first thing you should do if you find an injured person?",
    options: ["Tell your supervisor", "Check that you are not in any danger first", "Move the injured person to a safe place", "Ask the injured person what happened"],
    correctAnswer: "B"
  },
  {
    id: 65,
    section: "First aid and emergency procedures",
    text: "If you are not trained in first aid, and someone is knocked unconscious, what should you do first?",
    options: ["Turn them over on their back", "Send for medical help", "Slap their face to wake them up", "Give mouth-to-mouth resuscitation"],
    correctAnswer: "B"
  },
  {
    id: 66,
    section: "First aid and emergency procedures",
    text: "Someone has fallen from height and has no feeling in their legs, what should you do?",
    options: ["Roll them onto their back", "Roll them onto their side", "Ensure they stay still and don't move them", "Raise their legs"],
    correctAnswer: "C"
  },
  {
    id: 67,
    section: "First aid and emergency procedures",
    text: "If there is an emergency while you are on site, what should you do first?",
    options: ["Leave the site", "Phone home", "Follow the site emergency procedure", "Phone the HSE"],
    correctAnswer: "C"
  },
  {
    id: 68,
    section: "First aid and emergency procedures",
    text: "If someone working in a deep manhole has collapsed, what should you do first?",
    options: ["Get someone to lower you in", "Climb into the manhole", "Go and tell your supervisor", "Shout to raise the alarm for a trained rescue team"],
    correctAnswer: "D"
  },
  {
    id: 69,
    section: "First aid and emergency procedures",
    text: "If someone is in contact with a live cable, what should you do first?",
    options: ["Phone the electricity company", "Dial 999", "Switch off the power and call for help", "Pull them away from the cable"],
    correctAnswer: "C"
  },
  {
    id: 70,
    section: "First aid and emergency procedures",
    text: "If you cut your finger and it won't stop bleeding, what should you do?",
    options: ["Wrap something around it and carry on", "Tell your workmates", "Wash it clean then carry on", "Find a first aider or get medical help"],
    correctAnswer: "D"
  },
  {
    id: 71,
    section: "First aid and emergency procedures",
    text: "If you think someone has a broken leg, what should you do?",
    options: ["Lie them on their side", "Use your belt to strap their legs", "Send for the first aider or get other help", "Lie them on their back"],
    correctAnswer: "C"
  },
  {
    id: 72,
    section: "First aid and emergency procedures",
    text: "If someone gets grit in their eye, what is the best thing you can do?",
    options: ["Wipe it with tissue paper", "Ask them to rub the eye", "Tell them to blink a couple of times", "Hold the eye open and flush it with sterilised water"],
    correctAnswer: "D"
  },
  {
    id: 73,
    section: "First aid and emergency procedures",
    text: "Someone gets a large splinter in their hand. It is deep and it hurts. What should you do?",
    options: ["Use something sharp to dig it out", "Make sure they get first aid", "Tell them to ignore it", "Try to squeeze it out"],
    correctAnswer: "B"
  },
  {
    id: 74,
    section: "First aid and emergency procedures",
    text: "Someone collapses with stomach pain and there is no first aider. What should you do first?",
    options: ["Get them to sit down", "Get someone to call the emergency services", "Get them to lie down", "Give them painkillers"],
    correctAnswer: "B"
  },
  {
    id: 75,
    section: "First aid and emergency procedures",
    text: "Someone has got a nail in their foot. Why must you not pull the nail out?",
    options: ["You will let bacteria in", "The nail is helping to reduce the bleeding", "It will prove they weren't wearing boots", "The nail is keeping their boot on"],
    correctAnswer: "B"
  },
  {
    id: 76,
    section: "First aid and emergency procedures",
    text: "If someone burns their hand, what is the best thing you can do?",
    options: ["Put the hand into cold water", "Tell them to exercise the hand", "Rub barrier cream into the burn", "Wrap a handkerchief around it"],
    correctAnswer: "A"
  },
  {
    id: 77,
    section: "First aid and emergency procedures",
    text: "What is the one thing a first aider cannot do for you?",
    options: ["Give mouth-to-mouth", "Stop any bleeding", "Give you medicines without authorisation", "Treat you if you are unconscious"],
    correctAnswer: "C"
  },
  // Health and welfare
  {
    id: 78,
    section: "Health and welfare",
    text: "What sort of rest area should your employer provide on site?",
    options: ["A covered area", "A covered area and some chairs", "A covered area, tables and chairs, and something to heat water and food", "Nothing, employers don't have to provide rest areas"],
    correctAnswer: "C"
  },
  {
    id: 79,
    section: "Health and welfare",
    text: "What are the legal minimum facilities for washing your hands?",
    options: ["Nothing", "A bowl, kettle and towel", "A cold water standpipe", "Hot and cold water, soap, and a way to dry hands"],
    correctAnswer: "D"
  },
  {
    id: 80,
    section: "Health and welfare",
    text: "The toilets on your site are always dirty. What should you do?",
    options: ["Try not to use them", "Tell the person in charge of the site", "Try to fix them yourself", "Use a nearby cafe"],
    correctAnswer: "B"
  },
  {
    id: 81,
    section: "Health and welfare",
    text: "Can male and female workers use the same toilet facilities?",
    options: ["Not in any circumstances", "If the cubicle is partitioned from urinals", "If the toilet is in a lockable room and partitioned from urinals", "If sanitary waste disposal is provided"],
    correctAnswer: "C"
  },
  {
    id: 82,
    section: "Health and welfare",
    text: "Can male and female workers use unisex showers on site?",
    options: ["Not in any circumstances", "If cubicles are separated by a partition", "If they are in a lockable room, for use by one person at a time", "If they are in a separate cubicle"],
    correctAnswer: "C"
  },
  {
    id: 83,
    section: "Health and welfare",
    text: "It is your first day and there is nowhere to wash your hands. What should you do?",
    options: ["Wait until you get home", "Go to a local pub", "Speak to your supervisor or site manager", "Nothing"],
    correctAnswer: "C"
  },
  {
    id: 84,
    section: "Health and welfare",
    text: "What should you use to clean very dirty hands?",
    options: ["Soap and water", "Thinners", "White spirit", "Paraffin"],
    correctAnswer: "A"
  },
  {
    id: 85,
    section: "Health and welfare",
    text: "Why should you not use white spirit to clean your hands?",
    options: ["It could strip protective oils from the skin", "It may remove the top layer of skin", "It could block the pores", "It may carry harmful bacteria"],
    correctAnswer: "A"
  },
  {
    id: 86,
    section: "Health and welfare",
    text: "What are two ways of reducing the risk of transferring hazardous substances from hands to mouth?",
    options: ["Wearing protective gloves", "Washing your hands before eating", "Putting barrier cream on before eating", "Turning gloves inside-out", "Washing work gloves"],
    correctAnswer: "A and B"
  },
  {
    id: 87,
    section: "Health and welfare",
    text: "You can catch tetanus from contaminated land. How does it get into your body?",
    options: ["Through your nose", "Through an open cut in your skin", "Through your mouth", "It doesn't infect people"],
    correctAnswer: "B"
  },
  {
    id: 88,
    section: "Health and welfare",
    text: "What condition can be caused by direct sunlight on bare skin?",
    options: ["Dermatitis", "Rickets", "Acne", "Skin cancer"],
    correctAnswer: "D"
  },
  {
    id: 89,
    section: "Health and welfare",
    text: "What is the main issue with using barrier cream to protect your skin?",
    options: ["It costs too much", "Many harmful substances go straight through it", "It is difficult to wash off", "It can irritate your skin"],
    correctAnswer: "B"
  },
  {
    id: 90,
    section: "Health and welfare",
    text: "When should you apply skin barrier cream?",
    options: ["Before you start work", "When you finish work", "As part of first-aid", "When you can't find your gloves"],
    correctAnswer: "A"
  },
  {
    id: 91,
    section: "Health and welfare",
    text: "What can cause occupational dermatitis?",
    options: ["Hand-arm vibration", "Contact with another person with dermatitis", "Contact with strong chemicals or substances", "Sunlight"],
    correctAnswer: "C"
  },
  {
    id: 92,
    section: "Health and welfare",
    text: "Which animal is the most likely carrier of Weil's disease on construction sites?",
    options: ["Rabbits", "Rats", "Squirrels", "Mice"],
    correctAnswer: "B"
  },
  {
    id: 93,
    section: "Health and welfare",
    text: "How can everyone on site help keep rats away?",
    options: ["Put rat traps around", "Ask the Local Authority for poison", "Throw food scraps over the fence", "Only put food rubbish in bins provided"],
    correctAnswer: "D"
  },
  {
    id: 94,
    section: "Health and welfare",
    text: "In what situation are you most likely to catch Weil's disease?",
    options: ["If you work near wet ground, waterways or sewers", "If you work near air-conditioning", "If you work fixing showers", "If you drink from a standpipe"],
    correctAnswer: "A"
  },
  {
    id: 95,
    section: "Health and welfare",
    text: "What other illness can be easily confused with the early signs of Weil's disease?",
    options: ["Dermatitis", "Diabetes", "Hay fever", "Influenza (flu)"],
    correctAnswer: "D"
  },
  {
    id: 96,
    section: "Health and welfare",
    text: "Your doctor has given you medication. Which question is the most important?",
    options: ["Will it make me unsafe to work?", "Will I work more slowly?", "Will my supervisor find out?", "Will I fail a drugs test?"],
    correctAnswer: "A"
  },
  {
    id: 97,
    section: "Health and welfare",
    text: "You suspect someone has been drinking alcohol. What should you do?",
    options: ["Get them to drink coffee", "Tell them your concerns and see they are safely removed", "Ask them to stay away for an hour", "Get them to eat something"],
    correctAnswer: "B"
  },
  // PPE
  {
    id: 98,
    section: "Personal protective equipment",
    text: "When do you need to wear eye protection?",
    options: ["On very bright, sunny days", "If there is a risk of eye injury and if it is the site rules", "When your employer can afford it", "Only if you work with chemicals"],
    correctAnswer: "B"
  },
  {
    id: 99,
    section: "Personal protective equipment",
    text: "What should you wear if there is a risk of materials flying into your eyes?",
    options: ["Tinted welding goggles", "Laser safety glasses", "Chemical-resistant goggles", "Impact-resistant goggles"],
    correctAnswer: "D"
  },
  {
    id: 100,
    section: "Personal protective equipment",
    text: "What type of eye protection is needed if using a cartridge-operated tool?",
    options: ["Light eye protection", "Normal glasses", "Impact-rated goggles", "None"],
    correctAnswer: "C"
  },
  {
    id: 101,
    section: "Personal protective equipment",
    text: "You need to use a grinder. What type of eye protection will you need?",
    options: ["Impact-resistant goggles or full face shield", "Welding goggles", "Reading glasses", "Light eye protection"],
    correctAnswer: "A"
  },
  {
    id: 102,
    section: "Personal protective equipment",
    text: "What will safety footwear with a protective mid-sole protect you from?",
    options: ["Twisting your ankle", "Spillages", "Nails puncturing the sole of your foot", "Blisters"],
    correctAnswer: "C"
  },
  {
    id: 103,
    section: "Personal protective equipment",
    text: "When should you wear safety footwear on site?",
    options: ["Only at ground level", "Until the site looks finished", "All the time", "Only when visiting"],
    correctAnswer: "C"
  },
  {
    id: 104,
    section: "Personal protective equipment",
    text: "What condition could be prevented if you wear correct gloves while handling hazardous substances?",
    options: ["Skin disease", "Vibration white finger", "Raynaud's syndrome", "Arthritis"],
    correctAnswer: "A"
  },
  {
    id: 105,
    section: "Personal protective equipment",
    text: "Do all types of glove protect hands against chemicals?",
    options: ["Yes", "Only if you use barrier cream", "No, different types protect against different hazards", "Only if you cover them with cream"],
    correctAnswer: "C"
  },
  {
    id: 106,
    section: "Personal protective equipment",
    text: "You need to wear a full body harness. You have never used one. What should you do?",
    options: ["Ask for expert advice and training", "Ask someone already wearing one", "Try to work it out", "Read the instruction book"],
    correctAnswer: "A"
  },
  {
    id: 107,
    section: "Personal protective equipment",
    text: "When is the only time you do not need to wear head protection on site?",
    options: ["If self-employed", "If working alone", "If in a safe area like the site office", "In very hot weather"],
    correctAnswer: "C"
  },
  {
    id: 108,
    section: "Personal protective equipment",
    text: "How should you wear your safety helmet for maximum protection?",
    options: ["Back to front", "Pushed back", "Square on your head", "Pulled forward"],
    correctAnswer: "C"
  },
  {
    id: 109,
    section: "Personal protective equipment",
    text: "What should you do if you drop your safety helmet from height onto a hard surface?",
    options: ["Repair any cracks", "Check for cracks then carry on", "Work without it until you get a new one", "Stop work and get a new one"],
    correctAnswer: "D"
  },
  {
    id: 110,
    section: "Personal protective equipment",
    text: "Which statement about wearing a safety helmet in hot weather is true?",
    options: ["You can drill holes in it", "You can wear it back-to-front", "You must take it off at noon", "You must wear it at all times and in the right way"],
    correctAnswer: "D"
  },
  {
    id: 111,
    section: "Personal protective equipment",
    text: "When working in cold weather, what can you wear under your hard hat?",
    options: ["A baseball cap", "A jumper hood", "A woolly hat", "Manufacturer's attachment for cold weather"],
    correctAnswer: "D"
  },
  {
    id: 112,
    section: "Personal protective equipment",
    text: "You have been given disposable earplugs but they keep falling out. What should you do?",
    options: ["Throw them away", "Stop work until you get suitable ones and training", "Put two in each ear", "Put tissue paper in each ear"],
    correctAnswer: "B"
  },
  {
    id: 113,
    section: "Personal protective equipment",
    text: "What should you do if you have to shout to be heard on site?",
    options: ["Raise your voice", "Stop work and raise it with your supervisor", "Go home", "Tell the person making noise to stop"],
    correctAnswer: "B"
  },
  {
    id: 114,
    section: "Personal protective equipment",
    text: "When must your employer provide you with PPE?",
    options: ["Twice a year", "If you pay for it", "If it is in the contract", "If you need to be protected"],
    correctAnswer: "D"
  },
  {
    id: 115,
    section: "Personal protective equipment",
    text: "Do you have to pay for any PPE you need?",
    options: ["Yes", "Only if you lose it", "Yes, half cost", "No, employer must pay"],
    correctAnswer: "D"
  },
  {
    id: 116,
    section: "Personal protective equipment",
    text: "Who should provide you with PPE and the means to maintain it?",
    options: ["Your employer", "You must buy your own", "Anyone with a budget", "No-one"],
    correctAnswer: "A"
  },
  {
    id: 117,
    section: "Personal protective equipment",
    text: "What should you do if your PPE gets damaged?",
    options: ["Throw it away and work without it", "Stop until it is replaced", "Work more quickly", "Try to repair it"],
    correctAnswer: "B"
  },
  {
    id: 118,
    section: "Personal protective equipment",
    text: "If you work outdoors in bad weather, why should your employer supply waterproof clothing?",
    options: ["To take fewer breaks", "To protect from weather and reduce muscle strains", "To prevent Weil's disease", "To prevent slips"],
    correctAnswer: "B"
  },
  {
    id: 119,
    section: "Personal protective equipment",
    text: "Which statement about PPE is not true?",
    options: ["You must pay for any damage", "You must store it correctly", "You must report damage", "You must use it as instructed"],
    correctAnswer: "A"
  },
  {
    id: 120,
    section: "Personal protective equipment",
    text: "How will you know if you need any extra PPE for a job?",
    options: ["Employer's health policy", "You always need it", "From the risk assessment or method statement", "A letter to your home"],
    correctAnswer: "C"
  },
  {
    id: 121,
    section: "Personal protective equipment",
    text: "When should high visibility clothing be replaced?",
    options: ["If it is soiled or damaged", "When it is one year old", "When it has been washed", "If left outside"],
    correctAnswer: "A"
  },
  // Dust and fumes
  {
    id: 122,
    section: "Dust and fumes (respiratory hazards)",
    text: "What is the biggest cause of long-term health issues in the construction industry?",
    options: ["Loud noise", "Being struck by a vehicle", "Slipping and tripping", "Breathing in hazardous dust and fumes"],
    correctAnswer: "D"
  },
  {
    id: 123,
    section: "Dust and fumes (respiratory hazards)",
    text: "If you use a power tool to cut materials, why must dust be collected?",
    options: ["To save time", "Most dust is harmful if breathed in", "The tool goes faster", "No guard needed"],
    correctAnswer: "B"
  },
  {
    id: 124,
    section: "Dust and fumes (respiratory hazards)",
    text: "You have been asked to do work that creates dust. What should you do?",
    options: ["Do not do the work", "Use equipment to reduce dust and wear correct PPE", "Start work - no controls needed", "Work for short periods"],
    correctAnswer: "B"
  },
  {
    id: 125,
    section: "Dust and fumes (respiratory hazards)",
    text: "Give two ways to control dust when using a power tool to cut.",
    options: ["Work slowly", "Fit a dust extractor", "Wet cutting", "Keep area clean", "Wear a dust mask"],
    correctAnswer: "B and C"
  },
  {
    id: 126,
    section: "Dust and fumes (respiratory hazards)",
    text: "Where are you likely to breathe in the highest quantities of dust?",
    options: ["Outside on a still day", "Outside on a windy day", "In a small room", "In a large indoor space"],
    correctAnswer: "C"
  },
  {
    id: 127,
    section: "Dust and fumes (respiratory hazards)",
    text: "What should you not do when sweeping up after grinding?",
    options: ["Dampen down the area", "Ensure ventilation", "Put mask back on", "Work as quickly as possible to minimise exposure"],
    correctAnswer: "D"
  },
  {
    id: 128,
    section: "Dust and fumes (respiratory hazards)",
    text: "What is the best way to limit exposure to dust?",
    options: ["Stop dust getting into the air", "Stand downwind", "Do work quickly", "Work in damp weather"],
    correctAnswer: "A"
  },
  {
    id: 129,
    section: "Dust and fumes (respiratory hazards)",
    text: "What is not important to check when assessing on-tool extraction?",
    options: ["Filter rating", "Filters are clear", "How to use power tool", "That extraction unit is new"],
    correctAnswer: "D"
  },
  {
    id: 130,
    section: "Dust and fumes (respiratory hazards)",
    text: "What must you ensure when using water to keep dust down?",
    options: ["As much water as possible", "Water flow is correctly adjusted", "Someone pours water from a bottle", "Water is poured before cutting"],
    correctAnswer: "B"
  },
  {
    id: 131,
    section: "Dust and fumes (respiratory hazards)",
    text: "What should you do if the water for dust control runs out?",
    options: ["Put on extra protection", "Stop and refill", "Ask everyone to clear area", "Sweep up afterwards"],
    correctAnswer: "B"
  },
  {
    id: 132,
    section: "Dust and fumes (respiratory hazards)",
    text: "What is the best way to protect long-term health from harmful dust?",
    options: ["Hard hat and hi-vis", "FFP3 mask and goggles", "Any mask and hearing protection", "Dust extraction/wet cut, FFP3 mask, hearing and eye protection"],
    correctAnswer: "D"
  },
  {
    id: 133,
    section: "Dust and fumes (respiratory hazards)",
    text: "You have been given a dust mask for hazardous fumes. What should you do?",
    options: ["Do not start until you have correct RPE", "Work quickly", "Take regular breaks", "Wear two masks"],
    correctAnswer: "A"
  },
  {
    id: 134,
    section: "Dust and fumes (respiratory hazards)",
    text: "Which of the following is not needed to ensure a mask works?",
    options: ["Correct type", "Face-fit test passed", "Worn correctly", "Immerse in water to check seals"],
    correctAnswer: "D"
  },
  {
    id: 135,
    section: "Dust and fumes (respiratory hazards)",
    text: "You need special RPE for a chemical. None provided. What should you do?",
    options: ["Work quickly", "Do not start until given correct RPE and training", "Take regular breaks", "Sniff the substance"],
    correctAnswer: "B"
  },
  {
    id: 136,
    section: "Dust and fumes (respiratory hazards)",
    text: "Which activity does not create harmful silica dust?",
    options: ["Sawing timber", "Cutting kerbs", "Breaking concrete", "Chasing walls"],
    correctAnswer: "A"
  },
  {
    id: 137,
    section: "Dust and fumes (respiratory hazards)",
    text: "What can cause occupational asthma?",
    options: ["Loud noise", "Rat urine", "Skin contact", "Breathing in hazardous dust, fumes or vapours"],
    correctAnswer: "D"
  },
  {
    id: 138,
    section: "Dust and fumes (respiratory hazards)",
    text: "What illness might you develop if you breathe in dust over time?",
    options: ["Occupational lung disease", "Dermatitis", "Skin cancer", "Laryngitis"],
    correctAnswer: "A"
  },
  {
    id: 139,
    section: "Dust and fumes (respiratory hazards)",
    text: "Exposure to which of the following may not result in lung disease?",
    options: ["Asbestos", "Bird droppings", "Strong smells", "Silica dust"],
    correctAnswer: "C"
  },
  {
    id: 140,
    section: "Dust and fumes (respiratory hazards)",
    text: "What should you do if you find pigeon droppings in your work area?",
    options: ["Carry on carefully", "Stop work and seek advice", "Catch the pigeons", "Wait for them to fly away"],
    correctAnswer: "B"
  },
  {
    id: 141,
    section: "Dust and fumes (respiratory hazards)",
    text: "Which is not a health effect of exposure to high-solvent paints?",
    options: ["Headaches", "Drowsiness", "Dermatitis", "Hearing loss"],
    correctAnswer: "D"
  },
  // Noise
  {
    id: 142,
    section: "Noise and vibration",
    text: "Noise can damage your hearing. What is an early sign of this?",
    options: ["There are no early signs", "Temporary deafness or a ringing noise in your ears", "A skin rash around your ears", "Ear infections"],
    correctAnswer: "B"
  },
  {
    id: 143,
    section: "Noise and vibration",
    text: "How can noise affect health?",
    options: ["Temporary hearing loss", "Ear infections", "Permanent hearing loss", "Waxy ears", "Dizziness"],
    correctAnswer: "A and C"
  },
  {
    id: 144,
    section: "Noise and vibration",
    text: "If you have a ringing sound in your ears after work, what does it mean?",
    options: ["Hearing temporarily damaged", "Subjected to vibration", "Protection worked", "Noise level acceptable"],
    correctAnswer: "A"
  },
  {
    id: 145,
    section: "Noise and vibration",
    text: "Can damage from long-term noise exposure be reversed?",
    options: ["Yes, with time", "Yes, with operation", "No, it is permanent", "Yes, if you change jobs"],
    correctAnswer: "C"
  },
  {
    id: 146,
    section: "Noise and vibration",
    text: "What should you do if you think noise damaged your hearing?",
    options: ["Use cotton wool", "Nothing", "Go off sick", "Ask employer or doctor for a hearing test"],
    correctAnswer: "D"
  },
  {
    id: 147,
    section: "Noise and vibration",
    text: "What does wearing hearing protection do?",
    options: ["Stops all noise", "Reduces damaging noise to acceptable level", "Repairs hearing", "Makes you hear better"],
    correctAnswer: "B"
  },
  {
    id: 148,
    section: "Noise and vibration",
    text: "What are two recommended ways to protect hearing?",
    options: ["Tissue paper", "Cotton wool", "Earplugs", "Cloth pads", "Ear defenders"],
    correctAnswer: "C and E"
  },
  {
    id: 149,
    section: "Noise and vibration",
    text: "How should you insert disposable earplugs?",
    options: ["Soak in water", "Do not roll", "Roll up and insert far while pulling top of ear", "Fold in half"],
    correctAnswer: "C"
  },
  {
    id: 150,
    section: "Noise and vibration",
    text: "Someone near you is using noisy equipment and you have no protection. What should you do?",
    options: ["Ask them to stop", "Carry on", "Leave area until you have correct PPE", "Speak to their supervisor"],
    correctAnswer: "C"
  },
  {
    id: 151,
    section: "Noise and vibration",
    text: "Noise levels are a problem if you have to shout to be heard at what distance?",
    options: ["2 m", "4 m", "5 m", "6 m"],
    correctAnswer: "A"
  },
  {
    id: 152,
    section: "Noise and vibration",
    text: "What should you do if an ear pad is missing from your ear defenders?",
    options: ["Work without them", "Work with them as they are", "Do not work in noisy areas until replaced", "Take a pad from another set"],
    correctAnswer: "C"
  },
  {
    id: 153,
    section: "Noise and vibration",
    text: "What must you do when working in a hearing protection zone?",
    options: ["Not make noise", "Wear correct protection at all times", "Take protection with you", "Wear if it gets too loud"],
    correctAnswer: "B"
  },
  {
    id: 154,
    section: "Noise and vibration",
    text: "Why is over exposure to vibration a serious issue?",
    options: ["No early signs", "Long-term effects unknown", "Cannot be prevented", "Can cause disabling injury that cannot be cured"],
    correctAnswer: "D"
  },
  {
    id: 155,
    section: "Noise and vibration",
    text: "What is hand-arm vibration syndrome (HAVS)?",
    options: ["Skin rash", "Skin condition", "Frostbite", "Condition leading to permanent damage"],
    correctAnswer: "D"
  },
  {
    id: 156,
    section: "Noise and vibration",
    text: "What health problem can be caused by HAVS?",
    options: ["Skin cancer", "Dermatitis", "Blisters", "Damaged blood vessels and nerves in fingers"],
    correctAnswer: "D"
  },
  {
    id: 157,
    section: "Noise and vibration",
    text: "What are early signs of vibration white finger?",
    options: ["Loss of feeling in fingers", "Fingertips turn white", "Rash", "Tingling sensation", "Blisters"],
    correctAnswer: "A, B and D"
  },
  {
    id: 158,
    section: "Noise and vibration",
    text: "You are less likely to suffer from HAVS if you feel:",
    options: ["Cold but dry", "Cold and wet", "Warm and dry", "Wet but warm"],
    correctAnswer: "C"
  },
  {
    id: 159,
    section: "Noise and vibration",
    text: "Which tool is most likely to cause vibration white finger?",
    options: ["Handsaw", "Hammer drill", "Hammer and chisel", "Screwdriver"],
    correctAnswer: "B"
  },
  {
    id: 160,
    section: "Noise and vibration",
    text: "Your fingers start to tingle after using a vibrating tool. What does this mean?",
    options: ["Loosen grip", "Never use again", "Report symptoms before they cause a problem", "Hold tighter"],
    correctAnswer: "C"
  },
  {
    id: 161,
    section: "Noise and vibration",
    text: "What should your supervisor do if you have to use a vibrating tool?",
    options: ["Measure vibration", "Explain risk assessment and safe time limits", "Watch you use it", "Let you make your own system"],
    correctAnswer: "B"
  },
  {
    id: 162,
    section: "Noise and vibration",
    text: "How can you help reduce risk of hand-arm vibration?",
    options: ["Do not grip tool too tightly", "Hold at arm's length", "Use more force", "Hold more tightly"],
    correctAnswer: "A"
  },
  {
    id: 163,
    section: "Noise and vibration",
    text: "How can you help reduce effects of hand-arm vibration?",
    options: ["Hold tightly", "Do work in short spells", "Do job in one long burst", "Use one hand"],
    correctAnswer: "B"
  },
  // Hazardous substances
  {
    id: 164,
    section: "Hazardous substances",
    text: "Where might you come across asbestos?",
    options: ["In a house built between 1950 and 1990", "In any building built or refurbished before the year 2000", "In industrial buildings built between 1920 and 1990", "Asbestos has now been removed from all buildings"],
    correctAnswer: "B"
  },
  {
    id: 165,
    section: "Hazardous substances",
    text: "After asbestos, what causes the most ill health to construction workers?",
    options: ["Wood dust", "Diesel fumes", "Silica dust", "Paint vapours"],
    correctAnswer: "C"
  },
  {
    id: 166,
    section: "Hazardous substances",
    text: "What illness might you develop if you breathe in asbestos dust?",
    options: ["Aching muscles", "Throat infections", "Lung diseases", "Dizziness"],
    correctAnswer: "C"
  },
  {
    id: 167,
    section: "Hazardous substances",
    text: "Exposure to asbestos fibres may result in:",
    options: ["Mesothelioma", "Asbestosis", "Lung cancer", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 168,
    section: "Hazardous substances",
    text: "How can asbestos be correctly identified?",
    options: ["Smell", "Lab analysis", "Colour", "Dissolve in water"],
    correctAnswer: "B"
  },
  {
    id: 169,
    section: "Hazardous substances",
    text: "If you think you found asbestos, what is the first thing to do?",
    options: ["Stop work and warn others", "Take sample to supervisor", "Put in bin", "Find first aider"],
    correctAnswer: "A"
  },
  {
    id: 170,
    section: "Hazardous substances",
    text: "What PPE is necessary for non-licensed asbestos work?",
    options: ["Disposable overalls", "FFP3 mask", "Laceless footwear", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 171,
    section: "Hazardous substances",
    text: "Which should be labelled with an asbestos warning sign?",
    options: ["Asbestos waste", "Raw asbestos", "Products containing asbestos", "Plasterboard", "Recyclable waste"],
    correctAnswer: "A, B and C"
  },
  {
    id: 172,
    section: "Hazardous substances",
    text: "Why are wet cement and mortar hazardous?",
    options: ["Dizziness", "Skin burns and dermatitis", "Muscle aches", "Arc eye"],
    correctAnswer: "B"
  },
  {
    id: 173,
    section: "Hazardous substances",
    text: "Why wear wellington boots in wet cement?",
    options: ["Stop trousers getting wet", "Keep feet warm", "Prevent dermatitis and skin burns", "Walk faster"],
    correctAnswer: "C"
  },
  {
    id: 174,
    section: "Hazardous substances",
    text: "What should be checked on a cement bag to protect from dermatitis?",
    options: ["Undamaged", "Use by date not expired", "Stored in dry place", "Contents not hard"],
    correctAnswer: "B"
  },
  {
    id: 175,
    section: "Hazardous substances",
    text: "Which provides health and safety information about a hazardous substance?",
    options: ["Site diary", "Delivery note", "COSHH assessment", "Manual handling assessment"],
    correctAnswer: "C"
  },
  {
    id: 176,
    section: "Hazardous substances",
    text: "What does a COSHH assessment tell you?",
    options: ["How to lift", "Confined spaces", "How substance might harm you and how to protect yourself", "Noise levels"],
    correctAnswer: "C"
  },
  {
    id: 177,
    section: "Hazardous substances",
    text: "What is the safest way to use a hazardous substance?",
    options: ["Quickly", "Read health policy", "Understand COSHH assessment and follow instructions", "Ask someone"],
    correctAnswer: "C"
  },
  {
    id: 178,
    section: "Hazardous substances",
    text: "Who should explain the COSHH assessment before you start?",
    options: ["HSE inspector", "First aider", "Supervisor or employer", "Security"],
    correctAnswer: "C"
  },
  {
    id: 179,
    section: "Hazardous substances",
    text: "You find an unmarked container. What is the first thing to do?",
    options: ["Smell it", "Put in bin", "Move it", "Leave undisturbed and report it"],
    correctAnswer: "D"
  },
  {
    id: 180,
    section: "Hazardous substances",
    text: "If you see a corrosive label, what should you do?",
    options: ["Do not use", "Find out protection needed", "Wash hands after", "Find hand cleaner"],
    correctAnswer: "B"
  },
  {
    id: 181,
    section: "Hazardous substances",
    text: "If you see a harmful label, what should you do?",
    options: ["Find out protection needed", "Use sparingly", "Wear gloves", "Do not use"],
    correctAnswer: "A"
  },
  {
    id: 182,
    section: "Hazardous substances",
    text: "What does 'sensitiser' mean on packaging?",
    options: ["Could become allergic", "Mix with water", "Safe without PPE", "Do not use"],
    correctAnswer: "A"
  },
  {
    id: 183,
    section: "Hazardous substances",
    text: "If you see a toxic label, what should you do?",
    options: ["Store out of reach", "Use carefully", "Do not use", "Find out protection needed"],
    correctAnswer: "D"
  },
  {
    id: 184,
    section: "Hazardous substances",
    text: "If you see an explosive label, what should you do?",
    options: ["Fragile", "Find out how to use safely", "Catch fire easily", "Could kill you"],
    correctAnswer: "B"
  },
  {
    id: 185,
    section: "Hazardous substances",
    text: "If you see a flammable label, what should you do?",
    options: ["Burn it", "Could explode", "Find out how to use safely", "Warm up contents"],
    correctAnswer: "C"
  },
  {
    id: 186,
    section: "Hazardous substances",
    text: "What does the health hazard sign (silhouette with star) mean?",
    options: ["Explode", "Heartburn", "Glow in dark", "Serious long-term health hazards"],
    correctAnswer: "D"
  },
  // Manual handling
  {
    id: 188,
    section: "Manual handling",
    text: "Which of the following is a manual handling task?",
    options: ["Lifting materials with a crane", "Climbing ladders or stairs", "Activities involving pushing, pulling, lowering and lifting", "Getting in and out of a vehicle used at work"],
    correctAnswer: "C"
  },
  {
    id: 189,
    section: "Manual handling",
    text: "What is the best way to prevent a manual handling injury?",
    options: ["Use a lifting aid", "Ask someone to help", "Do not lift anything", "Wear a back brace"],
    correctAnswer: "A"
  },
  {
    id: 190,
    section: "Manual handling",
    text: "What should you do if you have to lift a load that is too heavy?",
    options: ["Try to lift it", "Ask for help or use a lifting aid", "Leave it for someone else", "Drag it"],
    correctAnswer: "B"
  },
  {
    id: 191,
    section: "Manual handling",
    text: "What is the first thing you should do before lifting a load?",
    options: ["Check the weight", "Assess the risk", "Clear the path", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 192,
    section: "Manual handling",
    text: "How should you position your feet when lifting a load?",
    options: ["Feet together", "One foot in front of the other", "Stable base with feet apart", "On your toes"],
    correctAnswer: "C"
  },
  {
    id: 193,
    section: "Manual handling",
    text: "When lifting a load from the floor, you should:",
    options: ["Bend your back", "Keep your legs straight", "Bend your knees and keep your back straight", "Twist your body"],
    correctAnswer: "C"
  },
  {
    id: 194,
    section: "Manual handling",
    text: "Where should you hold a load when carrying it?",
    options: ["At arm's length", "Close to your body", "On your shoulder", "Above your head"],
    correctAnswer: "B"
  },
  {
    id: 195,
    section: "Manual handling",
    text: "What should you do if you need to change your grip while carrying a load?",
    options: ["Do it quickly", "Put the load down first", "Ask someone to hold it", "Keep walking"],
    correctAnswer: "B"
  },
  {
    id: 196,
    section: "Manual handling",
    text: "What is the main risk of manual handling?",
    options: ["Cuts and bruises", "Back injuries and muscle strains", "Broken bones", "Eye injuries"],
    correctAnswer: "B"
  },
  {
    id: 197,
    section: "Manual handling",
    text: "If you have to carry a load down a steep slope, what should you do?",
    options: ["Run down", "Walk backwards", "Assess the risk and use a mechanical aid if possible", "Carry it on your head"],
    correctAnswer: "C"
  },
  {
    id: 198,
    section: "Manual handling",
    text: "What should you do if a load is too bulky to see over?",
    options: ["Guess the way", "Ask someone to guide you", "Walk sideways", "Put it on your shoulder"],
    correctAnswer: "B"
  },
  {
    id: 199,
    section: "Manual handling",
    text: "When is a manual handling assessment required?",
    options: ["Only for very heavy loads", "When there is a risk of injury", "Every day", "Only for new employees"],
    correctAnswer: "B"
  },
  {
    id: 200,
    section: "Manual handling",
    text: "What does 'LITE' stand for in manual handling?",
    options: ["Load, Individual, Task, Environment", "Lift, Inspect, Transport, Exit", "Light, Internal, Total, External", "Low, Impact, Time, Energy"],
    correctAnswer: "A"
  },
  {
    id: 201,
    section: "Manual handling",
    text: "Which of these is a mechanical lifting aid?",
    options: ["A wheelbarrow", "A pallet truck", "A hoist", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 202,
    section: "Manual handling",
    text: "What should you do if a mechanical aid is broken?",
    options: ["Try to fix it", "Use it carefully", "Report it and do not use it", "Ask a colleague to help"],
    correctAnswer: "C"
  },
  {
    id: 203,
    section: "Manual handling",
    text: "Why is it important to keep your back straight when lifting?",
    options: ["To look professional", "To use your leg muscles and protect your spine", "To lift faster", "To balance the load"],
    correctAnswer: "B"
  },
  {
    id: 204,
    section: "Manual handling",
    text: "What should you do if you feel a sharp pain while lifting?",
    options: ["Keep going", "Stop immediately and report it", "Take a break and try again", "Rub the area"],
    correctAnswer: "B"
  },
  {
    id: 205,
    section: "Manual handling",
    text: "Can a manual handling injury happen over time?",
    options: ["No, only in an accident", "Yes, due to repetitive lifting", "Only if you are old", "Only if you are unfit"],
    correctAnswer: "B"
  },
  {
    id: 206,
    section: "Manual handling",
    text: "What should you do if you are unsure how to lift a load safely?",
    options: ["Ask for training or advice", "Watch someone else", "Try your best", "Read a book"],
    correctAnswer: "A"
  },
  {
    id: 207,
    section: "Manual handling",
    text: "Is it okay to twist your body while lifting?",
    options: ["Yes, if done slowly", "No, it increases the risk of back injury", "Only if the load is light", "Yes, to save time"],
    correctAnswer: "B"
  },
  {
    id: 208,
    section: "Manual handling",
    text: "What should you do if you have a pre-existing back condition?",
    options: ["Do not tell anyone", "Inform your employer so they can assess your tasks", "Quit your job", "Work through the pain"],
    correctAnswer: "B"
  },
  {
    id: 209,
    section: "Manual handling",
    text: "What is the maximum weight one person should lift?",
    options: ["10 kg", "20 kg", "25 kg", "There is no set limit, it depends on the individual and the task"],
    correctAnswer: "D"
  },
  {
    id: 210,
    section: "Manual handling",
    text: "What should you do if you have to carry a load up a ladder?",
    options: ["Carry it in one hand", "Put it in a backpack", "Use a hoist or pulley system", "Ask someone to throw it up"],
    correctAnswer: "C"
  },
  {
    id: 211,
    section: "Manual handling",
    text: "What is the risk of lifting a load from above shoulder height?",
    options: ["It's easier", "It puts more strain on your back and shoulders", "It's safer", "No risk"],
    correctAnswer: "B"
  },
  {
    id: 212,
    section: "Manual handling",
    text: "What should you do if you need to move a load a long distance?",
    options: ["Carry it all the way", "Use a trolley or other mechanical aid", "Drag it", "Ask for a break every 5 minutes"],
    correctAnswer: "B"
  },
  {
    id: 213,
    section: "Manual handling",
    text: "Why should you clear the path before carrying a load?",
    options: ["To make it look tidy", "To prevent slips, trips and falls", "To walk faster", "To show off"],
    correctAnswer: "B"
  },
  {
    id: 214,
    section: "Manual handling",
    text: "What should you do if you are pregnant and have to lift loads?",
    options: ["Carry on as normal", "Ask for a risk assessment and lighter duties", "Stop working immediately", "Lift more to stay fit"],
    correctAnswer: "B"
  },
  {
    id: 215,
    section: "Manual handling",
    text: "What is the best way to move a heavy drum?",
    options: ["Lift it", "Roll it", "Use a drum trolley", "Push it"],
    correctAnswer: "C"
  },
  {
    id: 216,
    section: "Manual handling",
    text: "What should you do if you are asked to lift something you think is unsafe?",
    options: ["Try it anyway", "Ask for help", "Refuse and explain why, then ask for a safe way to do it", "Do it quickly"],
    correctAnswer: "C"
  },
  // Safety signs
  {
    id: 217,
    section: "Safety signs",
    text: "What are blue and white signs?",
    options: ["Mandatory signs - meaning you must do something", "Prohibition signs - meaning you must not do something", "Warning signs - alerting you to hazards or danger", "Safe condition signs - giving you information"],
    correctAnswer: "A"
  },
  {
    id: 218,
    section: "Safety signs",
    text: "What does this sign mean? (Ear protection icon)",
    options: ["Wear hearing protection if you want to", "You must wear hearing protection", "No personal electronic devices", "Caution, noisy machinery"],
    correctAnswer: "B"
  },
  {
    id: 219,
    section: "Safety signs",
    text: "What are red and white signs with a diagonal line?",
    options: ["Mandatory signs", "Prohibition signs - meaning you must not do something", "Warning signs", "Safe condition signs"],
    correctAnswer: "B"
  },
  {
    id: 220,
    section: "Safety signs",
    text: "What does a yellow and black triangular sign mean?",
    options: ["Mandatory", "Prohibition", "Warning - alerting you to a hazard", "Safe condition"],
    correctAnswer: "C"
  },
  {
    id: 221,
    section: "Safety signs",
    text: "What are green and white signs?",
    options: ["Mandatory", "Prohibition", "Warning", "Safe condition - giving information like first aid or fire exits"],
    correctAnswer: "D"
  },
  {
    id: 222,
    section: "Safety signs",
    text: "What does a red and white sign with a picture of a fire extinguisher mean?",
    options: ["Fire alarm", "Fire extinguisher location", "No smoking", "Fire exit"],
    correctAnswer: "B"
  },
  {
    id: 223,
    section: "Safety signs",
    text: "What should you do if you see a sign you don't understand?",
    options: ["Ignore it", "Ask your supervisor to explain it", "Guess", "Take it down"],
    correctAnswer: "B"
  },
  {
    id: 224,
    section: "Safety signs",
    text: "What does a sign with a white circle and a red border mean?",
    options: ["Warning", "Mandatory", "Prohibition", "Safe condition"],
    correctAnswer: "C"
  },
  {
    id: 225,
    section: "Safety signs",
    text: "What does a sign with a blue circle and a white picture mean?",
    options: ["Prohibition", "Warning", "Mandatory - you must do what the picture shows", "Safe condition"],
    correctAnswer: "C"
  },
  {
    id: 226,
    section: "Safety signs",
    text: "What does a sign with a yellow triangle and a black exclamation mark mean?",
    options: ["General danger/hazard", "No entry", "Wear hard hat", "Fire exit"],
    correctAnswer: "A"
  },
  {
    id: 227,
    section: "Safety signs",
    text: "What does a green sign with a white running man mean?",
    options: ["No running", "Fire exit/escape route", "Assembly point", "First aid"],
    correctAnswer: "B"
  },
  {
    id: 228,
    section: "Safety signs",
    text: "What does a green sign with a white cross mean?",
    options: ["No entry", "Fire exit", "First aid", "Hospital"],
    correctAnswer: "C"
  },
  {
    id: 229,
    section: "Safety signs",
    text: "What does a sign with a red circle, a white background and a black cigarette with a red line through it mean?",
    options: ["Smoking area", "No smoking", "Fire risk", "Danger"],
    correctAnswer: "B"
  },
  {
    id: 230,
    section: "Safety signs",
    text: "What does a sign with a blue circle and a white picture of a hard hat mean?",
    options: ["Hard hats available", "No hard hats", "You must wear a hard hat", "Caution, falling objects"],
    correctAnswer: "C"
  },
  {
    id: 231,
    section: "Safety signs",
    text: "What does a sign with a yellow triangle and a black picture of a skull and crossbones mean?",
    options: ["Pirates", "Toxic/poisonous substance", "Danger of death", "No entry"],
    correctAnswer: "B"
  },
  {
    id: 232,
    section: "Safety signs",
    text: "What does a sign with a yellow triangle and a black picture of a lightning bolt mean?",
    options: ["Bad weather", "Danger of electricity", "Fast work area", "No entry"],
    correctAnswer: "B"
  },
  {
    id: 233,
    section: "Safety signs",
    text: "What does a sign with a red circle and a white horizontal bar mean?",
    options: ["No entry", "Stop", "One way", "Slow down"],
    correctAnswer: "A"
  },
  {
    id: 234,
    section: "Safety signs",
    text: "What does a sign with a blue circle and a white picture of a pair of boots mean?",
    options: ["Boots for sale", "No boots", "You must wear safety footwear", "Caution, slippery floor"],
    correctAnswer: "C"
  },
  {
    id: 235,
    section: "Safety signs",
    text: "What does a sign with a yellow triangle and a black picture of a forklift mean?",
    options: ["Forklift parking", "No forklifts", "Caution, forklift trucks operating", "Forklift training"],
    correctAnswer: "C"
  },
  {
    id: 236,
    section: "Safety signs",
    text: "What does a sign with a green square and a white picture of a telephone mean?",
    options: ["No phones", "Emergency telephone", "Office", "Public phone"],
    correctAnswer: "B"
  },
  {
    id: 237,
    section: "Safety signs",
    text: "What does a sign with a red circle and a black picture of a person with a red line through it mean?",
    options: ["No pedestrians", "No entry", "Authorized personnel only", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 238,
    section: "Safety signs",
    text: "What does a sign with a blue circle and a white picture of a pair of gloves mean?",
    options: ["Gloves available", "No gloves", "You must wear safety gloves", "Caution, hot surface"],
    correctAnswer: "C"
  },
  {
    id: 239,
    section: "Safety signs",
    text: "What does a sign with a yellow triangle and a black picture of a flame mean?",
    options: ["Fire exit", "No smoking", "Caution, flammable substance", "Fire extinguisher"],
    correctAnswer: "C"
  },
  {
    id: 240,
    section: "Safety signs",
    text: "What does a sign with a green square and a white picture of a person at an assembly point mean?",
    options: ["No gathering", "Fire assembly point", "Meeting room", "Canteen"],
    correctAnswer: "B"
  },
  {
    id: 241,
    section: "Safety signs",
    text: "What does a sign with a blue circle and a white picture of a face shield mean?",
    options: ["No face shields", "You must wear a face shield", "Caution, flying objects", "Welding area"],
    correctAnswer: "B"
  },
  {
    id: 242,
    section: "Safety signs",
    text: "What does a sign with a yellow triangle and a black picture of a person falling mean?",
    options: ["No falling", "Caution, risk of falling", "Slippery floor", "Uneven ground"],
    correctAnswer: "B"
  },
  {
    id: 243,
    section: "Safety signs",
    text: "What does a sign with a red circle and a black picture of a hand with a red line through it mean?",
    options: ["No touching", "No entry", "Authorized personnel only", "Stop"],
    correctAnswer: "A"
  },
  {
    id: 244,
    section: "Safety signs",
    text: "What does a sign with a blue circle and a white picture of a high-visibility vest mean?",
    options: ["No hi-vis", "You must wear high-visibility clothing", "Caution, site traffic", "Free vests"],
    correctAnswer: "B"
  },
  // Fire
  {
    id: 245,
    section: "Fire prevention and control",
    text: "What are two common fire risks on construction sites?",
    options: ["230 volt power tools", "Poor housekeeping and build up of waste", "Timber racks", "Uncontrolled hot works", "110 volt extension reels"],
    correctAnswer: "B and D"
  },
  {
    id: 246,
    section: "Fire prevention and control",
    text: "What is the main purpose of a fire risk assessment?",
    options: ["To find out who to blame", "To identify hazards and reduce the risk of fire", "To buy more extinguishers", "To train fire marshals"],
    correctAnswer: "B"
  },
  {
    id: 247,
    section: "Fire prevention and control",
    text: "What should you do if you discover a fire?",
    options: ["Try to put it out", "Raise the alarm and follow site evacuation procedures", "Run away without telling anyone", "Call your family"],
    correctAnswer: "B"
  },
  {
    id: 248,
    section: "Fire prevention and control",
    text: "What should you do when the fire alarm sounds?",
    options: ["Finish your task", "Go to the assembly point immediately", "Wait for your supervisor", "Pack your tools"],
    correctAnswer: "B"
  },
  {
    id: 249,
    section: "Fire prevention and control",
    text: "Which fire extinguisher should be used on a wood or paper fire?",
    options: ["Water (Red label)", "CO2 (Black label)", "Powder (Blue label)", "Foam (Cream label)"],
    correctAnswer: "A"
  },
  {
    id: 250,
    section: "Fire prevention and control",
    text: "Which fire extinguisher should NOT be used on an electrical fire?",
    options: ["CO2", "Powder", "Water", "None of these"],
    correctAnswer: "C"
  },
  {
    id: 251,
    section: "Fire prevention and control",
    text: "What color is the label on a CO2 fire extinguisher?",
    options: ["Red", "Blue", "Black", "Cream"],
    correctAnswer: "C"
  },
  {
    id: 252,
    section: "Fire prevention and control",
    text: "What color is the label on a foam fire extinguisher?",
    options: ["Red", "Blue", "Black", "Cream"],
    correctAnswer: "D"
  },
  {
    id: 253,
    section: "Fire prevention and control",
    text: "What color is the label on a dry powder fire extinguisher?",
    options: ["Red", "Blue", "Black", "Cream"],
    correctAnswer: "B"
  },
  {
    id: 254,
    section: "Fire prevention and control",
    text: "What should you do before using a fire extinguisher?",
    options: ["Check it is the right type for the fire", "Check it is in date", "Ensure you have a safe exit route", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 255,
    section: "Fire prevention and control",
    text: "What is a 'hot work' permit?",
    options: ["Permission to work in the sun", "A document allowing high-risk activities like welding or grinding", "A ticket for a hot meal", "A license to use a heater"],
    correctAnswer: "B"
  },
  {
    id: 256,
    section: "Fire prevention and control",
    text: "Why should you keep fire doors closed?",
    options: ["To stop draughts", "To prevent the spread of fire and smoke", "To keep people out", "To save energy"],
    correctAnswer: "B"
  },
  {
    id: 257,
    section: "Fire prevention and control",
    text: "What should you do if a fire exit is blocked?",
    options: ["Use it anyway", "Report it immediately and clear the blockage if safe", "Ignore it", "Find another way"],
    correctAnswer: "B"
  },
  {
    id: 258,
    section: "Fire prevention and control",
    text: "What is the 'fire triangle'?",
    options: ["A sign", "The three elements needed for a fire: Heat, Fuel, Oxygen", "A type of extinguisher", "A fire drill"],
    correctAnswer: "B"
  },
  {
    id: 259,
    section: "Fire prevention and control",
    text: "How can you prevent a fire when using flammable liquids?",
    options: ["Store them in a secure, ventilated area", "Keep them away from heat sources", "Use only the amount needed", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 260,
    section: "Fire prevention and control",
    text: "What should you do with oily rags?",
    options: ["Leave them on the floor", "Put them in a metal bin with a lid", "Throw them in the skip", "Take them home"],
    correctAnswer: "B"
  },
  {
    id: 261,
    section: "Fire prevention and control",
    text: "Why is smoking restricted on site?",
    options: ["To save money", "To reduce the risk of fire", "To keep the air clean", "Because it's annoying"],
    correctAnswer: "B"
  },
  {
    id: 262,
    section: "Fire prevention and control",
    text: "What should you do if you see someone smoking in a restricted area?",
    options: ["Join them", "Report it to your supervisor", "Ignore it", "Ask for a cigarette"],
    correctAnswer: "B"
  },
  {
    id: 263,
    section: "Fire prevention and control",
    text: "What is the purpose of a fire marshal?",
    options: ["To put out all fires", "To coordinate evacuation and assist in fire safety", "To call the fire brigade", "To check fire extinguishers"],
    correctAnswer: "B"
  },
  {
    id: 264,
    section: "Fire prevention and control",
    text: "When should you attempt to fight a fire?",
    options: ["Always", "Only if it is small, you have the right extinguisher, and you are trained and safe", "Never", "If you are bored"],
    correctAnswer: "B"
  },
  // Electrical
  {
    id: 265,
    section: "Electrical safety, tools and equipment",
    text: "What two things should you do to reduce trips and injuries caused by untidy leads and extension cables?",
    options: ["Run cables and leads above head height and over the top of doorways and walkways", "Tie any excess cables and leads up into the smallest coil possible", "Keep trailing cables and leads close to the wall", "Make sure your cables have not been used before", "Only use thinner 230 volt extension cables"],
    correctAnswer: "A and C"
  },
  {
    id: 266,
    section: "Electrical safety, tools and equipment",
    text: "What is the recommended voltage for portable power tools on site?",
    options: ["230 volts", "110 volts", "400 volts", "12 volts"],
    correctAnswer: "B"
  },
  {
    id: 267,
    section: "Electrical safety, tools and equipment",
    text: "What color is a 110 volt plug/socket?",
    options: ["Blue", "Red", "Yellow", "Green"],
    correctAnswer: "C"
  },
  {
    id: 268,
    section: "Electrical safety, tools and equipment",
    text: "What color is a 230 volt plug/socket?",
    options: ["Blue", "Red", "Yellow", "Green"],
    correctAnswer: "A"
  },
  {
    id: 269,
    section: "Electrical safety, tools and equipment",
    text: "What should you check before using a power tool?",
    options: ["It has a valid PAT test label", "The cable is not damaged", "The plug is not cracked", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 270,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if you find a damaged cable on a tool?",
    options: ["Tape it up", "Report it and do not use the tool", "Carry on carefully", "Try to fix it yourself"],
    correctAnswer: "B"
  },
  {
    id: 271,
    section: "Electrical safety, tools and equipment",
    text: "What is a residual current device (RCD)?",
    options: ["A type of drill", "A safety device that cuts off power if there is a fault", "A battery charger", "A light switch"],
    correctAnswer: "B"
  },
  {
    id: 272,
    section: "Electrical safety, tools and equipment",
    text: "Why should you never pull a tool by its cable?",
    options: ["It's lazy", "It can damage the internal connections and cause a shock", "It's too heavy", "It looks bad"],
    correctAnswer: "B"
  },
  {
    id: 273,
    section: "Electrical safety, tools and equipment",
    text: "What should you do before changing a drill bit or blade?",
    options: ["Turn it off", "Disconnect it from the power supply", "Wear gloves", "Ask for permission"],
    correctAnswer: "B"
  },
  {
    id: 274,
    section: "Electrical safety, tools and equipment",
    text: "What is the risk of using a 230 volt tool without an RCD?",
    options: ["It won't work", "Fatal electric shock if a fault occurs", "It will use more power", "It will get too hot"],
    correctAnswer: "B"
  },
  {
    id: 275,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if a tool starts smoking or smelling of burning?",
    options: ["Blow on it", "Switch it off and disconnect it immediately", "Pour water on it", "Keep using it until the job is done"],
    correctAnswer: "B"
  },
  {
    id: 276,
    section: "Electrical safety, tools and equipment",
    text: "Why should you keep cables off the floor?",
    options: ["To keep them clean", "To prevent trips and damage to the cables", "To save space", "To look tidy"],
    correctAnswer: "B"
  },
  {
    id: 277,
    section: "Electrical safety, tools and equipment",
    text: "What is the purpose of a transformer on site?",
    options: ["To make tools more powerful", "To step down voltage from 230V to 110V for safety", "To charge batteries", "To provide light"],
    correctAnswer: "B"
  },
  {
    id: 278,
    section: "Electrical safety, tools and equipment",
    text: "Who is allowed to carry out repairs on electrical equipment?",
    options: ["Anyone", "Only a qualified and competent electrician", "The site manager", "The person who broke it"],
    correctAnswer: "B"
  },
  {
    id: 279,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if you see a 'Danger: High Voltage' sign?",
    options: ["Go closer to see", "Keep away and do not enter the area", "Touch the equipment to see if it's live", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 280,
    section: "Electrical safety, tools and equipment",
    text: "What is the risk of working near overhead power lines?",
    options: ["Getting wet", "Electric shock or arcing even without direct contact", "Noise", "Falling"],
    correctAnswer: "B"
  },
  {
    id: 281,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if you hit an underground cable while digging?",
    options: ["Cover it up", "Stop immediately, clear the area and report it", "Try to fix it", "Keep digging"],
    correctAnswer: "B"
  },
  {
    id: 282,
    section: "Electrical safety, tools and equipment",
    text: "Why should you use cordless tools where possible?",
    options: ["They are cheaper", "They eliminate the risk of tripping over cables and electrical shock from leads", "They are lighter", "They look better"],
    correctAnswer: "B"
  },
  {
    id: 283,
    section: "Electrical safety, tools and equipment",
    text: "What should you check on a battery charger?",
    options: ["It's the right one for the battery", "It's in a well-ventilated area", "The cables are not damaged", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 284,
    section: "Electrical safety, tools and equipment",
    text: "What is the risk of using a tool with a missing guard?",
    options: ["It will be lighter", "Serious injury from moving parts or flying debris", "It will be faster", "No risk"],
    correctAnswer: "B"
  },
  {
    id: 285,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if a tool's guard is stuck?",
    options: ["Force it", "Report it and do not use the tool", "Remove the guard", "Tie it back"],
    correctAnswer: "B"
  },
  {
    id: 286,
    section: "Electrical safety, tools and equipment",
    text: "Why should you use a dust extractor with power tools?",
    options: ["To keep the area clean", "To protect your lungs from harmful dust", "To see the work better", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 287,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if a tool is vibrating excessively?",
    options: ["Hold it tighter", "Stop using it and report it", "Wear thicker gloves", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 288,
    section: "Electrical safety, tools and equipment",
    text: "Why should you never use a tool for a job it wasn't designed for?",
    options: ["It might break", "It could be unsafe and cause an accident", "It's unprofessional", "It will take longer"],
    correctAnswer: "B"
  },
  {
    id: 289,
    section: "Electrical safety, tools and equipment",
    text: "What should you do with tools at the end of the day?",
    options: ["Leave them where they are", "Clean them and store them securely", "Throw them in the skip", "Take them home"],
    correctAnswer: "B"
  },
  {
    id: 290,
    section: "Electrical safety, tools and equipment",
    text: "What is the purpose of a 'dead man's switch' on a tool?",
    options: ["To kill the tool", "To ensure the tool stops if the operator lets go", "To lock the tool on", "To make it easier to use"],
    correctAnswer: "B"
  },
  {
    id: 291,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if you are unsure how to use a new tool?",
    options: ["Guess", "Ask for training and read the manual", "Watch someone else", "Try it out"],
    correctAnswer: "B"
  },
  {
    id: 292,
    section: "Electrical safety, tools and equipment",
    text: "Why is it important to use sharp blades and bits?",
    options: ["To work faster", "They are safer and more efficient", "To look professional", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 293,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if a tool's handle is loose?",
    options: ["Tape it up", "Report it and do not use the tool", "Hold it carefully", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 294,
    section: "Electrical safety, tools and equipment",
    text: "What is the risk of using a tool in wet conditions?",
    options: ["It will get dirty", "Increased risk of electric shock", "It will rust", "No risk"],
    correctAnswer: "B"
  },
  {
    id: 295,
    section: "Electrical safety, tools and equipment",
    text: "Why should you never bypass a safety feature on a tool?",
    options: ["It's against the rules", "It can lead to serious injury or death", "It's lazy", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 296,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if you drop a power tool?",
    options: ["Pick it up and carry on", "Check it for damage before using it again", "Throw it away", "Hide it"],
    correctAnswer: "B"
  },
  {
    id: 297,
    section: "Electrical safety, tools and equipment",
    text: "What is the purpose of a 'lock-off' button on a tool?",
    options: ["To lock the tool on", "To prevent accidental starting", "To make it harder to use", "To save power"],
    correctAnswer: "B"
  },
  {
    id: 298,
    section: "Electrical safety, tools and equipment",
    text: "Why should you wear eye protection when using power tools?",
    options: ["To look cool", "To protect your eyes from flying debris", "To see better", "Because it's site rules"],
    correctAnswer: "B"
  },
  {
    id: 299,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if a tool's cable is too short?",
    options: ["Pull it tight", "Use a suitable extension lead", "Stand closer to the socket", "Don't use the tool"],
    correctAnswer: "B"
  },
  {
    id: 300,
    section: "Electrical safety, tools and equipment",
    text: "Why should you avoid using long extension leads?",
    options: ["They are heavy", "They can cause a voltage drop and overheat", "They are hard to coil", "They look messy"],
    correctAnswer: "B"
  },
  {
    id: 301,
    section: "Electrical safety, tools and equipment",
    text: "What should you do if you see a spark from a tool?",
    options: ["Ignore it", "Stop using it immediately and report it", "Blow on it", "Wait for it to happen again"],
    correctAnswer: "B"
  },
  {
    id: 302,
    section: "Electrical safety, tools and equipment",
    text: "Why is it important to keep tools clean?",
    options: ["To make them last longer", "To ensure they work safely and efficiently", "To look professional", "All of these"],
    correctAnswer: "D"
  },
  // Site transport
  {
    id: 303,
    section: "Site transport safety and lifting operations",
    text: "What are the two conditions for being able to operate plant on site?",
    options: ["You must be trained and competent", "You must be authorised", "You must be over 21 years old", "You must hold a full driving licence", "You must hold a British passport"],
    correctAnswer: "A and B"
  },
  {
    id: 304,
    section: "Site transport safety and lifting operations",
    text: "What is the main risk to pedestrians from site vehicles?",
    options: ["Noise", "Being struck or crushed", "Dust", "Fumes"],
    correctAnswer: "B"
  },
  {
    id: 305,
    section: "Site transport safety and lifting operations",
    text: "What is a 'segregation' system on site?",
    options: ["Separating waste", "Separating pedestrians from vehicles", "Separating different trades", "Separating tools"],
    correctAnswer: "B"
  },
  {
    id: 306,
    section: "Site transport safety and lifting operations",
    text: "What should you do if you need to cross a vehicle route?",
    options: ["Run across", "Use designated crossing points", "Wait for a vehicle to stop", "Close your eyes"],
    correctAnswer: "B"
  },
  {
    id: 307,
    section: "Site transport safety and lifting operations",
    text: "Why should you wear high-visibility clothing near vehicles?",
    options: ["To look professional", "To ensure drivers can see you", "To stay warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 308,
    section: "Site transport safety and lifting operations",
    text: "What should you do if a vehicle is reversing near you?",
    options: ["Help the driver", "Keep well clear and stay in the driver's line of sight if possible", "Run behind it", "Shout at the driver"],
    correctAnswer: "B"
  },
  {
    id: 309,
    section: "Site transport safety and lifting operations",
    text: "What is the purpose of a signaller (banksman)?",
    options: ["To drive the vehicle", "To guide the driver and ensure the area is clear", "To open gates", "To check fuel"],
    correctAnswer: "B"
  },
  {
    id: 310,
    section: "Site transport safety and lifting operations",
    text: "Why should you never hitch a ride on a vehicle not designed for passengers?",
    options: ["It's uncomfortable", "Risk of falling off and being crushed", "It's slow", "No seatbelts"],
    correctAnswer: "B"
  },
  {
    id: 311,
    section: "Site transport safety and lifting operations",
    text: "What should a driver do before leaving a vehicle unattended?",
    options: ["Leave the engine running", "Turn off the engine, apply the brake and remove the key", "Leave the door open", "Leave the lights on"],
    correctAnswer: "B"
  },
  {
    id: 312,
    section: "Site transport safety and lifting operations",
    text: "What is the risk of 'blind spots' on large vehicles?",
    options: ["The driver can't see everything around the vehicle", "The driver is tired", "The vehicle is too wide", "The mirrors are dirty"],
    correctAnswer: "A"
  },
  {
    id: 313,
    section: "Site transport safety and lifting operations",
    text: "What should you do if you see a vehicle being driven unsafely?",
    options: ["Ignore it", "Report it to your supervisor immediately", "Try to stop the vehicle", "Laugh"],
    correctAnswer: "B"
  },
  {
    id: 314,
    section: "Site transport safety and lifting operations",
    text: "What is the purpose of a 'lifting plan'?",
    options: ["To list all tools", "To ensure a lifting operation is carried out safely", "To buy a crane", "To hire a driver"],
    correctAnswer: "B"
  },
  {
    id: 315,
    section: "Site transport safety and lifting operations",
    text: "Who is responsible for planning a lifting operation?",
    options: ["The driver", "A competent person (Appointed Person)", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 316,
    section: "Site transport safety and lifting operations",
    text: "What should you check on lifting equipment before use?",
    options: ["It has a valid thorough examination certificate (LOLER)", "It is in good condition", "It is suitable for the load", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 317,
    section: "Site transport safety and lifting operations",
    text: "What is the 'safe working load' (SWL)?",
    options: ["The weight of the crane", "The maximum weight the equipment can safely lift", "The weight of the driver", "The speed of the lift"],
    correctAnswer: "B"
  },
  {
    id: 318,
    section: "Site transport safety and lifting operations",
    text: "What should you do if a load is not balanced?",
    options: ["Lift it anyway", "Stop the lift, lower the load and adjust the slings", "Hold it steady", "Push it"],
    correctAnswer: "B"
  },
  {
    id: 319,
    section: "Site transport safety and lifting operations",
    text: "Why should you never stand under a suspended load?",
    options: ["It's unlucky", "Risk of the load falling and crushing you", "It's noisy", "To see better"],
    correctAnswer: "B"
  },
  {
    id: 320,
    section: "Site transport safety and lifting operations",
    text: "What is the purpose of a 'tag line'?",
    options: ["To label the load", "To control the movement of a suspended load from a distance", "To tie the load down", "To measure the height"],
    correctAnswer: "B"
  },
  {
    id: 321,
    section: "Site transport safety and lifting operations",
    text: "Who can signal a crane driver?",
    options: ["Anyone", "Only a trained and competent signaller (Slinger/Signaller)", "The site manager", "The person who owns the load"],
    correctAnswer: "B"
  },
  {
    id: 322,
    section: "Site transport safety and lifting operations",
    text: "What should you do if you see a lifting operation being carried out unsafely?",
    options: ["Watch from a distance", "Report it immediately and stay clear", "Try to help", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 323,
    section: "Site transport safety and lifting operations",
    text: "Why is it important to check the ground conditions before setting up a crane?",
    options: ["To keep it clean", "To ensure the ground can support the weight and prevent overturning", "To see the view", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 324,
    section: "Site transport safety and lifting operations",
    text: "What are 'outriggers' used for?",
    options: ["To make the crane look bigger", "To provide stability and prevent the crane from tipping", "To lift heavier loads", "To move the crane"],
    correctAnswer: "B"
  },
  {
    id: 325,
    section: "Site transport safety and lifting operations",
    text: "What should you do if the wind speed is too high for a lift?",
    options: ["Work faster", "Stop the lifting operation", "Use more slings", "Ignore the wind"],
    correctAnswer: "B"
  },
  {
    id: 326,
    section: "Site transport safety and lifting operations",
    text: "Why should you never use damaged slings?",
    options: ["They are ugly", "They could snap and cause the load to fall", "They are hard to clean", "They are cheap"],
    correctAnswer: "B"
  },
  {
    id: 327,
    section: "Site transport safety and lifting operations",
    text: "What is the purpose of a 'shackle'?",
    options: ["To lock a door", "To connect lifting equipment and loads securely", "To weigh the load", "To measure the height"],
    correctAnswer: "B"
  },
  {
    id: 328,
    section: "Site transport safety and lifting operations",
    text: "What should you do with lifting equipment at the end of the day?",
    options: ["Leave it on the crane", "Store it correctly in a secure, dry place", "Throw it in the skip", "Take it home"],
    correctAnswer: "B"
  },
  {
    id: 329,
    section: "Site transport safety and lifting operations",
    text: "Why is it important to have a clear exclusion zone around a lift?",
    options: ["To keep people away from the danger area", "To save space", "To look professional", "To keep the area tidy"],
    correctAnswer: "A"
  },
  // Working at height
  {
    id: 330,
    section: "Working at height",
    text: "Which type of accident kills the most construction workers?",
    options: ["Falling from height", "Contact with electricity", "Being run over by site transport", "Being hit by a falling object"],
    correctAnswer: "A"
  },
  {
    id: 331,
    section: "Working at height",
    text: "What is the first thing you should do if you have to work at height?",
    options: ["Get a ladder", "See if the work can be done from the ground", "Put on a harness", "Ask for a lift"],
    correctAnswer: "B"
  },
  {
    id: 332,
    section: "Working at height",
    text: "If you must work at height, what should be used to prevent falls?",
    options: ["A harness", "Collective protection like guard rails and toe boards", "A safety net", "A ladder"],
    correctAnswer: "B"
  },
  {
    id: 333,
    section: "Working at height",
    text: "When is a ladder acceptable for work at height?",
    options: ["Any time", "Only for short duration, low risk work", "If you are in a hurry", "If you are experienced"],
    correctAnswer: "B"
  },
  {
    id: 334,
    section: "Working at height",
    text: "What should you check on a ladder before using it?",
    options: ["It's the right color", "It's in good condition and has been inspected", "It's made of wood", "It's new"],
    correctAnswer: "B"
  },
  {
    id: 335,
    section: "Working at height",
    text: "What is the correct way to secure a ladder?",
    options: ["Tie it at the top", "Have someone foot it", "Use a ladder stability device", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 336,
    section: "Working at height",
    text: "How far should a ladder extend above a landing platform?",
    options: ["1 m (at least 3 rungs)", "0.5 m", "2 m", "It doesn't need to extend"],
    correctAnswer: "A"
  },
  {
    id: 337,
    section: "Working at height",
    text: "Why should you never stand on the top three rungs of a ladder?",
    options: ["They are weak", "To maintain a handhold and balance", "They are dirty", "It's bad luck"],
    correctAnswer: "B"
  },
  {
    id: 338,
    section: "Working at height",
    text: "What is the risk of using a ladder on uneven ground?",
    options: ["It will get dirty", "It could slip or tip over", "It will be harder to climb", "No risk"],
    correctAnswer: "B"
  },
  {
    id: 339,
    section: "Working at height",
    text: "What should you do if you find a fault with a ladder?",
    options: ["Try to fix it", "Report it and do not use it", "Use it carefully", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 340,
    section: "Working at height",
    text: "What is the purpose of a 'stepladder'?",
    options: ["For heavy work", "For short duration, light work", "For reaching high roofs", "For outdoor use only"],
    correctAnswer: "B"
  },
  {
    id: 341,
    section: "Working at height",
    text: "What should you check on a stepladder?",
    options: ["The legs are fully open", "The locking devices are engaged", "It's on level ground", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 342,
    section: "Working at height",
    text: "Why should you never work from the top platform of a stepladder unless it has a handrail?",
    options: ["It's too small", "Risk of losing balance and falling", "It's weak", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 343,
    section: "Working at height",
    text: "What is a 'podium' or 'low-level' work platform?",
    options: ["A type of ladder", "A safer alternative to a stepladder with guard rails", "A stage for a speaker", "A heavy scaffold"],
    correctAnswer: "B"
  },
  {
    id: 344,
    section: "Working at height",
    text: "What should you check on a mobile tower scaffold?",
    options: ["The wheels are locked", "The outriggers are deployed", "The internal ladder is used", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 345,
    section: "Working at height",
    text: "Why should you never move a tower scaffold with someone on it?",
    options: ["It's too heavy", "Risk of the tower overturning and the person falling", "It's slow", "It's unprofessional"],
    correctAnswer: "B"
  },
  {
    id: 346,
    section: "Working at height",
    text: "What is the purpose of 'outriggers' on a tower scaffold?",
    options: ["To make it taller", "To increase stability and prevent tipping", "To hold tools", "To look better"],
    correctAnswer: "B"
  },
  {
    id: 347,
    section: "Working at height",
    text: "What should you do if you need to work on a fragile roof?",
    options: ["Walk on the rafters", "Use crawling boards and ensure fall protection is in place", "Run across", "Avoid it"],
    correctAnswer: "B"
  },
  {
    id: 348,
    section: "Working at height",
    text: "What is a 'fragile' surface?",
    options: ["Glass", "Old roof sheets", "Roof lights", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 349,
    section: "Working at height",
    text: "What should you do if you see a 'Danger: Fragile Roof' sign?",
    options: ["Go closer to see", "Stay clear and only enter if authorized and using safe systems", "Walk carefully", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 350,
    section: "Working at height",
    text: "What is the purpose of a safety harness?",
    options: ["To stop you from falling", "To catch you if you fall and reduce the risk of injury", "To make you look professional", "To keep you warm"],
    correctAnswer: "B"
  },
  {
    id: 351,
    section: "Working at height",
    text: "When should you wear a safety harness?",
    options: ["Any time you work at height", "When collective protection is not possible and there is a risk of a fall", "Only if you are scared of heights", "If your supervisor tells you"],
    correctAnswer: "B"
  },
  {
    id: 352,
    section: "Working at height",
    text: "What should you check on a harness before use?",
    options: ["The straps are not frayed", "The buckles work correctly", "It's the right size", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 353,
    section: "Working at height",
    text: "What is a 'lanyard'?",
    options: ["A type of rope", "A strap that connects your harness to an anchor point", "A tool bag", "A belt"],
    correctAnswer: "B"
  },
  {
    id: 354,
    section: "Working at height",
    text: "Why is 'fall clearance' important when using a harness?",
    options: ["To have enough space to work", "To ensure you don't hit the ground or an object before the harness catches you", "To keep the area clear", "To see better"],
    correctAnswer: "B"
  },
  {
    id: 355,
    section: "Working at height",
    text: "What should you do if you fall while wearing a harness?",
    options: ["Try to climb back up", "Wait for rescue and try to move your legs to prevent suspension trauma", "Panic", "Take the harness off"],
    correctAnswer: "B"
  },
  {
    id: 356,
    section: "Working at height",
    text: "What is a 'rescue plan' for work at height?",
    options: ["A plan to call 999", "A procedure to safely rescue someone who has fallen and is suspended", "A plan to finish work", "A map of the site"],
    correctAnswer: "B"
  },
  {
    id: 357,
    section: "Working at height",
    text: "Why should you never use a harness without training?",
    options: ["It's hard to put on", "You might use it incorrectly and it won't protect you", "It's expensive", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 358,
    section: "Working at height",
    text: "What should you do if you see someone working at height without protection?",
    options: ["Watch them", "Report it immediately to your supervisor", "Try to help them", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 359,
    section: "Working at height",
    text: "What is the purpose of a 'safety net'?",
    options: ["To catch falling tools", "To catch a person who falls and prevent them from hitting the ground", "To keep birds away", "To shade the work area"],
    correctAnswer: "B"
  },
  {
    id: 360,
    section: "Working at height",
    text: "What should you do if you drop a tool from height?",
    options: ["Run down and get it", "Warn people below and report it", "Hide", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 361,
    section: "Working at height",
    text: "Why should you use a tool lanyard when working at height?",
    options: ["To keep your tools clean", "To prevent tools from falling and injuring people below", "To carry more tools", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 362,
    section: "Working at height",
    text: "What is the risk of working near an unprotected edge?",
    options: ["Getting a tan", "Falling and suffering serious injury or death", "Noise", "Dust"],
    correctAnswer: "B"
  },
  // Excavations
  {
    id: 363,
    section: "Excavations and confined spaces",
    text: "What must happen each time a shift starts work in an excavation?",
    options: ["Someone must go in and sniff the air to see if it is safe", "A competent person must inspect the excavation", "A supervisor should stay in the excavation for the first hour", "A supervisor should watch from the top for the first hour"],
    correctAnswer: "B"
  },
  {
    id: 364,
    section: "Excavations and confined spaces",
    text: "What are the two main risks of working in an excavation?",
    options: ["The sides collapsing", "People or vehicles falling in", "Noise", "Dust", "Sunburn"],
    correctAnswer: "A and B"
  },
  {
    id: 365,
    section: "Excavations and confined spaces",
    text: "What should be used to prevent the sides of an excavation from collapsing?",
    options: ["Tape", "Shoring or battering the sides back", "A ladder", "A fence"],
    correctAnswer: "B"
  },
  {
    id: 366,
    section: "Excavations and confined spaces",
    text: "What should you check before entering an excavation?",
    options: ["It has been inspected by a competent person", "The shoring is in place and secure", "There is a safe way in and out", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 367,
    section: "Excavations and confined spaces",
    text: "Why should you keep materials and vehicles away from the edge of an excavation?",
    options: ["To keep them clean", "To prevent them from falling in and to reduce the risk of the sides collapsing", "To save space", "To look tidy"],
    correctAnswer: "B"
  },
  {
    id: 368,
    section: "Excavations and confined spaces",
    text: "What is the purpose of a 'permit to dig'?",
    options: ["To allow you to dig anywhere", "To ensure all underground services have been identified and safe systems of work are in place", "To buy a shovel", "To hire a digger"],
    correctAnswer: "B"
  },
  {
    id: 369,
    section: "Excavations and confined spaces",
    text: "What should you do if you find an underground service that was not on the plan?",
    options: ["Cut it", "Stop immediately and report it", "Cover it up", "Keep digging"],
    correctAnswer: "B"
  },
  {
    id: 370,
    section: "Excavations and confined spaces",
    text: "What is a 'confined space'?",
    options: ["A small room", "An area with limited entry/exit and potential for hazardous atmosphere or other risks", "A cupboard", "A lift"],
    correctAnswer: "B"
  },
  {
    id: 371,
    section: "Excavations and confined spaces",
    text: "What are the risks of working in a confined space?",
    options: ["Lack of oxygen", "Poisonous gases", "Fire or explosion", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 372,
    section: "Excavations and confined spaces",
    text: "What should you do before entering a confined space?",
    options: ["Just go in", "Ensure a risk assessment has been done and a permit to work is in place", "Hold your breath", "Ask a friend"],
    correctAnswer: "B"
  },
  {
    id: 373,
    section: "Excavations and confined spaces",
    text: "What is the purpose of a 'top man' when working in a confined space?",
    options: ["To do the work", "To stay outside, monitor the workers and raise the alarm in an emergency", "To drive the van", "To get lunch"],
    correctAnswer: "B"
  },
  {
    id: 374,
    section: "Excavations and confined spaces",
    text: "Why is gas monitoring important in a confined space?",
    options: ["To check the temperature", "To detect dangerous gases or lack of oxygen", "To see if it's humid", "To check for smells"],
    correctAnswer: "B"
  },
  {
    id: 375,
    section: "Excavations and confined spaces",
    text: "What should you do if a gas alarm sounds while you are in a confined space?",
    options: ["Ignore it", "Exit the space immediately", "Try to find the source", "Wait for instructions"],
    correctAnswer: "B"
  },
  {
    id: 376,
    section: "Excavations and confined spaces",
    text: "Why should you never enter a confined space to rescue someone without the right equipment and training?",
    options: ["You might get in the way", "You could become a victim yourself", "It's against the rules", "It's too hard"],
    correctAnswer: "B"
  },
  {
    id: 377,
    section: "Excavations and confined spaces",
    text: "What is a 'rescue plan' for confined spaces?",
    options: ["A plan to call 999", "A procedure to safely rescue someone using specialized equipment like a tripod and winch", "A plan to finish work", "A map of the site"],
    correctAnswer: "B"
  },
  {
    id: 378,
    section: "Excavations and confined spaces",
    text: "What should you check on your breathing apparatus before use?",
    options: ["It's the right color", "It's in good condition and you have been trained to use it", "It's new", "It's light"],
    correctAnswer: "B"
  },
  {
    id: 379,
    section: "Excavations and confined spaces",
    text: "Why is ventilation important in a confined space?",
    options: ["To keep it cool", "To provide fresh air and remove hazardous gases", "To stop draughts", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 380,
    section: "Excavations and confined spaces",
    text: "What should you do if you feel dizzy or unwell in an excavation or confined space?",
    options: ["Sit down", "Exit immediately and report it", "Keep working", "Drink water"],
    correctAnswer: "B"
  },
  {
    id: 381,
    section: "Excavations and confined spaces",
    text: "What is the risk of using a petrol engine in a confined space?",
    options: ["Noise", "Build up of deadly carbon monoxide gas", "Vibration", "Heat"],
    correctAnswer: "B"
  },
  {
    id: 382,
    section: "Excavations and confined spaces",
    text: "Why should you use a ladder to get in and out of an excavation?",
    options: ["To stay clean", "To provide a safe and stable means of access and egress", "To look professional", "Because it's site rules"],
    correctAnswer: "B"
  },
  // Environmental
  {
    id: 383,
    section: "Environmental awareness and waste control",
    text: "Under environmental law, which statement is true?",
    options: ["Only directors can be prosecuted if they do not follow the law", "Only companies can be prosecuted if they do not follow the law", "Only employees can be prosecuted if they do not follow the law", "Companies and employees can be prosecuted if they do not follow the law"],
    correctAnswer: "D"
  },
  {
    id: 384,
    section: "Environmental awareness and waste control",
    text: "What is the main purpose of environmental protection on site?",
    options: ["To save money", "To prevent harm to the environment and follow the law", "To look good", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 385,
    section: "Environmental awareness and waste control",
    text: "What should you do with waste materials on site?",
    options: ["Throw them in a pile", "Segregate them into the correct skips for recycling or disposal", "Take them home", "Burn them"],
    correctAnswer: "B"
  },
  {
    id: 386,
    section: "Environmental awareness and waste control",
    text: "Why is it important to segregate waste?",
    options: ["To save space", "To increase recycling and reduce the amount of waste sent to landfill", "To look professional", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 387,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see a spill of oil or chemicals?",
    options: ["Ignore it", "Report it immediately and use a spill kit if trained and safe", "Wash it away with water", "Cover it with soil"],
    correctAnswer: "B"
  },
  {
    id: 388,
    section: "Environmental awareness and waste control",
    text: "What is a 'spill kit'?",
    options: ["A set of tools", "Materials like absorbent pads and socks used to contain and clean up spills", "A first aid kit", "A cleaning kit"],
    correctAnswer: "B"
  },
  {
    id: 389,
    section: "Environmental awareness and waste control",
    text: "Why should you never pour chemicals or oil down a drain?",
    options: ["It's messy", "It can pollute watercourses and harm wildlife", "It's expensive", "It's against the rules"],
    correctAnswer: "B"
  },
  {
    id: 390,
    section: "Environmental awareness and waste control",
    text: "What is the risk of excessive noise to the local community?",
    options: ["None", "Nuisance and potential health issues for neighbors", "It's annoying", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 391,
    section: "Environmental awareness and waste control",
    text: "How can you reduce dust on site?",
    options: ["Work faster", "Use water suppression or dust extraction", "Ignore it", "Wear a mask"],
    correctAnswer: "B"
  },
  {
    id: 392,
    section: "Environmental awareness and waste control",
    text: "What should you do if you find an animal or bird's nest in your work area?",
    options: ["Move it", "Stop work and report it to your supervisor", "Destroy it", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 393,
    section: "Environmental awareness and waste control",
    text: "Why is it important to save energy on site?",
    options: ["To save money", "To reduce the site's carbon footprint and protect the environment", "To look good", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 394,
    section: "Environmental awareness and waste control",
    text: "How can you save water on site?",
    options: ["Don't use it", "Turn off taps when not in use and report leaks", "Use less", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 395,
    section: "Environmental awareness and waste control",
    text: "What is 'hazardous waste'?",
    options: ["Normal waste", "Waste that is harmful to health or the environment (e.g., asbestos, chemicals, batteries)", "Heavy waste", "Large waste"],
    correctAnswer: "B"
  },
  {
    id: 396,
    section: "Environmental awareness and waste control",
    text: "What should you do with hazardous waste?",
    options: ["Put it in the normal skip", "Store it separately in a secure, labeled container and dispose of it correctly", "Take it home", "Burn it"],
    correctAnswer: "B"
  },
  {
    id: 397,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of a 'Site Waste Management Plan' (SWMP)?",
    options: ["To list all tools", "To plan how waste will be reduced, reused and recycled on site", "To buy skips", "To hire a driver"],
    correctAnswer: "B"
  },
  {
    id: 398,
    section: "Environmental awareness and waste control",
    text: "Why should you switch off engines when not in use?",
    options: ["To save fuel", "To reduce noise and air pollution", "To make the engine last longer", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 399,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see someone fly-tipping near the site?",
    options: ["Join them", "Report it to your supervisor or the local authority", "Ignore it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 400,
    section: "Environmental awareness and waste control",
    text: "What is the risk of light pollution from a site?",
    options: ["None", "Disturbance to neighbors and wildlife", "It's annoying", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 401,
    section: "Environmental awareness and waste control",
    text: "Why is it important to keep the site perimeter tidy?",
    options: ["To look professional", "To prevent litter from blowing away and to maintain good relations with the community", "To save space", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 402,
    section: "Environmental awareness and waste control",
    text: "What should you do if you are unsure how to dispose of a material?",
    options: ["Guess", "Ask your supervisor or check the site waste plan", "Throw it in the skip", "Take it home"],
    correctAnswer: "B"
  }
];
