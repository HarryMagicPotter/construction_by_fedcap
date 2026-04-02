export interface Agency {
  name: string;
  region: 'east' | 'west';
  location: string;
  specialism: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  verified: boolean;
}

export const agencies: Agency[] = [
    // EAST SUSSEX
    { name: "The Shore Group", region: "east", location: "Hove", specialism: "trades", address: "19 Boundary Road, Hove, BN3 4EF", phone: "07803 510654", email: "office@theshoregroup.co.uk", website: "https://www.theshoregroup.co.uk", verified: true },
    { name: "Revolution Resourcing", region: "east", location: "Brighton", specialism: "trades", address: "Citibase Brighton, 95 Ditchling Road, Brighton, BN1 4ST", phone: "", email: "", website: "https://www.revolution-resourcing.co.uk", verified: true },
    { name: "APEX Personnel", region: "east", location: "Eastbourne", specialism: "management", address: "Eastbourne, East Sussex", phone: "020 3286 7387", email: "", website: "https://www.apexpersonnel.co.uk", verified: true },
    { name: "Fawkes & Reece", region: "east", location: "Brighton", specialism: "management", address: "Brighton branch", phone: "01273 003033", email: "", website: "https://www.fawkesandreece.co.uk", verified: true },
    { name: "South Downs Resourcing", region: "east", location: "Hove", specialism: "mechanical", address: "88 Boundary Road, Hove, BN3 7GA", phone: "", email: "", website: "https://www.southdownsresourcing.co.uk", verified: true },
    { name: "Target Executive", region: "east", location: "East Sussex", specialism: "management", address: "East Sussex", phone: "", email: "", website: "https://www.targetexecutive.co.uk", verified: true },
    { name: "Flair Group", region: "east", location: "East Sussex", specialism: "trades", address: "Company dissolved June 2024", phone: "", email: "", website: "", verified: false },
    { name: "Hays Construction & Property", region: "east", location: "Brighton", specialism: "management", address: "Brighton branch", phone: "", email: "", website: "https://www.hays.co.uk", verified: true },
    { name: "Randstad Construction & Property", region: "east", location: "Brighton", specialism: "management", address: "Brighton area", phone: "07500 228164 (Ciaran)", email: "", website: "https://www.randstad.co.uk", verified: true },
    { name: "Reed Construction", region: "east", location: "Brighton", specialism: "management", address: "Brighton branch", phone: "", email: "", website: "https://www.reed.co.uk/construction", verified: true },
    { name: "Interaction Recruitment (ITS)", region: "east", location: "Brighton", specialism: "trades", address: "Brighton", phone: "", email: "", website: "https://www.interactionrecruitment.co.uk", verified: true },
    { name: "Manpower (construction division)", region: "east", location: "Brighton", specialism: "trades", address: "Brighton", phone: "", email: "", website: "https://www.manpower.co.uk", verified: true },
    { name: "Office Angels (construction admin)", region: "east", location: "Brighton", specialism: "management", address: "London HQ: Second Floor, 10 Bishops Square, London, E1 6EG", phone: "0207 626 3550 (HQ)", email: "", website: "https://www.office-angels.com", verified: true },
    { name: "Premier Work Support", region: "east", location: "Eastbourne", specialism: "trades", address: "Eastbourne", phone: "", email: "", website: "https://www.premierwork.co.uk", verified: true },
    { name: "Gap Personnel (industrial/construction)", region: "east", location: "Eastbourne", specialism: "trades", address: "Eastbourne", phone: "", email: "", website: "https://www.gap-personnel.com", verified: true },
    { name: "Workforce Recruitment", region: "east", location: "Eastbourne", specialism: "trades", address: "Eastbourne", phone: "", email: "", website: "https://www.workforce.co.uk", verified: true },
    { name: "Huntress (technical construction)", region: "east", location: "Brighton", specialism: "technical", address: "Brighton", phone: "", email: "", website: "https://www.huntress.co.uk", verified: true },
    { name: "Pearson Whiffin (construction division)", region: "east", location: "East Sussex", specialism: "management", address: "East Sussex", phone: "", email: "", website: "https://www.pearsonwhiffin.co.uk", verified: true },
    { name: "Clearfield Recruitment", region: "east", location: "East Sussex", specialism: "trades", address: "East Sussex", phone: "", email: "", website: "https://www.clearfieldrecruitment.co.uk", verified: true },
    { name: "HR GO Recruitment (trades & industrial)", region: "east", location: "Eastbourne / Hastings", specialism: "trades", address: "Eastbourne / Hastings", phone: "", email: "", website: "https://www.hrgo.co.uk", verified: true },
    // WEST SUSSEX
    { name: "Recruitment Services Limited", region: "west", location: "Worthing", specialism: "technical", address: "10 Liverpool Terrace, Worthing, BN11 1TA", phone: "01903 820303", email: "", website: "https://www.rsljobs.com", verified: true },
    { name: "Elite Solutions Ltd", region: "west", location: "East Grinstead", specialism: "trades", address: "East Grinstead", phone: "", email: "", website: "https://www.elitesolutionsltd.co.uk", verified: true },
    { name: "Green Recruitment", region: "west", location: "East Grinstead", specialism: "management", address: "East Grinstead", phone: "", email: "", website: "https://www.greenrecruitment.co.uk", verified: true },
    { name: "Lead Recruitment Group Ltd", region: "west", location: "Chichester", specialism: "civil", address: "Chichester", phone: "", email: "", website: "https://www.leadrecruitmentgroup.co.uk", verified: true },
    { name: "The MD Group", region: "west", location: "Crawley", specialism: "management", address: "Crawley", phone: "", email: "", website: "https://www.themdgroup.co.uk", verified: true },
    { name: "1four1 Recruitment", region: "west", location: "Crawley", specialism: "plant", address: "Crawley", phone: "", email: "", website: "https://www.1four1.com", verified: true },
    { name: "Lobster Recruitment", region: "west", location: "Crawley", specialism: "trades", address: "Crawley", phone: "", email: "", website: "https://www.lobsterrecruitment.co.uk", verified: true },
    { name: "ProRec", region: "west", location: "Crawley", specialism: "management", address: "Crawley", phone: "", email: "", website: "https://www.prorec.co.uk", verified: true },
    { name: "Elite Staffing Solutions", region: "west", location: "East Grinstead", specialism: "trades", address: "East Grinstead", phone: "", email: "", website: "https://www.elitestaffingsolutions.co.uk", verified: true },
    { name: "Adecco (construction & industrial)", region: "west", location: "Chichester / Crawley", specialism: "trades", address: "Chichester / Crawley", phone: "", email: "", website: "https://www.adecco.co.uk", verified: true },
    { name: "WE3 Recruitment", region: "west", location: "Hurstpierpoint", specialism: "technical", address: "Bluefish House, 46 High Street, Hurstpierpoint, BN6 9RG", phone: "", email: "", website: "https://www.we3.co.uk", verified: true },
    { name: "Randstad (construction & property)", region: "west", location: "Crawley", specialism: "management", address: "Crawley", phone: "07500 228164", email: "", website: "https://www.randstad.co.uk", verified: true },
    { name: "Hays Construction & Property", region: "west", location: "Crawley / Worthing", specialism: "management", address: "Crawley / Worthing", phone: "", email: "", website: "https://www.hays.co.uk", verified: true },
    { name: "Manpower (trades & labour)", region: "west", location: "Crawley", specialism: "trades", address: "Crawley", phone: "", email: "", website: "https://www.manpower.co.uk", verified: true },
    { name: "Gap Personnel (construction & industrial)", region: "west", location: "Crawley", specialism: "trades", address: "Crawley", phone: "", email: "", website: "https://www.gap-personnel.com", verified: true },
    { name: "Premier Work Support", region: "west", location: "Crawley", specialism: "trades", address: "Crawley", phone: "", email: "", website: "https://www.premierwork.co.uk", verified: true },
    { name: "Huntress (technical construction)", region: "west", location: "Crawley", specialism: "technical", address: "Crawley", phone: "", email: "", website: "https://www.huntress.co.uk", verified: true },
    { name: "Pearson Whiffin (construction division)", region: "west", location: "Crawley", specialism: "management", address: "Crawley", phone: "", email: "", website: "https://www.pearsonwhiffin.co.uk", verified: true },
    { name: "HR GO Recruitment (trades & industrial)", region: "west", location: "Crawley / Horsham", specialism: "trades", address: "Crawley / Horsham", phone: "", email: "", website: "https://www.hrgo.co.uk", verified: true },
    { name: "Office Angels (construction admin)", region: "west", location: "Crawley", specialism: "management", address: "Crawley", phone: "0207 626 3550 (HQ)", email: "", website: "https://www.office-angels.com", verified: true },
    { name: "Total Recruitment", region: "west", location: "Horsham", specialism: "trades", address: "Horsham", phone: "", email: "", website: "https://www.totalrecruitment.co.uk", verified: true },
    { name: "Clearfield Recruitment", region: "west", location: "Horsham", specialism: "trades", address: "Horsham", phone: "", email: "", website: "https://www.clearfieldrecruitment.co.uk", verified: true },
    { name: "Skilled Labour Services Southern", region: "west", location: "covers Sussex", specialism: "trades", address: "covers Sussex from Southampton", phone: "", email: "", website: "https://www.skilledlabourservices.co.uk", verified: true },
    { name: "First Recruitment Services", region: "west", location: "covers Sussex (Kent)", specialism: "trades", address: "covers Sussex (Kent)", phone: "", email: "", website: "https://www.firstrecruitment.co.uk", verified: true },
    // ADDITIONAL AGENCIES
    { name: "Jarvis Bentley Recruitment", region: "west", location: "Worthing", specialism: "management", address: "37a Canterbury Road, Worthing, BN13 1AN", phone: "", email: "", website: "", verified: false },
    { name: "DGH Recruitment", region: "west", location: "Burgess Hill", specialism: "technical", address: "Jubilee House, 56-58 Church Walk, Burgess Hill, RH15 9AS", phone: "", email: "", website: "", verified: false },
    { name: "Astral Recruitment", region: "west", location: "Horsham", specialism: "management", address: "Kent House, Guildford Road, Broadbridge Heath, Horsham, RH12 3PH", phone: "", email: "", website: "", verified: false },
    { name: "Adastra HR", region: "west", location: "Horsham", specialism: "management", address: "Unit 12, City Business Centre, 6 Brighton Rd, Horsham, RH13 5BB", phone: "0330 113 0925", email: "trish@adastrahr.co.uk", website: "https://www.adastrahr.co.uk", verified: true },
    { name: "TalentHawk Limited", region: "east", location: "Nutley", specialism: "technical", address: "Pippingford Manor, Pippingford Park, Nutley, TN22 3HW", phone: "01825 713233", email: "info@talenthawk.com", website: "https://www.talent-hawk.com", verified: true },
    { name: "The Procurement Hive", region: "west", location: "Horsham", specialism: "management", address: "8 Springfield Park Rd, Horsham, RH12 2PW", phone: "07828 148724", email: "", website: "https://www.theprocurementhive.co.uk", verified: true },
    { name: "Harris Lord Recruitment", region: "west", location: "Horsham", specialism: "management", address: "2 Piries Place, Horsham, RH12 1EH", phone: "", email: "julies@harrislord.com (events)", website: "https://www.harrislordrecruitment.com", verified: true },
    { name: "Line Up Aviation Limited", region: "west", location: "Horsham", specialism: "technical", address: "Registered office in Horsham", phone: "", email: "", website: "", verified: false },
    { name: "Beaumont Select", region: "west", location: "Horsham", specialism: "management", address: "West Point, Springfield Road, Horsham, RH12 2PD", phone: "01403 248448", email: "info@beselect.co.uk", website: "https://www.beselect.co.uk", verified: true },
    { name: "Shannon White Ltd", region: "west", location: "Horsham", specialism: "management", address: "Littlehaven House, 24-26 Littlehaven Lane, Horsham, RH12 4HT", phone: "", email: "", website: "", verified: false },
    { name: "Viribus Search", region: "west", location: "Horsham", specialism: "management", address: "Horsham", phone: "", email: "", website: "https://www.viribussearch.com", verified: true },
    { name: "Touchpoint Resource Ltd", region: "west", location: "Horsham", specialism: "management", address: "Horsham", phone: "", email: "", website: "", verified: false },
    { name: "Hunters Recruitment", region: "west", location: "Worthing", specialism: "management", address: "Worthing", phone: "", email: "", website: "https://www.huntersrecruitment.co.uk", verified: true },
    { name: "Petroplan", region: "west", location: "Guildford (covers Sussex)", specialism: "technical", address: "Guildford", phone: "", email: "", website: "https://www.petroplan.com", verified: true },
    { name: "Damia Group", region: "west", location: "Guildford (covers Sussex)", specialism: "technical", address: "Guildford", phone: "", email: "", website: "https://www.damiagroup.com", verified: true },
    { name: "Investigo", region: "west", location: "Guildford (covers Sussex)", specialism: "management", address: "Guildford", phone: "", email: "", website: "https://www.investigo.com", verified: true },
    { name: "IT Recruit UK", region: "west", location: "Guildford (covers Sussex)", specialism: "technical", address: "Guildford", phone: "", email: "", website: "https://www.itrecruituk.com", verified: true },
    { name: "Ashe Consulting", region: "west", location: "Horsham", specialism: "management", address: "Horsham", phone: "", email: "", website: "https://www.asheconsulting.co.uk", verified: true },
    { name: "Response", region: "west", location: "Horsham", specialism: "management", address: "Horsham", phone: "", email: "", website: "https://www.response-uk.com", verified: true },
    { name: "The Goshawk Group", region: "west", location: "Guildford (covers Sussex)", specialism: "management", address: "Guildford", phone: "", email: "", website: "https://www.goshawk-group.com", verified: true }
];
