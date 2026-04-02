export const ecsTestSections = [
  { title: "General Health and Safety at Work", startPage: 1 },
  { title: "Manual Handling Operations", startPage: 21 },
  { title: "Reporting Accidents", startPage: 35 },
  { title: "Personal Protective Equipment at Work", startPage: 52 },
  { title: "Health and Hygiene", startPage: 66 },
  { title: "Fire and Emergency", startPage: 80 },
  { title: "Work at Height", startPage: 104 },
  { title: "Work Equipment", startPage: 118 },
  { title: "Special Site Hazards", startPage: 130 },
  { title: "Electrotechnical", startPage: 138 },
  { title: "Environmental", startPage: 156 },
];

export const ecsTestQuestions = [
  // Section 1: General Health and Safety at Work
  {
    id: "1.1",
    section: "General Health and Safety at Work",
    text: "What do the letters CDM stand for?",
    options: [
      "Control of Demolition and Management Regulations",
      "Control of Dangerous Materials Regulations",
      "Construction (Demolition Management) Regulations",
      "Construction (Design and Management) Regulations"
    ],
    correctAnswer: "D",
    explanation: "The CDM Regulations impose duties to manage construction projects, ensure physical safeguards are provided to prevent danger during such projects and that adequate welfare facilities are provided."
  },
  {
    id: "1.2",
    section: "General Health and Safety at Work",
    text: "Identify one method of enforcing regulations that are available to the Health and Safety Executive:",
    options: [
      "Health Notice",
      "Improvement Notice",
      "Obstruction Notice",
      "Increasing insurance premiums"
    ],
    correctAnswer: "B",
    explanation: "Improvement notices require action to achieve standards which meet health and safety law."
  },
  {
    id: "1.3",
    section: "General Health and Safety at Work",
    text: "What happens if a Prohibition Notice is issued by an Inspector of the local authority or the HSE?",
    options: [
      "The work in hand can be completed, but no new work started",
      "The work can continue if adequate safety precautions are put in place",
      "The work that is subject to the notice must cease",
      "The work can continue, provided a risk assessment is carried out"
    ],
    correctAnswer: "C",
    explanation: "The work activity covered by a prohibition notice must cease, until the identified danger is removed."
  },
  {
    id: "1.4",
    section: "General Health and Safety at Work",
    text: "Health and Safety Executive Inspector can?",
    options: [
      "Only visit if they have made an appointment",
      "Visit at any time",
      "Only visit if accompanied by the principal contractor",
      "Only visit to interview the site manager"
    ],
    correctAnswer: "B",
    explanation: "Inspectors have a range of powers, including the right to visit premises at any time."
  },
  {
    id: "1.5",
    section: "General Health and Safety at Work",
    text: "Prohibition Notice means:",
    options: [
      "When you finish the work you must not start again",
      "The work must stop immediately",
      "Work is to stop for that day only",
      "Work may continue until the end of the day"
    ],
    correctAnswer: "B",
    explanation: "The work activity covered by the prohibition notice must cease, until the identified danger is removed."
  },
  {
    id: "1.6",
    section: "General Health and Safety at Work",
    text: "In what circumstances can an HSE Improvement Notice be issued?",
    options: [
      "If there is a breach of legal requirements",
      "By warrant through the police",
      "Only between Monday and Friday on site",
      "Through the prosecution office"
    ],
    correctAnswer: "A",
    explanation: "Improvement notices require action to achieve standards which meet health and safety law."
  },
  {
    id: "1.7",
    section: "General Health and Safety at Work",
    text: "What is an Improvement Notice?",
    options: [
      "A notice issued by the site principal contractor to tidy up the site",
      "A notice from the client to the principal contractor to speed up the work",
      "A notice issued by a Building Control Officer to deepen foundations",
      "A notice issued by an HSE/local authority Inspector to enforce compliance with health and safety legislation"
    ],
    correctAnswer: "D",
    explanation: "Improvement notices require action to achieve standards which meet health and safety law."
  },
  {
    id: "1.8",
    section: "General Health and Safety at Work",
    text: "If a Health and Safety Executive Inspector issues a Prohibition Notice, this means that:",
    options: [
      "The Site Manager can choose whether or not to ignore the notice",
      "Specific work activities, highlighted on the notice, must stop",
      "The HSE must supervise the work covered by the notice",
      "The HSE must supervise all work from then on"
    ],
    correctAnswer: "B",
    explanation: "Prohibition notices are intended to stop activities which can cause serious injury."
  },
  {
    id: "1.9",
    section: "General Health and Safety at Work",
    text: "Employers are required to provide information to their employees on their health and safety rights and responsibilities and how to get advice by:",
    options: [
      "Telling them verbally when they start work for them",
      "Displaying a poster or giving them leaflets approved by the HSE",
      "Making them read the company health and safety policy",
      "E-mailing the information to them"
    ],
    correctAnswer: "B",
    explanation: "This is a requirement of the Health and Safety Information for Employees Regulations (as amended)."
  },
  {
    id: "1.10",
    section: "General Health and Safety at Work",
    text: "Who is responsible for signing a Company Safety Policy?",
    options: [
      "Site Manager",
      "Company Safety Officer",
      "Company Secretary",
      "Managing Director"
    ],
    correctAnswer: "D",
    explanation: "The Health and Safety at Work Act requires the most senior member of management to sign the health and safety policy statement."
  },
  {
    id: "1.11",
    section: "General Health and Safety at Work",
    text: "Which one of the following must be in a company’s written Health and Safety Policy?",
    options: [
      "Aims and objectives of the company",
      "Organisation and arrangements in force for carrying out the health and safety policy",
      "Name of the Health and Safety Adviser",
      "Company Director’s home address"
    ],
    correctAnswer: "B",
    explanation: "This is a specific requirement of the Health and Safety at Work Act."
  },
  {
    id: "1.12",
    section: "General Health and Safety at Work",
    text: "Employers have to produce a written Health and Safety Policy statement when:",
    options: [
      "A contract commences",
      "They employ five people or more",
      "The safety representative requests it",
      "The HSE notifies them"
    ],
    correctAnswer: "B",
    explanation: "This is a specific requirement of the Health and Safety at Work Act."
  },
  {
    id: "1.13",
    section: "General Health and Safety at Work",
    text: "Companies employing five or more people must have a written Health and Safety Policy because:",
    options: [
      "The principal contractor gives them work on site",
      "The HSAWA 1974 requires it",
      "The Social Security Act requires it",
      "The trade unions require it"
    ],
    correctAnswer: "B",
    explanation: "The HSAWA 1974 requires it."
  },
  {
    id: "1.14",
    section: "General Health and Safety at Work",
    text: "What do the letters HSE stand for?",
    options: [
      "Highly Safe Electrician",
      "Health and Safety Exercise",
      "Health and Safety Examiner",
      "Health and Safety Executive"
    ],
    correctAnswer: "D",
    explanation: "The Health and Safety Executive was established under the Health and Safety at Work Act 1974."
  },
  {
    id: "1.15",
    section: "General Health and Safety at Work",
    text: "The Health and Safety Executive is:",
    options: [
      "Part of the National Health Service",
      "The regulatory body for the promotion of health and safety at work",
      "The jury in health and safety court cases",
      "Part of the police force"
    ],
    correctAnswer: "B",
    explanation: "The Health and Safety Executive is part of the Department for Work and Pensions."
  },
  {
    id: "1.16",
    section: "General Health and Safety at Work",
    text: "The Health and Safety at Work Act requires employers to provide what for their employees?",
    options: [
      "Adequate rest periods",
      "Payment for work done",
      "A safe place of work",
      "Suitable transport to work"
    ],
    correctAnswer: "C",
    explanation: "This is a specific requirement of Section 2 of the Health and Safety at Work Act."
  },
  {
    id: "1.17",
    section: "General Health and Safety at Work",
    text: "The Health and Safety at Work Act 1974 and any regulations made under the Act are:",
    options: [
      "Not compulsory, but should be complied with if convenient",
      "Advisory to companies and individuals",
      "Practical advice for the employer to follow",
      "Legally binding"
    ],
    correctAnswer: "D",
    explanation: "The requirements of health and safety law are mandatory and failure to follow them can lead to prosecution."
  },
  {
    id: "1.18",
    section: "General Health and Safety at Work",
    text: "Under the Health and Safety at Work Act 1974, which of the following have a duty to work safely?",
    options: [
      "Employees only",
      "The general public",
      "Employers only",
      "All people at work"
    ],
    correctAnswer: "D",
    explanation: "Employers, employees and the self-employed all have duties to work safely under the Act."
  },
  {
    id: "1.19",
    section: "General Health and Safety at Work",
    text: "What is the MAXIMUM penalty that a Higher Court, can currently impose for a breach of the Health and Safety at Work Act?",
    options: [
      "£20,000 fine and two years’ imprisonment",
      "£15,000 fine and three years’ imprisonment",
      "£1,000 fine and six months imprisonment",
      "Unlimited fine and two years’ imprisonment"
    ],
    correctAnswer: "D",
    explanation: "A Lower Court can impose a fine of up to £20,000 and/or up to six months imprisonment for certain offences. The potential fine in a Higher Court, however, is unlimited and the term of imprisonment can be up to 2 years."
  },
  {
    id: "1.20",
    section: "General Health and Safety at Work",
    text: "What do the letters ACOP stand for?",
    options: [
      "Accepted Code of Provisions",
      "Approved Condition of Practice",
      "Approved Code of Practice",
      "Accepted Code of Practice"
    ],
    correctAnswer: "C",
    explanation: "An ACOP is a code of practice approved by the Health and Safety Executive (or the Health and Safety Commission prior to April 2008)."
  },
  {
    id: "1.21",
    section: "General Health and Safety at Work",
    text: "Where should you look for official advice on health and safety matters?",
    options: [
      "A set of health and safety guidelines provided by suppliers",
      "The health and safety rules as laid down by the employer",
      "Guidance issued by the Health and Safety Executive",
      "A professionally approved guide book on regulations"
    ],
    correctAnswer: "C",
    explanation: "The HSE is the UK enforcing body and its guidance can be regarded as ‘official’."
  },
  {
    id: "1.22",
    section: "General Health and Safety at Work",
    text: "Regulations that govern health and safety on construction sites:",
    options: [
      "Apply only to inexperienced workers",
      "Do not apply during ’out of hours’ working",
      "Apply only to large companies",
      "Are mandatory (that is, compulsory)"
    ],
    correctAnswer: "D",
    explanation: "The requirements of health and safety law are mandatory, and failure to follow them can lead to prosecutions."
  },
  {
    id: "1.23",
    section: "General Health and Safety at Work",
    text: "Which of the following statements is correct?",
    options: [
      "The duty for health and safety falls only on the employer",
      "All employees must take reasonable care, not only to protect themselves but also their colleagues",
      "Employees have no responsibility for Health and Safety on site",
      "Only the client is responsible for safety on site"
    ],
    correctAnswer: "B",
    explanation: "This is a legal requirement under Section 7 of the Health & Safety at Work Act."
  },
  {
    id: "1.24",
    section: "General Health and Safety at Work",
    text: "Who of the following would you expect to be responsible for managing health and safety on site?",
    options: [
      "Foreman",
      "Your employer",
      "Main sub-contractor",
      "HSE Inspector"
    ],
    correctAnswer: "B",
    explanation: "The responsibility for management of health and safety at work rests with the employer."
  },
  {
    id: "1.25",
    section: "General Health and Safety at Work",
    text: "Which of the following is correct for risk assessment?",
    options: [
      "It is a good idea but not essential",
      "Only required to be done for hazardous work",
      "Must always be done",
      "Only required on major jobs"
    ],
    correctAnswer: "C",
    explanation: "There is a legal requirement for all work to be suitably risk assessed."
  },
  {
    id: "1.26",
    section: "General Health and Safety at Work",
    text: "In the context of a risk assessment, what do you understand by the term risk?",
    options: [
      "An unsafe act or condition",
      "Something with the potential to cause injury",
      "Any work activity that can be described as dangerous",
      "The likelihood that harm from a particular hazard will occur"
    ],
    correctAnswer: "D",
    explanation: "Hazard and risk are not the same. Risk reflects the chance of being harmed by a hazard."
  },
  {
    id: "1.27",
    section: "General Health and Safety at Work",
    text: "Who would you expect to carry out a risk assessment on your working site?",
    options: [
      "The CDM Co-ordinator",
      "A visiting HSE Inspector",
      "The construction project designer",
      "A competent person"
    ],
    correctAnswer: "D",
    explanation: "A risk assessment must be conducted by a ‘competent person’."
  },
  {
    id: "1.28",
    section: "General Health and Safety at Work",
    text: "What is a HAZARD?",
    options: [
      "Where an accident is likely to happen",
      "An accident waiting to happen",
      "Something with the potential to cause harm",
      "The likelihood of something going wrong"
    ],
    correctAnswer: "C",
    explanation: "Examples of hazards include: a drum of acid, breeze blocks on an elevated plank; cables running across a floor."
  },
  {
    id: "1.29",
    section: "General Health and Safety at Work",
    text: "What must be done before any work begins?",
    options: [
      "Emergency plan",
      "Assessment of risk",
      "Soil assessment",
      "Geological survey"
    ],
    correctAnswer: "B",
    explanation: "This is a legal requirement of the Management of Health and Safety at Work Regulations."
  },
  {
    id: "1.30",
    section: "General Health and Safety at Work",
    text: "Complete the following sentence: A risk assessment:",
    options: [
      "Is a piece of paper required by law",
      "Prevents accidents",
      "Is a means of analysing what might go wrong",
      "Isn’t particularly useful"
    ],
    correctAnswer: "C",
    explanation: "Risk assessment involves a careful review of what can cause harm and the practical measures to be taken to reduce the risk of harm."
  },
  {
    id: "1.31",
    section: "General Health and Safety at Work",
    text: "Why would your supervisor ask you to read the method statement and risk assessment before you start your next job?",
    options: [
      "They think you have got nothing better to do",
      "The documents contain information on how to carry out the job in a safe manner",
      "They wouldn’t as they think they are a waste of time",
      "As someone has taken the time and trouble to write them, you might as well read them"
    ],
    correctAnswer: "B",
    explanation: "The supervisor must, by law, keep workers advised of significant risks, and control measures."
  },
  {
    id: "1.32",
    section: "General Health and Safety at Work",
    text: "What do the blue and white health and safety signs tell you?",
    options: [
      "Things you must do",
      "Where the nearest fire exit is",
      "The hazards in the area",
      "Things you must not do"
    ],
    correctAnswer: "A",
    explanation: "Blue and white signs show a ‘mandatory’ requirement."
  },
  {
    id: "1.33",
    section: "General Health and Safety at Work",
    text: "What colours are emergency exit signs?",
    options: [
      "Green and white",
      "Red and yellow",
      "Red and white",
      "Blue and white"
    ],
    correctAnswer: "A",
    explanation: "The colours are prescribed in the Health and Safety (Safety Signs and Signals) Regulations."
  },
  {
    id: "1.34",
    section: "General Health and Safety at Work",
    text: "What is the main colour on a safety sign stating that you must NOT do something?",
    options: [
      "Blue",
      "Green",
      "Red",
      "Yellow"
    ],
    correctAnswer: "C",
    explanation: "Prohibitory signs are round and feature a black pictogram on a white background with red edging and diagonal line."
  },
  {
    id: "1.35",
    section: "General Health and Safety at Work",
    text: "The Health and Safety (Safety Signs and Signals) Regulations require the colour coding of signs. What colours are used on a sign indicating a warning, for example ‘Fork-lift trucks operating’?",
    options: [
      "Blue and white",
      "Green and white",
      "Yellow and black",
      "Red and white"
    ],
    correctAnswer: "C",
    explanation: "Warning signs are triangular and feature a black pictogram on a yellow background with black edging."
  },
  {
    id: "1.36",
    section: "General Health and Safety at Work",
    text: "The Health and Safety (Safety Signs and Signals) Regulations require the colour coding of safety signs. What colours are used on a sign indicating a prohibited activity, for example ‘No access for pedestrians’ ?",
    options: [
      "Green and white",
      "Red, black and white",
      "Blue and white",
      "Yellow and black"
    ],
    correctAnswer: "B",
    explanation: "Prohibitory signs are round and feature a black pictogram on a white background with red edging and diagonal line."
  },
  {
    id: "1.37",
    section: "General Health and Safety at Work",
    text: "The Health and Safety (Safety Signs and Signals) Regulations require the colour coding of safety signs. What colours are used on a sign indicating a mandatory activity, for example ‘Safety helmets must be worn’?",
    options: [
      "Green and white",
      "Red, black and white",
      "Blue and white",
      "Yellow and black"
    ],
    correctAnswer: "C",
    explanation: "Mandatory signs are round and feature a white pictogram on a blue background."
  },
  {
    id: "1.38",
    section: "General Health and Safety at Work",
    text: "The Health and Safety (Safety Signs and Signals) Regulations require the colour coding of safety signs. What colours are used on a sign indicating a safe condition, for example First Aid kit?",
    options: [
      "Red, black and white",
      "Blue and white",
      "Yellow and black",
      "Green and white"
    ],
    correctAnswer: "D",
    explanation: "Emergency escape and first-aid signs are rectangular or square and feature a white pictogram on a green background."
  },
  {
    id: "1.39",
    section: "General Health and Safety at Work",
    text: "Why should regular inspections of the workplace take place?",
    options: [
      "To check whether the working environment is safe",
      "To check that all employees are present",
      "To check that everyone is doing their job",
      "To prepare for a visit from an HSE Inspector"
    ],
    correctAnswer: "A",
    explanation: "The Management of Health and Safety at Work Regulations require that routine inspections of workplaces are carried out to ensure that preventative and protective measures are in place and effective."
  },
  {
    id: "1.40",
    section: "General Health and Safety at Work",
    text: "How can you help to prevent accidents?",
    options: [
      "Don’t report them",
      "Know how to get help quickly",
      "Report any unsafe conditions",
      "Know where the first-aid kit is kept"
    ],
    correctAnswer: "C",
    explanation: "Action to improve safety can only be taken if the risk is known about. Employees have a duty of care to other employees."
  },

  // Section 2: Manual Handling Operations
  {
    id: "2.1",
    section: "Manual Handling Operations",
    text: "If there is a risk of injury from lifting loads what should you think about first?",
    options: [
      "Whether the load needs to be lifted at all",
      "What the weight of the load is",
      "Where to hold the load when lifting",
      "How to lift the load"
    ],
    correctAnswer: "A",
    explanation: "If possible, it is best to avoid the risks from lifting altogether. This is the preferred requirement laid down in the Manual Handling Operations Regulations 1992."
  },
  {
    id: "2.2",
    section: "Manual Handling Operations",
    text: "Before performing manual lifting what is the first thing you should do?",
    options: [
      "Check the headroom",
      "Weigh the article",
      "Assess the whole task",
      "Kick it to see if it is stable"
    ],
    correctAnswer: "C",
    explanation: "If you assess the whole task first, you will have a clear idea of possible hazards and how to overcome them, before lifting."
  },
  {
    id: "2.3",
    section: "Manual Handling Operations",
    text: "Which is the part of your body MOST LIKELY to be injured during a manual handling activity which involves moving a heavy load?",
    options: [
      "Knees",
      "Forearms",
      "Chest",
      "Back"
    ],
    correctAnswer: "D",
    explanation: "HSE statistics show that most manual handling injuries are to the back."
  },
  {
    id: "2.4",
    section: "Manual Handling Operations",
    text: "What should you do if your supervisor asks you to move something that you find is too heavy to lift?",
    options: [
      "Give it a try using correct lifting methods",
      "Ask your mates to assist in the lift",
      "Inform your supervisor that it is too heavy",
      "Get a forklift truck or lifting tackle"
    ],
    correctAnswer: "C",
    explanation: "The HSE advises employees to inform the employer if they identify hazardous handling activities."
  },
  {
    id: "2.5",
    section: "Manual Handling Operations",
    text: "What would you NOT consider in making a judgement of the risks from a load?",
    options: [
      "Its size and condition",
      "Its colour",
      "Its weight",
      "Its centre of gravity"
    ],
    correctAnswer: "B",
    explanation: "A, C and D can all affect the difficulty of lifting an object."
  },
  {
    id: "2.6",
    section: "Manual Handling Operations",
    text: "When moving a load fitted with wheels which of the following is generally true?",
    options: [
      "Pushing and pulling are equally risky",
      "Pulling is preferable to pushing",
      "Pushing is preferable to pulling",
      "It is safer to pick it up and carry it"
    ],
    correctAnswer: "C",
    explanation: "The operator should try to push rather than pull when moving a load, provided they can see over it and control steering and stopping."
  },
  {
    id: "2.7",
    section: "Manual Handling Operations",
    text: "A manual handling operation is defined as which one of the following?",
    options: [
      "Automated effort",
      "Human effort",
      "Mechanised and human effort",
      "Mechanised effort"
    ],
    correctAnswer: "B",
    explanation: "Manual handling covers human effort only."
  },
  {
    id: "2.8",
    section: "Manual Handling Operations",
    text: "What is the MAXIMUM weight that an individual may lift?",
    options: [
      "The weight they can lift comfortably",
      "Whatever the supervisor instructs",
      "35kg provided that it has no sharp edges",
      "15kg provided that it is a compact load"
    ],
    correctAnswer: "A",
    explanation: "There are no strict weight limits – the priority is to avoid injury."
  },
  {
    id: "2.9",
    section: "Manual Handling Operations",
    text: "What is the most common type of injury resulting from lifting loads from the floor?",
    options: [
      "Vibration white finger",
      "Grazes to the knees",
      "Head injuries",
      "Back injuries"
    ],
    correctAnswer: "D",
    explanation: "As shown by HSE statistics."
  },
  {
    id: "2.10",
    section: "Manual Handling Operations",
    text: "Where a load has to be lifted manually, what is the employer required to do by law?",
    options: [
      "Calculate the cost of the exercise",
      "Determine the number of people required",
      "Assess the risk of the task",
      "Assess the time the job will take"
    ],
    correctAnswer: "C",
    explanation: "This is a specific requirement of the Manual Handling Operations regulations 1992."
  },
  {
    id: "2.11",
    section: "Manual Handling Operations",
    text: "Which of the following is advisable when lifting a load manually?",
    options: [
      "Keep legs straight, bend back, use power of legs",
      "Bend the knees, keep the back straight, use power of back",
      "Bend the knees, keep the back as straight as possible, use power of legs",
      "Keep legs and back straight, use power of legs"
    ],
    correctAnswer: "C",
    explanation: "Stooping can increase the stress on the lower back. However, stooping slightly may be preferable to adopting a squatting posture, which can place excessive loads on knees and hips."
  },
  {
    id: "2.12",
    section: "Manual Handling Operations",
    text: "In manual handling, which of the following general statements is true?",
    options: [
      "You should keep your back bent when lifting",
      "Anyone can carry any load as long as they are strong enough",
      "Large loads should be broken down into smaller loads where possible",
      "Loads should be held at arm’s length while carrying"
    ],
    correctAnswer: "C",
    explanation: "This is a recommendation (INDG143)."
  },
  {
    id: "2.13",
    section: "Manual Handling Operations",
    text: "What is the recommended limit for a compact load, that can be safely carried by a fit, male worker?",
    options: [
      "50kg",
      "40kg",
      "20kg",
      "25kg"
    ],
    correctAnswer: "D",
    explanation: "This figure is in HSE guidance, and relates to lifting and lowering at elbow height."
  },
  {
    id: "2.14",
    section: "Manual Handling Operations",
    text: "Where there has been a major change in a manual handling operation, what should the employer do?",
    options: [
      "Monitor the operation being undertaken",
      "Review the number of people involved",
      "Review the original risk assessment",
      "Monitor the cost of change"
    ],
    correctAnswer: "C",
    explanation: "This is a specific requirement of the Manual Handling Operations regulations 1992."
  },
  {
    id: "2.15",
    section: "Manual Handling Operations",
    text: "What should the first consideration when you are about to lift a load on your own?",
    options: [
      "Assess whether it is safe to lift it on your own",
      "Ensure you wear appropriate PPE",
      "Wear gloves and grip properly",
      "Ensure you lift with a bent back"
    ],
    correctAnswer: "A",
    explanation: "Employees should assess whether there is a risk of injury before lifting. If they are not sure they should seek advice from their supervisor."
  },
  {
    id: "2.16",
    section: "Manual Handling Operations",
    text: "Which of the following would NOT make a load easier to handle manually?",
    options: [
      "Painting it a bright colour",
      "Securing the load so that it does not shift unexpectedly",
      "Reducing its weight",
      "Providing suitable handles or hand grips"
    ],
    correctAnswer: "A",
    explanation: "Painting it a bright colour does not make it easier to handle."
  },
  {
    id: "2.17",
    section: "Manual Handling Operations",
    text: "If there is a risk of injury from moving loads what should you think about?",
    options: [
      "Advising your supervisor",
      "Carrying it anyway",
      "Dragging it all the way",
      "Getting someone to assist you over the distance"
    ],
    correctAnswer: "A",
    explanation: "This is a requirement of the Manual Handling Operations regulations 1992."
  },
  {
    id: "2.18",
    section: "Manual Handling Operations",
    text: "As an approximate guide the manual handling capacity of a two person team is:",
    options: [
      "The sum of their individual capacities",
      "The capacity of the strongest individual",
      "The capacity of the weakest individual",
      "Two thirds the sum of their individual capacities"
    ],
    correctAnswer: "D",
    explanation: "This is contained in HSE guidance on the Manual Handling Operations Regulations 1992."
  },
  {
    id: "2.19",
    section: "Manual Handling Operations",
    text: "What does ’Kinetic lifting’ mean?",
    options: [
      "Using a crane or some other mechanical means",
      "Using a forklift truck or pallet truck",
      "Lifting in the most safe and effective way",
      "Getting a friend to help you with the load"
    ],
    correctAnswer: "C",
    explanation: "Lifting in the most safe and effective way."
  },
  {
    id: "2.20",
    section: "Manual Handling Operations",
    text: "What should you do first before lifting or moving a load?",
    options: [
      "Put on gloves",
      "Assess the weight",
      "Keep a straight back",
      "Bend your knees"
    ],
    correctAnswer: "B",
    explanation: "You or your employer must assess the risk of injury before lifting."
  },
  {
    id: "2.21",
    section: "Manual Handling Operations",
    text: "Before picking up a load, you should:",
    options: [
      "Bend your knees",
      "Choose a pair of gloves",
      "Ask a work mate to help you",
      "Assess the risks"
    ],
    correctAnswer: "D",
    explanation: "You or your employer must assess the risk of injury before lifting."
  },
  {
    id: "2.22",
    section: "Manual Handling Operations",
    text: "When picking up an object, you should:",
    options: [
      "Bend your arms",
      "Bend your back",
      "Wear a back brace",
      "Bend your knees"
    ],
    correctAnswer: "D",
    explanation: "Generally, the legs should do most of the work when lifting a load."
  },
  {
    id: "2.23",
    section: "Manual Handling Operations",
    text: "When judging ‘individual capability’ for manual handling, you should assume:",
    options: [
      "All women are equally capable",
      "Young men are weak",
      "All people are different",
      "All men are equally capable"
    ],
    correctAnswer: "C",
    explanation: "Assessing ability for manual handling must be done on an individual basis."
  },
  {
    id: "2.24",
    section: "Manual Handling Operations",
    text: "When an article has to be moved for a long distance, you should:",
    options: [
      "Use a barrow or trolley",
      "Get someone else to do it for you",
      "Drag it all the way",
      "Carry it all the way"
    ],
    correctAnswer: "A",
    explanation: "The use of handling aids can reduce the risk of injury."
  },
  {
    id: "2.25",
    section: "Manual Handling Operations",
    text: "Which is the correct way to lift a load?",
    options: [
      "Squat near load, bend back and use leg muscles",
      "Squat near to the load, keeping the back as straight as possible and using leg muscles",
      "Keep feet apart and bend back",
      "Keep feet together and bend back"
    ],
    correctAnswer: "B",
    explanation: "Handling techniques which allow the use of relatively strong leg muscles rather than those of the back are preferable."
  },
  {
    id: "2.26",
    section: "Manual Handling Operations",
    text: "Which would you consider to be generally correct when lifting a load?",
    options: [
      "Larger loads should be split into smaller loads if possible",
      "Keep the load away from the body",
      "When lifting you should bend your back",
      "The feet should be together and the load lifted at arm’s length"
    ],
    correctAnswer: "A",
    explanation: "This is a recommendation in HSE guidance (INDG143)."
  },
  {
    id: "2.27",
    section: "Manual Handling Operations",
    text: "If a load has an uneven centre of gravity, how should you lift it?",
    options: [
      "Keep the heaviest side of the load away from you",
      "Keep the heaviest side of the load on the strongest arm",
      "Keep the heaviest side of the load towards you",
      "Keep the heaviest side of the load on the weakest arm"
    ],
    correctAnswer: "C",
    explanation: "There is less risk of injury if a weight’ s centre of gravity is near the torso."
  },
  
  // Section 3: Reporting Accidents
  {
    id: "3.1",
    section: "Reporting Accidents",
    text: "What should you ensure if you suffer an injury through a manual handling operation?",
    options: [
      "You get paid for the job",
      "The injury is recorded",
      "You get help and carry on working",
      "You take time off work"
    ],
    correctAnswer: "B",
    explanation: "All injuries must be recorded in the company accident book (BI 510)."
  },
  {
    id: "3.2",
    section: "Reporting Accidents",
    text: "Why should a serious accident be reported to the enforcing authority?",
    options: [
      "It helps the site find out what caused it",
      "It is legal requirement",
      "So that the site manager can see who is to blame",
      "So that the company will be held responsible"
    ],
    correctAnswer: "B",
    explanation: "Serious accidents (specified injuries or those resulting in an absence of over 7 days) must be reported to the enforcing authority under the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR)."
  },
  {
    id: "3.3",
    section: "Reporting Accidents",
    text: "What immediate action should you take if you suffer an injury through carrying a load?",
    options: [
      "Advise your doctor of your injury",
      "Tell your supervisor or employer",
      "Tell your working companion",
      "Carry on working as best you can"
    ],
    correctAnswer: "B",
    explanation: "All injuries must be recorded in the company accident book (BI 510)."
  },
  {
    id: "3.4",
    section: "Reporting Accidents",
    text: "Under RIDDOR, which one of the following must be reported to the enforcing authority?",
    options: [
      "Accidents where the injured person wishes to make a claim",
      "Fracture other than to fingers, thumbs or toes",
      "All ‘near misses’ even if no one is hurt",
      "All accidents causing injury"
    ],
    correctAnswer: "B",
    explanation: "This is one of a number of reportable ‘specified injuries’ and must be reported to the enforcing authority under Reporting of injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR)."
  },
  {
    id: "3.5",
    section: "Reporting Accidents",
    text: "Which of the following has the power to examine an accident record?",
    options: [
      "An HSE inspector",
      "An Insurance company",
      "A doctor",
      "A workmate"
    ],
    correctAnswer: "A",
    explanation: "HSE inspectors have a range of powers, including this one."
  },
  {
    id: "3.6",
    section: "Reporting Accidents",
    text: "Which of the following should be recorded in the accident book following an accident?",
    options: [
      "The date and time the accident occurred",
      "Your date of birth",
      "The weather conditions",
      "Your National Insurance Number"
    ],
    correctAnswer: "A",
    explanation: "The information to be entered in an accident book (BI 510) includes when and where the accident happened, the name and address and occupation of the person who had the accident and details of how the accident happened and the injuries suffered."
  },
  {
    id: "3.7",
    section: "Reporting Accidents",
    text: "Which one of the following accounts for most accidents each year on construction sites?",
    options: [
      "Strikes by moving vehicles",
      "Electrocution",
      "Trench collapses",
      "Slips, trips and falls"
    ],
    correctAnswer: "D",
    explanation: "HSE Statistics show clearly that there are more slips, trips and falls than any other types of accident on site."
  },
  {
    id: "3.8",
    section: "Reporting Accidents",
    text: "Which of the following is NOT classified as a specified injury to a worker under RIDDOR?",
    options: [
      "A fractured finger",
      "A fractured arm",
      "Amputation of a finger",
      "A broken wrist"
    ],
    correctAnswer: "A",
    explanation: "Amputation of an arm, hand, finger, thumb, leg, foot or toe are classified as specified injuries, as are bone fractures other than to fingers, thumbs or toes."
  },
  {
    id: "3.9",
    section: "Reporting Accidents",
    text: "Which one of the following should you do if you witness a serious accident on site?",
    options: [
      "Pretend you saw nothing",
      "Say nothing in case you get in trouble",
      "Discuss what to do with your workmates",
      "Tell your supervisor what you saw happening"
    ],
    correctAnswer: "D",
    explanation: "If the supervisor is aware of an accident he can take steps to prevent a recurrence. The employer also has legal duties to report certain incidents to the enforcing authority."
  },
  {
    id: "3.10",
    section: "Reporting Accidents",
    text: "A workmate tells you that he witnessed an accident the previous day and the victim was taken to hospital. He asks you for advice on what he should do. Do you tell them to:",
    options: [
      "Speak to the site nurse about what he saw",
      "Tell their supervisor that they saw what happened",
      "Telephone the hospital to find out how the injured person is",
      "Say nothing to anyone in case they get someone in trouble"
    ],
    correctAnswer: "B",
    explanation: "If the supervisor is aware of an accident he can take steps to prevent a recurrence. The employer also has legal duties to report certain incidents to the enforcing authority."
  },
  {
    id: "3.11",
    section: "Reporting Accidents",
    text: "If a person at work suffers an injury (other than a specified injury) due to an accident at work, it is reportable under RIDDOR if they are incapacitated for work for:",
    options: [
      "Over 1 day",
      "Over 7 days",
      "Over half a day",
      "Over 2 days"
    ],
    correctAnswer: "B",
    explanation: "An over-seven-day injury is one which is not a specified injury but results in the injured person being away from work or unable to do the full range of their normal duties for more than seven days."
  },
  {
    id: "3.12",
    section: "Reporting Accidents",
    text: "What must an employer do with their accident records following completion of a construction project?",
    options: [
      "They are sent to the Health and Safety Executive",
      "They are destroyed on site with other non-essential documents",
      "They are kept safe by the employer",
      "They are sent to the employer’s insurance company"
    ],
    correctAnswer: "C",
    explanation: "Accident records must be kept by an employer for at least three years."
  },
  {
    id: "3.13",
    section: "Reporting Accidents",
    text: "At work who would you report a dangerous occurrence to?",
    options: [
      "The emergency services",
      "Your supervisor or employer",
      "Another employee",
      "The client for the project"
    ],
    correctAnswer: "B",
    explanation: "Under RIDDOR, an employer has a legal duty to report certain work-related accidents, but to do this they will need to know that an accident has occurred."
  },
  {
    id: "3.14",
    section: "Reporting Accidents",
    text: "Following a reportable dangerous occurrence when must the enforcing authority be informed?",
    options: [
      "Within 5 days",
      "Within 48 hours",
      "Without delay",
      "Within 24 hours"
    ],
    correctAnswer: "C",
    explanation: "The enforcing authority must be notified by the quickest practicable means."
  },
  {
    id: "3.15",
    section: "Reporting Accidents",
    text: "Accidents causing any injury should always be recorded in:",
    options: [
      "The site engineer’s day book",
      "Your employer’s accident recording system",
      "Your personal diary",
      "The main contractor’s diary"
    ],
    correctAnswer: "B",
    explanation: "All accidents should be recorded in the accident book (BI 510)."
  },
  {
    id: "3.16",
    section: "Reporting Accidents",
    text: "Which one of the following is classified as a reportable occupational disease under RIDDOR?",
    options: [
      "Mental disorder",
      "Occupational asthma",
      "Amputation",
      "Influenza"
    ],
    correctAnswer: "B",
    explanation: "Certain occupational diseases likely to have been caused or made worse by work are reportable under RIDDOR. This would include occupational asthma."
  },
  {
    id: "3.17",
    section: "Reporting Accidents",
    text: "When a person is injured at work, who should enter the details in the accident book?",
    options: [
      "The injured person’s supervisor",
      "The injured person or anyone acting for them",
      "The site manager or engineer",
      "The site safety manager"
    ],
    correctAnswer: "B",
    explanation: "This is the procedure for recording accidents internally in the accident book (BI 510)."
  },
  {
    id: "3.18",
    section: "Reporting Accidents",
    text: "If you are involved in a minor accident at work, whose duty is it to report it to site management?",
    options: [
      "Any witness to the accident",
      "The police, fire or ambulance who attend",
      "It is your own responsibility",
      "The site foreman should report it"
    ],
    correctAnswer: "C",
    explanation: "Employers rely on employees to advise them of occurrences at work."
  },
  {
    id: "3.19",
    section: "Reporting Accidents",
    text: "You have suffered an accident at work which has made you incapable of your normal work for over 7 days. Which of the following actions MUST be taken by your employer?",
    options: [
      "The emergency services are asked to attend the site",
      "The local hospital is informed",
      "The relevant enforcing authority is informed",
      "A deduction is made from your wages for days lost"
    ],
    correctAnswer: "C",
    explanation: "An over-seven-day injury is one which is not a specified injury but results in the injured person being away from work or unable to do the full range of their normal duties for more than seven days."
  },
  {
    id: "3.20",
    section: "Reporting Accidents",
    text: "The collapse of scaffolding is only notifiable to the enforcing authority as a reportable dangerous occurrence when the scaffolding is which one of the following?",
    options: [
      "Over 15 metres in height",
      "Any height",
      "Over 10 metres in height",
      "Over 5 metres in height"
    ],
    correctAnswer: "D",
    explanation: "This is one of the requirements of RIDDOR."
  },
  {
    id: "3.21",
    section: "Reporting Accidents",
    text: "If there is a fatal accident on site, when must the Health and Safety Executive be informed?",
    options: [
      "Without delay",
      "Within 10 days",
      "Within 7 days",
      "Within 5 days"
    ],
    correctAnswer: "A",
    explanation: "The enforcing authority must be notified by the quickest practicable means."
  },
  {
    id: "3.22",
    section: "Reporting Accidents",
    text: "Under which of the following circumstances should an accident be recorded in the site’s accident book?",
    options: [
      "When an accident causes damage to plant or equipment",
      "Only when a person is injured and will be off work for more than seven days",
      "When the injury is serious enough for first aid to be needed",
      "When an accident causes injury to an employee while at work"
    ],
    correctAnswer: "D",
    explanation: "An accident causing an injury to an employee at work should be recorded in the accident book (BI 510)."
  },
  {
    id: "3.23",
    section: "Reporting Accidents",
    text: "Which of the following have to be entered into the accident book?",
    options: [
      "All accidents causing any damage",
      "All accidents causing an injury",
      "Only accidents causing serious injury",
      "Only accidents causing time off work"
    ],
    correctAnswer: "B",
    explanation: "An accident causing an injury to an employee at work should be recorded in the accident book (BI 510)."
  },
  {
    id: "3.24",
    section: "Reporting Accidents",
    text: "Under which of the following circumstances must injury accidents be recorded in the accident book?",
    options: [
      "Only if you break a bone",
      "Only if you have time off work",
      "Any time they occur",
      "Only if you need to go to hospital"
    ],
    correctAnswer: "C",
    explanation: "An accident causing an injury to an employee at work should be recorded in the accident book (BI 510)."
  },
  {
    id: "3.25",
    section: "Reporting Accidents",
    text: "An entry must be made in the accident book when:",
    options: [
      "The person has been off sick for over seven days",
      "Management thinks it is appropriate",
      "An accident causes personal injury to an employee",
      "The severity of the accident may result in a compensation claim"
    ],
    correctAnswer: "C",
    explanation: "An accident causing an injury to an employee at work should be recorded in the accident book (BI 510)."
  },
  {
    id: "3.26",
    section: "Reporting Accidents",
    text: "Which of the following MUST be recorded in an accident book after you have had an accident?",
    options: [
      "Your National Insurance number",
      "Your date of birth",
      "Your occupation",
      "Your phone number"
    ],
    correctAnswer: "C",
    explanation: "The information to be entered in an accident book (BI 510) includes when and where the accident happened, the name, address and occupation of the person who had the accident and details of how the accident happened and the injuries suffered."
  },
  {
    id: "3.27",
    section: "Reporting Accidents",
    text: "Which of the following can you learn from an accident?",
    options: [
      "A combination of human error and mechanical failure always causes injury",
      "Ideas on how you would prevent it happening again",
      "That mechanical failures are most dangerous",
      "How human error is always a cause"
    ],
    correctAnswer: "B",
    explanation: "An accident investigation should not only assess the cause, but also how similar accidents can be prevented in the future."
  },
  {
    id: "3.28",
    section: "Reporting Accidents",
    text: "Could making an entry in the accident book help you if you later make a claim for compensation?",
    options: [
      "Only if it is a serious injury",
      "No",
      "Only in the event of a fatality",
      "Yes"
    ],
    correctAnswer: "D",
    explanation: "This is laid down in Social Security Legislation."
  },
  {
    id: "3.29",
    section: "Reporting Accidents",
    text: "Why is it important to report ‘near miss’ accidents to your employer?",
    options: [
      "It’s the law",
      "To make the figures look good",
      "So lessons can be learned, preventing an accident next time",
      "So that someone can be disciplined"
    ],
    correctAnswer: "C",
    explanation: "HSE advises that ‘near misses’ should be investigated to prevent their recurrence."
  },
  {
    id: "3.30",
    section: "Reporting Accidents",
    text: "Who should you report serious accidents to?",
    options: [
      "Your workmate",
      "Your employer or supervisor",
      "The police",
      "The ambulance service"
    ],
    correctAnswer: "B",
    explanation: "If the supervisor is aware of an accident he can take steps to prevent a recurrence. The employer also has legal duties to report certain incidents to the enforcing authority."
  },
  {
    id: "3.31",
    section: "Reporting Accidents",
    text: "What is the aim of carrying out an accident investigation?",
    options: [
      "To determine the cause(s) and prevent similar accidents",
      "To establish what injuries were sustained",
      "To find out who is at fault",
      "To establish the cost of any damage incurred"
    ],
    correctAnswer: "A",
    explanation: "An accident investigation should not only assess the cause, but also how similar accidents can be prevented in the future."
  },
  {
    id: "3.32",
    section: "Reporting Accidents",
    text: "You have witnessed a serious accident on your site and are interviewed by an HSE inspector. You should:",
    options: [
      "Tell the inspector what your mates said you should say",
      "Ask your supervisor what you should say to the inspector",
      "Co-operate fully with the inspector and tell them exactly what you saw",
      "Don’t tell them anything"
    ],
    correctAnswer: "C",
    explanation: "This is good practice, but it can also be an offence to withhold important information from an inspector."
  },

  // Section 4: Personal Protective Equipment at Work
  {
    id: "4.1",
    section: "Personal Protective Equipment at Work",
    text: "When working in dusty conditions, what of the following would give the LEAST level of protection?",
    options: [
      "Compressed airline breathing helmet",
      "Positive pressure powered respirator",
      "Self-contained breathing apparatus",
      "Half mask dust respirator"
    ],
    correctAnswer: "D",
    explanation: "Protection factors are given in HSE publication HSG53 ‘Respiratory protective equipment at work – A practical guide’."
  },
  {
    id: "4.2",
    section: "Personal Protective Equipment at Work",
    text: "In hot weather which one of the following is correct with regard to safety helmets?",
    options: [
      "You can take off your helmet while working inside the building",
      "You must continue to wear your helmet",
      "You can drill holes in your safety hat for ventilation",
      "You do not need to wear your helmet"
    ],
    correctAnswer: "B",
    explanation: "On construction sites, despite controls being put in place, there will always be situations where a risk of head injury remains. Taking off your helmet would put you at a much greater risk of a head injury."
  },
  {
    id: "4.3",
    section: "Personal Protective Equipment at Work",
    text: "Which one of the following should you do if your personal protective equipment (PPE) is damaged?",
    options: [
      "Obtain new equipment when available",
      "Report to your Supervisor without delay",
      "Reduce the amount of time you use it",
      "Carry on working"
    ],
    correctAnswer: "B",
    explanation: "Employees are required to report any defective PPE to their employer (PPE at Work Regulations 1992, Regulation 7)."
  },
  {
    id: "4.4",
    section: "Personal Protective Equipment at Work",
    text: "If personal protective equipment (PPE) is defective, what should you do?",
    options: [
      "Complain to the Health and Safety Inspector",
      "Get your workmate to mend it if possible",
      "Report it to your supervisor",
      "Repair if possible and continue to use it"
    ],
    correctAnswer: "C",
    explanation: "Employees are required to report any defective PPE to their employer (PPE at Work Regulations 1992, Regulation 7)."
  },
  {
    id: "4.5",
    section: "Personal Protective Equipment at Work",
    text: "In normal use, what item of PPE is NOT essential for the operator of a cartridge-operated tool, such as a nail gun?",
    options: [
      "Safety eyewear",
      "Hearing protection",
      "Wellington boots",
      "Safety helmet"
    ],
    correctAnswer: "C",
    explanation: "Wellingtons do not offer protection against the specific risks associated with the use of a cartridge-operated tool, although safety footwear must always be worn when there is a risk of a foot injury."
  },
  {
    id: "4.6",
    section: "Personal Protective Equipment at Work",
    text: "Can you opt out of wearing personal protective equipment (PPE)?",
    options: [
      "Yes, by informing the site supervisor",
      "Yes, by writing officially to your employer",
      "No, you cannot opt out",
      "Yes, if it is uncomfortable"
    ],
    correctAnswer: "C",
    explanation: "You cannot legally ‘opt out’ of being protected from significant risks at work. This includes wearing the necessary PPE."
  },
  {
    id: "4.7",
    section: "Personal Protective Equipment at Work",
    text: "What is the most important item of personal protective equipment (PPE) when working on or near a highway?",
    options: [
      "Safety footwear",
      "Waterproof clothing",
      "Hard hat",
      "High visibility vest"
    ],
    correctAnswer: "D",
    explanation: "A high visibility vest is the most important of PPE however, the other items of PPE may also be required."
  },
  {
    id: "4.8",
    section: "Personal Protective Equipment at Work",
    text: "If you are drilling into concrete with a masonry drill, in which one of the following circumstances will you need to wear eye protection?",
    options: [
      "Always",
      "Only when drilling overhead",
      "Only if the drill is bigger than 10mm",
      "Not if drilling into the floor"
    ],
    correctAnswer: "A",
    explanation: "Suitable eye protection must always be worn when working with power-driven tools where chippings are likely to fly or abrasive materials could be propelled."
  },
  {
    id: "4.9",
    section: "Personal Protective Equipment at Work",
    text: "When must you wear all personal protective equipment (PPE) provided by your employer?",
    options: [
      "As instructed by your employer",
      "Only if it fits",
      "When you want to",
      "Only when you need to"
    ],
    correctAnswer: "A",
    explanation: "Under the PPE at Work Regulations 1992, employees must wear PPE as instructed."
  },
  {
    id: "4.10",
    section: "Personal Protective Equipment at Work",
    text: "When MUST an employer provide their employees with personal protective equipment (PPE)?",
    options: [
      "When they may be exposed to a risk to their health and safety which cannot be controlled another way",
      "Twice a year",
      "If the client or main contractor specifies it in the contract",
      "Every 5 years"
    ],
    correctAnswer: "A",
    explanation: "As required by regulation 4 of the PPE Regulations."
  },
  {
    id: "4.11",
    section: "Personal Protective Equipment at Work",
    text: "What type of eye protection would you wear when using a cartridge-operated tool, such as a nail gun?",
    options: [
      "Impact goggles",
      "Sun glasses",
      "Safety spectacles",
      "Chemical protection glasses"
    ],
    correctAnswer: "A",
    explanation: "When using a cartridge-operated tool, such as a nail gun, shatter proof goggles should be worn."
  },
  {
    id: "4.12",
    section: "Personal Protective Equipment at Work",
    text: "Which of the following must your safety helmet comply with to meet with the requirements of the Personal Protective Equipment at Work Regulations?",
    options: [
      "It can be adjusted to suit your head size",
      "It is a good visible colour",
      "It has a label with your name on it",
      "It is less than 1 year old"
    ],
    correctAnswer: "A",
    explanation: "An assessment of the suitability of head protection would include consideration of whether it can be adjusted to suit the individual who is to wear it."
  },
  {
    id: "4.13",
    section: "Personal Protective Equipment at Work",
    text: "In which of the following ways should you wear your safety helmet?",
    options: [
      "With the peak raised to deflect falling material",
      "With the helmet back to front",
      "With the peak raised to give good vision",
      "Square on your head, properly adjusted"
    ],
    correctAnswer: "D",
    explanation: "Any item of personal protective equipment must be used in accordance with the manufacturer’s instructions."
  },
  {
    id: "4.14",
    section: "Personal Protective Equipment at Work",
    text: "When an employee has been issued with eye protection, what are their duties under the Personal Protective Equipment at Work Regulations?",
    options: [
      "To ensure that they are the right type of protector",
      "Not to loan the equipment to other operatives",
      "To use the protection in accordance with training and instruction",
      "To pay for replacement of lost eye protection"
    ],
    correctAnswer: "C",
    explanation: "Regulation 10(2) requires that every employee shall use any PPE in accordance with the training and instruction received."
  },
  {
    id: "4.15",
    section: "Personal Protective Equipment at Work",
    text: "When should you wear safety footwear on site?",
    options: [
      "Only when working on scaffolds",
      "When there is a risk of a foot injury",
      "Only when working outdoors",
      "Only if the site conditions are wet"
    ],
    correctAnswer: "B",
    explanation: "Suitable safety footwear should be worn if there is a risk of injury from objects falling onto the foot or sharp objects, such as nails, penetrating the sole."
  },
  {
    id: "4.16",
    section: "Personal Protective Equipment at Work",
    text: "With regard to the use of personal protective equipment (PPE), which one of the following statements is true?",
    options: [
      "If you do not use the personal protective equipment (PPE) provided you will probably not come to any harm",
      "Personal protective equipment (PPE) protects only the user from the dangers present",
      "Personal protective equipment (PPE) need only be provided if it is not too expensive",
      "Personal protective equipment (PPE) need only be used if it is available"
    ],
    correctAnswer: "B",
    explanation: "PPE is there to protect the individual. Wearing PPE does not protect other people nearby."
  },
  {
    id: "4.17",
    section: "Personal Protective Equipment at Work",
    text: "Which of the following statements is TRUE when an employer issues personal protective equipment (PPE)?",
    options: [
      "The employer can charge you for the full cost of it",
      "The employer cannot charge you for it",
      "The employer can charge you for up to half the cost of it",
      "The employer can only charge you for it if you lose or damage it"
    ],
    correctAnswer: "B",
    explanation: "Employers cannot charge for PPE such as hard hats, gloves, required by law (and the bulk of PPE is required by law)."
  },
  {
    id: "4.18",
    section: "Personal Protective Equipment at Work",
    text: "Which one of the following must apply to any hard hat provided?",
    options: [
      "It is CE or UKCA marked",
      "It is less than 5 years old",
      "It is less than 1 year old",
      "It is less than 2 years old"
    ],
    correctAnswer: "A",
    explanation: "All PPE should be CE – marked, indicating that it meets the basic health and safety requirements."
  },
  {
    id: "4.19",
    section: "Personal Protective Equipment at Work",
    text: "When using personal protective equipment (PPE) legally you must do which of the following?",
    options: [
      "Not interfere with it or misuse it",
      "Replace it at your own expense if it is damaged",
      "Return it to the manufacturer when damaged",
      "Clean it properly once a week"
    ],
    correctAnswer: "A",
    explanation: "Interfering with or misusing items provided in the interests of health, safety or welfare is an offence under the HSW Act 1974 (Section 8)."
  },
  {
    id: "4.20",
    section: "Personal Protective Equipment at Work",
    text: "If it is necessary for an employee to use personal protective equipment, who has a duty to provide it?",
    options: [
      "The trade union",
      "The employee",
      "The employer",
      "The principal contractor"
    ],
    correctAnswer: "C",
    explanation: "This is a requirement of the PPE at Work Regulations 1992 (Regulation 4)."
  },
  {
    id: "4.21",
    section: "Personal Protective Equipment at Work",
    text: "When should a safety helmet be worn on site?",
    options: [
      "At all times unless there is no foreseeable risk of injury to the head other than by falling",
      "When you are out in the open air",
      "When walking to and from a place of work",
      "Only when something may fall"
    ],
    correctAnswer: "A",
    explanation: "The circumstances when there is no foreseeable risk of head injury from falling or swinging objects or striking the head against something will be very limited in most construction work."
  },
  {
    id: "4.22",
    section: "Personal Protective Equipment at Work",
    text: "A colleague has drilled holes in the top of their safety helmet because the weather is hot. Is this:",
    options: [
      "Acceptable if the holes are small",
      "Their choice",
      "Acceptable",
      "In breach of legal requirements"
    ],
    correctAnswer: "D",
    explanation: "Interfering with or misusing items provided in the interests of health, safety or welfare is an offence under the HSW Act 1974 (section 8)."
  },
  {
    id: "4.23",
    section: "Personal Protective Equipment at Work",
    text: "Who has a duty to provide PPE (Personal Protective Equipment) for use by an employee?",
    options: [
      "The employer",
      "The principal contractor",
      "The employee",
      "The client"
    ],
    correctAnswer: "A",
    explanation: "This is a requirement of the PPE at Work Regulations 1992 (Regulation 4)."
  },
  {
    id: "4.24",
    section: "Personal Protective Equipment at Work",
    text: "When would it be appropriate to wear a bump-cap instead of a safety helmet?",
    options: [
      "When there is no foreseeable risk of injury from falling or swinging objects",
      "In warm weather",
      "When working in excavations",
      "When working on a ladder"
    ],
    correctAnswer: "A",
    explanation: "Industrial scalp protectors (bump caps) can protect against striking fixed obstacles, scalping or entanglements. They do not provide suitable protection against falling or swinging objects."
  },
  {
    id: "4.25",
    section: "Personal Protective Equipment at Work",
    text: "How can you protect your eyesight while working on site?",
    options: [
      "By squinting",
      "By not looking directly at what you are doing",
      "By wearing the correct type of eye protection",
      "By wearing sunglasses"
    ],
    correctAnswer: "C",
    explanation: "By wearing the correct type of eye protection."
  },
  {
    id: "4.26",
    section: "Personal Protective Equipment at Work",
    text: "When is head protection required to be worn on a construction site to comply with the Personal Protective Equipment at Work Regulations?",
    options: [
      "At all times except by those who are self employed",
      "Only when you feel like it",
      "At all times unless you are working on scaffold",
      "At all times unless there is no foreseeable risk of injury to the head other than by falling"
    ],
    correctAnswer: "D",
    explanation: "If there is no risk of injury to the head, then hard hats are not required by law. However, on construction sites, there will almost always be situations where a risk of head injury remains."
  },
  {
    id: "4.27",
    section: "Personal Protective Equipment at Work",
    text: "Why should a high visibility vest be worn when working on roads?",
    options: [
      "So road users and plant operators can see you",
      "Because you were told to do so",
      "Because it will keep you warm",
      "So that your mates can see you"
    ],
    correctAnswer: "A",
    explanation: "Many workers are struck and injured, often seriously, by moving vehicles."
  },
  {
    id: "4.28",
    section: "Personal Protective Equipment at Work",
    text: "When considering what measures to take to protect people’s health and safety, PPE should always be regarded as:",
    options: [
      "The last resort",
      "The first line of defence",
      "The best way to tackle the job",
      "The only practical measure"
    ],
    correctAnswer: "A",
    explanation: "Engineering controls and safe systems of work should always be considered first."
  },

  // Section 5: Health and Hygiene
  {
    id: "5.1",
    section: "Health and Hygiene",
    text: "Exposure to asbestos fibres may cause which one of the following?",
    options: [
      "Dermatitis",
      "Asthma",
      "Glandular fever",
      "Asbestosis"
    ],
    correctAnswer: "D",
    explanation: "Breathing in asbestos fibres can also lead to a number of other diseases, including lung cancer and mesothelioma."
  },
  {
    id: "5.2",
    section: "Health and Hygiene",
    text: "Asbestos is suspected in the workplace, during renovation do you:",
    options: [
      "Remove it",
      "Paint it",
      "Ignore it",
      "Seek guidance immediately"
    ],
    correctAnswer: "D",
    explanation: "Competent advice must be sought, to prevent exposure to the worker or others, either at the time, or subsequently."
  },
  {
    id: "5.3",
    section: "Health and Hygiene",
    text: "Which of the following statements about asbestos is TRUE?",
    options: [
      "Asbestos is not really a hazard to health",
      "White asbestos is safe to use",
      "All asbestos can be a hazard to health",
      "Only brown and blue asbestos are a hazard to health"
    ],
    correctAnswer: "C",
    explanation: "All forms of asbestos can cause fatal diseases."
  },
  {
    id: "5.4",
    section: "Health and Hygiene",
    text: "While working you discover material you think could be asbestos. What should you do?",
    options: [
      "Clear any dust and fragments, put them in a bin then carry on working",
      "Inform the site nurse",
      "Stop working immediately and report your suspicions to your supervisor",
      "Dampen the material to prevent further dust being created, then carry on working"
    ],
    correctAnswer: "C",
    explanation: "It is essential to stop work if asbestos is found or suspected, and await competent advice on what to do next."
  },
  {
    id: "5.5",
    section: "Health and Hygiene",
    text: "Can you tell by the smell of a product whether it is likely to cause harm?",
    options: [
      "No",
      "Only within an enclosed space",
      "Yes",
      "Only if you have been trained"
    ],
    correctAnswer: "A",
    explanation: "Many harmful substances have no smell."
  },
  {
    id: "5.6",
    section: "Health and Hygiene",
    text: "How would you recognise a hazardous substance?",
    options: [
      "By a symbol on the container",
      "By its smell",
      "The colour of the label on the container",
      "It will be in a suitable container"
    ],
    correctAnswer: "A",
    explanation: "A supplier of a packaged hazardous substance must include a label on the packaging incorporating one or more hazard symbols alerting users to the dangers posed by the chemical."
  },
  {
    id: "5.7",
    section: "Health and Hygiene",
    text: "Which of the following does NOT cause skin problems?",
    options: [
      "Bitumens",
      "Solvents",
      "Asbestos",
      "Epoxy resins"
    ],
    correctAnswer: "C",
    explanation: "Asbestos is potentially very harmful if inhaled, but does not affect the skin significantly."
  },
  {
    id: "5.8",
    section: "Health and Hygiene",
    text: "When an assessment of hazardous substances has been carried out under the COSHH Regulations, the risks and control measures should be explained to:",
    options: [
      "The operatives using the substance",
      "All employees on site",
      "The accounts department",
      "The person in charge of the stores"
    ],
    correctAnswer: "A",
    explanation: "All those working with the hazardous substances in question need to know about any risks."
  },
  {
    id: "5.9",
    section: "Health and Hygiene",
    text: "If your hands are very dirty, what should you use to get them clean?",
    options: [
      "White Spirit",
      "Paraffin",
      "Soap and water",
      "Thinners"
    ],
    correctAnswer: "C",
    explanation: "The other substances can remove natural oils from the skin."
  },
  {
    id: "5.10",
    section: "Health and Hygiene",
    text: "The presence of rats on site creates a risk of catching Weil’ s disease. What is the EASIEST PRACTICAL MEASURE that you can take to discourage the presence of rats?",
    options: [
      "Avoid leaving scraps of food lying about",
      "Lay traps containing rat poison",
      "Contact the local Environmental Health Officer",
      "Bring a large cat on site"
    ],
    correctAnswer: "A",
    explanation: "The easiest solution is to avoid leaving food around, since this is what attracts vermin."
  },
  {
    id: "5.11",
    section: "Health and Hygiene",
    text: "Why is personal hygiene so important?",
    options: [
      "So you don’t smell",
      "Because the COSHH regulations require it",
      "To protect your own and others’ health",
      "To stop you catching something nasty"
    ],
    correctAnswer: "C",
    explanation: "To protect your own and others’ health."
  },
  {
    id: "5.12",
    section: "Health and Hygiene",
    text: "If you have been handling lead, how is it most likely to get into your blood stream?",
    options: [
      "By not wearing safety goggles",
      "By not reporting the matter to the HSE",
      "By not using the correct safety footwear",
      "By not washing your hands before eating"
    ],
    correctAnswer: "D",
    explanation: "The route into the body is ingestion, normally from lead contamination on the hands."
  },
  {
    id: "5.13",
    section: "Health and Hygiene",
    text: "The number of toilets provided on site depends on:",
    options: [
      "The type of work being completed",
      "The ratio of male and female workers on site",
      "The duration of the work on site",
      "The number of personnel on site"
    ],
    correctAnswer: "D",
    explanation: "Guidance on the provision of welfare facilities is given in HSE publication ‘Health and Safety in Construction‘."
  },
  {
    id: "5.14",
    section: "Health and Hygiene",
    text: "Which of the following is not required to be provided under the Construction (Design and Management) Regulations?",
    options: [
      "Toilet facilities",
      "Washing facilities",
      "Hot food",
      "Drinking water"
    ],
    correctAnswer: "C",
    explanation: "Guidance on the provision of welfare facilities as required by CDM is given in HSE publication ‘Health and Safety in Construction‘."
  },
  {
    id: "5.15",
    section: "Health and Hygiene",
    text: "The extended use of powered hand-held tools and equipment may lead to which medical condition?",
    options: [
      "Vibration white finger",
      "Weil’s disease",
      "Asbestosis",
      "Dermatitis"
    ],
    correctAnswer: "A",
    explanation: "Hand-arm vibration can cause a range of conditions (including vibration white finger) collectively known as hand-arm vibration syndrome."
  },
  {
    id: "5.16",
    section: "Health and Hygiene",
    text: "What must your employer do if the daily personal noise exposure is at or exceeds 85 db(A)?",
    options: [
      "Provide hearing protection to those employees who ask for it",
      "Issue hearing protection to those exposed and ensure that it is worn",
      "Tell employees to buy their own hearing protection",
      "Report it to the Health and Safety Executive"
    ],
    correctAnswer: "B",
    explanation: "This is an interim measure under the Control of Noise at Work Regulations 2005 when the daily personal noise exposure is at or exceeds the upper exposure action value of 85 dB(A)."
  },
  {
    id: "5.17",
    section: "Health and Hygiene",
    text: "What are the lower and upper action values with regard to daily personal noise exposure, as defined in the Control of Noise at Work Regulations 2005?",
    options: [
      "85 dB(A) and 90 dB(A)",
      "80 dB(A) and 85 dB(A)",
      "70 dB(A) and 80 dB(A)",
      "75 dB(A) and 85dB(A)"
    ],
    correctAnswer: "B",
    explanation: "Daily personal noise exposure is the average noise level experienced by an individual over an 8 hour period."
  },
  {
    id: "5.18",
    section: "Health and Hygiene",
    text: "At or above what level of daily personal noise exposure does an employer have to provide hearing protection if it is requested by an employee?",
    options: [
      "90 dB(A)",
      "95 dB(A)",
      "80 dB(A)",
      "85 dB(A)"
    ],
    correctAnswer: "C",
    explanation: "This is one of the duties of employers under the Control of Noise at Work Regulations 2005 when the lower exposure action value of 80 dB(A) is reached or exceeded."
  },
  {
    id: "5.19",
    section: "Health and Hygiene",
    text: "The effects of damage to your hearing by long-term exposure to high noise levels:",
    options: [
      "Can be corrected by an operation",
      "Are permanent",
      "Will be reduced when you change jobs",
      "Can be reversed to near normal with time"
    ],
    correctAnswer: "B",
    explanation: "Hearing damage due to long-term noise exposure is irreversible."
  },
  {
    id: "5.20",
    section: "Health and Hygiene",
    text: "Hearing protection should be worn:",
    options: [
      "In designated areas",
      "In noisy internal areas only",
      "At any workplace",
      "Only on building sites"
    ],
    correctAnswer: "A",
    explanation: "Employees must wear hearing protectors when exposed at or above the upper exposure action values and within hearing protection zones."
  },
  {
    id: "5.21",
    section: "Health and Hygiene",
    text: "Wearing suitable hearing protection:",
    options: [
      "Stops you hearing distracting conversations",
      "Stops you hearing all noise",
      "Brings noise down to an acceptable level",
      "Repairs damaged hearing"
    ],
    correctAnswer: "C",
    explanation: "Hearing protection still allows some noise to reach the ear, but, if it has been correctly chosen, will reduce noise levels to an acceptable level."
  },
  {
    id: "5.22",
    section: "Health and Hygiene",
    text: "Which of the following is one of the recommended means of protecting your hearing?",
    options: [
      "Rolled tissue paper",
      "Cotton wool pads",
      "Soft cloth pads",
      "Ear defenders"
    ],
    correctAnswer: "D",
    explanation: "The others are not considered to be suitable types of hearing protection."
  },
  {
    id: "5.23",
    section: "Health and Hygiene",
    text: "Which of the following would NOT reduce the risks from hand-arm vibration when using a hammer action tool?",
    options: [
      "Selecting the lowest vibration tool that is suitable and which can do the work efficiently",
      "Wearing gloves to keep the hands warm",
      "Working as a team to share the work out",
      "Making sure one person does all the work with the tool"
    ],
    correctAnswer: "D",
    explanation: "Where tools require constant or frequent use, rotas will avoid individuals having long exposure to vibration."
  },
  {
    id: "5.24",
    section: "Health and Hygiene",
    text: "Which of the following animals can carry Weil’s disease?",
    options: [
      "Snake",
      "Sheep",
      "Rat",
      "Pig"
    ],
    correctAnswer: "C",
    explanation: "Weil’s disease is a serious and sometimes fatal infection that can be transmitted to humans by contact with infected rats."
  },
  {
    id: "5.25",
    section: "Health and Hygiene",
    text: "You are most likely to catch Weil’s disease (Leptospirosis) if you:",
    options: [
      "Work near wet ground, waterways or sewers",
      "Work near air conditioning units",
      "Fix showers or baths",
      "Drink water from a standpipe"
    ],
    correctAnswer: "A",
    explanation: "Anyone who is exposed to rat urine is at risk, particularly sewer workers and farmers."
  },
  {
    id: "5.26",
    section: "Health and Hygiene",
    text: "What should you do if the toilets on your site are continually dirty?",
    options: [
      "Ignore the problem – its normal on a construction site",
      "Make sure you tell someone who can sort it out",
      "Find some cleaning materials and clean it up yourself",
      "Ask in a nearby cafe or pub if you can use their toilets"
    ],
    correctAnswer: "B",
    explanation: "The person in control of the site should make sure someone is responsible for keeping the facilities clean and tidy."
  },
  {
    id: "5.27",
    section: "Health and Hygiene",
    text: "Excessive sunlight on bare skin can cause which serious health problem?",
    options: [
      "Dermatitis",
      "Rickets",
      "Acne",
      "Skin cancer"
    ],
    correctAnswer: "D",
    explanation: "Ultraviolet rays in sunlight can cause sunburn and premature ageing of the skin. The most serious effect, however, is an increased chance of developing skin cancer."
  },

  // Section 6: Fire and Emergency
  {
    id: "6.1",
    section: "Fire and Emergency",
    text: "An emergency route(s) must be provided on construction sites to ensure:",
    options: [
      "Safe passage to the open air",
      "Safe passage to the rest area",
      "Safe passage to a secure place of safety",
      "Safe passage to the ground from height"
    ],
    correctAnswer: "C",
    explanation: "Safe passage to a secure place of safety."
  },
  {
    id: "6.2",
    section: "Fire and Emergency",
    text: "What action should you take if you discover a fire?",
    options: [
      "Leave it because you will get the blame",
      "Raise the alarm",
      "Carry on working if it is safe to do so",
      "Extinguish the fire without raising the alarm"
    ],
    correctAnswer: "B",
    explanation: "Raising the alarm will reduce the risk to others, particularly if the fire spreads."
  },
  {
    id: "6.3",
    section: "Fire and Emergency",
    text: "If there had been a small fire, who should you report it to?",
    options: [
      "Your supervisor",
      "The main contractor’s site agent",
      "The site’s fire marshal",
      "The resident site engineer"
    ],
    correctAnswer: "A",
    explanation: "The supervisor should be aware, so that further preventative measures can be considered."
  },
  {
    id: "6.4",
    section: "Fire and Emergency",
    text: "If you discover a fire at work, what should you do first:",
    options: [
      "Telephone 999",
      "Use a fire extinguisher to put it out",
      "Run around looking for an alarm to sound",
      "Raise the alarm and warn fellow workers"
    ],
    correctAnswer: "D",
    explanation: "Raising the alarm will reduce the risk to others, particularly if the fire spreads."
  },
  {
    id: "6.5",
    section: "Fire and Emergency",
    text: "What is a fire assembly point?",
    options: [
      "The place to go when the fire alarm sounds",
      "A place where the fire brigade goes to",
      "A place where fire extinguishers are kept",
      "The place where the fire alarm is"
    ],
    correctAnswer: "A",
    explanation: "It is essential that people go to a place of safety, where supervisors or fire marshals know where they are, in the event of a fire."
  },
  {
    id: "6.6",
    section: "Fire and Emergency",
    text: "Where would you go in the event of a fire?",
    options: [
      "To the canteen for a cup of tea",
      "To the fire assembly point",
      "To the site hut",
      "To the fire to see what is going on"
    ],
    correctAnswer: "B",
    explanation: "It is essential that people go to a place of safety, where supervisors or fire marshals know where they are, in the event of a fire."
  },
  {
    id: "6.7",
    section: "Fire and Emergency",
    text: "What should you do if you hear the fire alarm?",
    options: [
      "Ignore it because it might be someone playing around",
      "Leave work for the day",
      "Evacuate the premises to a designated place of safety",
      "Go towards the sound to find out what is going on"
    ],
    correctAnswer: "C",
    explanation: "It is essential that people go to a place of safety, where supervisors or fire marshals know where they are, in the event of a fire."
  },
  {
    id: "6.8",
    section: "Fire and Emergency",
    text: "All new fire extinguishers are coloured red or of bright self-coloured metal. How do you know the difference between types?",
    options: [
      "A different colour panel or band is on the body of the extinguishers",
      "During site induction, you will be told where the different types of extinguishers are",
      "The weight and shape of the extinguisher",
      "The type of extinguisher is written on a sign next to it"
    ],
    correctAnswer: "A",
    explanation: "Different coloured bands show extinguisher types e.g. black for CO2 and blue for dry powder."
  },
  {
    id: "6.9",
    section: "Fire and Emergency",
    text: "A black-labelled fire extinguisher contains:",
    options: [
      "Dry powder",
      "Water",
      "Foam",
      "Carbon dioxide"
    ],
    correctAnswer: "D",
    explanation: "Carbon dioxide."
  },
  {
    id: "6.10",
    section: "Fire and Emergency",
    text: "What is a blue-labelled fire extinguisher filled with?",
    options: [
      "Water",
      "Foam",
      "Dry powder",
      "Carbon dioxide"
    ],
    correctAnswer: "C",
    explanation: "Dry powder."
  },
  {
    id: "6.11",
    section: "Fire and Emergency",
    text: "Which fire extinguisher should not be used on flammable liquid fires?",
    options: [
      "Carbon dioxide",
      "Powder",
      "Water",
      "Foam"
    ],
    correctAnswer: "C",
    explanation: "Flammable liquids spread if attacked by water extinguishers."
  },
  {
    id: "6.12",
    section: "Fire and Emergency",
    text: "What colour is a water filled fire extinguisher, or its label?",
    options: [
      "Black",
      "Cream",
      "Red",
      "Green"
    ],
    correctAnswer: "C",
    explanation: "Red."
  },
  {
    id: "6.13",
    section: "Fire and Emergency",
    text: "When discharging carbon dioxide fire extinguishers, the nozzle:",
    options: [
      "Becomes warm",
      "Becomes very hot",
      "Becomes very cold",
      "Doesn’t change temperature"
    ],
    correctAnswer: "C",
    explanation: "The expansion of CO2 gas coming out of the nozzle causes rapid cooling."
  },
  {
    id: "6.14",
    section: "Fire and Emergency",
    text: "For fires involving spilled petrol, which types of fire extinguisher could you use?",
    options: [
      "Water, carbon dioxide or foam",
      "Water, foam or dry powder",
      "Foam, carbon dioxide or dry powder",
      "Water, carbon dioxide or dry powder"
    ],
    correctAnswer: "C",
    explanation: "Flammable liquids, such as petrol, spread if attacked by water extinguishers."
  },
  {
    id: "6.15",
    section: "Fire and Emergency",
    text: "Which types of fire extinguishers should be used on electrical fires?",
    options: [
      "Foam and water",
      "Carbon dioxide and dry powder",
      "Dry powder and foam",
      "Water and carbon dioxide"
    ],
    correctAnswer: "B",
    explanation: "Liquids should not be used, since they may conduct electricity."
  },
  {
    id: "6.16",
    section: "Fire and Emergency",
    text: "A red-labelled fire extinguisher should NOT be used:",
    options: [
      "On wood fires",
      "Where there is a risk of electrocution",
      "On burning clothes",
      "On burning furniture"
    ],
    correctAnswer: "B",
    explanation: "Red denotes water. Liquids should not be used on electrical fires, since they can conduct electricity."
  },
  {
    id: "6.17",
    section: "Fire and Emergency",
    text: "A workmate burns their hand on a piece of very hot metal. What should you do first?",
    options: [
      "Rub some cream or Vaseline into the burn",
      "Cover the burn with something dry",
      "Warn other people about the piece of hot metal",
      "Put their hand in cold water if it is available"
    ],
    correctAnswer: "D",
    explanation: "Burns need immediate and sustained cooling."
  },
  {
    id: "6.18",
    section: "Fire and Emergency",
    text: "Which of the following items should not be in a first aid box?",
    options: [
      "Safety pins",
      "Pain killers",
      "Disposable gloves",
      "Triangular bandages"
    ],
    correctAnswer: "B",
    explanation: "Drugs must not be kept in a first aid box (Health and Safety guidance note INDG 214)."
  },
  {
    id: "6.19",
    section: "Fire and Emergency",
    text: "How often should a first-aider qualified in First Aid at Work (FAW) or Emergency First Aid at Work (EFAW) receive retraining?",
    options: [
      "Every six months",
      "Every two years",
      "Every three years",
      "Every four years"
    ],
    correctAnswer: "C",
    explanation: "First Aid at Work (FAW) and Emergency First Aid at Work (EFAW) certificates are valid for three years."
  },
  {
    id: "6.20",
    section: "Fire and Emergency",
    text: "If you came across an injury on site, what is the first thing you should do?",
    options: [
      "Tell the casualty to visit their doctor",
      "Inform the HSE",
      "Contact a first-aider",
      "Try and find out what happened"
    ],
    correctAnswer: "C",
    explanation: "Competent first-aid treatment is essential, and should be summoned immediately."
  },
  {
    id: "6.21",
    section: "Fire and Emergency",
    text: "An employee has a fall and is obviously unconscious. What is the FIRST thing you should do?",
    options: [
      "Send someone for the first-aider",
      "Find out if there were any witnesses",
      "Try to protect them from any further injury",
      "Put them in the recovery position"
    ],
    correctAnswer: "A",
    explanation: "Competent first-aid treatment is essential, and should be summoned immediately."
  },
  {
    id: "6.22",
    section: "Fire and Emergency",
    text: "A labourer gets an electric shock; looks a bit pale but says they are alright. What should you do?",
    options: [
      "Send someone for the first-aider",
      "Tell them to report it to their supervisor",
      "Go and check the electrics so it cannot happen again",
      "See if they want a drink or a cigarette"
    ],
    correctAnswer: "A",
    explanation: "Competent first-aid treatment is essential, and should be summoned immediately."
  },
  {
    id: "6.23",
    section: "Fire and Emergency",
    text: "Which of the following must an employer consider when making provisions for first aid?",
    options: [
      "How much working space will be wasted",
      "How much it will cost",
      "Whether the local ambulance service can be used",
      "The likely types of injury"
    ],
    correctAnswer: "D",
    explanation: "Employers must match first-aid provision to the nature of risks at work."
  },
  {
    id: "6.24",
    section: "Fire and Emergency",
    text: "In an on-site emergency, which of the following must a first-aider NOT do?",
    options: [
      "Treat an unconscious patient",
      "Control bleeding",
      "Give resuscitation",
      "Give medicines to patients without authorisation"
    ],
    correctAnswer: "D",
    explanation: "First-aid is concerned with preserving life and limb, and first-aiders are not trained to dispense medical treatments."
  },
  {
    id: "6.25",
    section: "Fire and Emergency",
    text: "If someone has fallen over and has stopped breathing, what is the first thing you should do?",
    options: [
      "Send for help",
      "Attend to any broken bones",
      "Try to give the casualty a drink",
      "Try to start the casualty breathing"
    ],
    correctAnswer: "A",
    explanation: "Do not delay in sending for help; then try to start the casualty breathing."
  },
  {
    id: "6.26",
    section: "Fire and Emergency",
    text: "If someone has fallen off a ladder and they say their leg is broken, what should you do?",
    options: [
      "Send for the first-aider",
      "Help them to the cabin or mess hut",
      "Move the ladder so no-one trips over it",
      "Bandage their legs together"
    ],
    correctAnswer: "A",
    explanation: "Competent first-aid treatment is essential, and should be summoned immediately."
  },
  {
    id: "6.27",
    section: "Fire and Emergency",
    text: "Your workmate suddenly gets a foreign body in the eye. What should you do?",
    options: [
      "Take your workmate to the supervisor",
      "Use a clean handkerchief to try and remove it",
      "Wash your hands before touching your mate’s face",
      "Send someone for the first-aider"
    ],
    correctAnswer: "D",
    explanation: "Competent first-aid treatment is essential, and should be summoned immediately."
  },
  {
    id: "6.28",
    section: "Fire and Emergency",
    text: "A person nearly collapses complaining of stomach pains. What should you do?",
    options: [
      "Send someone for the first-aider",
      "Go and find them something to drink",
      "Help them to find somewhere comfortable to sit",
      "Ask them if they want something to eat"
    ],
    correctAnswer: "A",
    explanation: "Competent first-aid treatment is essential, and should be summoned immediately."
  },
  {
    id: "6.29",
    section: "Fire and Emergency",
    text: "A workmate lifting a big box suddenly shouts ‘oh, my back’ and drops the box. What should you do?",
    options: [
      "Tell them to leave it for someone else to lift",
      "Send for the first-aider",
      "Help them to lift the box",
      "Find them somewhere comfortable to sit and rest"
    ],
    correctAnswer: "B",
    explanation: "The priority for any back injury is to obtain first-aid advice, in order to prevent further damage."
  },
  {
    id: "6.30",
    section: "Fire and Emergency",
    text: "What should you do immediately if you get a small cut on a finger whilst at work?",
    options: [
      "Carry on working",
      "Get first-aid",
      "Ask your employer to report it to the HSE",
      "Just wash it clean"
    ],
    correctAnswer: "B",
    explanation: "It is important to obtain first-aid to prevent further harm (e.g. through infection). It should also be recorded in the accident book (BI 510)."
  },
  {
    id: "6.31",
    section: "Fire and Emergency",
    text: "In an emergency situation at work you should do what?",
    options: [
      "Phone the HSE Inspectorate",
      "Obey the site emergency procedure",
      "Ensure your work mates are all accounted for",
      "Leave the site immediately"
    ],
    correctAnswer: "B",
    explanation: "A site emergency plan should have been drawn up and you should be familiar with the emergency procedure."
  },
  {
    id: "6.32",
    section: "Fire and Emergency",
    text: "What does the sound of a siren on-site normally indicate?",
    options: [
      "A fire",
      "A toxic escape",
      "An explosion",
      "An emergency"
    ],
    correctAnswer: "D",
    explanation: "An emergency."
  },
  {
    id: "6.33",
    section: "Fire and Emergency",
    text: "The purpose of fire-stopping in a building is to:",
    options: [
      "Prevent a fire starting",
      "Delay the passage of fire and smoke through openings in walls and floors",
      "Activate fire sprinklers",
      "Set off the fire alarm"
    ],
    correctAnswer: "B",
    explanation: "Fire-stopping is a passive fire protection measure used to seal any openings created in a fire resistance-rated wall or floor assembly."
  },
  {
    id: "6.34",
    section: "Fire and Emergency",
    text: "What are fire-stops designed to do?",
    options: [
      "Extinguish a fire",
      "Protect services (such as wiring systems) against fire damage",
      "Close fire doors automatically",
      "Delay the passage of fire and smoke through openings in walls and floors"
    ],
    correctAnswer: "D",
    explanation: "Fire-stops are designed to maintain the fireproofing of a wall or floor assembly. Fire-stopping delays the spread of fire and smoke."
  },
  {
    id: "6.35",
    section: "Fire and Emergency",
    text: "In addition to preserving fire separation between areas of a building, which other important fire safety function can fire-stopping achieve?",
    options: [
      "Preventing premature structural collapse",
      "Reducing nuisance fire alarms",
      "Reducing noise transmission",
      "Saving energy"
    ],
    correctAnswer: "A",
    explanation: "During a fire it is essential that the load-bearing capacity of elements of the building structure are maintained until occupants have escaped."
  },
  {
    id: "6.36",
    section: "Fire and Emergency",
    text: "Intumescent materials used to provide fire-stopping are designed to:",
    options: [
      "Expand when subjected to smoke",
      "Shrink when subjected to heat",
      "Expand when subjected to heat",
      "Prevent noise transmission"
    ],
    correctAnswer: "C",
    explanation: "These include intumescent products, which are designed to expand and provide fire-stopping when subjected to heat."
  },
  {
    id: "6.37",
    section: "Fire and Emergency",
    text: "What should you do if you disturb fire-stopping around a wiring system penetrating a wall or floor whilst carrying out work?",
    options: [
      "Nail a piece of wood over any gaps",
      "Ensure that the fire-stopping is reinstated to the necessary standard as soon as possible",
      "Highlight this on any certification",
      "Fill any holes or gaps with squashed newspaper"
    ],
    correctAnswer: "B",
    explanation: "It is essential that the integrity of fire compartments is maintained during the construction of buildings and on their completion."
  },
  {
    id: "6.38",
    section: "Fire and Emergency",
    text: "If you discover a hole or gap in a fire rated wall or floor that has not been fire-stopped, what should you do?",
    options: [
      "Report it to your supervisor without delay",
      "Ignore it unless it is causing a draught",
      "Cover the hole or gap with insulating tape",
      "Use decorators’ sealant to fill the gap"
    ],
    correctAnswer: "A",
    explanation: "Supervisors need to be made aware of any observed inadequacies in fire-stopping."
  },
  {
    id: "6.39",
    section: "Fire and Emergency",
    text: "Which one of the following is associated with a Higher Risk Building (HRBs) in England?",
    options: [
      "At least 18 metres in height or seven storeys",
      "At least 15 metres in height or seven storeys",
      "At least 15 metres in height or six storeys",
      "At least 18 metres in height or six storeys"
    ],
    correctAnswer: "A",
    explanation: "At least 18 meters in height or seven storeys is the height at which the Building Safety Regulator regime will apply in England."
  },
  {
    id: "6.40",
    section: "Fire and Emergency",
    text: "For a holistic approach to fire safety - to plan for all aspects of fire safety - the three main areas that need to be considered are design, construction and...",
    options: [
      "Occupation",
      "Fire stopping",
      "Maintenance",
      "Demolition"
    ],
    correctAnswer: "C",
    explanation: "Design, construction and maintenance are the main aspects to be considered as part of a holistic view to fire safety covering all elements to cover all aspects."
  },
  {
    id: "6.41",
    section: "Fire and Emergency",
    text: "Which of the following materials provide the least effective fire resistance?",
    options: [
      "Brick",
      "Concrete",
      "Timber",
      "Steel"
    ],
    correctAnswer: "C",
    explanation: "Timber or wood has a low ignition point and can be highly flammable, generally considered to have poor fire resistance."
  },
  {
    id: "6.42",
    section: "Fire and Emergency",
    text: "When man-made substances, such as rubber, burn, the colour of the smoke is typically:",
    options: [
      "White",
      "Black",
      "Grey",
      "Yellow"
    ],
    correctAnswer: "B",
    explanation: "The black colour of smoke from burning man-made substances, including rubber, is primarily due to incomplete combustion of carbon-based materials."
  },
  {
    id: "6.43",
    section: "Fire and Emergency",
    text: "Which one of the following is a benefit of a ‘stay put’ strategy for fire evacuation in high risk buildings?",
    options: [
      "It slows the fire fighters’ response to a fire",
      "It reduces communication between occupants and emergency services",
      "You reduce the risk of entering a smoky corridor and being overcome by smoke",
      "It allows lifts to be used more effectively"
    ],
    correctAnswer: "C",
    explanation: "A ‘stay-put’ strategy is designed to prevent injury, reduce panic, and reduce smoke inhalation which could cause injury or fatalities."
  },
  {
    id: "6.44",
    section: "Fire and Emergency",
    text: "Which one of the following is not a requirement of a protected escape route?",
    options: [
      "Leads to a safe place",
      "Protection from smoke",
      "Infra-red lights",
      "Protection from fire"
    ],
    correctAnswer: "C",
    explanation: "Although emergency lighting systems are mandated to provide adequate illumination in escape routes, this does not include infra-red lights specifically."
  },
  {
    id: "6.45",
    section: "Fire and Emergency",
    text: "Which one of the following is not an area of competence?",
    options: [
      "Skills",
      "Resilience",
      "Knowledge",
      "Behaviours"
    ],
    correctAnswer: "B",
    explanation: "Competence is broadly defined as the skills, knowledge, experience, and behaviours of an individual."
  },
  {
    id: "6.46",
    section: "Fire and Emergency",
    text: "What is a key consideration for individuals to ensure safety at work?",
    options: [
      "Pushing personal limits to complete a job at any cost",
      "Having a go at jobs without proper training",
      "Recognising the limitations of competence and not exceeding your own limitations",
      "Ignoring boundaries to complete a job in the quickest manner possible"
    ],
    correctAnswer: "C",
    explanation: "Competence includes the recognition and awareness of the limitations of your own competence."
  },
  {
    id: "6.47",
    section: "Fire and Emergency",
    text: "Which one of the following is a consequence of poor workmanship?",
    options: [
      "Improved fire safety",
      "A good reputation",
      "Increase in hazard and servicing",
      "Increased structural stability"
    ],
    correctAnswer: "C",
    explanation: "A lack of competence and poor workmanship can lead to increased servicing and maintenance requirements, and increased hazards as a result."
  },
  {
    id: "6.48",
    section: "Fire and Emergency",
    text: "What is CROSS-UK?",
    options: [
      "A branch of the British Red Cross for Construction Workers",
      "An online forum for workers to complain about their employers",
      "A confidential reporting system to report on fire and structural safety issues",
      "A charity that supplies work equipment to apprentices"
    ],
    correctAnswer: "C",
    explanation: "CROSS-UK is Collaborative Reporting for Safer Structures UK – a confidential reporting system which allows professionals working in the built environment to report on fire or structural safety issues."
  },

  // Section 7: Work at Height
  {
    id: "7.1",
    section: "Work at Height",
    text: "The Work at Height Regulations 2005 apply to work:",
    options: [
      "Only above 2 metres",
      "Only above 5 metres",
      "Where there is a risk of a fall liable to cause personal injury",
      "Only in the construction industry"
    ],
    correctAnswer: "C",
    explanation: "The 2005 regulations removed the ‘2 metre rule’."
  },
  {
    id: "7.2",
    section: "Work at Height",
    text: "Who should check a ladder before it is used?",
    options: [
      "The person who is going to use it",
      "The site agent",
      "The safety officer",
      "The manufacturer"
    ],
    correctAnswer: "A",
    explanation: "The user is best placed to ensure that the ladder is in a safe condition."
  },
  {
    id: "7.3",
    section: "Work at Height",
    text: "What is the best way to prevent tools falling from a height?",
    options: [
      "Put them in a bucket",
      "Tie them to your belt",
      "Keep them in a tool box",
      "Use a tool tether"
    ],
    correctAnswer: "D",
    explanation: "Tool tethers are designed to prevent tools from falling if they are dropped."
  },
  {
    id: "7.4",
    section: "Work at Height",
    text: "A ladder should be placed at what angle against a wall?",
    options: [
      "One metre out for every four metres up (75°)",
      "One metre out for every two metres up",
      "One metre out for every three metres up",
      "One metre out for every five metres up"
    ],
    correctAnswer: "A",
    explanation: "The 1 in 4 rule ensures the ladder is at the most stable angle."
  },
  {
    id: "7.5",
    section: "Work at Height",
    text: "When can you use a ladder as a place of work?",
    options: [
      "At any time",
      "Only for short duration work (up to 30 minutes) and where it is low risk",
      "Never",
      "Only if someone is holding the bottom"
    ],
    correctAnswer: "B",
    explanation: "Ladders should only be used for low risk, short duration work where it is not practical to use more stable equipment."
  },
  {
    id: "7.6",
    section: "Work at Height",
    text: "What should you do if you have to use a ladder that cannot be tied at the top?",
    options: [
      "Get someone to hold the bottom (foot it)",
      "Use it anyway",
      "Only go up half way",
      "Prop it up with some bricks"
    ],
    correctAnswer: "A",
    explanation: "If a ladder cannot be tied, it must be secured at the base or ‘footed’ by another person."
  },
  {
    id: "7.7",
    section: "Work at Height",
    text: "How far should a ladder extend above a stepping off point?",
    options: [
      "At least 1 metre (or 5 rungs)",
      "At least 2 metres",
      "It doesn’t matter",
      "Level with the stepping off point"
    ],
    correctAnswer: "A",
    explanation: "This provides a secure handhold for people getting on or off the ladder."
  },
  {
    id: "7.8",
    section: "Work at Height",
    text: "What should you do if you find a ladder with a cracked rung?",
    options: [
      "Use it carefully",
      "Report it and make sure no-one else uses it",
      "Try and fix it with some tape",
      "Turn it the other way up"
    ],
    correctAnswer: "B",
    explanation: "Damaged equipment must be taken out of service immediately."
  },
  {
    id: "7.9",
    section: "Work at Height",
    text: "When working on a roof, what is the best way to prevent people falling off the edge?",
    options: [
      "Tell them to be careful",
      "Put up a warning sign",
      "Install guard rails and toe boards",
      "Give everyone a safety harness"
    ],
    correctAnswer: "C",
    explanation: "Guard rails and toe boards provide collective protection, which is preferred over individual protection like harnesses."
  },
  {
    id: "7.10",
    section: "Work at Height",
    text: "What is a ‘fragile’ roof?",
    options: [
      "A roof that is likely to break if you walk on it",
      "A roof made of glass",
      "A roof that is very old",
      "A roof that has no tiles on it"
    ],
    correctAnswer: "A",
    explanation: "Fragile surfaces, such as asbestos cement sheets or roof lights, cannot support a person’s weight."
  },
  {
    id: "7.11",
    section: "Work at Height",
    text: "What should you do if you have to work on or near a fragile roof?",
    options: [
      "Walk quickly",
      "Wear soft shoes",
      "Use crawling boards or roof ladders",
      "Only work on it when it is dry"
    ],
    correctAnswer: "C",
    explanation: "Crawling boards spread the load and prevent a person from falling through the surface."
  },
  {
    id: "7.12",
    section: "Work at Height",
    text: "Who is allowed to erect, alter or dismantle a scaffold?",
    options: [
      "Anyone who is not afraid of heights",
      "A competent person (e.g. a qualified scaffolder)",
      "The site agent",
      "Any labourer"
    ],
    correctAnswer: "B",
    explanation: "Scaffolding is complex and dangerous if not done correctly; only trained and competent people should do it."
  },
  {
    id: "7.13",
    section: "Work at Height",
    text: "What should you do if you think a scaffold is unsafe?",
    options: [
      "Fix it yourself",
      "Report it to your supervisor and stay off it",
      "Carry on working but be careful",
      "Ask your mate if they think it is okay"
    ],
    correctAnswer: "B",
    explanation: "Unsafe scaffolding must be reported and not used until it has been inspected and made safe."
  },
  {
    id: "7.14",
    section: "Work at Height",
    text: "What is the purpose of a toe board on a scaffold?",
    options: [
      "To stop people falling off",
      "To stop tools and materials falling off",
      "To make the scaffold stronger",
      "To give you something to rest your feet on"
    ],
    correctAnswer: "B",
    explanation: "Toe boards prevent items from being kicked or falling off the edge of the platform."
  },
  {
    id: "7.15",
    section: "Work at Height",
    text: "When using a mobile tower scaffold, you should:",
    options: [
      "Stay on it while it is being moved",
      "Lock the wheels before you go up it",
      "Use it on sloping ground",
      "Climb up the outside of it"
    ],
    correctAnswer: "B",
    explanation: "Locking the wheels (castors) prevents the tower from moving while you are working on it."
  },
  {
    id: "7.16",
    section: "Work at Height",
    text: "What is the maximum height a mobile tower scaffold should be?",
    options: [
      "As high as you need it",
      "No more than 3 times its minimum base dimension (outdoors)",
      "10 metres",
      "It depends on the manufacturer’s instructions"
    ],
    correctAnswer: "D",
    explanation: "Always follow the manufacturer’s instructions for the specific tower you are using."
  },
  {
    id: "7.17",
    section: "Work at Height",
    text: "When working in a Mobile Elevating Work Platform (MEWP), such as a cherry picker or scissor lift, you should:",
    options: [
      "Always wear a harness and lanyard (in a boom lift)",
      "Stand on the guard rails to reach higher",
      "Move it while the platform is raised (unless it is designed to do so)",
      "Get out of the basket while it is in the air"
    ],
    correctAnswer: "A",
    explanation: "A harness and short lanyard prevent you from being thrown out of the basket if it jolts."
  },
  {
    id: "7.18",
    section: "Work at Height",
    text: "What should you do before you start any work at height?",
    options: [
      "Just get on with it",
      "Make sure a risk assessment has been done",
      "Wait for the sun to come out",
      "Check your bank balance"
    ],
    correctAnswer: "B",
    explanation: "A risk assessment will identify the hazards and the measures needed to keep you safe."
  },
  {
    id: "7.19",
    section: "Work at Height",
    text: "Which of the following is the preferred method for working at height?",
    options: [
      "Using a ladder",
      "Using a safety harness",
      "Working from a platform with guard rails",
      "Using a rope access system"
    ],
    correctAnswer: "C",
    explanation: "Collective protection (like guard rails) is always preferred over individual protection (like harnesses or ladders)."
  },
  {
    id: "7.20",
    section: "Work at Height",
    text: "What should you do if you have to work near an excavation?",
    options: [
      "Make sure it is fenced off or covered",
      "Jump over it",
      "Walk along the edge",
      "Throw your rubbish into it"
    ],
    correctAnswer: "A",
    explanation: "Barriers or covers prevent people and vehicles from falling into the excavation."
  },
  {
    id: "7.21",
    section: "Work at Height",
    text: "What is the main danger when working on a flat roof?",
    options: [
      "Falling off the edge",
      "Getting sunburned",
      "The roof collapsing",
      "Tripping over your own feet"
    ],
    correctAnswer: "A",
    explanation: "Edge protection (guard rails and toe boards) is essential on all roofs."
  },
  {
    id: "7.22",
    section: "Work at Height",
    text: "When using a safety harness, where should you attach the lanyard?",
    options: [
      "To a secure anchor point",
      "To the scaffold guard rail",
      "To your mate’s belt",
      "To the ladder"
    ],
    correctAnswer: "A",
    explanation: "The anchor point must be strong enough to hold your weight in a fall."
  },
  {
    id: "7.23",
    section: "Work at Height",
    text: "What should you do if your safety harness is damaged?",
    options: [
      "Use it anyway",
      "Try and sew it up",
      "Report it and get a new one",
      "Give it to someone else"
    ],
    correctAnswer: "C",
    explanation: "Damaged safety equipment must be replaced immediately."
  },
  {
    id: "7.24",
    section: "Work at Height",
    text: "Who is responsible for your safety when you are working at height?",
    options: [
      "Your employer",
      "You",
      "The site agent",
      "Both you and your employer"
    ],
    correctAnswer: "D",
    explanation: "Employers must provide safe equipment and training, and you must use them correctly and follow safety rules."
  },
  {
    id: "7.25",
    section: "Work at Height",
    text: "What is the best way to get tools and materials up to a height?",
    options: [
      "Carry them up a ladder",
      "Throw them up to your mate",
      "Use a hoist or a rope and bucket",
      "Put them in your pockets"
    ],
    correctAnswer: "C",
    explanation: "Using a hoist or rope keeps your hands free for climbing and prevents items from being dropped."
  },
  {
    id: "7.26",
    section: "Work at Height",
    text: "What should you do if you see someone else working unsafely at height?",
    options: [
      "Ignore them",
      "Tell them they are being stupid",
      "Report it to your supervisor",
      "Take a photo of them"
    ],
    correctAnswer: "C",
    explanation: "Reporting unsafe work can prevent an accident and save someone’s life."
  },
  {
    id: "7.27",
    section: "Work at Height",
    text: "When is it safe to work on a ladder in high winds?",
    options: [
      "Always",
      "Never",
      "Only if you are wearing a harness",
      "Only if someone is holding the bottom"
    ],
    correctAnswer: "B",
    explanation: "High winds can easily blow you or the ladder over."
  },
  {
    id: "7.28",
    section: "Work at Height",
    text: "What should you do if you feel dizzy while working at height?",
    options: [
      "Close your eyes for a bit",
      "Carry on and hope it goes away",
      "Come down immediately and tell your supervisor",
      "Drink some water"
    ],
    correctAnswer: "C",
    explanation: "If you feel unwell, you are at a much higher risk of falling."
  },
  {
    id: "7.29",
    section: "Work at Height",
    text: "What is the purpose of a ‘safety net’?",
    options: [
      "To catch falling tools",
      "To catch people if they fall",
      "To stop birds nesting",
      "To make the site look better"
    ],
    correctAnswer: "B",
    explanation: "Safety nets are a form of collective protection that reduces the distance and consequences of a fall."
  },
  {
    id: "7.30",
    section: "Work at Height",
    text: "How often should a scaffold be inspected?",
    options: [
      "Every day",
      "Once a week (or after bad weather/alterations)",
      "Once a month",
      "Only when it is first put up"
    ],
    correctAnswer: "B",
    explanation: "Regular inspections ensure the scaffold remains safe and stable."
  },
  {
    id: "7.31",
    section: "Work at Height",
    text: "What should you do if you have to work on a roof with a slope of more than 10 degrees?",
    options: [
      "Wear trainers",
      "Use roof ladders or crawling boards",
      "Only work on it when it is dry",
      "Run up and down it"
    ],
    correctAnswer: "B",
    explanation: "Sloping roofs are much harder to walk on and increase the risk of slipping."
  },
  {
    id: "7.32",
    section: "Work at Height",
    text: "What is the main danger from overhead power lines when working at height?",
    options: [
      "They might fall on you",
      "You might trip over them",
      "Electrocution (even if you don’t touch them)",
      "They might block your view"
    ],
    correctAnswer: "C",
    explanation: "Electricity can ‘arc’ or jump across a gap, so you don’t even have to touch the lines to get a shock."
  },
  {
    id: "7.33",
    section: "Work at Height",
    text: "What should you do if you have to work near overhead power lines?",
    options: [
      "Make sure they are switched off or stay a safe distance away",
      "Wear rubber boots",
      "Use a wooden ladder",
      "Don’t worry about it"
    ],
    correctAnswer: "A",
    explanation: "Always treat power lines as live and dangerous unless you have proof they are dead."
  },
  {
    id: "7.34",
    section: "Work at Height",
    text: "What is a ‘step ladder’?",
    options: [
      "A ladder that you can use as a staircase",
      "A self-supporting ladder that is hinged in the middle",
      "A ladder with very wide rungs",
      "A ladder that is fixed to a wall"
    ],
    correctAnswer: "B",
    explanation: "Step ladders are useful for short duration, low level work."
  },
  {
    id: "7.35",
    section: "Work at Height",
    text: "When using a step ladder, you should:",
    options: [
      "Stand on the very top step",
      "Make sure it is fully open and the stays are locked",
      "Use it to climb onto a roof",
      "Have one foot on the ladder and one on a chair"
    ],
    correctAnswer: "B",
    explanation: "This ensures the step ladder is as stable as possible."
  },
  {
    id: "7.36",
    section: "Work at Height",
    text: "What should you do if you have to work at height and you are afraid of heights?",
    options: [
      "Just do it and hope for the best",
      "Tell your supervisor",
      "Drink some alcohol to calm your nerves",
      "Close your eyes"
    ],
    correctAnswer: "B",
    explanation: "If you are not comfortable working at height, you are more likely to have an accident."
  },
  {
    id: "7.37",
    section: "Work at Height",
    text: "What is the most common cause of death in the construction industry?",
    options: [
      "Being hit by a vehicle",
      "Falling from height",
      "Electric shock",
      "Being buried in an excavation"
    ],
    correctAnswer: "B",
    explanation: "Falls from height account for nearly half of all fatal accidents in construction."
  },

  // Section 8: Work Equipment
  {
    id: "8.1",
    section: "Work Equipment",
    text: "Who is responsible for making sure that work equipment is safe to use?",
    options: [
      "The person who is using it",
      "The employer",
      "The manufacturer",
      "Both the employer and the person using it"
    ],
    correctAnswer: "D",
    explanation: "Employers must provide safe equipment, and employees must check it before use and report any faults."
  },
  {
    id: "8.2",
    section: "Work Equipment",
    text: "What should you do if you find a piece of work equipment that is damaged?",
    options: [
      "Use it anyway",
      "Try and fix it yourself",
      "Report it and make sure no-one else uses it",
      "Leave it for someone else to find"
    ],
    correctAnswer: "C",
    explanation: "Damaged equipment must be taken out of service immediately to prevent accidents."
  },
  {
    id: "8.3",
    section: "Work Equipment",
    text: "When should work equipment be inspected?",
    options: [
      "Only when it is first bought",
      "Regularly, and after any event that might have damaged it",
      "Only if someone complains about it",
      "Once a year"
    ],
    correctAnswer: "B",
    explanation: "Regular inspections ensure that equipment remains in a safe condition."
  },
  {
    id: "8.4",
    section: "Work Equipment",
    text: "What is the purpose of a ‘guard’ on a machine?",
    options: [
      "To make it look better",
      "To stop people touching dangerous parts",
      "To keep the machine clean",
      "To make the machine run faster"
    ],
    correctAnswer: "B",
    explanation: "Guards prevent access to dangerous moving parts, such as blades or gears."
  },
  {
    id: "8.5",
    section: "Work Equipment",
    text: "What should you do if a guard is missing from a machine?",
    options: [
      "Use it carefully",
      "Report it and do not use the machine",
      "Try and make a new guard out of cardboard",
      "Don’t worry about it"
    ],
    correctAnswer: "B",
    explanation: "A machine must never be used if its safety guards are missing or damaged."
  },
  {
    id: "8.6",
    section: "Work Equipment",
    text: "What is an ‘emergency stop’ button for?",
    options: [
      "To turn the machine off at the end of the day",
      "To stop the machine quickly in an emergency",
      "To reset the machine if it breaks down",
      "To make the machine go slower"
    ],
    correctAnswer: "B",
    explanation: "Emergency stops are designed to be easily reached and to cut power to the machine instantly."
  },
  {
    id: "8.7",
    section: "Work Equipment",
    text: "Who is allowed to operate a piece of dangerous machinery?",
    options: [
      "Anyone who wants to",
      "Only someone who has been trained and is competent",
      "The site agent",
      "Any labourer"
    ],
    correctAnswer: "B",
    explanation: "Operating dangerous machinery requires specific skills and knowledge to do so safely."
  },
  {
    id: "8.8",
    section: "Work Equipment",
    text: "What should you do before you start using a power tool?",
    options: [
      "Check the cable and plug for damage",
      "Make sure it is plugged in",
      "Wait for it to warm up",
      "Check your watch"
    ],
    correctAnswer: "A",
    explanation: "Damaged cables or plugs can cause electric shocks or fires."
  },
  {
    id: "8.9",
    section: "Work Equipment",
    text: "What is the main danger from using a circular saw?",
    options: [
      "The noise",
      "The dust",
      "Cutting yourself on the blade",
      "The weight of the saw"
    ],
    correctAnswer: "C",
    explanation: "Circular saws have very sharp, fast-moving blades that can cause serious injuries."
  },
  {
    id: "8.10",
    section: "Work Equipment",
    text: "When using a grinder, you should always wear:",
    options: [
      "A pair of gloves",
      "Eye protection (goggles or a face shield)",
      "A hard hat",
      "A high-visibility vest"
    ],
    correctAnswer: "B",
    explanation: "Grinders produce sparks and flying debris that can easily damage your eyes."
  },
  {
    id: "8.11",
    section: "Work Equipment",
    text: "What is the purpose of a ‘riving knife’ on a circular saw?",
    options: [
      "To make the cut wider",
      "To stop the wood from closing up and trapping the blade",
      "To keep the blade cool",
      "To make the saw easier to push"
    ],
    correctAnswer: "B",
    explanation: "A riving knife prevents ‘kickback’, which can throw the wood or the saw back at the operator."
  },
  {
    id: "8.12",
    section: "Work Equipment",
    text: "What should you do if a power tool starts making a strange noise or smelling of burning?",
    options: [
      "Carry on until you finish the job",
      "Turn it off and report it",
      "Hit it with a hammer",
      "Blow on it to cool it down"
    ],
    correctAnswer: "B",
    explanation: "Strange noises or smells are often a sign of an electrical or mechanical fault."
  },
  {
    id: "8.13",
    section: "Work Equipment",
    text: "What is the best way to store power tools when they are not being used?",
    options: [
      "Leave them where you finished using them",
      "Put them in a secure, dry place (like a tool box or locker)",
      "Throw them in the back of the van",
      "Leave them plugged in"
    ],
    correctAnswer: "B",
    explanation: "Proper storage protects tools from damage and theft."
  },
  {
    id: "8.14",
    section: "Work Equipment",
    text: "What is the main danger from using a cartridge-operated tool (like a nail gun)?",
    options: [
      "The noise",
      "The weight",
      "Accidentally firing a nail into yourself or someone else",
      "The smell of the gunpowder"
    ],
    correctAnswer: "C",
    explanation: "Cartridge tools are very powerful and must be used with extreme care."
  },
  {
    id: "8.15",
    section: "Work Equipment",
    text: "Who is allowed to use a cartridge-operated tool?",
    options: [
      "Anyone who has one",
      "Only someone who has been specifically trained and has a certificate",
      "The site agent",
      "Any labourer"
    ],
    correctAnswer: "B",
    explanation: "Because they are so dangerous, only qualified people are allowed to use them."
  },
  {
    id: "8.16",
    section: "Work Equipment",
    text: "What should you do before you change a blade or a bit on a power tool?",
    options: [
      "Make sure the switch is off",
      "Unplug it from the power supply",
      "Wait for it to stop spinning",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Always ensure the tool cannot start accidentally while you are working on it."
  },
  {
    id: "8.17",
    section: "Work Equipment",
    text: "What is the purpose of a ‘PAT test’ (Portable Appliance Testing)?",
    options: [
      "To see how fast the tool is",
      "To check that the tool is electrically safe",
      "To see if the tool is still under warranty",
      "To make sure the tool is clean"
    ],
    correctAnswer: "B",
    explanation: "PAT testing is a regular check of the electrical safety of portable equipment."
  },
  {
    id: "8.18",
    section: "Work Equipment",
    text: "How can you tell if a tool has been PAT tested?",
    options: [
      "It will have a green ‘pass’ sticker on it",
      "It will be painted a certain colour",
      "It will be in a special box",
      "You just have to take the employer’s word for it"
    ],
    correctAnswer: "A",
    explanation: "The sticker will show when the test was done and when the next one is due."
  },
  {
    id: "8.19",
    section: "Work Equipment",
    text: "What should you do if you find a tool that has a ‘fail’ sticker on it?",
    options: [
      "Use it anyway",
      "Report it and do not use it",
      "Peel the sticker off",
      "Try and fix it yourself"
    ],
    correctAnswer: "B",
    explanation: "A ‘fail’ sticker means the tool is unsafe and must not be used."
  },
  {
    id: "8.20",
    section: "Work Equipment",
    text: "What is the main danger from using a compressed air line to blow dust off your clothes?",
    options: [
      "It makes a lot of noise",
      "It can blow dust into your eyes or skin",
      "It can cause an air embolism (air in the bloodstream) if it gets into a cut",
      "Both B and C"
    ],
    correctAnswer: "D",
    explanation: "Compressed air is very dangerous and should never be used for cleaning yourself."
  },
  {
    id: "8.21",
    section: "Work Equipment",
    text: "What should you do if you have to use a piece of equipment that you have never used before?",
    options: [
      "Just have a go and see what happens",
      "Ask your mate to show you",
      "Tell your supervisor and ask for training",
      "Read the manual if you can find it"
    ],
    correctAnswer: "C",
    explanation: "You must never use equipment unless you have been trained and are competent to do so."
  },
  {
    id: "8.22",
    section: "Work Equipment",
    text: "What is the purpose of a ‘dead man’s handle’ on a machine?",
    options: [
      "To make the machine easier to hold",
      "To stop the machine automatically if the operator lets go",
      "To lock the machine when it is not being used",
      "To make the machine run at a constant speed"
    ],
    correctAnswer: "B",
    explanation: "This is a safety feature that prevents the machine from running if the operator is not in control."
  },
  {
    id: "8.23",
    section: "Work Equipment",
    text: "What should you do if you see someone using a piece of equipment in a dangerous way?",
    options: [
      "Ignore them",
      "Tell them they are being stupid",
      "Report it to your supervisor",
      "Take a video of them"
    ],
    correctAnswer: "C",
    explanation: "Reporting unsafe work can prevent an accident and save someone’s life."
  },
  {
    id: "8.24",
    section: "Work Equipment",
    text: "Who is responsible for providing you with the correct PPE for the equipment you are using?",
    options: [
      "You",
      "Your employer",
      "The manufacturer of the equipment",
      "The site agent"
    ],
    correctAnswer: "B",
    explanation: "Employers must provide all necessary PPE free of charge."
  },

  // Section 9: Special Site Hazards
  {
    id: "9.1",
    section: "Special Site Hazards",
    text: "What is the main danger from working in a confined space?",
    options: [
      "It is very dark",
      "It is very small",
      "Lack of oxygen or presence of poisonous gases",
      "It is very cold"
    ],
    correctAnswer: "C",
    explanation: "Confined spaces can have dangerous atmospheres that can kill you very quickly."
  },
  {
    id: "9.2",
    section: "Special Site Hazards",
    text: "What should you do before you enter a confined space?",
    options: [
      "Just go in and see if it is okay",
      "Make sure a risk assessment and a permit to work are in place",
      "Wait for someone else to go in first",
      "Hold your breath"
    ],
    correctAnswer: "B",
    explanation: "Working in confined spaces is extremely dangerous and requires strict safety controls."
  },
  {
    id: "9.3",
    section: "Special Site Hazards",
    text: "What is the purpose of a ‘permit to work’?",
    options: [
      "To show that you are allowed to be on site",
      "To make sure that a dangerous job is done safely",
      "To give you permission to take a break",
      "To show that you have been paid"
    ],
    correctAnswer: "B",
    explanation: "A permit to work is a formal document that sets out the safety measures for a high-risk task."
  },
  {
    id: "9.4",
    section: "Special Site Hazards",
    text: "What should you do if you see a sign that says ‘Danger: Asbestos’?",
    options: [
      "Ignore it",
      "Go and have a look",
      "Stay away and report it to your supervisor",
      "Try and remove the asbestos yourself"
    ],
    correctAnswer: "C",
    explanation: "Asbestos is very dangerous if it is disturbed and the fibres are inhaled."
  },
  {
    id: "9.5",
    section: "Special Site Hazards",
    text: "What is the main danger from asbestos?",
    options: [
      "It can cause skin rashes",
      "It can cause lung cancer and other serious diseases",
      "It is very heavy",
      "It is very sharp"
    ],
    correctAnswer: "B",
    explanation: "Asbestos fibres are so small they can get deep into your lungs and cause fatal diseases many years later."
  },
  {
    id: "9.6",
    section: "Special Site Hazards",
    text: "Who is allowed to remove asbestos?",
    options: [
      "Anyone who has a mask",
      "Only a licensed contractor who is trained and equipped",
      "The site agent",
      "Any labourer"
    ],
    correctAnswer: "B",
    explanation: "Removing asbestos is a highly specialized and regulated task."
  },
  {
    id: "9.7",
    section: "Special Site Hazards",
    text: "What should you do if you accidentally disturb some material that you think might be asbestos?",
    options: [
      "Sweep it up quickly",
      "Stop work, leave the area and report it immediately",
      "Cover it with some plastic",
      "Don’t tell anyone"
    ],
    correctAnswer: "B",
    explanation: "If you disturb asbestos, you must stop work to prevent any further release of fibres."
  },
  {
    id: "9.8",
    section: "Special Site Hazards",
    text: "What is the main danger from working near water (like a river or a canal)?",
    options: [
      "Getting your feet wet",
      "Drowning",
      "Catching a cold",
      "The smell"
    ],
    correctAnswer: "B",
    explanation: "If you fall into water, you can drown very quickly, especially if the water is cold or fast-moving."
  },
  {
    id: "9.9",
    section: "Special Site Hazards",
    text: "What should you wear when working near water?",
    options: [
      "A pair of wellies",
      "A life jacket or buoyancy aid",
      "A wetsuit",
      "A raincoat"
    ],
    correctAnswer: "B",
    explanation: "A life jacket will keep you afloat if you fall into the water."
  },
  {
    id: "9.10",
    section: "Special Site Hazards",
    text: "What is the main danger from working near a railway line?",
    options: [
      "The noise",
      "Being hit by a train",
      "The wind from the trains",
      "The dirt"
    ],
    correctAnswer: "B",
    explanation: "Trains travel very fast and cannot stop quickly; being hit by one is almost always fatal."
  },
  {
    id: "9.11",
    section: "Special Site Hazards",
    text: "Who is allowed to work on or near a railway line?",
    options: [
      "Anyone who has a high-vis vest",
      "Only someone who has been specifically trained and has a ‘Personal Track Safety’ (PTS) certificate",
      "The site agent",
      "Any labourer"
    ],
    correctAnswer: "B",
    explanation: "Working on the railway requires special safety training and authorization."
  },
  {
    id: "9.12",
    section: "Special Site Hazards",
    text: "What is the main danger from working near a public road?",
    options: [
      "The noise",
      "The fumes",
      "Being hit by a vehicle",
      "People staring at you"
    ],
    correctAnswer: "C",
    explanation: "Traffic is a major hazard for construction workers working on or near roads."
  },
  {
    id: "9.13",
    section: "Special Site Hazards",
    text: "What should you wear when working near a public road?",
    options: [
      "A pair of sunglasses",
      "High-visibility clothing",
      "A hard hat",
      "A pair of gloves"
    ],
    correctAnswer: "B",
    explanation: "High-vis clothing makes you more visible to drivers."
  },
  {
    id: "9.14",
    section: "Special Site Hazards",
    text: "What is the main danger from working in an area where there are underground cables or pipes?",
    options: [
      "The smell",
      "Hitting them and causing an explosion, fire or electric shock",
      "The dirt",
      "They might get in your way"
    ],
    correctAnswer: "B",
    explanation: "Striking an underground service can be fatal and can also cut off supplies to thousands of people."
  },
  {
    id: "9.15",
    section: "Special Site Hazards",
    text: "What should you do before you start digging in an area where there might be underground services?",
    options: [
      "Just start digging and be careful",
      "Check the plans and use a cable avoidance tool (CAT)",
      "Wait for someone else to dig first",
      "Use a big excavator"
    ],
    correctAnswer: "B",
    explanation: "Using plans and a CAT scanner helps you to locate services before you start digging."
  },
  {
    id: "9.16",
    section: "Special Site Hazards",
    text: "What is the best way to dig near underground services?",
    options: [
      "Use a pickaxe",
      "Use a mechanical excavator",
      "Hand dig using a spade or shovel (not a fork)",
      "Use a pneumatic drill"
    ],
    correctAnswer: "C",
    explanation: "Hand digging is much safer than using machines or sharp tools like forks or pickaxes."
  },
  {
    id: "9.17",
    section: "Special Site Hazards",
    text: "What should you do if you hit an underground cable or pipe?",
    options: [
      "Try and fix it yourself",
      "Stop work, leave the area and report it immediately",
      "Cover it with some dirt",
      "Don’t tell anyone"
    ],
    correctAnswer: "B",
    explanation: "If you hit a service, you must stop work and report it so it can be made safe."
  },
  {
    id: "9.18",
    section: "Special Site Hazards",
    text: "What is the main danger from working in an area where there are overhead power lines?",
    options: [
      "They might fall on you",
      "Electrocution (even if you don’t touch them)",
      "The noise",
      "They might block your view"
    ],
    correctAnswer: "B",
    explanation: "Electricity can ‘arc’ or jump across a gap, so you don’t even have to touch the lines to get a shock."
  },
  {
    id: "9.19",
    section: "Special Site Hazards",
    text: "What should you do if you have to move a tall piece of equipment (like a ladder or a scaffold tube) near overhead power lines?",
    options: [
      "Carry it vertically",
      "Carry it horizontally and stay a safe distance away",
      "Run with it",
      "Don’t worry about it"
    ],
    correctAnswer: "B",
    explanation: "Carrying tall items horizontally reduces the risk of them coming too close to the power lines."
  },
  {
    id: "9.20",
    section: "Special Site Hazards",
    text: "What is the main danger from working in an area where there is contaminated land?",
    options: [
      "The smell",
      "The dirt",
      "Coming into contact with harmful chemicals or biological hazards",
      "It is very muddy"
    ],
    correctAnswer: "C",
    explanation: "Contaminated land can contain things like heavy metals, chemicals or sewage that can make you very ill."
  },
  {
    id: "9.21",
    section: "Special Site Hazards",
    text: "What should you do if you have to work on contaminated land?",
    options: [
      "Wear your old clothes",
      "Make sure you have the correct PPE and follow the hygiene rules",
      "Wait for it to rain",
      "Don’t worry about it"
    ],
    correctAnswer: "B",
    explanation: "PPE and good hygiene (like washing your hands before eating) are essential to protect you from contamination."
  },
  {
    id: "9.22",
    section: "Special Site Hazards",
    text: "What is the main danger from working in an area where there are vermin (like rats)?",
    options: [
      "They might bite you",
      "They might steal your food",
      "Catching diseases like Weil’s disease (Leptospirosis)",
      "The noise they make"
    ],
    correctAnswer: "C",
    explanation: "Weil’s disease is a serious infection spread by rat urine, often found in water or damp areas."
  },
  {
    id: "9.23",
    section: "Special Site Hazards",
    text: "What should you do if you develop flu-like symptoms after working in a damp area or near water?",
    options: [
      "Go to bed and rest",
      "See your doctor and tell them where you have been working",
      "Take some aspirin",
      "Ignore it"
    ],
    correctAnswer: "B",
    explanation: "Early diagnosis of Weil’s disease is essential for successful treatment."
  },
  {
    id: "9.24",
    section: "Special Site Hazards",
    text: "What is the best way to prevent catching diseases from vermin?",
    options: [
      "Wear gloves",
      "Cover any cuts with waterproof plasters",
      "Wash your hands before eating, drinking or smoking",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Good hygiene and protecting your skin are the best ways to prevent infection."
  },

  // Section 10: Electrotechnical
  {
    id: "10.1",
    section: "Electrotechnical",
    text: "In accordance with the Electricity at Work regulations, when considering whether to work live a responsible person should:",
    options: [
      "Carry out a risk assessment",
      "Only work dead",
      "Only work live",
      "Do as the client demands"
    ],
    correctAnswer: "A",
    explanation: "To identify and assess the risks involved and the methods of controlling them."
  },
  {
    id: "10.2",
    section: "Electrotechnical",
    text: "The normal procedure for working on electrical equipment should be which one of the following?",
    options: [
      "Dead working",
      "Wearing insulated gloves",
      "Using insulated tools",
      "Live working"
    ],
    correctAnswer: "A",
    explanation: "Dead working should be considered as the norm and work on or near live conductors should rarely be permitted."
  },
  {
    id: "10.3",
    section: "Electrotechnical",
    text: "Test instruments used for working on electrical systems should:",
    options: [
      "Be yellow in colour",
      "Be less than 10 years old",
      "Have non-insulated test probes",
      "Have insulated test probes"
    ],
    correctAnswer: "D",
    explanation: "To protect the user from electric shock whilst using the instrument. i.e. handling the probes."
  },
  {
    id: "10.4",
    section: "Electrotechnical",
    text: "Under the Electricity at Work Regulations, live working is considered:",
    options: [
      "As entirely acceptable",
      "To be normally permitted",
      "Only to be allowed in exceptional circumstances",
      "Never to be allowed"
    ],
    correctAnswer: "C",
    explanation: "Extra controls must be employed, including training, supervision and use of suitable tools and protective equipment."
  },
  {
    id: "10.5",
    section: "Electrotechnical",
    text: "Which of the following would you use to replace the fuse in a plug if fuses were NOT available?",
    options: [
      "A nail",
      "A piece of silver paper",
      "A bit of wire",
      "None of the options listed"
    ],
    correctAnswer: "D",
    explanation: "A fuse is often the main safety device in an electrical circuit. A blown fuse must only be replaced by a fuse of the correct type and rating."
  },
  {
    id: "10.6",
    section: "Electrotechnical",
    text: "To prove a circuit or equipment is dead after isolation what is the FIRST activity in the sequence of events?",
    options: [
      "Make sure equipment is not working",
      "Check between line and earth",
      "Check that the voltage detector is working on a proving device, known live source or in built test feature",
      "Check between line and neutral"
    ],
    correctAnswer: "C",
    explanation: "This will prove that that the voltage detector (such as a two-pole voltage detector or proprietary test lamp) is working, i.e. indicating voltage."
  },
  {
    id: "10.7",
    section: "Electrotechnical",
    text: "The nominal single phase voltage in the UK is?",
    options: [
      "230 volts",
      "240 volts",
      "415 volts",
      "400 volts"
    ],
    correctAnswer: "A",
    explanation: "This is the nominal voltage for public electricity supply systems within Europe."
  },
  {
    id: "10.8",
    section: "Electrotechnical",
    text: "When is live working permissible?",
    options: [
      "When the person carrying out the work is a competent person",
      "When it is unreasonable in all circumstances for the equipment to be made dead and suitable precautions are taken",
      "When the means of isolation cannot be identified",
      "When the person working on the equipment is wearing rubber gloves"
    ],
    correctAnswer: "B",
    explanation: "This is a requirement under r.14 of the EAW Regulations. However, it does not mean that live working is then ’safe’."
  },
  {
    id: "10.9",
    section: "Electrotechnical",
    text: "Which of the following is NOT a requirement of low voltage safe isolation practice?",
    options: [
      "Ensuring that the correct point of isolation is identified",
      "The person carrying out the work is issued with insulating gloves",
      "A caution notice should be applied at the point of isolation",
      "The conductors are proved to be dead at the point of work"
    ],
    correctAnswer: "B",
    explanation: "Safe isolation practice refers to dead working. The use of insulating gloves will generally only be applicable to live working."
  },
  {
    id: "10.10",
    section: "Electrotechnical",
    text: "The specific effects on the human body of a major electric shock are one of the following:",
    options: [
      "Dermatitis",
      "Burns and cardiac arrest",
      "Broken bones",
      "Chest pains"
    ],
    correctAnswer: "B",
    explanation: "Burns and cardiac arrest."
  },

  // Section 11: Environmental
  {
    id: "11.1",
    section: "Environmental",
    text: "What is the main reason for recycling waste on a construction site?",
    options: [
      "To make the site look better",
      "To save money and protect the environment",
      "To give the labourers something to do",
      "To make the bins easier to empty"
    ],
    correctAnswer: "B",
    explanation: "Recycling reduces the amount of waste sent to landfill and saves natural resources."
  },
  {
    id: "11.2",
    section: "Environmental",
    text: "What should you do with hazardous waste (like oil or chemicals)?",
    options: [
      "Pour it down the drain",
      "Bury it in the ground",
      "Put it in a special container and dispose of it correctly",
      "Mix it with the general waste"
    ],
    correctAnswer: "C",
    explanation: "Hazardous waste can cause serious pollution if not handled and disposed of correctly."
  },
  {
    id: "11.3",
    section: "Environmental",
    text: "What is the main danger from a spill of oil or chemicals?",
    options: [
      "It makes a mess",
      "It can pollute the ground and water",
      "It smells bad",
      "It is slippery"
    ],
    correctAnswer: "B",
    explanation: "Spills can kill wildlife and contaminate drinking water supplies."
  },
  {
    id: "11.4",
    section: "Environmental",
    text: "What should you do if you see a spill of oil or chemicals?",
    options: [
      "Ignore it",
      "Try and stop it and report it immediately",
      "Wait for it to dry up",
      "Walk through it"
    ],
    correctAnswer: "B",
    explanation: "Quick action can prevent a small spill from becoming a major pollution incident."
  },
  {
    id: "11.5",
    section: "Environmental",
    text: "What is a ‘spill kit’?",
    options: [
      "A set of tools for fixing leaks",
      "A collection of materials for cleaning up spills (like absorbent pads and sand)",
      "A first aid kit for people who have been spilled on",
      "A box for keeping your lunch in"
    ],
    correctAnswer: "B",
    explanation: "Spill kits are essential for dealing with leaks and spills quickly and effectively."
  },
  {
    id: "11.6",
    section: "Environmental",
    text: "What is the main cause of noise pollution on a construction site?",
    options: [
      "People talking",
      "Radios playing",
      "Machinery and tools",
      "The wind"
    ],
    correctAnswer: "C",
    explanation: "Construction work is naturally noisy, but it must be managed to prevent nuisance to neighbours."
  },
  {
    id: "11.7",
    section: "Environmental",
    text: "What can you do to reduce noise on site?",
    options: [
      "Turn off machines when they are not being used",
      "Use silenced equipment",
      "Only work during the day",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "There are many ways to reduce noise and its impact on the local community."
  },
  {
    id: "11.8",
    section: "Environmental",
    text: "What is the main cause of dust pollution on a construction site?",
    options: [
      "People walking around",
      "Cutting and grinding materials",
      "The wind blowing over dry ground",
      "Both B and C"
    ],
    correctAnswer: "D",
    explanation: "Dust can be a major nuisance and can also be harmful to health."
  },
  {
    id: "11.9",
    section: "Environmental",
    text: "What can you do to reduce dust on site?",
    options: [
      "Use water to damp down the ground",
      "Use dust extraction on tools",
      "Keep materials covered",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Managing dust is essential for both environmental protection and health and safety."
  },
  {
    id: "11.10",
    section: "Environmental",
    text: "What is the main reason for saving energy on a construction site?",
    options: [
      "To save money",
      "To reduce carbon emissions and fight climate change",
      "To make the site quieter",
      "Both A and B"
    ],
    correctAnswer: "D",
    explanation: "Saving energy is good for the environment and for the company’s bottom line."
  },
  {
    id: "11.11",
    section: "Environmental",
    text: "What can you do to save energy on site?",
    options: [
      "Turn off lights and heaters when they are not needed",
      "Use energy-efficient equipment",
      "Make sure buildings are well insulated",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Small changes in behavior can lead to significant energy savings."
  },
  {
    id: "11.12",
    section: "Environmental",
    text: "Who is responsible for protecting the environment on a construction site?",
    options: [
      "The environmental officer",
      "The site agent",
      "Everyone on site",
      "The local council"
    ],
    correctAnswer: "C",
    explanation: "We all have a duty to protect the environment and prevent pollution."
  }
];
