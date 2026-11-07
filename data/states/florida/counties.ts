// Florida county dataset.
// A county page is only generated (and listed in the sitemap) when `detail` is filled in
// with links and facts checked against the county's own official pages.
// Florida runs court records through 67 elected county clerks, and most jails through the sheriff.
// Where a county government runs the jail instead, `jailOperator` names it.

import type { Link } from "@/data/states/minnesota/counties";

export type FlCountyDetail = {
  verified: string; // YYYY-MM-DD the official pages were checked
  noindex?: boolean; // live for visitors but kept out of Google and the sitemap until it has more detail
  sheriffName: string;
  jailOperator?: string; // set when the county, not the sheriff, runs the jail
  jailName?: string;
  jailAddress?: string;
  jailPhone?: string; // jail or inmate-information line
  jailPhoneLabel?: string;
  infoPhone?: string; // general sheriff or county line
  infoPhoneLabel?: string;
  roster: Link;
  rosterNotes: string[];
  pastArrests?: Link;
  pastSearch?: string; // phrase after the roster name saying how it covers released people
  warrants?: Link;
  clerk: { name: string; search: Link };
  otherLinks?: Link[];
  sources: Link[];
};

export type FlCounty = {
  slug: string;
  name: string; // without "County"
  seat: string;
  circuit: number;
  detail?: FlCountyDetail;
};

// [name, county seat, judicial circuit] per Fla. Stat. § 26.021
const raw: [string, string, number][] = [
  ["Alachua", "Gainesville", 8],
  ["Baker", "Macclenny", 8],
  ["Bay", "Panama City", 14],
  ["Bradford", "Starke", 8],
  ["Brevard", "Titusville", 18],
  ["Broward", "Fort Lauderdale", 17],
  ["Calhoun", "Blountstown", 14],
  ["Charlotte", "Punta Gorda", 20],
  ["Citrus", "Inverness", 5],
  ["Clay", "Green Cove Springs", 4],
  ["Collier", "East Naples", 20],
  ["Columbia", "Lake City", 3],
  ["DeSoto", "Arcadia", 12],
  ["Dixie", "Cross City", 3],
  ["Duval", "Jacksonville", 4],
  ["Escambia", "Pensacola", 1],
  ["Flagler", "Bunnell", 7],
  ["Franklin", "Apalachicola", 2],
  ["Gadsden", "Quincy", 2],
  ["Gilchrist", "Trenton", 8],
  ["Glades", "Moore Haven", 20],
  ["Gulf", "Port St. Joe", 14],
  ["Hamilton", "Jasper", 3],
  ["Hardee", "Wauchula", 10],
  ["Hendry", "LaBelle", 20],
  ["Hernando", "Brooksville", 5],
  ["Highlands", "Sebring", 10],
  ["Hillsborough", "Tampa", 13],
  ["Holmes", "Bonifay", 14],
  ["Indian River", "Vero Beach", 19],
  ["Jackson", "Marianna", 14],
  ["Jefferson", "Monticello", 2],
  ["Lafayette", "Mayo", 3],
  ["Lake", "Tavares", 5],
  ["Lee", "Fort Myers", 20],
  ["Leon", "Tallahassee", 2],
  ["Levy", "Bronson", 8],
  ["Liberty", "Bristol", 2],
  ["Madison", "Madison", 3],
  ["Manatee", "Bradenton", 12],
  ["Marion", "Ocala", 5],
  ["Martin", "Stuart", 19],
  ["Miami-Dade", "Miami", 11],
  ["Monroe", "Key West", 16],
  ["Nassau", "Fernandina Beach", 4],
  ["Okaloosa", "Crestview", 1],
  ["Okeechobee", "Okeechobee", 19],
  ["Orange", "Orlando", 9],
  ["Osceola", "Kissimmee", 9],
  ["Palm Beach", "West Palm Beach", 15],
  ["Pasco", "Dade City", 6],
  ["Pinellas", "Clearwater", 6],
  ["Polk", "Bartow", 10],
  ["Putnam", "Palatka", 7],
  ["St. Johns", "St. Augustine", 7],
  ["St. Lucie", "Fort Pierce", 19],
  ["Santa Rosa", "Milton", 1],
  ["Sarasota", "Sarasota", 12],
  ["Seminole", "Sanford", 18],
  ["Sumter", "Bushnell", 5],
  ["Suwannee", "Live Oak", 3],
  ["Taylor", "Perry", 3],
  ["Union", "Lake Butler", 8],
  ["Volusia", "DeLand", 7],
  ["Wakulla", "Crawfordville", 2],
  ["Walton", "DeFuniak Springs", 1],
  ["Washington", "Chipley", 14],
];

const V = "2026-11-04";

const details: Record<string, FlCountyDetail> = {
  "Miami-Dade": {
    verified: V,
    sheriffName: "Miami-Dade Sheriff's Office",
    jailOperator: "Miami-Dade Corrections and Rehabilitation Department",
    infoPhone: "786-263-7000",
    infoPhoneLabel: "Corrections headquarters",
    roster: { label: "MDCR Inmate In-Custody Search", url: "https://www.miamidade.gov/Apps/mdcr/inmateSearch/" },
    rosterNotes: [
      "Shows people currently in custody only. Once someone is released, they drop off the search.",
      "Search by last name plus first name or first initial.",
      "Results include charges, bond amount, jail number, booking date and a booking photo.",
    ],
    clerk: {
      name: "Miami-Dade County Clerk of the Court and Comptroller",
      search: { label: "Miami-Dade Clerk criminal case search", url: "https://www2.miamidadeclerk.gov/cjis/" },
    },
    otherLinks: [{ label: "MDCR inmate release information", url: "https://www.miamidade.gov/global/corrections/inmate-release.page" }],
    sources: [
      { label: "Miami-Dade County: Inmate In-Custody Search", url: "https://www.miamidade.gov/global/service.page?Mduid_service=ser1491494549439906" },
      { label: "Miami-Dade Corrections and Rehabilitation Department", url: "https://www.miamidade.gov/global/corrections/home.page" },
      { label: "Miami-Dade Clerk: Criminal Records", url: "https://www.miamidadeclerk.gov/clerk/criminal-records.page" },
    ],
  },
  Broward: {
    verified: V,
    sheriffName: "Broward Sheriff's Office",
    roster: { label: "BSO Arrest Search", url: "https://apps.sheriff.org/arrestsearch" },
    rosterNotes: [
      "The Broward Sheriff's Office runs the county's jails, and its arrest search covers people booked into them.",
      "Each record shows the arrest number, charges and booking details.",
    ],
    clerk: {
      name: "Broward County Clerk of Courts",
      search: { label: "Broward Clerk public case search", url: "https://www.browardclerk.org/web2" },
    },
    otherLinks: [{ label: "BSO jail facilities", url: "https://www.sheriff.org/dod/bso-jail-facilities/" }],
    sources: [
      { label: "Broward Sheriff's Office: Arrest Search", url: "https://apps.sheriff.org/arrestsearch" },
      { label: "Broward Sheriff's Office: Jail facilities", url: "https://www.sheriff.org/dod/bso-jail-facilities/" },
      { label: "Broward County Clerk of Courts: Case Search", url: "https://www.browardclerk.org/web2" },
    ],
  },
  "Palm Beach": {
    verified: V,
    sheriffName: "Palm Beach County Sheriff's Office",
    jailName: "Main Detention Center",
    jailAddress: "3228 Gun Club Road, West Palm Beach, FL 33406",
    infoPhone: "561-688-3000",
    infoPhoneLabel: "Sheriff's office main line",
    roster: { label: "PBSO Booking Blotter", url: "https://www3.pbso.org/blotter" },
    rosterNotes: [
      "PBSO describes the blotter as a search of recent inmates at the county jail.",
      "It's a short-term view. For an older arrest, search the clerk's court records instead.",
    ],
    warrants: {
      label: "PBSO Fugitive Warrants Unit",
      url: "https://www.pbso.org/inside-pbso/law-enforcement/strategic-operations/special-investigations-division/fugitive-warrants-unit",
    },
    clerk: {
      name: "Palm Beach County Clerk of the Circuit Court & Comptroller",
      search: { label: "eCaseView court case search", url: "https://appsgp.mypalmbeachclerk.com/ecaseview" },
    },
    otherLinks: [{ label: "Find my court date (Palm Beach Clerk)", url: "https://www.mypalmbeachclerk.com/services/find-my-court-date" }],
    sources: [
      { label: "PBSO: Arrest & Jail", url: "https://www.pbso.org/arrest-jail_menu" },
      { label: "Palm Beach County Clerk: Court Records", url: "https://www.mypalmbeachclerk.com/records/court-records" },
    ],
  },
  Hillsborough: {
    verified: V,
    sheriffName: "Hillsborough County Sheriff's Office",
    jailName: "Orient Road Jail",
    jailAddress: "1201 Orient Road, Tampa, FL 33619",
    jailPhone: "813-247-8300",
    infoPhone: "813-247-8000",
    infoPhoneLabel: "Sheriff's Operations Center",
    roster: { label: "HCSO Arrest Inquiry (Who's In Jail)", url: "https://webapps.hcso.tampa.fl.us/arrestinquiry" },
    rosterNotes: [
      "Shows the arrest as it stood at booking. HCSO notes it does not reflect the final outcome of any charge.",
      "If a record was sealed or expunged, HCSO points you to FDLE to have it removed from the site.",
      "Factual errors, like a wrong arrest date, can be fixed with HCSO's Error Correction Form.",
    ],
    clerk: {
      name: "Hillsborough County Clerk of Court and Comptroller",
      search: { label: "HOVER court records search", url: "https://hover.hillsclerk.com/" },
    },
    sources: [
      { label: "HCSO: Arrest Records on Public Website", url: "https://www.teamhcso.com/Section/b376ce21-dc5f-473e-8b52-c008a26452f7/Arrest-Records" },
      { label: "Hillsborough Clerk: Circuit Criminal", url: "https://www.hillsclerk.com/court-services/circuit-criminal" },
    ],
  },
  Orange: {
    verified: V,
    sheriffName: "Orange County Sheriff's Office",
    jailOperator: "Orange County Corrections Department",
    jailPhone: "407-836-3400",
    jailPhoneLabel: "Inmate Records Management",
    roster: { label: "Orange County Current Inmate Database", url: "https://netapps.ocfl.net/BestJail/Home/Inmates" },
    rosterNotes: [
      "Lists people currently in jail, with charges, bond amount and booking photo.",
      "The jail is run by Orange County government, not the sheriff, so call Corrections rather than the sheriff's office.",
    ],
    clerk: {
      name: "Orange County Clerk of Courts",
      search: { label: "myeClerk court records search", url: "https://myeclerk.myorangeclerk.com/" },
    },
    otherLinks: [{ label: "Bonding out of jail (Orange County Corrections)", url: "https://netapps.ocfl.net/BestJail/Home/BondingOut" }],
    sources: [
      { label: "Orange County Corrections: Inmates", url: "https://netapps.ocfl.net/BestJail/Home/Inmates" },
      { label: "Orange County Corrections: Public Information", url: "https://netapps.ocfl.net/BestJail/Home/PublicInformation" },
      { label: "Orange County Clerk: Criminal Court", url: "https://myorangeclerk.com/Divisions/Criminal" },
    ],
  },
  Duval: {
    verified: V,
    sheriffName: "Jacksonville Sheriff's Office",
    infoPhone: "904-630-0500",
    infoPhoneLabel: "JSO non-emergency",
    roster: { label: "JSO Inmate Information Search", url: "https://inmatesearch.jaxsheriff.org/" },
    pastSearch: "covers released inmates too",
    rosterNotes: [
      "Covers both current and released inmates, so it's useful for older arrests too.",
      "Records include charges and booking photos.",
      "Jacksonville and Duval County share one consolidated government, so the Jacksonville Sheriff's Office runs the county jail.",
    ],
    clerk: {
      name: "Duval County Clerk of Courts",
      search: { label: "CORE court records portal", url: "https://core.duvalclerk.com/" },
    },
    sources: [
      { label: "Jacksonville Sheriff's Office: Inmate Information", url: "https://www.jaxsheriff.org/resources/inmates.aspx" },
      { label: "Duval Clerk: Court Records", url: "https://www.duvalclerk.com/online-option/court-records" },
    ],
  },
  Pinellas: {
    verified: V,
    sheriffName: "Pinellas County Sheriff's Office",
    jailName: "Pinellas County Jail",
    infoPhone: "727-582-6200",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "PCSO Who's In Jail", url: "https://whosinjail.pinellassheriff.gov/" },
    rosterNotes: ["The sheriff's Central Division handles intake and release at the Pinellas County Jail in Largo."],
    clerk: {
      name: "Pinellas County Clerk of the Circuit Court and Comptroller",
      search: { label: "Pinellas Clerk court records inquiry", url: "https://courtrecords.mypinellasclerk.gov/" },
    },
    otherLinks: [{ label: "Court hearing search (Pinellas Clerk)", url: "https://www.mypinellasclerk.gov/View-Records/Court-Records/Hearing-Search" }],
    sources: [
      { label: "PCSO: Department of Detention and Corrections", url: "https://www.pinellassheriff.gov/corrections" },
      { label: "Pinellas Clerk: View Records", url: "https://www.mypinellasclerk.gov/Home/View-Records" },
    ],
  },
  Lee: {
    verified: V,
    sheriffName: "Lee County Sheriff's Office",
    jailName: "Lee County Main Jail",
    jailAddress: "2115 Martin Luther King Blvd, Fort Myers, FL 33901",
    jailPhone: "239-477-1500",
    roster: { label: "LCSO Arrest Search", url: "https://www.sheriffleefl.org/arrest-search/" },
    pastSearch: "lets you search by release date",
    rosterNotes: [
      "Search by booking or release date, and filter by whether the person is still in custody.",
      "The sheriff notes it doesn't reflect how charges were resolved and isn't a substitute for a public records request.",
    ],
    clerk: {
      name: "Lee County Clerk of Court",
      search: { label: "Lee Clerk records inquiry", url: "https://matrix.leeclerk.org/" },
    },
    otherLinks: [{ label: "LCSO wanted fugitives", url: "https://www.sheriffleefl.org/wanted-fugitives/" }],
    sources: [
      { label: "Lee County Sheriff's Office: Arrest Search", url: "https://www.sheriffleefl.org/arrest-search/" },
      { label: "Lee County Clerk: Search", url: "https://www.leeclerk.org/i-want-to/search" },
    ],
  },
  Polk: {
    verified: V,
    sheriffName: "Polk County Sheriff's Office",
    jailPhone: "863-292-3400",
    jailPhoneLabel: "Inmate information",
    roster: { label: "PCSO Jail Inquiry", url: "https://www.polksheriff.org/detention/jail-inquiry" },
    pastSearch: "can search bookings back to 1999",
    rosterNotes: [
      "Search current inmates only, or bookings going back to 1999.",
      "Results stop at 1,000 matches, so add a first name or booking date to narrow a common name.",
    ],
    clerk: {
      name: "Polk County Clerk of Courts",
      search: { label: "Polk Records Online", url: "https://pro.polkcountyclerk.net/PRO" },
    },
    otherLinks: [{ label: "Court dates (Polk Clerk)", url: "https://www.polkclerkfl.gov/295/Court-Dates" }],
    sources: [
      { label: "Polk County Sheriff's Office: Jail Inquiry", url: "https://www.polksheriff.org/detention/jail-inquiry" },
      { label: "Polk Clerk: Search Criminal & Traffic Records", url: "https://www.polkclerkfl.gov/299/Criminal-Traffic-Records" },
    ],
  },
  Brevard: {
    verified: V,
    sheriffName: "Brevard County Sheriff's Office",
    jailName: "Brevard County Jail Complex",
    jailPhone: "321-690-1501",
    jailPhoneLabel: "Inmate information (24 hours)",
    roster: { label: "BCSO Arrest Inquiry", url: "https://www.brevardsheriff.com/bookings/" },
    rosterNotes: [
      "Shows an inmate's charges and bond amounts.",
      "For court dates, the sheriff says to call the inmate information line.",
    ],
    clerk: {
      name: "Brevard County Clerk of Court",
      search: { label: "Brevard Clerk case search", url: "https://www.brevardclerk.us/case-search" },
    },
    sources: [
      { label: "Brevard County Sheriff's Office: Jail FAQs", url: "https://www.brevardsheriff.com/jail-complex/jail-faqs/" },
      { label: "Brevard County Clerk: Case Search", url: "https://www.brevardclerk.us/case-search" },
    ],
  },
  Pasco: {
    verified: V,
    sheriffName: "Pasco Sheriff's Office",
    jailOperator: "Pasco County government",
    jailName: "Pasco County Detention Center",
    jailAddress: "20101 Central Blvd, Land O' Lakes, FL 34637",
    infoPhone: "727-847-2411",
    infoPhoneLabel: "Pasco County main line",
    roster: { label: "Pasco Corrections In Custody search", url: "https://jailinfo.pascocorrections.net/jmc/#/inCustody" },
    pastArrests: { label: "Pasco Corrections Past Arrests search", url: "https://jailinfo.pascocorrections.net/JMC/#/pastArrests" },
    pastSearch: "has a separate Past Arrests search",
    rosterNotes: [
      "Pasco County's Board of County Commissioners took over the detention center from the sheriff on October 1, 2022. Jail questions now go to the county, not the sheriff.",
      "There are two searches: one for people in custody now and one for past arrests.",
    ],
    warrants: { label: "Pasco Sheriff's Office active warrants", url: "https://www.pascosheriff.com/psoapps/activewarrants/ActiveWarrantsInternet" },
    clerk: {
      name: "Pasco County Clerk & Comptroller",
      search: { label: "Pasco Clerk court records search", url: "https://www.pascoclerk.com/172/Search-Court-Records" },
    },
    sources: [
      { label: "Pasco County: Inmate Services", url: "https://www.pascocountyfl.gov/inmate_services/index.php" },
      { label: "Pasco Sheriff's Office: Detention Center management transition", url: "https://news.pascosheriff.com/pasco-sheriffs-office-community-news/pasco-county-detention-center-management-transition/" },
      { label: "Pasco Clerk: Search Court Records", url: "https://www.pascoclerk.com/172/Search-Court-Records" },
    ],
  },
  Volusia: {
    verified: V,
    sheriffName: "Volusia Sheriff's Office",
    jailOperator: "Volusia County Division of Corrections",
    jailName: "Volusia County Branch Jail",
    jailAddress: "1300 Red John Drive, Daytona Beach, FL 32124",
    jailPhone: "386-254-1555",
    roster: { label: "Volusia County Corrections inmate search", url: "https://volusiamug.vcgov.org/" },
    rosterNotes: [
      "Volusia's jails are run by the county's Division of Corrections, a separate agency from the sheriff.",
      "The county also runs the Volusia County Correctional Facility, 1354 Indian Lake Road, Daytona Beach, 386-254-1565.",
    ],
    clerk: {
      name: "Volusia County Clerk of the Circuit Court",
      search: { label: "Volusia Clerk online public records", url: "https://www.clerk.org/Search-Records.aspx" },
    },
    sources: [
      { label: "Volusia County: Corrections", url: "https://www.volusia.org/services/public-protection/corrections/" },
      { label: "Volusia Clerk: Online Public Records", url: "https://www.clerk.org/Search-Records.aspx" },
    ],
  },
  Seminole: {
    verified: V,
    sheriffName: "Seminole County Sheriff's Office",
    jailName: "John E. Polk Correctional Facility",
    jailAddress: "211 Eslinger Way, Sanford, FL 32773",
    jailPhone: "407-665-1200",
    roster: { label: "SCSO Correctional Facility inmate search", url: "https://webbond.seminolesheriff.org/webbond/" },
    rosterNotes: ["The sheriff's office runs the county jail, the John E. Polk Correctional Facility in Sanford."],
    clerk: {
      name: "Seminole County Clerk of the Circuit Court & Comptroller",
      search: { label: "Seminole County Clerk website (court case search)", url: "https://www.seminoleclerk.org/" },
    },
    sources: [
      { label: "Seminole County Sheriff's Office: John E. Polk Correctional Facility", url: "https://www.seminolesheriff.org/page.aspx?id=60" },
      { label: "Seminole County Sheriff's Office: Correctional Facility & Probation", url: "https://webbond.seminolesheriff.org/webbond/" },
      { label: "Seminole County Clerk of the Circuit Court & Comptroller", url: "https://www.seminoleclerk.org/" },
    ],
  },
  Sarasota: {
    verified: V,
    sheriffName: "Sarasota County Sheriff's Office",
    jailName: "Sarasota County Jail",
    jailAddress: "2020 Main Street, Sarasota, FL 34237",
    jailPhone: "941-861-4601",
    roster: { label: "SCSO Arrests & Inmate Search", url: "https://www.sarasotasheriff.org/arrest-reports/index.php" },
    pastSearch: "includes prior bookings",
    rosterNotes: [
      "Includes current and prior bookings.",
      "The sheriff warns it may not reflect a person's current location, status or release date.",
    ],
    clerk: {
      name: "Sarasota County Clerk of the Circuit Court and County Comptroller",
      search: { label: "Sarasota Clerk court records", url: "https://www.sarasotaclerk.com/Records/Court-Records" },
    },
    otherLinks: [{ label: "Criminal court date information (Sarasota Clerk)", url: "https://www.sarasotaclerk.com/Courts/Criminal-Court/Court-Date-Information" }],
    sources: [
      { label: "Sarasota County Sheriff's Office: Arrests & Inmate Search", url: "https://www.sarasotasheriff.org/arrest-reports/index.php" },
      { label: "Sarasota Clerk: Court Records", url: "https://www.sarasotaclerk.com/Records/Court-Records" },
    ],
  },
  Manatee: {
    verified: V,
    sheriffName: "Manatee County Sheriff's Office",
    infoPhone: "941-747-3011",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "MCSO Arrest Inquiries", url: "https://www.manateesheriff.com/arrest_inquiries_app/" },
    rosterNotes: ["The sheriff's office runs the county jail and posts bookings through its arrest inquiries search."],
    clerk: {
      name: "Manatee County Clerk of the Circuit Court and Comptroller",
      search: { label: "Manatee Clerk court records person search", url: "https://records.manateeclerk.com/CourtRecords/Search/Person" },
    },
    sources: [
      { label: "Manatee County Sheriff's Office: Contact", url: "https://www.manateesheriff.com/contact_us/contact.php" },
      { label: "Manatee County Sheriff's Office: Arrest Inquiries", url: "https://www.manateesheriff.com/arrest_inquiries_app/" },
      { label: "Manatee Clerk: Online Searches", url: "https://www.manateeclerk.com/online-searches/" },
    ],
  },
  Collier: {
    verified: V,
    sheriffName: "Collier County Sheriff's Office",
    roster: { label: "Collier County Arrests", url: "https://www2.colliersheriff.org/arrestsearch/" },
    pastSearch: "lets you search past booking dates",
    rosterNotes: [
      "Shows today's arrest reports, and you can search past dates by booking date or by name.",
      "The sheriff notes it doesn't reflect how charges were resolved.",
    ],
    clerk: {
      name: "Collier County Clerk of the Circuit Court",
      search: { label: "Collier Clerk online court case search", url: "https://www.collierclerk.com/court-divisions/online-case-search/" },
    },
    sources: [
      { label: "Collier County Sheriff's Office: Arrest Search", url: "https://www2.colliersheriff.org/arrestsearch/" },
      { label: "Collier Clerk: Online Court Case Search", url: "https://www.collierclerk.com/court-divisions/online-case-search/" },
    ],
  },
  Osceola: {
    verified: V,
    sheriffName: "Osceola County Sheriff's Office",
    jailOperator: "Osceola County Corrections Department",
    jailName: "Osceola County Correctional Facility",
    jailAddress: "402 Simpson Rd, Kissimmee, FL 34744",
    jailPhone: "407-742-4444",
    infoPhone: "407-742-4411",
    infoPhoneLabel: "Corrections records",
    roster: { label: "Osceola County Corrections inmate search", url: "https://legacy-apps.osceola.org/Apps/CorrectionsReports/Report/Search/" },
    rosterNotes: ["Osceola's jail is run by county government, not the sheriff, so jail questions go to Osceola County Corrections."],
    clerk: {
      name: "Osceola County Clerk of the Circuit Court & County Comptroller",
      search: { label: "Osceola Clerk court case search", url: "https://courts.osceolaclerk.com/BenchmarkWeb/Home.aspx/Search" },
    },
    sources: [
      { label: "Osceola County: Corrections Department Contact Information", url: "https://www.osceola.org/Government/Agencies-and-Departments-Directory/Corrections-Department/Corrections-Department-Contact-Information" },
      { label: "Osceola County Corrections: Inmate Search", url: "https://legacy-apps.osceola.org/Apps/CorrectionsReports/Report/Search/" },
      { label: "Osceola Clerk: Felony & Misdemeanor", url: "https://osceolaclerk.com/felony-misdemeanor/" },
    ],
  },
  Marion: {
    verified: V,
    sheriffName: "Marion County Sheriff's Office",
    jailName: "Marion County Jail",
    jailAddress: "700 NW 30th Avenue, Ocala, FL 34475",
    jailPhone: "352-351-8077",
    roster: { label: "MCSO Inmate Inquiry", url: "https://jail.marionso.com/" },
    rosterNotes: ["To ask about a current inmate by phone, the sheriff says to call the jail."],
    clerk: {
      name: "Marion County Clerk of Court and Comptroller",
      search: { label: "Marion County court records search", url: "https://www.civitekflorida.com/ocrs/county/42/" },
    },
    sources: [
      { label: "Marion County Sheriff's Office: FAQ", url: "https://www.marionso.com/faq" },
      { label: "Marion County Clerk: Search Records", url: "https://www.marioncountyclerk.org/search-records/" },
    ],
  },
  Lake: {
    verified: V,
    sheriffName: "Lake County Sheriff's Office",
    jailName: "Lake County Jail",
    jailAddress: "551 W. Main St., Tavares, FL 32778",
    jailPhone: "352-742-4000",
    roster: { label: "LCSO Inmate Search", url: "https://www.lcso.org/inmate-search/" },
    rosterNotes: ["The sheriff warns that inmate information changes quickly and the posted details may be behind."],
    clerk: {
      name: "Lake County Clerk of the Circuit Court and Comptroller",
      search: { label: "Lake Clerk court records search", url: "https://courtrecords.lakecountyclerk.org/" },
    },
    sources: [
      { label: "Lake County Sheriff's Office: Inmate Search", url: "https://www.lcso.org/inmate-search/" },
      { label: "Lake County Clerk: Court Records Search", url: "https://courtrecords.lakecountyclerk.org/" },
    ],
  },
  "St. Lucie": {
    verified: V,
    sheriffName: "St. Lucie County Sheriff's Office",
    jailName: "St. Lucie County Jail",
    jailAddress: "900 North Rock Road, Fort Pierce, FL 34945",
    jailPhone: "772-462-3450",
    infoPhone: "772-462-7300",
    infoPhoneLabel: "Sheriff's office main line",
    roster: { label: "SLCSO Inmate Search", url: "https://jail.stluciesheriff.com/inmateSearch.php" },
    rosterNotes: ["The sheriff's office runs the county jail in Fort Pierce and posts current inmates online."],
    clerk: {
      name: "St. Lucie County Clerk of the Circuit Court & Comptroller",
      search: { label: "St. Lucie Clerk court case search", url: "https://courtcasesearch.stlucieclerk.gov/BenchmarkWebExternal/Home.aspx/Search" },
    },
    sources: [
      { label: "St. Lucie County Sheriff's Office: St. Lucie County Jail", url: "https://www.stluciesheriff.com/directory.aspx?did=6" },
      { label: "St. Lucie County Sheriff's Office: Inmate Lookup", url: "https://stluciesheriff.com/215/Inmate-Lookup" },
      { label: "St. Lucie Clerk: Court Case Search", url: "https://stlucieclerk.gov/public-search-gen/search-court-cases" },
    ],
  },
  Escambia: {
    verified: V,
    sheriffName: "Escambia County Sheriff's Office",
    jailOperator: "Escambia County Corrections",
    jailName: "Escambia County Correctional Facility",
    jailAddress: "3080 N Pace Blvd., Pensacola, FL 32505",
    jailPhone: "850-436-9830",
    roster: { label: "Escambia County Inmate Lookup", url: "http://inmatelookup.myescambia.com/smartwebclient/jail.aspx" },
    rosterNotes: ["Escambia's jail is part of county government's Corrections department, so jail questions go to the county rather than the sheriff."],
    clerk: {
      name: "Escambia County Clerk of the Circuit Court & Comptroller",
      search: { label: "Escambia Clerk online public records", url: "https://www.escambiaclerk.com/258/Online-Public-Records" },
    },
    sources: [
      { label: "Escambia County Corrections: Contacts", url: "https://myescambia.com/our-services/corrections/community-detention/contacts" },
      { label: "Escambia County: Correctional Facility", url: "https://myescambia.com/our-services/corrections/community-detention/jail" },
      { label: "Escambia County: Inmate Lookup", url: "https://myescambia.com/our-services/corrections/community-detention/inmate-lookup" },
      { label: "Escambia Clerk: Online Public Records", url: "https://www.escambiaclerk.com/258/Online-Public-Records" },
    ],
  },
  "St. Johns": {
    verified: V,
    sheriffName: "St. Johns County Sheriff's Office",
    jailAddress: "4015 Lewis Speedway, St. Augustine, FL 32084",
    jailPhone: "904-209-3125",
    jailPhoneLabel: "Bond questions",
    infoPhone: "904-824-8304",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "SJSO inmate search", url: "https://www2.sjso.org/smartwebclient/" },
    rosterNotes: [
      "Lists people booked into the St. Johns County jail. The sheriff notes they've been arrested but not found guilty.",
      "When we checked, the sheriff's site said the inmate search was temporarily down. If it doesn't load, call the non-emergency line.",
    ],
    warrants: { label: "SJSO warrant search", url: "https://www.sjso.org/detention-center/search-wanted/" },
    clerk: {
      name: "St. Johns County Clerk of the Circuit Court and County Comptroller",
      search: { label: "St. Johns Clerk public records", url: "https://stjohnsclerk.com/recording/public-records/" },
    },
    sources: [
      { label: "St. Johns County Sheriff's Office: Inmate Search", url: "https://www.sjso.org/sj-inmate-search/" },
      { label: "St. Johns Clerk: Criminal", url: "https://stjohnsclerk.com/courts/criminal/" },
    ],
  },
  Leon: {
    verified: V,
    sheriffName: "Leon County Sheriff's Office",
    jailName: "Leon County Detention Center",
    jailAddress: "535 Appleyard Dr., Tallahassee, FL 32304",
    jailPhone: "850-606-3500",
    roster: { label: "LCSO inmate search", url: "https://www.leoncountyso.com/About-us/Departments/Detention-Facility/Inmate-search" },
    rosterNotes: ["Search by first and last name. The sheriff says it's for information only and isn't a criminal background check."],
    warrants: { label: "LCSO warrant search", url: "https://www.leoncountyso.com/About-us/Departments/Judicial-Services/Warrant-Search" },
    clerk: {
      name: "Leon County Clerk of the Circuit Court and Comptroller",
      search: { label: "Leon Clerk court records", url: "https://leonclerk.com/helpful-resources/records/court-records/" },
    },
    sources: [
      { label: "Leon County Sheriff's Office: Inmate Search", url: "https://www.leoncountyso.com/About-us/Departments/Detention-Facility/Inmate-search" },
      { label: "Leon Clerk: Circuit & County Criminal", url: "https://leonclerk.com/divisions/circuit-county-criminal/" },
    ],
  },
  Alachua: {
    verified: V,
    sheriffName: "Alachua County Sheriff's Office",
    jailName: "Alachua County Jail",
    jailAddress: "3333 NE 39th Avenue, Gainesville, FL 32609",
    infoPhone: "352-367-4000",
    infoPhoneLabel: "Sheriff's office main line",
    roster: { label: "ASO Inmate Lookup", url: "https://asosite.alachuasheriff.org/ASOInmateLookup.aspx" },
    rosterNotes: [
      "Shows whether someone is currently an inmate in the Alachua County Jail.",
      "Search by last name, first name or booking number. Partial names work, and you can list all current inmates.",
    ],
    clerk: {
      name: "Alachua County Clerk of the Court",
      search: { label: "Alachua Clerk court records", url: "https://www.alachuaclerk.org/court_records/index.cfm" },
    },
    sources: [
      { label: "Alachua County Sheriff's Office: Inmate Search", url: "https://acso.us/inmate-search/" },
      { label: "Alachua County Sheriff's Office: Department of the Jail", url: "https://acso.us/organization/department-of-the-jail/" },
    ],
  },
  Clay: {
    verified: V,
    sheriffName: "Clay County Sheriff's Office",
    jailName: "Clay County Jail",
    jailAddress: "901 North Orange Avenue, Green Cove Springs, FL 32043",
    infoPhone: "904-264-6512",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "CCSO inmate information", url: "https://claysheriff.policetocitizen.com/Inmates/Catalog" },
    rosterNotes: ["Lists people currently held in the Clay County Jail."],
    clerk: {
      name: "Clay County Clerk of Court and Comptroller",
      search: { label: "Clay Clerk search records", url: "https://clayclerk.com/search-records/" },
    },
    sources: [
      { label: "Clay County Sheriff's Office: Jail Information", url: "https://www.claysheriff.com/resources/jail-info/" },
      { label: "Clay County Sheriff's Office: Crime & Arrest Info", url: "https://www.claysheriff.com/news/crime-arrest-info/" },
      { label: "Clay Clerk: Criminal Court Services", url: "https://clayclerk.com/departments/criminal-court-services/" },
    ],
  },
  Okaloosa: {
    verified: V,
    sheriffName: "Okaloosa County Sheriff's Office",
    jailOperator: "Okaloosa County Department of Corrections",
    jailName: "Okaloosa County Jail",
    jailAddress: "1200 East James Lee Boulevard, Crestview, FL 32539",
    jailPhone: "850-689-5690",
    roster: { label: "Okaloosa County Jail inmate search", url: "https://okaloosacountyjail.myokaloosa.com/inmatelocator" },
    rosterNotes: ["The jail is run by Okaloosa County's Department of Corrections, not the sheriff."],
    warrants: { label: "OCSO warrant search", url: "https://www.sheriff-okaloosa.org/wp-content/warrantsphp/" },
    clerk: {
      name: "Okaloosa County Clerk of Court and Comptroller",
      search: { label: "Okaloosa Clerk records search", url: "https://clerkapps.okaloosaclerk.com/ClerkQuest/" },
    },
    otherLinks: [{ label: "Court date search (Okaloosa Clerk)", url: "https://clerkapps.okaloosaclerk.com/CourtDate/" }],
    sources: [
      { label: "Okaloosa County: Corrections", url: "https://myokaloosa.com/corrections" },
      { label: "Okaloosa Clerk: Court Records Access", url: "https://okaloosaclerk.com/court-services/court-records-access/" },
    ],
  },
  Hernando: {
    verified: V,
    sheriffName: "Hernando County Sheriff's Office",
    jailName: "Hernando County Detention Center",
    jailAddress: "16425 Spring Hill Dr., Brooksville, FL 34604",
    jailPhone: "352-544-2334",
    infoPhone: "352-754-6830",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "HCSO jail search", url: "https://www.hernandosheriff.org/jail/Applications/JailSearch/" },
    pastSearch: "can include released inmates if you check \"Include Released\"",
    rosterNotes: [
      "Search by booking or release date, and check \"Include Released\" to see people who are no longer in custody.",
      "The sheriff notes it doesn't show how a case ended. For outcomes, check the clerk.",
    ],
    clerk: {
      name: "Hernando County Clerk of Circuit Court & Comptroller",
      search: { label: "Hernando Clerk criminal courts", url: "https://hernandoclerk.com/court-services/criminal-courts/" },
    },
    sources: [
      { label: "Hernando County Sheriff's Office: Jail Search", url: "https://www.hernandosheriff.org/jail/Applications/JailSearch/" },
      { label: "Hernando Clerk: Criminal Courts", url: "https://hernandoclerk.com/court-services/criminal-courts/" },
    ],
  },
  Charlotte: {
    verified: V,
    sheriffName: "Charlotte County Sheriff's Office",
    jailName: "Charlotte County Jail",
    jailAddress: "26601 Airport Rd, Punta Gorda, FL 33982",
    infoPhone: "941-639-2101",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "CCSO local arrest database", url: "https://ccso.org/correctional_facility/local_arrest_database.php" },
    rosterNotes: ["The sheriff's office runs the county jail and posts local arrests through its arrest database."],
    clerk: {
      name: "Charlotte County Clerk of the Circuit Court and Comptroller",
      search: { label: "Charlotte Clerk portal", url: "https://clerkportal.charlotteclerk.com/" },
    },
    sources: [
      { label: "Charlotte County Sheriff's Office: Inmate Contact", url: "https://ccso.org/correctional_facility/inmate_contact.php" },
      { label: "Charlotte Clerk: Criminal", url: "https://charlotteclerk.com/courts/criminal" },
    ],
  },
  "Santa Rosa": {
    verified: V,
    sheriffName: "Santa Rosa County Sheriff's Office",
    jailName: "Santa Rosa County Jail",
    jailAddress: "5755 E. Milton Road, Milton, FL 32583",
    roster: { label: "Santa Rosa County Jail View", url: "http://jailview.srso.net/SmartWebClient/jail.aspx" },
    rosterNotes: [
      "Shows the arrest as it stood at booking, based on the information available then.",
      "The sheriff notes it isn't a substitute for a public records request.",
    ],
    clerk: {
      name: "Santa Rosa County Clerk of the Circuit Court and Comptroller",
      search: { label: "Santa Rosa Clerk public records search", url: "https://santarosaclerk.com/courts/search-public-records/" },
    },
    sources: [
      { label: "Santa Rosa County Sheriff's Office: Directions", url: "https://santarosasheriff.org/directions/" },
      { label: "Santa Rosa County Sheriff's Office: Jail View", url: "https://santarosasheriff.org/jail-view/" },
      { label: "Santa Rosa Clerk: Search Public Records", url: "https://santarosaclerk.com/courts/search-public-records/" },
    ],
  },
  Bay: {
    verified: V,
    sheriffName: "Bay County Sheriff's Office",
    jailName: "Bay County Jail",
    jailAddress: "5700 Star Lane, Panama City, FL 32404",
    jailPhone: "850-785-5245",
    roster: { label: "BCSO jail inmate search", url: "https://www.baysomobile.org/is/" },
    rosterNotes: ["The sheriff's office runs the Bay County Jail. A second jail line is 850-215-5140."],
    warrants: { label: "BCSO Warrants Division", url: "https://bayso.org/warrants/" },
    clerk: {
      name: "Bay County Clerk of Court and Comptroller",
      search: { label: "Bay Clerk court case and docket search", url: "https://www.baycoclerk.com/public-records/search-court-cases-court-docket/" },
    },
    sources: [
      { label: "Bay County Sheriff's Office: Jail FAQ", url: "https://bayso.org/faqs/" },
      { label: "Bay Clerk: Search Court Cases", url: "https://www.baycoclerk.com/public-records/search-court-cases-court-docket/" },
    ],
  },
  Martin: {
    verified: V,
    sheriffName: "Martin County Sheriff's Office",
    jailName: "Martin County Jail",
    jailAddress: "800 SE Monterey Road, Stuart, FL 34994",
    jailPhone: "772-220-7200",
    jailPhoneLabel: "Department of Corrections",
    roster: { label: "Martin County jail inmate search", url: "https://correctionsrecordssearch.com/martincountyfl" },
    rosterNotes: [
      "Shows arrest information and photos for people currently held in Martin County.",
      "The jail can't give information about immigration holds. For those, the sheriff refers you to ICE.",
    ],
    clerk: {
      name: "Martin County Clerk of the Circuit Court and Comptroller",
      search: { label: "Martin Clerk records search", url: "https://www.martinclerk.com/335/Records-Search" },
    },
    otherLinks: [{ label: "MCSO recent bookings", url: "https://www.mcsofl.org/224/Recent-Bookings" }],
    sources: [
      { label: "Martin County Sheriff's Office: Jail Inmate Search", url: "https://www.mcsofl.org/223/Jail-Inmate-Search" },
      { label: "Martin Clerk: Court Records", url: "https://www.martinclerk.com/226/Court-Records" },
    ],
  },
  "Indian River": {
    verified: V,
    sheriffName: "Indian River County Sheriff's Office",
    jailName: "Indian River County Jail",
    jailAddress: "4055 41st Avenue, Vero Beach, FL 32960",
    jailPhone: "772-978-6114",
    jailPhoneLabel: "Jail switchboard",
    infoPhone: "772-569-6700",
    infoPhoneLabel: "Sheriff's office main line",
    roster: { label: "IRCSO inmate search", url: "https://ircsheriff.org/inmate-search" },
    rosterNotes: ["Shows inmate and booking numbers, and bond status while someone waits on a bond decision."],
    clerk: {
      name: "Indian River County Clerk of the Circuit Court & Comptroller",
      search: { label: "Indian River Clerk online case view", url: "https://indianriverclerk.com/court-records/online-case-view/" },
    },
    sources: [
      { label: "Indian River County Sheriff's Office: Corrections", url: "https://ircsheriff.org/corrections" },
      { label: "Indian River Clerk: Court Records", url: "https://indianriverclerk.com/court-records/" },
    ],
  },
  Sumter: {
    verified: V,
    sheriffName: "Sumter County Sheriff's Office",
    jailName: "Sumter County Detention Center",
    jailAddress: "7361 Powell Road, Wildwood, FL 34785",
    infoPhone: "352-569-1600",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "Current SCDC inmates", url: "http://portal.sumtercountysheriff.org/smartwebclient/jail.aspx" },
    rosterNotes: ["The detention center books people arrested by every law enforcement agency in Sumter County."],
    clerk: {
      name: "Sumter County Clerk of the Circuit Court and Comptroller",
      search: { label: "Sumter Clerk records search", url: "https://www.sumterclerk.com/online-services/records-search/" },
    },
    sources: [
      { label: "Sumter County Sheriff's Office: Intake and Release Center", url: "https://www.sumtercountysheriff.org/divisions/detention_center/intake___release_center.php" },
      { label: "Sumter Clerk: Court Records", url: "https://www.sumterclerk.com/courts/court-records/" },
    ],
  },
  Flagler: {
    verified: V,
    sheriffName: "Flagler County Sheriff's Office",
    jailName: "Flagler County Detention Facility",
    jailAddress: "1001 Justice Lane, Bunnell, FL 32110",
    jailPhone: "386-586-4871",
    roster: { label: "FCSO inmate inquiry", url: "http://inmatesearch.flaglersheriff.com/NewWorld.InmateInquiry/FL0180000" },
    rosterNotes: ["The sheriff's office runs the county detention facility in Bunnell."],
    clerk: {
      name: "Flagler County Clerk of Court & Comptroller",
      search: { label: "Flagler Clerk court case search", url: "https://cases.flaglerclerk.com/Home.aspx/Search" },
    },
    otherLinks: [{ label: "Daily court docket (Flagler Clerk)", url: "https://flaglerclerk.com/docket" }],
    sources: [
      { label: "Flagler County Sheriff's Office: Jail Visitation", url: "https://flaglersheriff.com/divisions/jail-visitation/" },
      { label: "Flagler Clerk: Court Case Search", url: "https://cases.flaglerclerk.com/Home.aspx/Search" },
    ],
  },
  Nassau: {
    verified: V,
    noindex: true,
    sheriffName: "Nassau County Sheriff's Office",
    infoPhone: "904-225-5174",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "NCSO in-custody inmate search", url: "https://dssinmate.nassauso.com/NewWorld.InmateInquiry/nassau" },
    rosterNotes: ["The sheriff's office changed its inmate search system. Older links to the previous search no longer work."],
    clerk: {
      name: "Nassau County Clerk of Circuit Court and Comptroller",
      search: { label: "Nassau Clerk criminal department", url: "https://www.nassauclerk.com/176/Criminal-Department" },
    },
    sources: [
      { label: "Nassau County Sheriff's Office: Inmate Search", url: "https://nassauso.com/inmate-search/" },
      { label: "Nassau Clerk: Criminal Department", url: "https://www.nassauclerk.com/176/Criminal-Department" },
    ],
  },
  Monroe: {
    verified: V,
    noindex: true,
    sheriffName: "Monroe County Sheriff's Office",
    infoPhone: "305-289-2351",
    infoPhoneLabel: "Sheriff's non-emergency line",
    roster: { label: "MCSO current inmates", url: "https://www.keysso.net/jailog" },
    rosterNotes: ["The sheriff's office runs the jails in the Florida Keys and posts a list of current inmates."],
    clerk: {
      name: "Monroe County Clerk of the Circuit Court",
      search: { label: "Monroe Clerk criminal case records", url: "https://cr.monroe-clerk.com/" },
    },
    otherLinks: [{ label: "MCSO inmate visitation, phones and accounts", url: "https://www.keysso.net/jailVisit" }],
    sources: [
      { label: "Monroe County Sheriff's Office: Locations", url: "https://www.keysso.net/locations" },
      { label: "Monroe Clerk: Court Records", url: "https://monroe-clerk.com/court-records-link" },
    ],
  },
  Putnam: {
    verified: V,
    noindex: true,
    sheriffName: "Putnam County Sheriff's Office",
    roster: { label: "PCSO Jail View", url: "https://smartweb.pcso.us/smartwebclient/jail.aspx" },
    pastSearch: "can search released inmates",
    rosterNotes: ["Search current inmates, released inmates or both, and filter by booking or release date."],
    warrants: { label: "PCSO warrant view", url: "https://smartweb.pcso.us/smartwebclient/warrant.aspx" },
    clerk: {
      name: "Putnam County Clerk of Court",
      search: { label: "Putnam Clerk records search", url: "https://putnamclerk.com/online-services/records-search/" },
    },
    sources: [
      { label: "Putnam County Sheriff's Office: Jail View", url: "https://smartweb.pcso.us/smartwebclient/jail.aspx" },
      { label: "Putnam Clerk: Records Search", url: "https://putnamclerk.com/online-services/records-search/" },
    ],
  },
  Walton: {
    verified: V,
    sheriffName: "Walton County Sheriff's Office",
    jailName: "Walton County Jail",
    jailPhone: "850-892-8196",
    roster: { label: "WCSO inmate inquiry", url: "https://nwscorrections.waltonso.org/NewWorld.InMateInquiry/WaltonCounty" },
    rosterNotes: ["The sheriff's office runs the Walton County Jail, which holds men and women."],
    clerk: {
      name: "Walton County Clerk of Courts & Comptroller",
      search: { label: "Walton Clerk criminal court", url: "https://clerkofcourts.co.walton.fl.us/criminal" },
    },
    sources: [
      { label: "Walton County Sheriff's Office: Jail", url: "https://waltonso.org/jail/" },
      { label: "Walton Clerk: Criminal Court", url: "https://clerkofcourts.co.walton.fl.us/criminal" },
    ],
  },
};

export const slugify = (s: string) =>
  s.toLowerCase().replace(/\./g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-county";

export const flCounties: FlCounty[] = raw.map(([name, seat, circuit]) => ({
  slug: slugify(name),
  name,
  seat,
  circuit,
  detail: details[name],
}));

export const flPublished = flCounties.filter((c) => c.detail);

export const getFlCounty = (slug: string) => flCounties.find((c) => c.slug === slug);

export const circuitCounties = (circuit: number) => flCounties.filter((c) => c.circuit === circuit);

const ordinals = [
  "", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh",
  "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth",
];
export const circuitName = (n: number) => `${ordinals[n]} Judicial Circuit`;
