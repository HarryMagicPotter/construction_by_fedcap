import { CSCSBookQuestion } from "./cscsBookData";

export const cscsBook2Sections = [
  { title: "General responsibilities", startPage: 1 },
  { title: "Accident reporting and recording", startPage: 28 },
  { title: "Emergency procedures and first aid", startPage: 55 },
  { title: "Health and welfare", startPage: 78 },
  { title: "Respiratory risks", startPage: 98 },
  { title: "Noise and vibration", startPage: 119 },
  { title: "Hazardous substances", startPage: 141 },
  { title: "Personal protective equipment", startPage: 166 },
  { title: "Electrical safety and hand held tools and equipment", startPage: 188 },
  { title: "Safety signs and signals", startPage: 221 },
  { title: "Site transport safety", startPage: 245 },
  { title: "Fire prevention and control", startPage: 269 },
  { title: "Manual handling", startPage: 290 },
  { title: "Working at height", startPage: 310 },
  { title: "Excavations and confined spaces", startPage: 336 },
  { title: "Environmental awareness and waste control", startPage: 361 },
  { title: "Occupational health", startPage: 411 },
  { title: "First aid and emergency procedures", startPage: 466 },
  { title: "Legal and management", startPage: 546 }
];

export const cscsBook2Questions: CSCSBookQuestion[] = [
  {
    id: 1,
    section: "General responsibilities",
    text: "Who is responsible for reporting any unsafe conditions on site?",
    options: ["Only the site manager", "Only the health and safety inspector", "Everyone on site", "Only the client"],
    correctAnswer: "C"
  },
  {
    id: 2,
    section: "General responsibilities",
    text: "What should you do if you see something on site that you think is unsafe?",
    options: ["Ignore it and carry on with your work", "Tell your supervisor or the site manager", "Wait for someone else to report it", "Wait until the end of the shift to say something"],
    correctAnswer: "B"
  },
  {
    id: 3,
    section: "General responsibilities",
    text: "Whose health and safety are you responsible for on site?",
    options: ["Only your own", "Your own and others who may be affected by your actions", "Only your workmates", "Only the public"],
    correctAnswer: "B"
  },
  {
    id: 4,
    section: "General responsibilities",
    text: "What is the main reason for having a health and safety policy on site?",
    options: ["To follow the law", "To reduce the number of accidents and ill health", "To save money", "To make the site look professional"],
    correctAnswer: "B"
  },
  {
    id: 5,
    section: "General responsibilities",
    text: "What should you do if you are asked to do work that you are not trained for?",
    options: ["Have a go and do your best", "Ask a workmate to show you how to do it", "Tell your supervisor that you are not trained and ask for training", "Wait until someone else does it"],
    correctAnswer: "C"
  },
  {
    id: 6,
    section: "General responsibilities",
    text: "What does a risk assessment tell you?",
    options: ["How long the job will take", "How many people are needed for the job", "The hazards and the measures needed to work safely", "The cost of the materials"],
    correctAnswer: "C"
  },
  {
    id: 7,
    section: "General responsibilities",
    text: "What is a method statement?",
    options: ["A list of tools needed", "A step-by-step guide on how to do a job safely", "A record of hours worked", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 8,
    section: "General responsibilities",
    text: "Why should you attend a site induction?",
    options: ["To meet your workmates", "To learn about the site rules and specific hazards", "To get your site pass", "To find out where the canteen is"],
    correctAnswer: "B"
  },
  {
    id: 9,
    section: "General responsibilities",
    text: "What should you do if you find that the site rules are not being followed?",
    options: ["Ignore it", "Follow the rules yourself and report the issue to your supervisor", "Do the same as everyone else", "Tell the health and safety inspector"],
    correctAnswer: "B"
  },
  {
    id: 10,
    section: "General responsibilities",
    text: "What is the purpose of a toolbox talk?",
    options: ["To have a break", "To discuss specific health and safety issues related to the work being done", "To hand out tools", "To check everyone's attendance"],
    correctAnswer: "B"
  },
  {
    id: 11,
    section: "General responsibilities",
    text: "Who has the power to stop work on site if it is unsafe?",
    options: ["Only the site manager", "Only the health and safety inspector", "Anyone who sees an immediate danger", "Only the client"],
    correctAnswer: "C"
  },
  {
    id: 12,
    section: "General responsibilities",
    text: "What should you do if you are unsure about a safety sign?",
    options: ["Guess what it means", "Ignore it", "Ask your supervisor or the site manager", "Wait for someone else to explain it"],
    correctAnswer: "C"
  },
  {
    id: 13,
    section: "General responsibilities",
    text: "Why is it important to keep your work area tidy?",
    options: ["To look professional", "To reduce the risk of slips, trips and falls", "To save space", "To keep the site manager happy"],
    correctAnswer: "B"
  },
  {
    id: 14,
    section: "General responsibilities",
    text: "What should you do if you see someone working unsafely?",
    options: ["Ignore them", "Tell them they are working unsafely and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 15,
    section: "General responsibilities",
    text: "What is the main role of the Health and Safety Executive (HSE)?",
    options: ["To provide tools", "To enforce health and safety law and provide guidance", "To hire workers", "To manage construction sites"],
    correctAnswer: "B"
  },
  {
    id: 16,
    section: "General responsibilities",
    text: "What can happen if you do not follow health and safety rules on site?",
    options: ["Nothing", "You could be injured or cause injury to others", "You could be dismissed from the site", "Both B and C"],
    correctAnswer: "D"
  },
  {
    id: 17,
    section: "General responsibilities",
    text: "What should you do if you are involved in a near miss?",
    options: ["Forget about it as no one was hurt", "Report it to your supervisor so that lessons can be learned", "Wait until it happens again", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 18,
    section: "General responsibilities",
    text: "Why is it important to follow the site's traffic management plan?",
    options: ["To save time", "To keep pedestrians and vehicles separate and safe", "To park your car easily", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 19,
    section: "General responsibilities",
    text: "What should you do if you find a hazard that is not covered by the risk assessment?",
    options: ["Carry on and be careful", "Stop work and tell your supervisor so the risk assessment can be updated", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 20,
    section: "General responsibilities",
    text: "What is the purpose of 'Permit to Work' systems?",
    options: ["To allow anyone to do the job", "To control high-risk activities and ensure they are done safely", "To record hours worked", "To order materials"],
    correctAnswer: "B"
  },
  {
    id: 21,
    section: "General responsibilities",
    text: "What should you do if you see a safety sign that you don't understand?",
    options: ["Ignore it", "Ask your supervisor or the site manager", "Guess what it means", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 22,
    section: "General responsibilities",
    text: "Why is it important to report all accidents, even minor ones?",
    options: ["To get time off work", "To ensure the site manager knows what happened and to prevent it from happening again", "To blame someone", "To get a payout"],
    correctAnswer: "B"
  },
  {
    id: 23,
    section: "General responsibilities",
    text: "What is the main reason for having a site induction?",
    options: ["To meet the team", "To inform workers about the site rules and specific hazards", "To get a site pass", "To find out where the canteen is"],
    correctAnswer: "B"
  },
  {
    id: 24,
    section: "General responsibilities",
    text: "Who is responsible for providing you with the correct PPE?",
    options: ["You are", "Your employer", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 25,
    section: "General responsibilities",
    text: "What should you do if your PPE is damaged or lost?",
    options: ["Carry on without it", "Tell your supervisor and get a replacement", "Borrow someone else's", "Buy your own"],
    correctAnswer: "B"
  },
  {
    id: 26,
    section: "General responsibilities",
    text: "Why should you never use a tool that you are not trained to use?",
    options: ["It's against the rules", "You could injure yourself or others", "You might break the tool", "Both B and C"],
    correctAnswer: "D"
  },
  {
    id: 27,
    section: "General responsibilities",
    text: "What is the purpose of a risk assessment?",
    options: ["To identify hazards and put measures in place to work safely", "To decide how many people are needed", "To set a deadline", "To buy materials"],
    correctAnswer: "A"
  },
  {
    id: 28,
    section: "Accident reporting and recording",
    text: "What should you do if you have an accident on site?",
    options: ["Ignore it and carry on", "Report it to your supervisor and ensure it is recorded in the accident book", "Tell your workmates only", "Wait until the end of the week"],
    correctAnswer: "B"
  },
  {
    id: 29,
    section: "Accident reporting and recording",
    text: "Why is it important to record all accidents in the accident book?",
    options: ["To blame someone", "To help prevent similar accidents from happening again and to provide a record for legal reasons", "To get a payout", "To show the site manager"],
    correctAnswer: "B"
  },
  {
    id: 30,
    section: "Accident reporting and recording",
    text: "What is a 'near miss'?",
    options: ["An accident where someone was hurt", "An incident that could have resulted in an injury or damage but didn't", "A minor injury", "A mistake"],
    correctAnswer: "B"
  },
  {
    id: 31,
    section: "Accident reporting and recording",
    text: "Why should you report near misses?",
    options: ["To get someone in trouble", "To identify hazards and prevent a more serious accident from happening", "To waste time", "To look busy"],
    correctAnswer: "B"
  },
  {
    id: 32,
    section: "Accident reporting and recording",
    text: "What does RIDDOR stand for?",
    options: ["Reporting of Injuries, Diseases and Dangerous Occurrences Regulations", "Reporting of Incidents, Deaths and Dangerous Occurrences Regulations", "Reporting of Injuries, Deaths and Dangerous Occurrences Rules", "Reporting of Incidents, Diseases and Dangerous Occurrences Rules"],
    correctAnswer: "A"
  },
  {
    id: 33,
    section: "Accident reporting and recording",
    text: "Who is responsible for reporting a RIDDOR incident?",
    options: ["The injured person", "The employer or the person in control of the premises", "The health and safety inspector", "The client"],
    correctAnswer: "B"
  },
  {
    id: 34,
    section: "Accident reporting and recording",
    text: "Which of the following must be reported under RIDDOR?",
    options: ["A minor cut", "A broken leg", "A near miss", "A headache"],
    correctAnswer: "B"
  },
  {
    id: 35,
    section: "Accident reporting and recording",
    text: "What should you do if you see someone else have an accident?",
    options: ["Ignore them", "Report it to your supervisor and provide assistance if safe and trained", "Wait for someone else to help", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 36,
    section: "Accident reporting and recording",
    text: "Why is it important to keep the accident book up to date?",
    options: ["To follow the law", "To help identify trends and improve site safety", "To show the client", "Both A and B"],
    correctAnswer: "D"
  },
  {
    id: 37,
    section: "Accident reporting and recording",
    text: "What should you do if you are unsure how to report an accident?",
    options: ["Don't report it", "Ask your supervisor or the site manager", "Guess", "Wait until someone tells you"],
    correctAnswer: "B"
  },
  {
    id: 38,
    section: "Accident reporting and recording",
    text: "What is the purpose of an accident investigation?",
    options: ["To find someone to blame", "To identify the root cause and prevent it from happening again", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 39,
    section: "Accident reporting and recording",
    text: "What should you do if you find that an accident has not been recorded?",
    options: ["Ignore it", "Tell your supervisor or the site manager", "Record it yourself", "Tell the health and safety inspector"],
    correctAnswer: "B"
  },
  {
    id: 40,
    section: "Accident reporting and recording",
    text: "Who can look at the accident book?",
    options: ["Anyone on site", "Authorized personnel and the person involved in the accident", "Only the site manager", "Only the client"],
    correctAnswer: "B"
  },
  {
    id: 41,
    section: "Accident reporting and recording",
    text: "What should you do if you are injured and cannot return to work?",
    options: ["Nothing", "Inform your employer as soon as possible", "Wait for them to call you", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 42,
    section: "Accident reporting and recording",
    text: "Why is it important to follow the site's emergency procedures?",
    options: ["To save time", "To ensure everyone's safety in the event of an emergency", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 43,
    section: "Accident reporting and recording",
    text: "What should you do if you see a dangerous occurrence on site?",
    options: ["Ignore it", "Report it to your supervisor immediately", "Wait for it to happen again", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 44,
    section: "Accident reporting and recording",
    text: "What is the main reason for reporting occupational diseases?",
    options: ["To get time off", "To identify hazards and prevent others from becoming ill", "To get a payout", "To show the site manager"],
    correctAnswer: "B"
  },
  {
    id: 45,
    section: "Accident reporting and recording",
    text: "Who should you tell if you have a health condition that could affect your safety on site?",
    options: ["No one", "Your supervisor or the site manager", "Your workmates only", "The client"],
    correctAnswer: "B"
  },
  {
    id: 46,
    section: "Accident reporting and recording",
    text: "What should you do if you are involved in an accident that was not your fault?",
    options: ["Blame someone else", "Report it and ensure it is recorded correctly", "Ignore it", "Wait for someone to apologize"],
    correctAnswer: "B"
  },
  {
    id: 47,
    section: "Accident reporting and recording",
    text: "Why is it important to follow the site's first aid procedures?",
    options: ["To save time", "To ensure that injuries are treated correctly and promptly", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 48,
    section: "Accident reporting and recording",
    text: "What should you do if you find that first aid equipment is missing or damaged?",
    options: ["Ignore it", "Report it to your supervisor or the first aider", "Wait for someone else to find it", "Buy your own"],
    correctAnswer: "B"
  },
  {
    id: 49,
    section: "Accident reporting and recording",
    text: "What is the purpose of a 'dangerous occurrence' report?",
    options: ["To blame someone", "To identify high-risk incidents and prevent them from happening again", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 50,
    section: "Accident reporting and recording",
    text: "What should you do if you are asked to provide a statement after an accident?",
    options: ["Refuse to say anything", "Provide an honest and accurate account of what you saw", "Guess what happened", "Tell them what they want to hear"],
    correctAnswer: "B"
  },
  {
    id: 51,
    section: "Accident reporting and recording",
    text: "Why is it important to learn from accidents and near misses?",
    options: ["To blame someone", "To improve site safety and prevent future incidents", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 52,
    section: "Accident reporting and recording",
    text: "What should you do if you see someone else working unsafely after an accident has happened?",
    options: ["Ignore them", "Tell them they are working unsafely and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 53,
    section: "Accident reporting and recording",
    text: "Who is responsible for ensuring that the accident book is available on site?",
    options: ["The employer or the person in control of the premises", "The health and safety inspector", "The client", "The workers"],
    correctAnswer: "A"
  },
  {
    id: 54,
    section: "Emergency procedures and first aid",
    text: "How can you find out who the first aider is on site?",
    options: ["Ask everyone you see", "Check the site noticeboard or ask your supervisor", "Wait for someone to get hurt", "Look for someone in a green jacket"],
    correctAnswer: "B"
  },
  {
    id: 55,
    section: "Emergency procedures and first aid",
    text: "What should you do first if you find someone has been injured?",
    options: ["Call an ambulance", "Check for any immediate danger to yourself and others", "Start first aid", "Move the person"],
    correctAnswer: "B"
  },
  {
    id: 56,
    section: "Emergency procedures and first aid",
    text: "Why should you never use a lift in the event of a fire?",
    options: ["It's too slow", "You could become trapped if the power fails", "It's against the rules", "Both B and C"],
    correctAnswer: "B"
  },
  {
    id: 57,
    section: "Emergency procedures and first aid",
    text: "What should you do if you hear the fire alarm?",
    options: ["Finish what you are doing", "Leave the building immediately by the nearest safe exit and go to the assembly point", "Wait for someone to tell you what to do", "Call your family"],
    correctAnswer: "B"
  },
  {
    id: 58,
    section: "Emergency procedures and first aid",
    text: "What is the purpose of a fire assembly point?",
    options: ["To have a break", "To ensure everyone is accounted for in the event of an evacuation", "To meet your workmates", "To wait for the fire brigade"],
    correctAnswer: "B"
  },
  {
    id: 59,
    section: "Emergency procedures and first aid",
    text: "What should you do if you discover a fire?",
    options: ["Try to put it out yourself", "Raise the alarm immediately and leave the area", "Wait for someone else to see it", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 60,
    section: "Emergency procedures and first aid",
    text: "Why is it important to keep fire exits clear at all times?",
    options: ["To look professional", "To ensure a safe and quick evacuation in the event of a fire", "To save space", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 61,
    section: "Emergency procedures and first aid",
    text: "What should you do if you are trained in first aid and see someone injured?",
    options: ["Wait for the first aider", "Provide assistance within the scope of your training and call for help", "Move the person immediately", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 62,
    section: "Emergency procedures and first aid",
    text: "What is the purpose of a fire extinguisher?",
    options: ["To put out large fires", "To tackle small fires in their early stages if safe and trained to do so", "To cool down", "To clean the site"],
    correctAnswer: "B"
  },
  {
    id: 63,
    section: "Emergency procedures and first aid",
    text: "What should you do if you see a fire exit that is blocked?",
    options: ["Ignore it", "Clear the blockage or report it to your supervisor immediately", "Wait for someone else to clear it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 64,
    section: "Emergency procedures and first aid",
    text: "Why should you never use the wrong type of fire extinguisher?",
    options: ["It won't work", "It could make the fire worse or put you in danger", "It's against the rules", "Both B and C"],
    correctAnswer: "B"
  },
  {
    id: 65,
    section: "Emergency procedures and first aid",
    text: "What is the main reason for having an emergency plan on site?",
    options: ["To follow the law", "To ensure everyone knows what to do in the event of an emergency", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 66,
    section: "Emergency procedures and first aid",
    text: "What should you do if you are unsure how to use a fire extinguisher?",
    options: ["Have a go", "Leave it and evacuate the area", "Ask someone to show you", "Read the instructions while the fire is burning"],
    correctAnswer: "B"
  },
  {
    id: 67,
    section: "Emergency procedures and first aid",
    text: "Why should you never move someone who has a suspected back or neck injury?",
    options: ["It's too difficult", "You could cause further injury or paralysis", "It's against the rules", "Wait for the first aider"],
    correctAnswer: "B"
  },
  {
    id: 68,
    section: "Emergency procedures and first aid",
    text: "What should you do if you see someone who has been electrocuted?",
    options: ["Touch them immediately to pull them away", "Switch off the power source if safe to do so and call for help", "Wait for someone else to help", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 69,
    section: "Emergency procedures and first aid",
    text: "What is the purpose of a first aid kit?",
    options: ["To treat major injuries", "To provide basic medical supplies for treating minor injuries", "To store tools", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 70,
    section: "Emergency procedures and first aid",
    text: "What should you do if someone is bleeding heavily?",
    options: ["Apply pressure to the wound and call for help", "Wash it with water", "Ignore it", "Wait for the first aider"],
    correctAnswer: "A"
  },
  {
    id: 71,
    section: "Emergency procedures and first aid",
    text: "Why is it important to stay calm in an emergency?",
    options: ["To look professional", "To help you think clearly and take the correct actions", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 72,
    section: "Emergency procedures and first aid",
    text: "What should you do if you see someone who is unconscious but breathing?",
    options: ["Leave them where they are", "Place them in the recovery position and call for help", "Move them immediately", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 73,
    section: "Emergency procedures and first aid",
    text: "What is the main reason for having a first aid room on site?",
    options: ["To have a break", "To provide a clean and private area for treating injuries", "To store tools", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 74,
    section: "Emergency procedures and first aid",
    text: "What should you do if you are asked to help in an emergency but are not trained?",
    options: ["Have a go", "Do only what you are asked to do and stay safe", "Refuse to help", "Wait for someone else to help"],
    correctAnswer: "B"
  },
  {
    id: 75,
    section: "Emergency procedures and first aid",
    text: "Why is it important to report all first aid treatments?",
    options: ["To blame someone", "To help identify hazards and improve site safety", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 76,
    section: "Emergency procedures and first aid",
    text: "What should you do if you see someone who is choking?",
    options: ["Ignore them", "Encourage them to cough and provide assistance if trained", "Wait for someone else to help", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 77,
    section: "Emergency procedures and first aid",
    text: "If someone burns their hand, what is the best thing to do?",
    options: ["Put cream on it", "Put a plaster on it", "Run it under cold water for at least 10 minutes", "Ignore it"],
    correctAnswer: "C"
  },
  {
    id: 78,
    section: "Health and welfare",
    text: "Why is it important to wash your hands before eating?",
    options: ["To stay clean", "To prevent the spread of germs and diseases", "To look professional", "Because it's site rules"],
    correctAnswer: "B"
  },
  {
    id: 79,
    section: "Health and welfare",
    text: "What should your employer provide for you to wash your hands?",
    options: ["A bucket of water", "Hot and cold water, soap and a way to dry your hands", "A bottle of water", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 80,
    section: "Health and welfare",
    text: "What should be provided for you to eat your lunch?",
    options: ["A place to sit with a table and a way to heat food and boil water", "A bench outside", "Nothing", "A voucher for a cafe"],
    correctAnswer: "A"
  },
  {
    id: 81,
    section: "Health and welfare",
    text: "What should your employer provide for you to drink?",
    options: ["Tea and coffee", "Wholesome drinking water", "Fizzy drinks", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 82,
    section: "Health and welfare",
    text: "Why should you never eat or drink in work areas?",
    options: ["It's messy", "To avoid contamination from dust, chemicals or other hazards", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 83,
    section: "Health and welfare",
    text: "Why is it important to have clean toilets on site?",
    options: ["To look professional", "To prevent the spread of disease and maintain good hygiene", "To save money", "To keep the site manager happy"],
    correctAnswer: "B"
  },
  {
    id: 84,
    section: "Health and welfare",
    text: "What should be provided for you to change your clothes?",
    options: ["A private area with lockers or a way to store your clothes safely", "A corner of the site", "Nothing", "A bag"],
    correctAnswer: "A"
  },
  {
    id: 85,
    section: "Health and welfare",
    text: "Why is it important to stay hydrated on site?",
    options: ["To save money", "To maintain your health and concentration, especially in hot weather", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 86,
    section: "Health and welfare",
    text: "What should you do if the welfare facilities are dirty or broken?",
    options: ["Ignore it", "Report it to your supervisor or the site manager", "Clean it yourself", "Wait for someone else to report it"],
    correctAnswer: "B"
  },
  {
    id: 87,
    section: "Health and welfare",
    text: "What should you do to protect yourself from the sun?",
    options: ["Work faster", "Wear a hat, use sunscreen and drink plenty of water", "Ignore it", "Take your shirt off"],
    correctAnswer: "B"
  },
  {
    id: 88,
    section: "Health and welfare",
    text: "What is the risk of working in very hot weather?",
    options: ["None", "Heat exhaustion and heatstroke", "Getting a tan", "It's annoying"],
    correctAnswer: "B"
  },
  {
    id: 89,
    section: "Health and welfare",
    text: "What should you do to protect yourself from the cold?",
    options: ["Work faster", "Wear warm, layered clothing and take regular breaks in a warm area", "Ignore it", "Drink hot coffee only"],
    correctAnswer: "B"
  },
  {
    id: 90,
    section: "Health and welfare",
    text: "What is the risk of working in very cold weather?",
    options: ["None", "Hypothermia and frostbite", "Getting a cold", "It's annoying"],
    correctAnswer: "B"
  },
  {
    id: 91,
    section: "Health and welfare",
    text: "What should you do if you are feeling stressed or overwhelmed at work?",
    options: ["Ignore it", "Talk to your supervisor, a workmate or a mental health first aider", "Quit your job", "Wait for it to go away"],
    correctAnswer: "B"
  },
  {
    id: 92,
    section: "Health and welfare",
    text: "Why is it important to have a good work-life balance?",
    options: ["To save money", "To maintain your mental and physical health", "To look professional", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 93,
    section: "Health and welfare",
    text: "Why should you never work under the influence of drugs or alcohol?",
    options: ["It's against the rules", "You could injure yourself or others and your concentration will be affected", "You might get caught", "Both A and B"],
    correctAnswer: "D"
  },
  {
    id: 94,
    section: "Health and welfare",
    text: "What is the purpose of a 'mental health first aider'?",
    options: ["To give medical advice", "To provide support and guidance to people who are struggling with their mental health", "To hire workers", "To manage the site"],
    correctAnswer: "B"
  },
  {
    id: 95,
    section: "Health and welfare",
    text: "Why is it important to have regular health checks if you work with certain hazards?",
    options: ["To save money", "To identify any health issues early and ensure you are fit for work", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 96,
    section: "Health and welfare",
    text: "What should you do if you suspect a workmate is under the influence of drugs or alcohol?",
    options: ["Ignore it", "Report it to your supervisor immediately for everyone's safety", "Tell them to be careful", "Wait for them to have an accident"],
    correctAnswer: "B"
  },
  {
    id: 97,
    section: "Health and welfare",
    text: "What should you do if you find a needle or syringe on site?",
    options: ["Pick it up and throw it away", "Don't touch it and report it to your supervisor immediately", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 98,
    section: "Respiratory risks",
    text: "Which of the following activities creates the most dust?",
    options: ["Painting", "Cutting concrete or stone with a power saw", "Sweeping", "Digging"],
    correctAnswer: "B"
  },
  {
    id: 99,
    section: "Respiratory risks",
    text: "What is the main risk of breathing in construction dust?",
    options: ["A cough", "Long-term lung diseases like silicosis or lung cancer", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 100,
    section: "Respiratory risks",
    text: "Why is it important to wear the correct type of RPE?",
    options: ["To look professional", "To ensure that you are protected from the specific hazards in your work area", "To follow the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 101,
    section: "Respiratory risks",
    text: "What should you use to control dust when cutting concrete?",
    options: ["A fan", "Water suppression or on-tool dust extraction", "A mask only", "Work faster"],
    correctAnswer: "B"
  },
  {
    id: 102,
    section: "Respiratory risks",
    text: "Why should you be clean-shaven when wearing a tight-fitting respirator?",
    options: ["To look tidy", "To ensure a good seal between the respirator and your face", "It's site rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 103,
    section: "Respiratory risks",
    text: "What is a 'face fit test'?",
    options: ["A test to see if you are fit for work", "A test to ensure that your RPE fits your face correctly and provides a good seal", "A medical check", "A training session"],
    correctAnswer: "B"
  },
  {
    id: 104,
    section: "Respiratory risks",
    text: "How often should you check your RPE?",
    options: ["Once a year", "Every time you use it", "Once a month", "When it breaks"],
    correctAnswer: "B"
  },
  {
    id: 105,
    section: "Respiratory risks",
    text: "What should you do if you find it difficult to breathe while wearing RPE?",
    options: ["Take it off and carry on", "Stop work, leave the area and tell your supervisor", "Ignore it", "Wait for someone to help you"],
    correctAnswer: "B"
  },
  {
    id: 106,
    section: "Respiratory risks",
    text: "What should you do if you find asbestos on site?",
    options: ["Move it", "Don't touch it, stop work and report it to your supervisor immediately", "Bury it", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 107,
    section: "Respiratory risks",
    text: "What is the risk of breathing in wood dust?",
    options: ["None", "Respiratory irritation and long-term lung issues", "A cold", "It's messy"],
    correctAnswer: "B"
  },
  {
    id: 108,
    section: "Respiratory risks",
    text: "What should you do if you think you have been exposed to asbestos?",
    options: ["Forget about it", "Report it to your supervisor and seek medical advice", "Wait until you feel ill", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 109,
    section: "Respiratory risks",
    text: "Why is asbestos so dangerous?",
    options: ["It's heavy", "It contains fibers that can cause serious lung diseases and cancer if inhaled", "It's expensive to remove", "It's messy"],
    correctAnswer: "B"
  },
  {
    id: 110,
    section: "Respiratory risks",
    text: "Why should you never use a vacuum cleaner that is not rated for construction dust?",
    options: ["It might break", "It will blow the fine dust back into the air", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 111,
    section: "Respiratory risks",
    text: "What is the purpose of a 'dust mask'?",
    options: ["To protect you from all hazards", "To provide basic protection from certain types of dust", "To keep your face warm", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 112,
    section: "Respiratory risks",
    text: "How can you control fumes when welding?",
    options: ["Work faster", "Use local exhaust ventilation or work in a well-ventilated area", "Ignore it", "Wear a mask only"],
    correctAnswer: "B"
  },
  {
    id: 113,
    section: "Respiratory risks",
    text: "What is the risk of breathing in welding fumes?",
    options: ["None", "Respiratory irritation and long-term health issues", "A cold", "It's messy"],
    correctAnswer: "B"
  },
  {
    id: 114,
    section: "Respiratory risks",
    text: "Why is it important to follow the manufacturer's instructions for your RPE?",
    options: ["To save time", "To ensure it provides the correct level of protection", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 115,
    section: "Respiratory risks",
    text: "What should you do if you see someone else working in a dusty area without protection?",
    options: ["Ignore them", "Tell them they should be wearing protection and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 116,
    section: "Respiratory risks",
    text: "What is the main reason for having a respiratory protection program on site?",
    options: ["To follow the law", "To protect workers from breathing in harmful substances", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 117,
    section: "Respiratory risks",
    text: "What should you do with used RPE filters?",
    options: ["Throw them in the bin", "Dispose of them correctly as hazardous waste if necessary", "Reuse them", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 118,
    section: "Respiratory risks",
    text: "What should you do if you are unsure about the respiratory risks in your work area?",
    options: ["Guess", "Ask your supervisor or check the risk assessment", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 119,
    section: "Noise and vibration",
    text: "How can you tell if an area is too noisy?",
    options: ["If you have to shout to be heard by someone 2 meters away", "If you can't hear your music", "If the site manager says so", "If it's site rules"],
    correctAnswer: "A"
  },
  {
    id: 120,
    section: "Noise and vibration",
    text: "What is the main risk of being exposed to high levels of noise?",
    options: ["A headache", "Permanent hearing loss and tinnitus", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 121,
    section: "Noise and vibration",
    text: "Why is it important to wear hearing protection correctly?",
    options: ["To look professional", "To ensure that it provides the correct level of protection", "To follow the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 122,
    section: "Noise and vibration",
    text: "What should you do if you have to work in a noisy area?",
    options: ["Work faster", "Wear the correct hearing protection and take regular breaks in a quiet area", "Ignore it", "Wait for someone to help you"],
    correctAnswer: "B"
  },
  {
    id: 123,
    section: "Noise and vibration",
    text: "How can you reduce noise on site?",
    options: ["Work faster", "Use quieter equipment or use noise barriers", "Ignore it", "Wear hearing protection only"],
    correctAnswer: "B"
  },
  {
    id: 124,
    section: "Noise and vibration",
    text: "What is 'tinnitus'?",
    options: ["A type of hearing aid", "A permanent ringing or buzzing in the ears", "A medical check", "A training session"],
    correctAnswer: "B"
  },
  {
    id: 125,
    section: "Noise and vibration",
    text: "Why should you never use cotton wool as hearing protection?",
    options: ["It's messy", "It provides no real protection from noise", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 126,
    section: "Noise and vibration",
    text: "What should you do if your hearing protection is damaged or lost?",
    options: ["Carry on without it", "Tell your supervisor and get a replacement", "Borrow someone else's", "Buy your own"],
    correctAnswer: "B"
  },
  {
    id: 127,
    section: "Noise and vibration",
    text: "What are the symptoms of HAVS?",
    options: ["None", "Tingling, numbness and loss of strength in the hands and fingers", "A cold", "It's annoying"],
    correctAnswer: "B"
  },
  {
    id: 128,
    section: "Noise and vibration",
    text: "What is the main risk of using vibrating tools for long periods?",
    options: ["A headache", "Hand-arm vibration syndrome (HAVS) or vibration white finger", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 129,
    section: "Noise and vibration",
    text: "What is the purpose of 'vibration monitoring'?",
    options: ["To save money", "To ensure that workers are not exposed to high levels of vibration", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 130,
    section: "Noise and vibration",
    text: "How can you reduce the risk of HAVS?",
    options: ["Work faster", "Use low-vibration tools, take regular breaks and keep your hands warm", "Ignore it", "Wait for someone to help you"],
    correctAnswer: "B"
  },
  {
    id: 131,
    section: "Noise and vibration",
    text: "Why is it important to follow the 'points' system for vibrating tools?",
    options: ["To save time", "To ensure that you do not exceed the safe daily limit for vibration exposure", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 132,
    section: "Noise and vibration",
    text: "What should you do if you notice symptoms of HAVS?",
    options: ["Ignore it", "Report it to your supervisor or the site manager immediately", "Wait for it to go away", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 133,
    section: "Noise and vibration",
    text: "Why should you keep your hands warm when using vibrating tools?",
    options: ["To stay comfortable", "To maintain good blood flow to your fingers and reduce the risk of HAVS", "It's site rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 134,
    section: "Noise and vibration",
    text: "What should you do if you find a tool is vibrating more than usual?",
    options: ["Carry on and be careful", "Stop work and report it to your supervisor for maintenance", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 135,
    section: "Noise and vibration",
    text: "Why should you never remove hearing protection in a noisy area, even for a short time?",
    options: ["It's against the rules", "Even a short exposure to high noise levels can cause permanent damage", "You might get caught", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 136,
    section: "Noise and vibration",
    text: "What is the purpose of 'ear defenders'?",
    options: ["To protect you from all hazards", "To provide a high level of protection from noise", "To keep your ears warm", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 137,
    section: "Noise and vibration",
    text: "Why is it important to have regular hearing checks if you work in noisy areas?",
    options: ["To save money", "To identify any hearing loss early and ensure you are protected", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 138,
    section: "Noise and vibration",
    text: "What should you do if you see someone else working in a noisy area without protection?",
    options: ["Ignore them", "Tell them they should be wearing protection and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 139,
    section: "Noise and vibration",
    text: "What is the main reason for having a noise and vibration management plan on site?",
    options: ["To follow the law", "To protect workers from the harmful effects of noise and vibration", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 140,
    section: "Noise and vibration",
    text: "What should you do if you are unsure about the noise or vibration risks in your work area?",
    options: ["Guess", "Ask your supervisor or check the risk assessment", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 141,
    section: "Hazardous substances",
    text: "Where can you find information about the hazards of a substance?",
    options: ["On the label and the safety data sheet (SDS)", "Ask a workmate", "Guess", "Wait for someone to tell you"],
    correctAnswer: "A"
  },
  {
    id: 142,
    section: "Hazardous substances",
    text: "What does COSHH stand for?",
    options: ["Control of Substances Hazardous to Health", "Control of Safety Hazards and Health", "Control of Substances and Health Hazards", "Control of Safety and Health Hazards"],
    correctAnswer: "A"
  },
  {
    id: 143,
    section: "Hazardous substances",
    text: "What is the risk of getting chemicals on your skin?",
    options: ["None", "Skin irritation, burns or dermatitis", "A cold", "It's messy"],
    correctAnswer: "B"
  },
  {
    id: 144,
    section: "Hazardous substances",
    text: "What should you do before using a hazardous substance?",
    options: ["Just start using it", "Read the label and follow the COSHH assessment and SDS", "Wait for someone to show you", "Ignore the instructions"],
    correctAnswer: "B"
  },
  {
    id: 145,
    section: "Hazardous substances",
    text: "Why should you never store hazardous substances in unmarked containers?",
    options: ["It's messy", "Someone could use the wrong substance or it could be mistaken for something else", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 146,
    section: "Hazardous substances",
    text: "What should you do if you spill a hazardous substance on your skin?",
    options: ["Ignore it", "Wash it off immediately with plenty of clean water and seek medical advice if necessary", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 147,
    section: "Hazardous substances",
    text: "How should hazardous substances be stored on site?",
    options: ["Anywhere", "In a secure, labeled container in a designated storage area", "In the canteen", "In your car"],
    correctAnswer: "B"
  },
  {
    id: 148,
    section: "Hazardous substances",
    text: "What is the purpose of a 'safety data sheet' (SDS)?",
    options: ["To list all tools", "To provide detailed information about the hazards and safe use of a substance", "To record hours worked", "To order materials"],
    correctAnswer: "B"
  },
  {
    id: 149,
    section: "Hazardous substances",
    text: "Why is it important to use the correct PPE when handling hazardous substances?",
    options: ["To look professional", "To protect yourself from the specific hazards of the substance", "To follow the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 150,
    section: "Hazardous substances",
    text: "What should you do if you see a hazardous substance that is leaking?",
    options: ["Ignore it", "Report it to your supervisor immediately and use a spill kit if safe and trained", "Wash it away with water", "Cover it with soil"],
    correctAnswer: "B"
  },
  {
    id: 151,
    section: "Hazardous substances",
    text: "How can you control fumes from a hazardous substance?",
    options: ["Work faster", "Use local exhaust ventilation or work in a well-ventilated area", "Ignore it", "Wear a mask only"],
    correctAnswer: "B"
  },
  {
    id: 152,
    section: "Hazardous substances",
    text: "What is the risk of breathing in fumes from a hazardous substance?",
    options: ["None", "Respiratory irritation and long-term health issues", "A cold", "It's messy"],
    correctAnswer: "B"
  },
  {
    id: 153,
    section: "Hazardous substances",
    text: "Why should you never mix different hazardous substances unless instructed to do so?",
    options: ["It's messy", "It could cause a dangerous chemical reaction", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 154,
    section: "Hazardous substances",
    text: "What should you do if you feel ill after using a hazardous substance?",
    options: ["Forget about it", "Stop work, leave the area and seek medical advice immediately", "Wait until you feel better", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 155,
    section: "Hazardous substances",
    text: "What should you do with used containers of hazardous substances?",
    options: ["Throw them in the bin", "Dispose of them correctly as hazardous waste", "Reuse them", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 156,
    section: "Hazardous substances",
    text: "What is the purpose of a 'COSHH assessment'?",
    options: ["To save money", "To identify the risks of using a substance and put measures in place to work safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 157,
    section: "Hazardous substances",
    text: "What should you do if you are unsure about the hazards of a substance?",
    options: ["Guess", "Ask your supervisor or check the SDS", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 158,
    section: "Hazardous substances",
    text: "Why is it important to follow the manufacturer's instructions for a hazardous substance?",
    options: ["To save time", "To ensure it is used safely and effectively", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 159,
    section: "Hazardous substances",
    text: "What should you do if you see someone else using a hazardous substance unsafely?",
    options: ["Ignore them", "Tell them they are working unsafely and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 160,
    section: "Hazardous substances",
    text: "What is the main reason for having a COSHH management plan on site?",
    options: ["To follow the law", "To protect workers from the harmful effects of hazardous substances", "To save money", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 161,
    section: "Hazardous substances",
    text: "Why should you never smoke near hazardous substances?",
    options: ["It's against the rules", "Many substances are flammable and could catch fire or explode", "It's messy", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 162,
    section: "Hazardous substances",
    text: "What is the risk of swallowing a hazardous substance?",
    options: ["None", "Serious internal injury or poisoning", "A stomach ache", "It's messy"],
    correctAnswer: "B"
  },
  {
    id: 163,
    section: "Hazardous substances",
    text: "Why is it important to have eye wash stations near where hazardous substances are used?",
    options: ["To look professional", "To provide immediate treatment in the event of a splash in the eyes", "To save money", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 164,
    section: "Hazardous substances",
    text: "What should you do if a hazardous substance gets in your eyes?",
    options: ["Ignore it", "Flush your eyes immediately with plenty of clean water and seek medical advice", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 165,
    section: "Hazardous substances",
    text: "What should you do if you find a hazardous substance that is not labeled?",
    options: ["Guess what it is", "Don't use it and report it to your supervisor immediately", "Smell it to find out", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 166,
    section: "Personal protective equipment",
    text: "Why should PPE only be used as a last resort?",
    options: ["It's expensive", "It's better to remove the hazard or use other control measures first", "It's uncomfortable", "Both B and C"],
    correctAnswer: "B"
  },
  {
    id: 167,
    section: "Personal protective equipment",
    text: "What is the main purpose of PPE?",
    options: ["To look professional", "To provide a last line of defense against hazards on site", "To follow the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 168,
    section: "Personal protective equipment",
    text: "Who is responsible for ensuring that you wear your PPE?",
    options: ["You are", "Your employer", "The site manager", "All of these"],
    correctAnswer: "D"
  },
  {
    id: 169,
    section: "Personal protective equipment",
    text: "Why is it important to wear a safety helmet on site?",
    options: ["To look professional", "To protect your head from falling objects and impacts", "To keep your head warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 170,
    section: "Personal protective equipment",
    text: "What should you do if your PPE is uncomfortable?",
    options: ["Don't wear it", "Tell your supervisor and try to find a more comfortable alternative that still provides protection", "Modify it yourself", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 171,
    section: "Personal protective equipment",
    text: "Why should you never wear a safety helmet backwards?",
    options: ["It looks silly", "It won't provide the correct level of protection", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 172,
    section: "Personal protective equipment",
    text: "When should you replace your safety helmet?",
    options: ["When it looks old", "If it has been involved in an impact or if it is damaged or past its expiry date", "Once a year", "When it breaks"],
    correctAnswer: "B"
  },
  {
    id: 173,
    section: "Personal protective equipment",
    text: "Why should you keep your high-visibility clothing clean?",
    options: ["To look professional", "To ensure that it remains effective and can be seen easily", "To save money", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 174,
    section: "Personal protective equipment",
    text: "What is the purpose of high-visibility clothing?",
    options: ["To look professional", "To ensure that you are easily seen by vehicle and plant operators", "To keep you warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 175,
    section: "Personal protective equipment",
    text: "Why should you never wear your own shoes or trainers on site?",
    options: ["They might get dirty", "They do not provide the correct level of protection", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 176,
    section: "Personal protective equipment",
    text: "What is the purpose of safety footwear?",
    options: ["To look professional", "To protect your feet from impacts, punctures and slips", "To keep your feet warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 177,
    section: "Personal protective equipment",
    text: "Why is it important to choose the correct type of eye protection?",
    options: ["To look professional", "To ensure that it provides protection from the specific hazards in your work area", "To save money", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 178,
    section: "Personal protective equipment",
    text: "What is the purpose of safety goggles or glasses?",
    options: ["To look professional", "To protect your eyes from dust, splashes and flying objects", "To see better", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 179,
    section: "Personal protective equipment",
    text: "Why should you choose the correct type of gloves for the job?",
    options: ["To look professional", "To ensure that they provide protection from the specific hazards you are dealing with", "To save money", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 180,
    section: "Personal protective equipment",
    text: "What is the purpose of safety gloves?",
    options: ["To keep your hands clean", "To protect your hands from cuts, burns, chemicals and other hazards", "To keep your hands warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 181,
    section: "Personal protective equipment",
    text: "Why is it important to follow the manufacturer's instructions for your PPE?",
    options: ["To save time", "To ensure it provides the correct level of protection and is maintained correctly", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 182,
    section: "Personal protective equipment",
    text: "What should you do if your PPE is not compatible with other equipment you are wearing?",
    options: ["Don't wear it", "Tell your supervisor and find a compatible alternative", "Modify it yourself", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 185,
    section: "Personal protective equipment",
    text: "What should you do if you see someone else not wearing their PPE?",
    options: ["Ignore them", "Tell them they should be wearing their PPE and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 183,
    section: "Personal protective equipment",
    text: "What should you do with used or damaged PPE?",
    options: ["Throw it in the bin", "Dispose of it correctly and get a replacement", "Reuse it", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 187,
    section: "Personal protective equipment",
    text: "What should you do if you are unsure about what PPE you need for a job?",
    options: ["Guess", "Ask your supervisor or check the risk assessment", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 184,
    section: "Personal protective equipment",
    text: "Why should you never modify your PPE?",
    options: ["It might break", "It could reduce the level of protection it provides", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 186,
    section: "Personal protective equipment",
    text: "Why is it important to store your PPE correctly when not in use?",
    options: ["To keep the site tidy", "To ensure it remains clean and in good condition", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 205,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you find an electrical tool is getting very hot?",
    options: ["Carry on and be careful", "Stop work, unplug it and report it to your supervisor", "Ignore it", "Wait for it to cool down"],
    correctAnswer: "B"
  },
  {
    id: 192,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you find a damaged electrical cable?",
    options: ["Tape it up and carry on", "Stop work, unplug it and report it to your supervisor immediately", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 214,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the purpose of a 'dead man's switch' on a tool?",
    options: ["To save energy", "To ensure the tool stops immediately if you let go of the handle", "To provide light", "To charge batteries"],
    correctAnswer: "B"
  },
  {
    id: 188,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the main risk of working with electricity?",
    options: ["A headache", "Electric shock, burns or death", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 201,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you see someone using a 230V tool on site without a transformer?",
    options: ["Ignore them", "Tell them they should be using a 110V tool and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 195,
    section: "Electrical safety and hand held tools and equipment",
    text: "How can you tell if a tool has been PAT tested?",
    options: ["Ask a workmate", "Check for a valid PAT test label on the tool or the plug", "Guess", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 218,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you find a tool is missing a part?",
    options: ["Carry on and be careful", "Don't use it and report it to your supervisor", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 190,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you only use 110V tools on site?",
    options: ["They are faster", "They are safer and reduce the risk of serious injury in the event of an electric shock", "They are cheaper", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 207,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the purpose of a 'ground fault circuit interrupter' (GFCI)?",
    options: ["To save energy", "To quickly cut off the power in the event of a fault, reducing the risk of electric shock", "To provide light", "To charge batteries"],
    correctAnswer: "B"
  },
  {
    id: 193,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never pull an electrical tool by its cable?",
    options: ["It's messy", "It could damage the cable and the connections, making it unsafe", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 211,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why is it important to follow the manufacturer's instructions for your tools?",
    options: ["To save time", "To ensure they are used safely and effectively", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 189,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do before using an electrical tool?",
    options: ["Just start using it", "Check for any damage to the tool, the cable and the plug", "Wait for someone to show you", "Ignore the instructions"],
    correctAnswer: "B"
  },
  {
    id: 203,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the purpose of 'lock out tag out' (LOTO) procedures?",
    options: ["To save energy", "To ensure that electrical equipment is safely isolated before work begins", "To record hours worked", "To order materials"],
    correctAnswer: "B"
  },
  {
    id: 197,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never use electrical tools in wet conditions unless they are designed for it?",
    options: ["They might get dirty", "Water increases the risk of electric shock", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 216,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you see someone else using a tool unsafely?",
    options: ["Ignore them", "Tell them they are working unsafely and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 191,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the purpose of a yellow transformer on site?",
    options: ["To save energy", "To reduce the voltage from 230V to 110V for safe use on site", "To provide light", "To charge batteries"],
    correctAnswer: "B"
  },
  {
    id: 209,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never use a tool that has a missing guard?",
    options: ["It's messy", "The guard is there to protect you from moving parts and flying objects", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 194,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the purpose of 'PAT testing'?",
    options: ["To list all tools", "To ensure that portable electrical appliances are safe to use", "To record hours worked", "To order materials"],
    correctAnswer: "B"
  },
  {
    id: 212,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do with tools that are no longer needed?",
    options: ["Leave them where they are", "Store them correctly in a designated storage area", "Take them home", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 199,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if an RCD trips?",
    options: ["Reset it and carry on", "Check the tool and the cable for faults and report it if necessary", "Ignore it", "Wait for someone else to reset it"],
    correctAnswer: "B"
  },
  {
    id: 206,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never use a tool that is sparking?",
    options: ["It's annoying", "It could cause a fire or an electric shock", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 196,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you see a tool that is past its PAT test date?",
    options: ["Carry on and be careful", "Don't use it and report it to your supervisor", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 215,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never bypass a safety switch on a tool?",
    options: ["It's annoying", "It could cause the tool to start unexpectedly and cause injury", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 198,
    section: "Electrical safety and hand held tools and equipment",
    text: "What is the purpose of an RCD (Residual Current Device)?",
    options: ["To save energy", "To quickly cut off the power in the event of a fault, reducing the risk of electric shock", "To provide light", "To charge batteries"],
    correctAnswer: "B"
  },
  {
    id: 210,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you find a tool is making a strange noise?",
    options: ["Carry on and be careful", "Stop work and report it to your supervisor for maintenance", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 200,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never attempt to repair an electrical tool yourself?",
    options: ["It's too difficult", "You could make it unsafe and put yourself or others at risk", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 217,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why is it important to keep your tools clean and well-maintained?",
    options: ["To look professional", "To ensure they remain safe and effective to use", "To save money", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 202,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never use a tool that has a taped-up cable?",
    options: ["It's messy", "The tape does not provide the correct level of insulation and the cable could be dangerous", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 219,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never use a tool that is not suitable for the job?",
    options: ["It might break", "It could be dangerous and cause injury", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 204,
    section: "Electrical safety and hand held tools and equipment",
    text: "Who is allowed to work on live electrical systems?",
    options: ["Anyone who is careful", "Only qualified and authorized electricians", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 213,
    section: "Electrical safety and hand held tools and equipment",
    text: "Why should you never use a tool that you are not trained to use?",
    options: ["It's against the rules", "You could injure yourself or others", "You might break the tool", "Both B and C"],
    correctAnswer: "D"
  },
  {
    id: 208,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you see a tool that has a loose plug?",
    options: ["Carry on and be careful", "Don't use it and report it to your supervisor", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 220,
    section: "Electrical safety and hand held tools and equipment",
    text: "What should you do if you are unsure about how to use a tool safely?",
    options: ["Guess", "Ask your supervisor or check the manufacturer's instructions", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 235,
    section: "Safety signs and signals",
    text: "What is the purpose of hand signals on site?",
    options: ["To say hello", "To communicate with vehicle and plant operators when noise or distance makes speaking difficult", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 221,
    section: "Safety signs and signals",
    text: "What does a red circular sign with a white horizontal bar mean?",
    options: ["No entry", "Stop", "Danger", "Exit"],
    correctAnswer: "A"
  },
  {
    id: 240,
    section: "Safety signs and signals",
    text: "What should you do if you lose sight of your signaller while operating a vehicle?",
    options: ["Carry on and be careful", "Stop immediately and wait until you can see them again", "Ignore it", "Wait for someone else to guide you"],
    correctAnswer: "B"
  },
  {
    id: 226,
    section: "Safety signs and signals",
    text: "Why is it important to follow safety signs on site?",
    options: ["To look professional", "To inform you of hazards and the actions you must take to stay safe", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 231,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'safe condition' sign?",
    options: ["To look professional", "To show you the location of safety equipment or safe exits", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 222,
    section: "Safety signs and signals",
    text: "What does a yellow triangular sign with a black border mean?",
    options: ["Warning or caution", "Prohibition", "Mandatory action", "Safe condition"],
    correctAnswer: "A"
  },
  {
    id: 243,
    section: "Safety signs and signals",
    text: "What should you do if you see a vehicle with a flashing amber beacon?",
    options: ["Ignore it", "Be aware that the vehicle is operating and stay a safe distance away", "Wait for it to pass", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 227,
    section: "Safety signs and signals",
    text: "What should you do if you see a safety sign that is damaged or missing?",
    options: ["Ignore it", "Report it to your supervisor immediately", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 236,
    section: "Safety signs and signals",
    text: "Who is allowed to give hand signals to a crane operator?",
    options: ["Anyone on site", "Only a trained and authorized signaller or slinger", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 223,
    section: "Safety signs and signals",
    text: "What does a blue circular sign with a white symbol mean?",
    options: ["Warning", "Prohibition", "Mandatory action (e.g., wear PPE)", "Safe condition"],
    correctAnswer: "C"
  },
  {
    id: 241,
    section: "Safety signs and signals",
    text: "Why should you never stand behind a reversing vehicle?",
    options: ["It's messy", "The driver may not be able to see you and you could be crushed", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 228,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'danger' sign?",
    options: ["To look professional", "To warn you of an immediate hazard that could cause serious injury or death", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 232,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'prohibition' sign?",
    options: ["To look professional", "To tell you that a specific action is forbidden (e.g., no entry)", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 224,
    section: "Safety signs and signals",
    text: "What does a green rectangular sign with a white symbol mean?",
    options: ["Warning", "Prohibition", "Mandatory action", "Safe condition (e.g., fire exit, first aid)"],
    correctAnswer: "D"
  },
  {
    id: 244,
    section: "Safety signs and signals",
    text: "Why is it important to follow the site's traffic management signs?",
    options: ["To save time", "To keep pedestrians and vehicles separate and safe", "To park your car easily", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 229,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'caution' sign?",
    options: ["To look professional", "To warn you of a potential hazard that could cause minor injury", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 237,
    section: "Safety signs and signals",
    text: "What should you do if you see a hand signal that you don't understand?",
    options: ["Guess what it means", "Don't take any action and ask for clarification", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 225,
    section: "Safety signs and signals",
    text: "What does a red circular sign with a diagonal line through it mean?",
    options: ["Warning", "Prohibition (e.g., no smoking)", "Mandatory action", "Safe condition"],
    correctAnswer: "B"
  },
  {
    id: 242,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'reversing alarm' on a vehicle?",
    options: ["To make noise", "To warn pedestrians that the vehicle is reversing", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 230,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'mandatory' sign?",
    options: ["To look professional", "To tell you that you must take a specific action (e.g., wear a helmet)", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 238,
    section: "Safety signs and signals",
    text: "Why is it important to use standard hand signals?",
    options: ["To look professional", "To ensure that they are understood correctly by everyone", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 233,
    section: "Safety signs and signals",
    text: "Why should you never ignore a safety sign?",
    options: ["It's against the rules", "It could put you or others in danger", "You might get caught", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 239,
    section: "Safety signs and signals",
    text: "What is the purpose of a 'banksman' or 'signaller'?",
    options: ["To look professional", "To guide vehicle and plant operators safely, especially when reversing or in tight spaces", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 234,
    section: "Safety signs and signals",
    text: "What should you do if you are unsure about the meaning of a safety sign?",
    options: ["Guess", "Ask your supervisor or check the site rules", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 257,
    section: "Site transport safety",
    text: "Why should you never operate a vehicle or plant unless you are trained and authorized?",
    options: ["It's against the rules", "You could injure yourself or others and cause damage", "You might get caught", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 245,
    section: "Site transport safety",
    text: "What is the main risk of working near moving vehicles and plant?",
    options: ["A headache", "Being struck or crushed by a vehicle", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 262,
    section: "Site transport safety",
    text: "Why should you never use a mobile phone while driving a vehicle or operating plant?",
    options: ["It's against the rules", "It will distract you and increase the risk of an accident", "You might get caught", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 250,
    section: "Site transport safety",
    text: "What is the purpose of a 'pedestrian walkway' on site?",
    options: ["To look professional", "To provide a safe route for people to walk away from vehicles", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 255,
    section: "Site transport safety",
    text: "Why is it important to follow the site's speed limits?",
    options: ["To save time", "To reduce the risk of accidents and ensure that you can stop safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 246,
    section: "Site transport safety",
    text: "How can you stay safe when working near vehicles?",
    options: ["Work faster", "Stay in designated pedestrian areas and follow the site's traffic rules", "Ignore them", "Wait for them to stop"],
    correctAnswer: "B"
  },
  {
    id: 265,
    section: "Site transport safety",
    text: "Why is it important to keep site roads clear of debris?",
    options: ["To look professional", "To prevent punctures and accidents", "To save space", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 251,
    section: "Site transport safety",
    text: "What should you do if you see a vehicle that is being operated unsafely?",
    options: ["Ignore it", "Report it to your supervisor or the site manager immediately", "Wait for it to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 258,
    section: "Site transport safety",
    text: "What is the purpose of a 'flashing amber beacon' on a vehicle?",
    options: ["To make noise", "To warn people that the vehicle is operating and to stay clear", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 247,
    section: "Site transport safety",
    text: "Why should you always wear high-visibility clothing when working near vehicles?",
    options: ["To look professional", "To ensure that drivers can see you easily", "To keep you warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 263,
    section: "Site transport safety",
    text: "What is the purpose of 'exclusion zones' around plant?",
    options: ["To look professional", "To keep people a safe distance away from moving parts and hazards", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 252,
    section: "Site transport safety",
    text: "Why should you never walk behind a vehicle that is reversing?",
    options: ["It's messy", "The driver may not be able to see you and you could be crushed", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 256,
    section: "Site transport safety",
    text: "What should you do if you find a vehicle or plant has a fault?",
    options: ["Carry on and be careful", "Stop work and report it to your supervisor immediately", "Ignore it", "Wait for someone else to find it"],
    correctAnswer: "B"
  },
  {
    id: 248,
    section: "Site transport safety",
    text: "What should you do before crossing a site road?",
    options: ["Just run across", "Stop, look and listen, and ensure it is safe to cross", "Wait for someone to tell you", "Ignore the traffic"],
    correctAnswer: "B"
  },
  {
    id: 266,
    section: "Site transport safety",
    text: "What should you do if you see a vehicle that is leaking oil or fuel?",
    options: ["Ignore it", "Report it to your supervisor immediately and use a spill kit if safe and trained", "Wash it away with water", "Cover it with soil"],
    correctAnswer: "B"
  },
  {
    id: 253,
    section: "Site transport safety",
    text: "What is the purpose of a 'banksman' when a vehicle is reversing?",
    options: ["To look professional", "To guide the driver safely and ensure no one is in the way", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 259,
    section: "Site transport safety",
    text: "What should you do if you see a vehicle with a load that looks unstable?",
    options: ["Ignore it", "Report it to your supervisor or the driver immediately", "Wait for it to fall", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 249,
    section: "Site transport safety",
    text: "Why should you never hitch a ride on a vehicle or plant that is not designed for passengers?",
    options: ["It's uncomfortable", "You could fall off and be seriously injured or crushed", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 264,
    section: "Site transport safety",
    text: "What should you do if you see someone enter an exclusion zone?",
    options: ["Ignore them", "Tell them to leave immediately and report it if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 254,
    section: "Site transport safety",
    text: "What should you do if you are driving a vehicle and lose sight of your signaller?",
    options: ["Carry on and be careful", "Stop immediately and wait until you can see them again", "Ignore it", "Wait for someone else to guide you"],
    correctAnswer: "B"
  },
  {
    id: 260,
    section: "Site transport safety",
    text: "Why is it important to secure all loads before moving a vehicle?",
    options: ["To save time", "To prevent the load from falling and causing an accident", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 267,
    section: "Site transport safety",
    text: "Why should you always use the correct access and egress points for a vehicle?",
    options: ["To save time", "To prevent slips, trips and falls", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 261,
    section: "Site transport safety",
    text: "What should you do if you are working in an area where vehicles are operating?",
    options: ["Work faster", "Be aware of your surroundings and follow the site's safety rules", "Ignore the traffic", "Wait for them to stop"],
    correctAnswer: "B"
  },
  {
    id: 268,
    section: "Site transport safety",
    text: "What should you do if you are unsure about the traffic rules on site?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 279,
    section: "Fire prevention and control",
    text: "What is the purpose of a fire assembly point?",
    options: ["To have a break", "To ensure everyone is accounted for in the event of an evacuation", "To meet your workmates", "To wait for the fire brigade"],
    correctAnswer: "B"
  },
  {
    id: 269,
    section: "Fire prevention and control",
    text: "What are the three things a fire needs to burn (the fire triangle)?",
    options: ["Fuel, heat and oxygen", "Wood, paper and matches", "Water, air and fuel", "Heat, light and fuel"],
    correctAnswer: "A"
  },
  {
    id: 284,
    section: "Fire prevention and control",
    text: "What does a CO2 extinguisher (black label) do?",
    options: ["Puts out wood fires", "Puts out electrical fires and flammable liquid fires", "Puts out paper fires", "Puts out textiles fires"],
    correctAnswer: "B"
  },
  {
    id: 274,
    section: "Fire prevention and control",
    text: "Why is it important to have a fire watch after hot work has finished?",
    options: ["To have a break", "To ensure that no smoldering fires have started and to check the area is safe", "To clean the site", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 277,
    section: "Fire prevention and control",
    text: "What is the purpose of a fire alarm?",
    options: ["To make noise", "To warn everyone on site that there is a fire and to evacuate immediately", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 270,
    section: "Fire prevention and control",
    text: "How can you prevent a fire on site?",
    options: ["Work faster", "Keep the site tidy, store flammable materials correctly and follow the fire rules", "Ignore the risks", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 287,
    section: "Fire prevention and control",
    text: "Why should you never use a water extinguisher on an electrical fire?",
    options: ["It won't work", "Water conducts electricity and you could be electrocuted", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 275,
    section: "Fire prevention and control",
    text: "What should you do if you see someone smoking in a non-smoking area?",
    options: ["Ignore them", "Tell them it is a non-smoking area and report it if necessary", "Wait for them to start a fire", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 280,
    section: "Fire prevention and control",
    text: "What should you do if you hear the fire alarm?",
    options: ["Finish what you are doing", "Leave the building immediately by the nearest safe exit and go to the assembly point", "Wait for someone to tell you what to do", "Call your family"],
    correctAnswer: "B"
  },
  {
    id: 271,
    section: "Fire prevention and control",
    text: "Why is it important to keep the site tidy to prevent fire?",
    options: ["To look professional", "To remove potential fuel for a fire (e.g., waste paper, wood, packaging)", "To save space", "To keep the site manager happy"],
    correctAnswer: "B"
  },
  {
    id: 285,
    section: "Fire prevention and control",
    text: "What does a foam extinguisher (cream label) do?",
    options: ["Puts out electrical fires", "Puts out fires involving wood, paper and flammable liquids", "Puts out gas fires", "Puts out metal fires"],
    correctAnswer: "B"
  },
  {
    id: 276,
    section: "Fire prevention and control",
    text: "Why should you never use a fire extinguisher to prop open a fire door?",
    options: ["It might break", "The fire door is there to stop the spread of fire and smoke and must be kept closed", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 278,
    section: "Fire prevention and control",
    text: "What should you do if you discover a fire?",
    options: ["Try to put it out yourself", "Raise the alarm immediately and leave the area", "Wait for someone else to see it", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 272,
    section: "Fire prevention and control",
    text: "How should flammable liquids be stored on site?",
    options: ["Anywhere", "In a secure, labeled container in a designated fire-resistant storage area", "In the canteen", "In your car"],
    correctAnswer: "B"
  },
  {
    id: 288,
    section: "Fire prevention and control",
    text: "What should you do if you are unsure how to use a fire extinguisher?",
    options: ["Have a go", "Leave it and evacuate the area", "Ask someone to show you", "Read the instructions while the fire is burning"],
    correctAnswer: "B"
  },
  {
    id: 273,
    section: "Fire prevention and control",
    text: "What is a 'hot work permit'?",
    options: ["A permit to work in the sun", "A permit required for activities that create heat, sparks or flames (e.g., welding, grinding)", "A record of hours worked", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 281,
    section: "Fire prevention and control",
    text: "Why should you never use a lift in the event of a fire?",
    options: ["It's too slow", "You could become trapped if the power fails", "It's against the rules", "Both B and C"],
    correctAnswer: "B"
  },
  {
    id: 286,
    section: "Fire prevention and control",
    text: "What does a powder extinguisher (blue label) do?",
    options: ["Puts out wood fires only", "Puts out most types of fires, including electrical and flammable liquids", "Puts out gas fires only", "Puts out metal fires only"],
    correctAnswer: "B"
  },
  {
    id: 282,
    section: "Fire prevention and control",
    text: "What is the purpose of a fire extinguisher?",
    options: ["To put out large fires", "To tackle small fires in their early stages if safe and trained to do so", "To cool down", "To clean the site"],
    correctAnswer: "B"
  },
  {
    id: 289,
    section: "Fire prevention and control",
    text: "Why is it important to have regular fire drills on site?",
    options: ["To save time", "To ensure everyone knows what to do and where to go in the event of a fire", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 283,
    section: "Fire prevention and control",
    text: "What does a water extinguisher (red label) do?",
    options: ["Puts out electrical fires", "Puts out fires involving wood, paper and textiles", "Puts out oil fires", "Puts out gas fires"],
    correctAnswer: "B"
  },
  {
    id: 305,
    section: "Manual handling",
    text: "What should you do if you have to move a load that is unstable or has a shifting center of gravity?",
    options: ["Work faster", "Take extra care, secure the load if possible and use a mechanical aid if needed", "Ignore it", "Wait for someone to help you"],
    correctAnswer: "B"
  },
  {
    id: 290,
    section: "Manual handling",
    text: "What is the main risk of incorrect manual handling?",
    options: ["A headache", "Back injuries, strains and sprains", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 315,
    section: "Manual handling",
    text: "Why should you never use your back to lift a load?",
    options: ["It's messy", "The muscles in your back are not designed for heavy lifting and can be easily injured", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 295,
    section: "Manual handling",
    text: "What is the purpose of a 'manual handling assessment'?",
    options: ["To save money", "To identify the risks of lifting and put measures in place to work safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 310,
    section: "Manual handling",
    text: "What should you do if you have to lift a load that has sharp edges?",
    options: ["Just pick it up", "Wear suitable gloves to protect your hands from cuts and abrasions", "Ignore the edges", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 291,
    section: "Manual handling",
    text: "What should you do before lifting a heavy object?",
    options: ["Just pick it up", "Assess the load, plan the route and use the correct lifting technique", "Wait for someone to help you", "Ignore the weight"],
    correctAnswer: "B"
  },
  {
    id: 316,
    section: "Manual handling",
    text: "What is the purpose of 'kinetic lifting'?",
    options: ["To save energy", "A technique that uses the power of your legs and the momentum of the load to lift safely", "To look professional", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 296,
    section: "Manual handling",
    text: "Why should you never twist your body while lifting or carrying a load?",
    options: ["It's messy", "It puts extra strain on your back and increases the risk of injury", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 306,
    section: "Manual handling",
    text: "Why should you never lift a load while your feet are on uneven or slippery ground?",
    options: ["It's messy", "You could easily lose your balance and fall, causing serious injury", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 292,
    section: "Manual handling",
    text: "What is the correct way to lift a heavy object?",
    options: ["Bend your back and keep your legs straight", "Bend your knees, keep your back straight and hold the load close to your body", "Twist your body while lifting", "Lift with one hand"],
    correctAnswer: "B"
  },
  {
    id: 317,
    section: "Manual handling",
    text: "What should you do if you have to carry a load up or down stairs?",
    options: ["Run", "Take extra care, ensure the stairs are clear and use the handrail if possible", "Ignore the stairs", "Wait for someone to help you"],
    correctAnswer: "B"
  },
  {
    id: 297,
    section: "Manual handling",
    text: "What should you do if you have to carry a load over a long distance?",
    options: ["Work faster", "Plan your route, check for obstacles and take regular breaks if necessary", "Ignore the distance", "Wait for someone to help you"],
    correctAnswer: "B"
  },
  {
    id: 311,
    section: "Manual handling",
    text: "Why should you never lift a load that is too large for you to handle comfortably?",
    options: ["It's against the rules", "It will be difficult to control and could cause you to lose your balance", "You might drop it", "Both B and C"],
    correctAnswer: "D"
  },
  {
    id: 293,
    section: "Manual handling",
    text: "Why should you never lift an object that is too heavy for you?",
    options: ["It's against the rules", "You could seriously injure your back or other parts of your body", "You might drop it", "Both B and C"],
    correctAnswer: "D"
  },
  {
    id: 318,
    section: "Manual handling",
    text: "Why should you never carry a load that prevents you from using a handrail on stairs?",
    options: ["It's messy", "You could easily lose your balance and fall down the stairs, causing serious injury", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 298,
    section: "Manual handling",
    text: "Why is it important to wear the correct PPE (e.g., gloves, safety boots) when manual handling?",
    options: ["To look professional", "To protect your hands from sharp edges and your feet from dropped objects", "To keep you warm", "It's site rules"],
    correctAnswer: "B"
  },
  {
    id: 307,
    section: "Manual handling",
    text: "What is the purpose of 'team lifting'?",
    options: ["To have a chat", "To share the weight of a heavy or awkward load between two or more people", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 294,
    section: "Manual handling",
    text: "What should you do if a load is too heavy to lift safely by yourself?",
    options: ["Have a go anyway", "Ask for help or use a mechanical aid (e.g., a trolley or hoist)", "Ignore it", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 319,
    section: "Manual handling",
    text: "What should you do if you see someone else lifting a load unsafely?",
    options: ["Ignore them", "Tell them they are lifting unsafely and show them the correct technique if you are trained", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 299,
    section: "Manual handling",
    text: "What should you do if you feel pain while lifting or carrying a load?",
    options: ["Ignore it and carry on", "Stop immediately, put the load down and report it to your supervisor", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 312,
    section: "Manual handling",
    text: "What should you do if you have to lift a load from a height (e.g., a shelf)?",
    options: ["Stretch your arms out", "Use a safe platform or ladder to reach the load and keep it close to your body", "Jump up", "Ignore the height"],
    correctAnswer: "B"
  },
  {
    id: 300,
    section: "Manual handling",
    text: "Why is it important to keep your work area tidy to prevent manual handling injuries?",
    options: ["To look professional", "To reduce the risk of trips and falls while carrying a load", "To save space", "To keep the site tidy"],
    correctAnswer: "B"
  },
  {
    id: 320,
    section: "Manual handling",
    text: "Why is it important to follow the site's manual handling policy?",
    options: ["To save time", "To ensure that everyone works safely and reduces the risk of injury", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 301,
    section: "Manual handling",
    text: "What should you do if you are asked to move a load that is too heavy and no help or mechanical aids are available?",
    options: ["Have a go anyway", "Tell your supervisor that it is unsafe and you cannot move it without help or equipment", "Ignore it", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 313,
    section: "Manual handling",
    text: "Why is it important to take regular breaks if you are doing a lot of manual handling?",
    options: ["To have a rest", "To prevent fatigue and reduce the risk of injury", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 302,
    section: "Manual handling",
    text: "Why should you never lift a load that blocks your vision?",
    options: ["It's messy", "You could trip or fall over an obstacle that you cannot see", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 314,
    section: "Manual handling",
    text: "What should you do if you are unsure about the weight of a load?",
    options: ["Guess", "Check for a weight label or ask your supervisor", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 303,
    section: "Manual handling",
    text: "What should you do if you have to lift a load from the floor?",
    options: ["Bend your back and keep your legs straight", "Bend your knees and keep your back straight", "Twist your body", "Lift with one hand"],
    correctAnswer: "B"
  },
  {
    id: 308,
    section: "Manual handling",
    text: "What should you do if you are part of a team lift and you feel you are losing your grip?",
    options: ["Carry on and hope for the best", "Tell the other person immediately so you can both put the load down safely", "Ignore it", "Wait for the other person to notice"],
    correctAnswer: "B"
  },
  {
    id: 304,
    section: "Manual handling",
    text: "Why is it important to have a good grip on a load before lifting it?",
    options: ["To look professional", "To prevent the load from slipping and causing injury", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 309,
    section: "Manual handling",
    text: "Why is it important to communicate clearly during a team lift?",
    options: ["To look professional", "To ensure that you both lift, move and put the load down at the same time and stay safe", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 335,
    section: "Working at height",
    text: "What is the purpose of a 'safety net'?",
    options: ["To catch fish", "To catch anyone who falls from height and prevent them from hitting the ground", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 321,
    section: "Working at height",
    text: "What is the main risk of working at height?",
    options: ["A headache", "Falling from height and being seriously injured or killed", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 340,
    section: "Working at height",
    text: "What should you do if a scaffold does not have a valid tag?",
    options: ["Use it anyway", "Don't use it and report it to your supervisor immediately", "Wait for someone to tag it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 326,
    section: "Working at height",
    text: "Who is allowed to use a safety harness on site?",
    options: ["Anyone who wants to", "Only those who are trained and authorized to use it", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 331,
    section: "Working at height",
    text: "Why is it important to have a 'rescue plan' for anyone working at height?",
    options: ["To save time", "To ensure that anyone who falls and is suspended in a harness can be rescued quickly and safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 322,
    section: "Working at height",
    text: "How can you stay safe when working at height?",
    options: ["Work faster", "Use the correct equipment, follow the site's safety rules and ensure you are trained", "Ignore the height", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 343,
    section: "Working at height",
    text: "Who is allowed to operate a MEWP on site?",
    options: ["Anyone who can drive", "Only those who are trained and authorized to use it", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 327,
    section: "Working at height",
    text: "What should you do before using a safety harness?",
    options: ["Just put it on", "Inspect it for any damage or wear and ensure it is correctly fitted", "Wait for someone to check it", "Ignore the inspection"],
    correctAnswer: "B"
  },
  {
    id: 336,
    section: "Working at height",
    text: "Why should you never use a ladder for long-term work at height?",
    options: ["It's uncomfortable", "Ladders are for access and short-term, light work only; they do not provide a safe working platform", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 323,
    section: "Working at height",
    text: "What is the purpose of a 'risk assessment' for working at height?",
    options: ["To save money", "To identify the hazards and put measures in place to prevent falls", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 341,
    section: "Working at height",
    text: "Why should you never modify a scaffold yourself?",
    options: ["It's messy", "Only trained and authorized scaffolders are allowed to build or modify scaffolds", "It's against the rules", "Both B and C"],
    correctAnswer: "D"
  },
  {
    id: 328,
    section: "Working at height",
    text: "Why should you never use a safety harness that is damaged?",
    options: ["It's messy", "It may not be able to catch you safely in the event of a fall", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 332,
    section: "Working at height",
    text: "What is the purpose of 'toe boards' on a scaffold?",
    options: ["To rest your feet", "To prevent tools and materials from falling off the platform", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 324,
    section: "Working at height",
    text: "Why is it important to use collective fall protection (e.g., guardrails) where possible?",
    options: ["To look professional", "It protects everyone in the area without them having to take any specific action", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 344,
    section: "Working at height",
    text: "What should you do if you are working on a MEWP and the wind becomes very strong?",
    options: ["Carry on and be careful", "Stop work, lower the platform and leave the area", "Ignore the wind", "Wait for it to stop"],
    correctAnswer: "B"
  },
  {
    id: 329,
    section: "Working at height",
    text: "What is the purpose of an 'anchor point' for a safety harness?",
    options: ["To look professional", "A secure point to which the harness is attached to stop or catch a fall", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 337,
    section: "Working at height",
    text: "What should you do before using a ladder?",
    options: ["Just climb up", "Inspect it for damage, ensure it is on level ground and is secured or footed", "Wait for someone to check it", "Ignore the inspection"],
    correctAnswer: "B"
  },
  {
    id: 325,
    section: "Working at height",
    text: "What is the purpose of personal fall protection (e.g., a safety harness)?",
    options: ["To look professional", "To stop you from falling or to catch you safely if you do fall", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 342,
    section: "Working at height",
    text: "What is the purpose of a 'mobile elevating work platform' (MEWP)?",
    options: ["To have a break", "To provide a safe working platform that can be moved to different locations", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 330,
    section: "Working at height",
    text: "What should you do if you see an anchor point that looks unsafe?",
    options: ["Ignore it", "Don't use it and report it to your supervisor immediately", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 338,
    section: "Working at height",
    text: "Why should you always maintain 'three points of contact' when climbing a ladder?",
    options: ["To look professional", "To ensure that you stay balanced and reduce the risk of falling", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 333,
    section: "Working at height",
    text: "Why should you never throw tools or materials down from a height?",
    options: ["It's messy", "They could strike and seriously injure someone below", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 345,
    section: "Working at height",
    text: "Why is it important to follow the site's working at height policy?",
    options: ["To save time", "To ensure that everyone works safely and reduces the risk of falls", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 334,
    section: "Working at height",
    text: "What should you do if you are working below someone who is working at height?",
    options: ["Work faster", "Be aware of the risk of falling objects and stay clear of the area if possible", "Ignore the risk", "Wait for them to finish"],
    correctAnswer: "B"
  },
  {
    id: 339,
    section: "Working at height",
    text: "What is the purpose of a 'scaffold tag'?",
    options: ["To look professional", "To show that the scaffold has been inspected and is safe to use", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 356,
    section: "Excavations and confined spaces",
    text: "What are the main risks of working in a confined space?",
    options: ["A headache", "Lack of oxygen, toxic gases, fire, explosion and drowning", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 346,
    section: "Excavations and confined spaces",
    text: "What is the main risk of working in an excavation?",
    options: ["A headache", "The sides collapsing and burying you", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 361,
    section: "Excavations and confined spaces",
    text: "What is the purpose of a 'standby person' when someone is working in a confined space?",
    options: ["To have a chat", "To stay outside the space, maintain communication and raise the alarm in an emergency", "To watch the work", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 351,
    section: "Excavations and confined spaces",
    text: "Why is it important to keep vehicles and plant away from the edge of an excavation?",
    options: ["To look professional", "The weight could cause the sides to collapse", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 347,
    section: "Excavations and confined spaces",
    text: "How can you stay safe when working in an excavation?",
    options: ["Work faster", "Ensure the sides are supported or battered back and follow the site's safety rules", "Ignore the risks", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 362,
    section: "Excavations and confined spaces",
    text: "Why should you never enter a confined space to rescue someone without the correct equipment and training?",
    options: ["It's against the rules", "You could become a victim yourself and make the situation worse", "You might get stuck", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 352,
    section: "Excavations and confined spaces",
    text: "What is the purpose of 'edge protection' around an excavation?",
    options: ["To look professional", "To prevent people and vehicles from falling into the excavation", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 348,
    section: "Excavations and confined spaces",
    text: "What is the purpose of 'trench support'?",
    options: ["To look professional", "To prevent the sides of an excavation from collapsing", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 363,
    section: "Excavations and confined spaces",
    text: "What is the purpose of a 'rescue plan' for confined space work?",
    options: ["To save time", "To ensure that anyone who gets into difficulty can be rescued quickly and safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 353,
    section: "Excavations and confined spaces",
    text: "What should you do if you see an excavation that does not have edge protection?",
    options: ["Ignore it", "Report it to your supervisor immediately", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 349,
    section: "Excavations and confined spaces",
    text: "Why should you never enter an excavation that is not supported or battered back?",
    options: ["It's messy", "The sides could collapse at any time without warning and bury you", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 364,
    section: "Excavations and confined spaces",
    text: "Why is it important to have good lighting in a confined space?",
    options: ["To see what you are doing", "To ensure you can work safely and see any hazards", "To look professional", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 354,
    section: "Excavations and confined spaces",
    text: "Why should you never store materials near the edge of an excavation?",
    options: ["It's messy", "The weight could cause the sides to collapse and materials could fall on people below", "It's against the rules", "To save space"],
    correctAnswer: "B"
  },
  {
    id: 350,
    section: "Excavations and confined spaces",
    text: "What should you do before entering an excavation?",
    options: ["Just jump in", "Ensure it has been inspected and is safe to enter", "Wait for someone to tell you", "Ignore the inspection"],
    correctAnswer: "B"
  },
  {
    id: 365,
    section: "Excavations and confined spaces",
    text: "What should you do if you feel unwell while working in a confined space?",
    options: ["Ignore it and carry on", "Leave the space immediately and report it to your supervisor", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 355,
    section: "Excavations and confined spaces",
    text: "What is the purpose of a 'confined space'?",
    options: ["To have a break", "An area that is enclosed and has a risk of fire, explosion, gas or lack of oxygen", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 357,
    section: "Excavations and confined spaces",
    text: "Who is allowed to work in a confined space on site?",
    options: ["Anyone who is not claustrophobic", "Only those who are trained, authorized and have a permit to work", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 358,
    section: "Excavations and confined spaces",
    text: "What is a 'confined space permit'?",
    options: ["A permit to have a break", "A permit that identifies the hazards and the safety measures required to work in a confined space", "A record of hours worked", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 359,
    section: "Excavations and confined spaces",
    text: "Why is it important to test the atmosphere in a confined space before entering?",
    options: ["To save time", "To ensure there is enough oxygen and no toxic or explosive gases are present", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 360,
    section: "Excavations and confined spaces",
    text: "What should you do if the atmosphere in a confined space is unsafe?",
    options: ["Enter anyway and be quick", "Don't enter and report it to your supervisor immediately", "Ignore it", "Wait for it to clear"],
    correctAnswer: "B"
  },
  {
    id: 366,
    section: "Excavations and confined spaces",
    text: "Why should you never smoke in or near a confined space?",
    options: ["It's against the rules", "It could cause a fire or an explosion if flammable gases are present", "It's messy", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 367,
    section: "Excavations and confined spaces",
    text: "What is the purpose of 'ventilation' in a confined space?",
    options: ["To keep you cool", "To provide fresh air and remove any toxic or explosive gases", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 368,
    section: "Excavations and confined spaces",
    text: "What should you do if the ventilation in a confined space fails?",
    options: ["Carry on and be quick", "Leave the space immediately and report it to your supervisor", "Ignore it", "Wait for it to restart"],
    correctAnswer: "B"
  },
  {
    id: 369,
    section: "Excavations and confined spaces",
    text: "Why is it important to follow the site's confined space policy?",
    options: ["To save time", "To ensure that everyone works safely and reduces the risk of accidents", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 370,
    section: "Excavations and confined spaces",
    text: "What should you do if you are unsure about the safety of a confined space?",
    options: ["Guess", "Ask your supervisor or check the permit to work information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 396,
    section: "Environmental awareness and waste control",
    text: "Why is it important to follow the site's environmental policy?",
    options: ["To save time", "To ensure that everyone works in an environmentally responsible way", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 371,
    section: "Environmental awareness and waste control",
    text: "What is the main goal of environmental awareness on site?",
    options: ["To save money", "To reduce the impact of construction work on the environment", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 411,
    section: "Environmental awareness and waste control",
    text: "Why should you never store materials on the bank of a river or stream?",
    options: ["It's messy", "They could fall or be washed into the water and cause pollution", "It's against the rules", "To save space"],
    correctAnswer: "B"
  },
  {
    id: 386,
    section: "Environmental awareness and waste control",
    text: "Why is it important to reduce dust pollution on site?",
    options: ["To save money", "To prevent respiratory problems and reduce the impact on the local community", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 401,
    section: "Environmental awareness and waste control",
    text: "What should you do if you are asked to do something that you think will harm the environment?",
    options: ["Do it anyway", "Tell your supervisor that it is harmful and you cannot do it", "Ignore it", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 376,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of 'segregating' waste on site?",
    options: ["To look professional", "To separate different types of waste (e.g., wood, metal, plastic) for recycling", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 391,
    section: "Environmental awareness and waste control",
    text: "Why is it important to save energy on site?",
    options: ["To save money", "To reduce the site's carbon footprint and save natural resources", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 406,
    section: "Environmental awareness and waste control",
    text: "Why should you never use a hose to wash down a site road unless it is necessary?",
    options: ["It's messy", "It wastes water and can wash soil and silt into watercourses", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 381,
    section: "Environmental awareness and waste control",
    text: "Why should you never wash a spill into a drain?",
    options: ["It's messy", "It will pollute the water system and harm wildlife", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 416,
    section: "Environmental awareness and waste control",
    text: "What should you do if you are asked to use a chemical that you have not used before?",
    options: ["Just use it", "Check the COSHH assessment and the safety data sheet for information on how to use it safely", "Ignore the risks", "Wait for someone to show you"],
    correctAnswer: "B"
  },
  {
    id: 372,
    section: "Environmental awareness and waste control",
    text: "How can you help to protect the environment on site?",
    options: ["Work faster", "Reduce waste, prevent pollution and follow the site's environmental rules", "Ignore the environment", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 397,
    section: "Environmental awareness and waste control",
    text: "What should you do if you are unsure about the environmental rules on site?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 412,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of a 'pollution incident response plan'?",
    options: ["To save time", "To ensure that any pollution incidents are managed quickly and effectively to minimize damage", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 387,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see a protected species (e.g., bats, badgers) on site?",
    options: ["Ignore them", "Stop work in the area and report it to your supervisor immediately", "Move them yourself", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 402,
    section: "Environmental awareness and waste control",
    text: "Why should you never wash out a concrete mixer into a drain?",
    options: ["It's messy", "The concrete will set in the drain and cause a blockage and pollution", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 377,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see someone putting waste in the wrong skip?",
    options: ["Ignore them", "Tell them which skip to use and report it if necessary", "Wait for someone else to fix it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 392,
    section: "Environmental awareness and waste control",
    text: "How can you save energy on site?",
    options: ["Leave everything on", "Turn off lights and equipment when not in use and use energy-efficient options", "Ignore the energy", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 407,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of 'drip trays' under plant and equipment?",
    options: ["To collect rain", "To catch any small leaks of oil or fuel and prevent them from reaching the ground", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 382,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of a 'silt fence'?",
    options: ["To keep people out", "To prevent soil and silt from being washed into watercourses", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 417,
    section: "Environmental awareness and waste control",
    text: "Why should you never mix different types of hazardous waste?",
    options: ["It's messy", "It can cause a dangerous reaction and makes it more difficult and expensive to dispose of", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 373,
    section: "Environmental awareness and waste control",
    text: "Why is it important to reduce waste on site?",
    options: ["To save money", "To reduce the amount of waste sent to landfill and save natural resources", "To keep the site tidy", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 398,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of 'environmental monitoring' on site?",
    options: ["To look professional", "To check that the site's environmental measures are working correctly", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 413,
    section: "Environmental awareness and waste control",
    text: "Why is it important to have regular environmental inspections on site?",
    options: ["To save time", "To identify any environmental risks and ensure that safety measures are working correctly", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 388,
    section: "Environmental awareness and waste control",
    text: "Why is it important to protect wildlife and habitats on site?",
    options: ["To save money", "To preserve biodiversity and follow the law", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 403,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of a 'bund' around a fuel tank?",
    options: ["To look professional", "To contain any leaks or spills from the tank and prevent them from reaching the ground", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 378,
    section: "Environmental awareness and waste control",
    text: "Why should you never burn waste on site?",
    options: ["It's messy", "It causes air pollution and is illegal without a permit", "It's against the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 393,
    section: "Environmental awareness and waste control",
    text: "Why is it important to save water on site?",
    options: ["To save money", "To reduce the site's water consumption and save natural resources", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 408,
    section: "Environmental awareness and waste control",
    text: "What should you do if you find a drip tray is full?",
    options: ["Ignore it", "Empty it into a designated hazardous waste container and report it if necessary", "Wait for it to overflow", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 383,
    section: "Environmental awareness and waste control",
    text: "How can you prevent noise pollution on site?",
    options: ["Work faster", "Use well-maintained equipment, turn off engines when not in use and follow the site's noise rules", "Ignore the noise", "Wait for someone to complain"],
    correctAnswer: "B"
  },
  {
    id: 418,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of a 'hazardous waste consignment note'?",
    options: ["A list of waste", "A legal document that tracks the movement and disposal of hazardous waste", "A record of waste", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 374,
    section: "Environmental awareness and waste control",
    text: "What is the 'waste hierarchy'?",
    options: ["A list of waste", "A sequence of actions to manage waste: reduce, reuse, recycle, recover, dispose", "A record of waste", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 399,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see an environmental incident (e.g., a large spill)?",
    options: ["Ignore it", "Raise the alarm immediately and follow the site's emergency procedures", "Wait for someone else to see it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 414,
    section: "Environmental awareness and waste control",
    text: "What should you do if you find an environmental hazard on site?",
    options: ["Ignore it", "Report it to your supervisor immediately", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 389,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of an 'environmental management plan' (EMP)?",
    options: ["To save money", "To identify the environmental risks and the measures required to manage them", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 404,
    section: "Environmental awareness and waste control",
    text: "Why is it important to keep fuel tanks locked when not in use?",
    options: ["To save money", "To prevent theft and unauthorized use, which could lead to spills", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 379,
    section: "Environmental awareness and waste control",
    text: "What is the purpose of a 'spill kit'?",
    options: ["To clean your car", "To contain and clean up accidental spills of oil, fuel or chemicals", "To wash the site", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 394,
    section: "Environmental awareness and waste control",
    text: "How can you save water on site?",
    options: ["Leave taps running", "Turn off taps when not in use and report any leaks immediately", "Ignore the water", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 409,
    section: "Environmental awareness and waste control",
    text: "Why is it important to use 'biodegradable' oils and fuels where possible?",
    options: ["To save money", "They break down more easily in the environment and are less harmful if spilled", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 384,
    section: "Environmental awareness and waste control",
    text: "Why is it important to reduce noise pollution on site?",
    options: ["To save money", "To prevent hearing damage and reduce the impact on the local community", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 419,
    section: "Environmental awareness and waste control",
    text: "Why is it important to use a licensed waste carrier to remove waste from site?",
    options: ["To save money", "To ensure that the waste is disposed of legally and responsibly", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 375,
    section: "Environmental awareness and waste control",
    text: "How can you reduce waste on site?",
    options: ["Order more materials", "Only order what you need, store materials correctly and use them efficiently", "Throw everything away", "Ignore the waste"],
    correctAnswer: "B"
  },
  {
    id: 400,
    section: "Environmental awareness and waste control",
    text: "Why is it important to learn from environmental incidents on site?",
    options: ["To save time", "To prevent them from happening again and to improve the site's environmental performance", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 415,
    section: "Environmental awareness and waste control",
    text: "Why is it important to keep the site's environmental records up to date?",
    options: ["To look professional", "To demonstrate that the site is working in an environmentally responsible way and following the law", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 390,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see someone polluting the environment on site?",
    options: ["Ignore them", "Tell them to stop and report it to your supervisor immediately", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 405,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see a fuel tank that is leaking?",
    options: ["Ignore it", "Report it to your supervisor immediately and use a spill kit if safe and trained", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 380,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see a spill on site?",
    options: ["Ignore it", "Report it to your supervisor immediately and use a spill kit if safe and trained", "Wash it away with water", "Cover it with soil"],
    correctAnswer: "B"
  },
  {
    id: 395,
    section: "Environmental awareness and waste control",
    text: "What should you do if you find a leak on site?",
    options: ["Ignore it", "Report it to your supervisor immediately", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 410,
    section: "Environmental awareness and waste control",
    text: "What should you do if you are working near a river or stream?",
    options: ["Work faster", "Take extra care to prevent any pollution from reaching the water", "Ignore the water", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 385,
    section: "Environmental awareness and waste control",
    text: "How can you prevent dust pollution on site?",
    options: ["Work faster", "Use water suppression, dust extraction and follow the site's dust rules", "Ignore the dust", "Wait for it to rain"],
    correctAnswer: "B"
  },
  {
    id: 420,
    section: "Environmental awareness and waste control",
    text: "What should you do if you see waste being fly-tipped on or near the site?",
    options: ["Ignore it", "Report it to your supervisor or the local authority immediately", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 431,
    section: "Occupational health",
    text: "What should you do if you feel tingling or numbness in your fingers after using a vibrating tool?",
    options: ["Ignore it and carry on", "Stop work and report it to your supervisor immediately", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 421,
    section: "Occupational health",
    text: "What is the main goal of occupational health on site?",
    options: ["To save money", "To protect your health and well-being while you are at work", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 441,
    section: "Occupational health",
    text: "How can you protect yourself from the sun on site?",
    options: ["Work faster", "Keep your shirt on, wear a hat and use high-factor sunscreen", "Ignore the sun", "Wait for it to go down"],
    correctAnswer: "B"
  },
  {
    id: 426,
    section: "Occupational health",
    text: "How can you protect your hearing on site?",
    options: ["Work faster", "Wear suitable hearing protection (e.g., earplugs, earmuffs) in noisy areas", "Ignore the noise", "Wait for it to stop"],
    correctAnswer: "B"
  },
  {
    id: 436,
    section: "Occupational health",
    text: "What is the main risk of exposure to hazardous chemicals on site?",
    options: ["A headache", "Skin irritation, chemical burns, respiratory problems and poisoning", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 446,
    section: "Occupational health",
    text: "What is the purpose of 'welfare facilities' on site?",
    options: ["To have a break", "To provide toilets, washing facilities, drinking water and a place to eat and rest", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 422,
    section: "Occupational health",
    text: "How can you protect your health on site?",
    options: ["Work faster", "Follow the site's health rules, use the correct PPE and report any health concerns", "Ignore the risks", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 432,
    section: "Occupational health",
    text: "What is the main risk of exposure to dust on site?",
    options: ["A headache", "Respiratory problems, lung disease and cancer", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 442,
    section: "Occupational health",
    text: "Why is it important to drink plenty of water in hot weather?",
    options: ["To save money", "To prevent dehydration and heat exhaustion", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 427,
    section: "Occupational health",
    text: "Why should you never use cotton wool as hearing protection?",
    options: ["It's messy", "It does not provide any real protection against loud noise", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 437,
    section: "Occupational health",
    text: "How can you protect your skin on site?",
    options: ["Work faster", "Wear suitable gloves and protective clothing and use barrier creams if recommended", "Ignore the risks", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 447,
    section: "Occupational health",
    text: "Why is it important to keep the welfare facilities clean and tidy?",
    options: ["To look professional", "To prevent the spread of germs and ensure they remain safe and pleasant to use", "To save space", "To keep the site manager happy"],
    correctAnswer: "B"
  },
  {
    id: 423,
    section: "Occupational health",
    text: "What is the purpose of a 'health surveillance' program?",
    options: ["To save money", "To monitor your health for any signs of work-related illness (e.g., hearing loss, lung disease)", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 433,
    section: "Occupational health",
    text: "How can you protect your lungs on site?",
    options: ["Work faster", "Use water suppression, dust extraction and wear a suitable respirator (RPE)", "Ignore the dust", "Wait for it to rain"],
    correctAnswer: "B"
  },
  {
    id: 443,
    section: "Occupational health",
    text: "What should you do if you feel unwell due to the heat?",
    options: ["Ignore it and carry on", "Stop work, go to a cool area, drink water and report it to your supervisor", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 428,
    section: "Occupational health",
    text: "What should you do if you find your hearing protection is damaged or uncomfortable?",
    options: ["Ignore it", "Ask your supervisor for a replacement or a different type", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 438,
    section: "Occupational health",
    text: "Why is it important to wash your hands before eating, drinking or smoking?",
    options: ["To look professional", "To remove any hazardous substances and prevent them from entering your body", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 448,
    section: "Occupational health",
    text: "What should you do if you find the welfare facilities are in a poor condition?",
    options: ["Ignore it", "Report it to your supervisor or the site manager immediately", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 424,
    section: "Occupational health",
    text: "Why is it important to attend health surveillance appointments?",
    options: ["To have a break", "To ensure that any health problems are identified early and managed correctly", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 434,
    section: "Occupational health",
    text: "Why is it important to have a 'face fit test' for your respirator?",
    options: ["To look professional", "To ensure that it provides a good seal and protects you effectively from dust and fumes", "To save time", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 444,
    section: "Occupational health",
    text: "What is the main risk of exposure to cold weather on site?",
    options: ["A headache", "Hypothermia and frostbite", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 429,
    section: "Occupational health",
    text: "What is the main risk of exposure to vibration from hand-held tools?",
    options: ["A headache", "Hand-arm vibration syndrome (HAVS), also known as vibration white finger", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 439,
    section: "Occupational health",
    text: "What should you do if you get a hazardous chemical on your skin?",
    options: ["Ignore it", "Wash it off immediately with plenty of clean water and report it to your supervisor", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 449,
    section: "Occupational health",
    text: "Why is it important to follow the site's health and well-being policy?",
    options: ["To save time", "To ensure that everyone works in a healthy and safe way", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 425,
    section: "Occupational health",
    text: "What is the main risk of exposure to loud noise on site?",
    options: ["A headache", "Permanent hearing loss and tinnitus (ringing in the ears)", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 435,
    section: "Occupational health",
    text: "What should you do if you find your respirator is damaged or does not fit correctly?",
    options: ["Ignore it", "Ask your supervisor for a replacement or a different type", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 445,
    section: "Occupational health",
    text: "How can you protect yourself from the cold on site?",
    options: ["Work faster", "Wear warm, layered clothing and take regular breaks in a heated area", "Ignore the cold", "Wait for it to warm up"],
    correctAnswer: "B"
  },
  {
    id: 430,
    section: "Occupational health",
    text: "How can you reduce the risk of HAVS on site?",
    options: ["Work faster", "Use well-maintained tools, take regular breaks and keep your hands warm", "Ignore the vibration", "Wait for it to stop"],
    correctAnswer: "B"
  },
  {
    id: 440,
    section: "Occupational health",
    text: "What is the main risk of exposure to the sun on site?",
    options: ["A headache", "Sunburn, heat exhaustion and skin cancer", "A cold", "Nothing"],
    correctAnswer: "B"
  },
  {
    id: 450,
    section: "Occupational health",
    text: "What should you do if you are unsure about a health risk on site?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 461,
    section: "Personal protective equipment",
    text: "Why should you always wear safety boots with steel toe caps and mid-sole protection?",
    options: ["To look professional", "To provide the maximum level of protection for your feet", "To follow the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 451,
    section: "Personal protective equipment",
    text: "What is the main purpose of personal protective equipment (PPE)?",
    options: ["To look professional", "To protect you from hazards that cannot be completely removed in other ways", "To follow the rules", "To keep you warm"],
    correctAnswer: "B"
  },
  {
    id: 471,
    section: "Personal protective equipment",
    text: "Why is it important to follow the manufacturer's instructions for your PPE?",
    options: ["To save time", "To ensure it is used, cleaned and stored correctly to remain effective", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 456,
    section: "Personal protective equipment",
    text: "Why should you never modify your PPE yourself?",
    options: ["It's messy", "It could make it unsafe and reduce the level of protection it provides", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 466,
    section: "Personal protective equipment",
    text: "What is the purpose of 'safety gloves'?",
    options: ["To look professional", "To protect your hands from sharp edges, chemicals and abrasions", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 452,
    section: "Personal protective equipment",
    text: "Who is responsible for providing you with the correct PPE for your job?",
    options: ["You are", "Your employer", "The site manager", "The client"],
    correctAnswer: "B"
  },
  {
    id: 462,
    section: "Personal protective equipment",
    text: "What is the purpose of 'high-visibility clothing'?",
    options: ["To look professional", "To ensure that you are easily seen by vehicle and plant operators", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 472,
    section: "Personal protective equipment",
    text: "What should you do with your PPE when you are not using it?",
    options: ["Leave it where it is", "Store it correctly in a designated storage area", "Take it home", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 457,
    section: "Personal protective equipment",
    text: "What is the purpose of a 'safety helmet'?",
    options: ["To look professional", "To protect your head from falling objects and accidental bumps", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 467,
    section: "Personal protective equipment",
    text: "Why is it important to use the correct type of glove for the job?",
    options: ["To look professional", "Different gloves provide protection against different hazards (e.g., cut-resistant, chemical-resistant)", "To save money", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 453,
    section: "Personal protective equipment",
    text: "What should you do if you are not provided with the correct PPE?",
    options: ["Do the job anyway", "Tell your supervisor that you cannot work safely without the correct PPE", "Ignore it", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 463,
    section: "Personal protective equipment",
    text: "Why is it important to keep your high-visibility clothing clean?",
    options: ["To look professional", "To ensure that it remains effective and easy to see", "To save money", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 473,
    section: "Personal protective equipment",
    text: "Why should you never share your PPE with someone else?",
    options: ["It's messy", "It may not fit them correctly and could spread germs", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 458,
    section: "Personal protective equipment",
    text: "When should you wear a safety helmet on site?",
    options: ["Only when you think it's dangerous", "At all times in designated 'hard hat' areas", "Only when the site manager is watching", "Never"],
    correctAnswer: "B"
  },
  {
    id: 468,
    section: "Personal protective equipment",
    text: "What is the purpose of 'hearing protection'?",
    options: ["To look professional", "To protect your hearing from loud noise", "To listen to music", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 454,
    section: "Personal protective equipment",
    text: "Why is it important to wear your PPE correctly?",
    options: ["To look professional", "To ensure that it provides the maximum level of protection", "To follow the rules", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 464,
    section: "Personal protective equipment",
    text: "What is the purpose of 'safety glasses' or 'goggles'?",
    options: ["To look professional", "To protect your eyes from flying objects, dust and chemicals", "To see better", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 474,
    section: "Personal protective equipment",
    text: "What should you do if you are unsure about which PPE you need for a job?",
    options: ["Guess", "Ask your supervisor or check the risk assessment information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 459,
    section: "Personal protective equipment",
    text: "Why should you never wear a safety helmet over a hoodie or a cap?",
    options: ["It's messy", "It will prevent the helmet from fitting correctly and securely", "It's against the rules", "To look cool"],
    correctAnswer: "B"
  },
  {
    id: 469,
    section: "Personal protective equipment",
    text: "When should you wear hearing protection on site?",
    options: ["Only when you think it's dangerous", "In all designated 'hearing protection' areas and when using noisy equipment", "Only when the site manager is watching", "Never"],
    correctAnswer: "B"
  },
  {
    id: 455,
    section: "Personal protective equipment",
    text: "What should you do if your PPE is damaged or worn out?",
    options: ["Ignore it", "Ask your supervisor for a replacement immediately", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 465,
    section: "Personal protective equipment",
    text: "When should you wear eye protection on site?",
    options: ["Only when you think it's dangerous", "Whenever there is a risk of eye injury (e.g., grinding, drilling, using chemicals)", "Only when the site manager is watching", "Never"],
    correctAnswer: "B"
  },
  {
    id: 475,
    section: "Personal protective equipment",
    text: "Why is it important to follow the site's PPE policy?",
    options: ["To save time", "To ensure that everyone works safely and reduces the risk of injury", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 460,
    section: "Personal protective equipment",
    text: "What is the purpose of 'safety boots'?",
    options: ["To look professional", "To protect your feet from sharp objects and heavy items that could be dropped", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 470,
    section: "Personal protective equipment",
    text: "What is the purpose of 'respiratory protective equipment' (RPE)?",
    options: ["To look professional", "To protect your lungs from dust, fumes and toxic gases", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 486,
    section: "First aid and emergency procedures",
    text: "What is the purpose of an 'accident book'?",
    options: ["To look professional", "To record the details of all accidents and injuries that happen on site", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 476,
    section: "First aid and emergency procedures",
    text: "What is the main goal of first aid on site?",
    options: ["To save money", "To provide immediate care to someone who is injured or unwell until professional help arrives", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 496,
    section: "First aid and emergency procedures",
    text: "What should you do if you are unsure about the site's emergency procedures?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 506,
    section: "First aid and emergency procedures",
    text: "What should you do if you see a defibrillator that is damaged or has a low battery?",
    options: ["Ignore it", "Report it to your supervisor or a first aider immediately", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 516,
    section: "First aid and emergency procedures",
    text: "Why is it important to check in regularly when working alone?",
    options: ["To have a chat", "To ensure that someone knows you are safe and to raise the alarm if you don't check in", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 481,
    section: "First aid and emergency procedures",
    text: "What should you do if you see someone who is seriously injured?",
    options: ["Try to move them", "Raise the alarm immediately and call for a first aider or the emergency services", "Wait for someone else to see them", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 491,
    section: "First aid and emergency procedures",
    text: "Why is it important to keep all emergency exits and escape routes clear?",
    options: ["To look professional", "To ensure everyone can evacuate the building quickly and safely in an emergency", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 501,
    section: "First aid and emergency procedures",
    text: "Why is it important to keep your first aid training up to date?",
    options: ["To save time", "To ensure you have the skills and confidence to help in an emergency", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 511,
    section: "First aid and emergency procedures",
    text: "Why is it important to have a 'lone working' policy on site?",
    options: ["To save money", "To ensure that anyone working alone is safe and has a way to call for help in an emergency", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 477,
    section: "First aid and emergency procedures",
    text: "How can you find out who the first aiders are on site?",
    options: ["Ask everyone", "Check the site notice board or the first aid signs", "Wait for someone to tell you", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 487,
    section: "First aid and emergency procedures",
    text: "Why is it important to record all accidents in the accident book?",
    options: ["To save time", "It is a legal requirement and helps to identify trends and improve safety", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 497,
    section: "First aid and emergency procedures",
    text: "Why is it important to have regular emergency drills on site?",
    options: ["To save time", "To ensure everyone knows what to do and where to go in the event of a real emergency", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 507,
    section: "First aid and emergency procedures",
    text: "Why is it important to know the location of the nearest defibrillator?",
    options: ["To save time", "To ensure it can be reached quickly in the event of a cardiac arrest", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 517,
    section: "First aid and emergency procedures",
    text: "What should you do if you are unsure about the lone working rules on site?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 482,
    section: "First aid and emergency procedures",
    text: "Why should you never move a seriously injured person unless they are in immediate danger?",
    options: ["It's against the rules", "You could make their injuries worse", "You might hurt yourself", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 492,
    section: "First aid and emergency procedures",
    text: "What should you do if you see an emergency exit that is blocked?",
    options: ["Ignore it", "Report it to your supervisor immediately and clear it if safe to do so", "Wait for someone else to clear it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 502,
    section: "First aid and emergency procedures",
    text: "What should you do if you are a trained first aider and you see someone who is injured?",
    options: ["Ignore them", "Provide first aid within the scope of your training and call for professional help if needed", "Wait for someone else to help", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 512,
    section: "First aid and emergency procedures",
    text: "What should you do if you are a lone worker and you lose communication with your base?",
    options: ["Carry on and be careful", "Stop work and try to re-establish communication immediately", "Ignore it", "Wait for someone to call you"],
    correctAnswer: "B"
  },
  {
    id: 478,
    section: "First aid and emergency procedures",
    text: "What should you do if you are injured on site?",
    options: ["Ignore it and carry on", "Report it to your supervisor immediately and seek first aid if necessary", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 488,
    section: "First aid and emergency procedures",
    text: "What should you do if you are asked to provide a statement about an accident?",
    options: ["Guess what happened", "Provide an honest and accurate account of what you saw", "Ignore the request", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 498,
    section: "First aid and emergency procedures",
    text: "What should you do if you see someone who is having a medical emergency (e.g., a heart attack)?",
    options: ["Try to treat them yourself", "Raise the alarm immediately and call for a first aider or the emergency services", "Wait for someone else to see them", "Ignore them"],
    correctAnswer: "B"
  },
  {
    id: 508,
    section: "First aid and emergency procedures",
    text: "What should you do if you are unsure about the first aid facilities on site?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 518,
    section: "First aid and emergency procedures",
    text: "Why is it important to follow the site's lone working policy?",
    options: ["To save time", "To ensure that everyone who works alone is safe and protected", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 483,
    section: "First aid and emergency procedures",
    text: "What is the purpose of a 'first aid box'?",
    options: ["To look professional", "To provide basic medical supplies for treating minor injuries", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 493,
    section: "First aid and emergency procedures",
    text: "What is the purpose of an 'emergency assembly point'?",
    options: ["To have a break", "To ensure everyone is accounted for in the event of an evacuation", "To meet your workmates", "To wait for the emergency services"],
    correctAnswer: "B"
  },
  {
    id: 503,
    section: "First aid and emergency procedures",
    text: "Why should you never provide first aid that you are not trained to do?",
    options: ["It's against the rules", "You could make the person's injuries worse", "You might hurt yourself", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 513,
    section: "First aid and emergency procedures",
    text: "Why should you never work alone if the task is high-risk (e.g., working at height, in a confined space)?",
    options: ["It's against the rules", "The risks are too high and you need someone there to help or raise the alarm in an emergency", "You might get lonely", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 479,
    section: "First aid and emergency procedures",
    text: "Why is it important to report all accidents and 'near misses' on site?",
    options: ["To save time", "To ensure they are investigated and measures are put in place to prevent them from happening again", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 489,
    section: "First aid and emergency procedures",
    text: "What is the purpose of an 'emergency procedure'?",
    options: ["To save time", "To ensure everyone knows what to do in the event of a serious incident (e.g., fire, gas leak, collapse)", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 499,
    section: "First aid and emergency procedures",
    text: "Why is it important to provide clear and accurate information to the emergency services?",
    options: ["To save time", "To ensure they can reach the site quickly and have the correct information to help", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 509,
    section: "First aid and emergency procedures",
    text: "Why is it important to follow the site's first aid policy?",
    options: ["To save time", "To ensure that everyone has access to the correct care in the event of an injury or illness", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 519,
    section: "First aid and emergency procedures",
    text: "What should you do if you see a lone worker who looks like they are in difficulty?",
    options: ["Ignore them", "Check if they are okay and raise the alarm if necessary", "Wait for someone else to help", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 484,
    section: "First aid and emergency procedures",
    text: "What should you do if you use something from the first aid box?",
    options: ["Ignore it", "Tell a first aider so that it can be replaced", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 494,
    section: "First aid and emergency procedures",
    text: "What should you do when you reach the assembly point?",
    options: ["Go home", "Report to the person in charge and wait for further instructions", "Ignore the person in charge", "Wait for someone to tell you to go home"],
    correctAnswer: "B"
  },
  {
    id: 504,
    section: "First aid and emergency procedures",
    text: "What is the purpose of a 'defibrillator' (AED)?",
    options: ["To save energy", "To provide an electric shock to the heart in the event of a cardiac arrest", "To provide light", "To charge batteries"],
    correctAnswer: "B"
  },
  {
    id: 514,
    section: "First aid and emergency procedures",
    text: "What is the purpose of a 'personal alarm' for a lone worker?",
    options: ["To make noise", "To allow the worker to raise the alarm quickly and easily in an emergency", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 480,
    section: "First aid and emergency procedures",
    text: "What is a 'near miss'?",
    options: ["An accident that nearly happened", "An event that could have caused injury or damage but didn't", "A record of hours worked", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 490,
    section: "First aid and emergency procedures",
    text: "What should you do if you hear the site's emergency alarm?",
    options: ["Finish what you are doing", "Follow the site's emergency procedures and evacuate to the assembly point", "Wait for someone to tell you what to do", "Call your family"],
    correctAnswer: "B"
  },
  {
    id: 500,
    section: "First aid and emergency procedures",
    text: "What should you do if you are asked to help in an emergency?",
    options: ["Ignore the request", "Follow the instructions of the person in charge if you are safe and trained to do so", "Wait for someone else to help", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 510,
    section: "First aid and emergency procedures",
    text: "What should you do if you are working alone and you are injured?",
    options: ["Ignore it and carry on", "Use your mobile phone or radio to call for help immediately", "Wait until the end of the shift", "Tell no one"],
    correctAnswer: "B"
  },
  {
    id: 520,
    section: "First aid and emergency procedures",
    text: "Why is it important to learn from lone working incidents on site?",
    options: ["To save time", "To prevent them from happening again and to improve the site's lone working safety", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 485,
    section: "First aid and emergency procedures",
    text: "Why is it important to know the location of the nearest first aid box?",
    options: ["To save time", "To ensure you can get help quickly in the event of a minor injury", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 495,
    section: "First aid and emergency procedures",
    text: "Why should you never re-enter a building after an evacuation until you are told it is safe to do so?",
    options: ["It's against the rules", "The danger may still be present and you could be putting yourself at risk", "You might get caught", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 505,
    section: "First aid and emergency procedures",
    text: "Who is allowed to use a defibrillator on site?",
    options: ["Only doctors", "Anyone, as the machine provides clear voice instructions on how to use it safely", "Only first aiders", "The site manager"],
    correctAnswer: "B"
  },
  {
    id: 515,
    section: "First aid and emergency procedures",
    text: "What should you do if you find a personal alarm is not working?",
    options: ["Ignore it", "Report it to your supervisor and get a replacement before starting work", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 531,
    section: "Hazardous substances",
    text: "What does a symbol of a hand and a test tube with liquid dripping on it mean?",
    options: ["Toxic", "Flammable", "Corrosive", "Explosive"],
    correctAnswer: "C"
  },
  {
    id: 521,
    section: "Hazardous substances",
    text: "What does COSHH stand for?",
    options: ["Control of Substances Hazardous to Health", "Collection of Safety and Health Hazards", "Company Occupational Safety and Health Help", "Control of Site Hazards and Health"],
    correctAnswer: "A"
  },
  {
    id: 536,
    section: "Hazardous substances",
    text: "What should you do if you feel unwell while using a hazardous substance?",
    options: ["Ignore it and carry on", "Stop work, leave the area and report it to your supervisor immediately", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 526,
    section: "Hazardous substances",
    text: "What should you do if you are asked to use a substance that does not have a COSHH assessment?",
    options: ["Use it anyway", "Tell your supervisor that you cannot use it until an assessment has been carried out", "Ignore it", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 532,
    section: "Hazardous substances",
    text: "What does a symbol of an exploding bomb mean?",
    options: ["Toxic", "Flammable", "Corrosive", "Explosive"],
    correctAnswer: "D"
  },
  {
    id: 522,
    section: "Hazardous substances",
    text: "What is the purpose of a COSHH assessment?",
    options: ["To save money", "To identify the risks of using hazardous substances and the safety measures required", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 537,
    section: "Hazardous substances",
    text: "Why should you always store hazardous substances correctly when not in use?",
    options: ["To look professional", "To prevent accidental spills, fire or unauthorized use", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 527,
    section: "Hazardous substances",
    text: "Why should you never decant a hazardous substance into an unlabeled container (e.g., a lemonade bottle)?",
    options: ["It's messy", "Someone could mistake it for a drink and be seriously poisoned or injured", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 533,
    section: "Hazardous substances",
    text: "Why should you never eat, drink or smoke while using hazardous substances?",
    options: ["It's against the rules", "You could accidentally swallow the substance and be poisoned", "It's messy", "To save time"],
    correctAnswer: "B"
  },
  {
    id: 523,
    section: "Hazardous substances",
    text: "Why is it important to read the COSHH assessment before using a substance?",
    options: ["To save time", "To ensure you know how to use it safely and what PPE you need", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 538,
    section: "Hazardous substances",
    text: "What is the purpose of a 'hazardous waste' container?",
    options: ["To look professional", "To safely store waste that is harmful to health or the environment until it can be disposed of correctly", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 528,
    section: "Hazardous substances",
    text: "What is the purpose of a 'hazard symbol' on a container?",
    options: ["To look professional", "To warn you of the type of hazard the substance presents (e.g., toxic, flammable, corrosive)", "To show the way", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 534,
    section: "Hazardous substances",
    text: "What should you do if you get a hazardous substance in your eyes?",
    options: ["Ignore it", "Wash them immediately with plenty of clean water and seek medical help", "Wait until the end of the shift", "Tell your workmates only"],
    correctAnswer: "B"
  },
  {
    id: 524,
    section: "Hazardous substances",
    text: "What is a 'safety data sheet' (SDS)?",
    options: ["A list of substances", "A document provided by the manufacturer that gives detailed information on a substance's hazards and safety measures", "A record of substances", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 539,
    section: "Hazardous substances",
    text: "Why should you never dispose of hazardous substances in a normal skip or down a drain?",
    options: ["It's messy", "It will pollute the environment and is illegal", "It's against the rules", "To save money"],
    correctAnswer: "B"
  },
  {
    id: 529,
    section: "Hazardous substances",
    text: "What does a symbol of a skull and crossbones mean?",
    options: ["Flammable", "Toxic or poisonous", "Corrosive", "Explosive"],
    correctAnswer: "B"
  },
  {
    id: 535,
    section: "Hazardous substances",
    text: "Why is it important to use hazardous substances in a well-ventilated area?",
    options: ["To keep you cool", "To prevent the build-up of toxic or explosive fumes", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 525,
    section: "Hazardous substances",
    text: "Where can you find the safety data sheet for a substance?",
    options: ["Ask everyone", "From your supervisor or in the site's COSHH file", "Wait for someone to tell you", "Ignore it"],
    correctAnswer: "B"
  },
  {
    id: 530,
    section: "Hazardous substances",
    text: "What does a symbol of a flame mean?",
    options: ["Toxic", "Flammable", "Corrosive", "Explosive"],
    correctAnswer: "B"
  },
  {
    id: 540,
    section: "Hazardous substances",
    text: "What should you do if you see someone disposing of hazardous substances incorrectly?",
    options: ["Ignore them", "Tell them how to dispose of them correctly and report it if necessary", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 541,
    section: "Hazardous substances",
    text: "Why is it important to use the correct PPE when using hazardous substances?",
    options: ["To look professional", "To protect your skin, eyes and lungs from harm", "To keep you warm", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 542,
    section: "Hazardous substances",
    text: "What should you do if you find a container of a hazardous substance that is leaking?",
    options: ["Ignore it", "Report it to your supervisor immediately and use a spill kit if safe and trained", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 543,
    section: "Hazardous substances",
    text: "Why is it important to follow the site's hazardous substances policy?",
    options: ["To save time", "To ensure that everyone works safely and reduces the risk of injury or illness", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 544,
    section: "Hazardous substances",
    text: "What should you do if you are unsure about the hazards of a substance?",
    options: ["Guess", "Ask your supervisor or check the COSHH assessment and safety data sheet", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 545,
    section: "Hazardous substances",
    text: "Why is it important to learn from hazardous substance incidents on site?",
    options: ["To save time", "To prevent them from happening again and to improve the site's hazardous substance safety", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 546,
    section: "Legal and management",
    text: "What is the main goal of health and safety law on site?",
    options: ["To save money", "To ensure that everyone works in a safe and healthy environment", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 547,
    section: "Legal and management",
    text: "Who is responsible for health and safety on site?",
    options: ["The site manager only", "Everyone on site, including you", "The client only", "The HSE only"],
    correctAnswer: "B"
  },
  {
    id: 548,
    section: "Legal and management",
    text: "What is the purpose of the Health and Safety Executive (HSE)?",
    options: ["To save money", "To enforce health and safety law and provide advice and guidance to businesses", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 549,
    section: "Legal and management",
    text: "What should you do if an HSE inspector visits the site?",
    options: ["Run away", "Cooperate with them and answer their questions honestly", "Ignore them", "Wait for someone else to talk to them"],
    correctAnswer: "B"
  },
  {
    id: 550,
    section: "Legal and management",
    text: "Why is it important to follow the site's health and safety rules?",
    options: ["To save time", "To ensure that you and others stay safe and to follow the law", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 551,
    section: "Legal and management",
    text: "What is the purpose of a 'site induction'?",
    options: ["To save time", "To inform you of the site's hazards, rules and emergency procedures before you start work", "To show you where the canteen is", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 552,
    section: "Legal and management",
    text: "Why is it important to attend the site induction?",
    options: ["To have a break", "To ensure you have the information you need to work safely on that specific site", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 553,
    section: "Legal and management",
    text: "What is the purpose of a 'toolbox talk'?",
    options: ["To have a chat", "A short briefing on a specific health and safety topic related to the work being done", "To show off your tools", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 554,
    section: "Legal and management",
    text: "Why is it important to listen to toolbox talks?",
    options: ["To have a break", "To ensure you are aware of the hazards and safety measures for the tasks you are doing", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 555,
    section: "Legal and management",
    text: "What should you do if you are asked to do something that you think is unsafe?",
    options: ["Do it anyway", "Tell your supervisor that it is unsafe and you cannot do it", "Ignore it", "Wait for someone else to do it"],
    correctAnswer: "B"
  },
  {
    id: 556,
    section: "Legal and management",
    text: "Why is it important to report all health and safety concerns to your supervisor?",
    options: ["To save time", "To ensure they are investigated and measures are put in place to work safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 557,
    section: "Legal and management",
    text: "What is the purpose of a 'risk assessment'?",
    options: ["To save money", "To identify the hazards of a task and the safety measures required to work safely", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 558,
    section: "Legal and management",
    text: "Why is it important to follow the risk assessment for your work?",
    options: ["To save time", "To ensure you are working in the safest way possible", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 559,
    section: "Legal and management",
    text: "What is a 'method statement'?",
    options: ["A list of tools", "A document that describes exactly how a task will be carried out safely", "A record of hours worked", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 560,
    section: "Legal and management",
    text: "Why is it important to follow the method statement for your work?",
    options: ["To save time", "To ensure that everyone follows the same safe way of working", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 561,
    section: "Legal and management",
    text: "What is the purpose of a 'permit to work'?",
    options: ["A permit to have a break", "A permit required for high-risk activities (e.g., hot work, confined spaces) to ensure they are managed safely", "A record of hours worked", "A delivery note"],
    correctAnswer: "B"
  },
  {
    id: 562,
    section: "Legal and management",
    text: "Why is it important to follow the conditions of a permit to work?",
    options: ["To save time", "To ensure that the high-risk activity is carried out safely and the risks are controlled", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 563,
    section: "Legal and management",
    text: "What should you do if you are unsure about a health and safety rule on site?",
    options: ["Guess", "Ask your supervisor or check the site induction information", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  },
  {
    id: 564,
    section: "Legal and management",
    text: "Why is it important to keep your health and safety training up to date?",
    options: ["To save time", "To ensure you have the skills and knowledge to work safely and follow the law", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 565,
    section: "Legal and management",
    text: "What is the purpose of a 'CSCS card'?",
    options: ["To save money", "To demonstrate that you have the required training and qualifications to work safely on site", "To show off", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 566,
    section: "Legal and management",
    text: "Why should you always have your CSCS card with you on site?",
    options: ["To look professional", "To prove that you are trained and authorized to be on site", "To save space", "To follow the rules"],
    correctAnswer: "B"
  },
  {
    id: 567,
    section: "Legal and management",
    text: "What should you do if you lose your CSCS card?",
    options: ["Ignore it", "Report it to your supervisor and apply for a replacement immediately", "Wait for someone else to find it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 568,
    section: "Legal and management",
    text: "Why is it important to follow the site's health and safety policy?",
    options: ["To save time", "To ensure that everyone works in a safe and responsible way", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 569,
    section: "Legal and management",
    text: "What should you do if you see someone else working unsafely?",
    options: ["Ignore them", "Tell them they are working unsafely and report it to your supervisor if necessary", "Wait for them to have an accident", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 570,
    section: "Legal and management",
    text: "Why is it important to learn from health and safety incidents on site?",
    options: ["To save time", "To prevent them from happening again and to improve the site's health and safety performance", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 571,
    section: "Legal and management",
    text: "What should you do if you are involved in a health and safety incident?",
    options: ["Ignore it", "Report it to your supervisor immediately and cooperate with any investigation", "Wait for someone else to report it", "Take a photo"],
    correctAnswer: "B"
  },
  {
    id: 572,
    section: "Legal and management",
    text: "Why is it important to have a positive health and safety culture on site?",
    options: ["To save money", "To ensure that everyone takes responsibility for their own safety and the safety of others", "To follow the rules", "To look professional"],
    correctAnswer: "B"
  },
  {
    id: 573,
    section: "Legal and management",
    text: "What should you do if you are unsure about anything related to health and safety on site?",
    options: ["Guess", "Ask your supervisor or the site's health and safety advisor", "Ignore it", "Wait for someone to tell you"],
    correctAnswer: "B"
  }
];
