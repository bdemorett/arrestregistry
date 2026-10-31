// Minnesota county dataset.
// A county page is only generated (and listed in the sitemap) when `detail` is filled in
// with links and facts checked against the county's own official pages.
// Add counties in batches: fill `detail`, set `verified` to the date you checked it.

export type Link = { label: string; url: string };

export type CountyDetail = {
  verified: string; // YYYY-MM-DD the official pages were checked
  sheriffName: string; // agency name, e.g. "Hennepin County Sheriff's Office"
  jailName: string;
  jailAddress?: string;
  jailPhone?: string;
  sheriffPhone?: string;
  roster?: Link;
  rosterNotes: string[]; // what the official roster shows and for how long
  warrants?: Link;
  warrantNotes?: string;
  bookingPhotos?: Link;
  otherLinks?: Link[];
  sources: Link[];
};

export type County = {
  slug: string;
  name: string; // without "County"
  seat: string;
  district: number;
  detail?: CountyDetail;
};

const raw: [string, string, number][] = [
  // [name, county seat, judicial district]
  ["Aitkin", "Aitkin", 9],
  ["Anoka", "Anoka", 10],
  ["Becker", "Detroit Lakes", 7],
  ["Beltrami", "Bemidji", 9],
  ["Benton", "Foley", 7],
  ["Big Stone", "Ortonville", 8],
  ["Blue Earth", "Mankato", 5],
  ["Brown", "New Ulm", 5],
  ["Carlton", "Carlton", 6],
  ["Carver", "Chaska", 1],
  ["Cass", "Walker", 9],
  ["Chippewa", "Montevideo", 8],
  ["Chisago", "Center City", 10],
  ["Clay", "Moorhead", 7],
  ["Clearwater", "Bagley", 9],
  ["Cook", "Grand Marais", 6],
  ["Cottonwood", "Windom", 5],
  ["Crow Wing", "Brainerd", 9],
  ["Dakota", "Hastings", 1],
  ["Dodge", "Mantorville", 3],
  ["Douglas", "Alexandria", 7],
  ["Faribault", "Blue Earth", 5],
  ["Fillmore", "Preston", 3],
  ["Freeborn", "Albert Lea", 3],
  ["Goodhue", "Red Wing", 1],
  ["Grant", "Elbow Lake", 8],
  ["Hennepin", "Minneapolis", 4],
  ["Houston", "Caledonia", 3],
  ["Hubbard", "Park Rapids", 9],
  ["Isanti", "Cambridge", 10],
  ["Itasca", "Grand Rapids", 9],
  ["Jackson", "Jackson", 5],
  ["Kanabec", "Mora", 10],
  ["Kandiyohi", "Willmar", 8],
  ["Kittson", "Hallock", 9],
  ["Koochiching", "International Falls", 9],
  ["Lac qui Parle", "Madison", 8],
  ["Lake", "Two Harbors", 6],
  ["Lake of the Woods", "Baudette", 9],
  ["Le Sueur", "Le Center", 1],
  ["Lincoln", "Ivanhoe", 5],
  ["Lyon", "Marshall", 5],
  ["McLeod", "Glencoe", 1],
  ["Mahnomen", "Mahnomen", 9],
  ["Marshall", "Warren", 9],
  ["Martin", "Fairmont", 5],
  ["Meeker", "Litchfield", 8],
  ["Mille Lacs", "Milaca", 7],
  ["Morrison", "Little Falls", 7],
  ["Mower", "Austin", 3],
  ["Murray", "Slayton", 5],
  ["Nicollet", "St. Peter", 5],
  ["Nobles", "Worthington", 5],
  ["Norman", "Ada", 9],
  ["Olmsted", "Rochester", 3],
  ["Otter Tail", "Fergus Falls", 7],
  ["Pennington", "Thief River Falls", 9],
  ["Pine", "Pine City", 10],
  ["Pipestone", "Pipestone", 5],
  ["Polk", "Crookston", 9],
  ["Pope", "Glenwood", 8],
  ["Ramsey", "St. Paul", 2],
  ["Red Lake", "Red Lake Falls", 9],
  ["Redwood", "Redwood Falls", 5],
  ["Renville", "Olivia", 8],
  ["Rice", "Faribault", 3],
  ["Rock", "Luverne", 5],
  ["Roseau", "Roseau", 9],
  ["St. Louis", "Duluth", 6],
  ["Scott", "Shakopee", 1],
  ["Sherburne", "Elk River", 10],
  ["Sibley", "Gaylord", 1],
  ["Stearns", "St. Cloud", 7],
  ["Steele", "Owatonna", 3],
  ["Stevens", "Morris", 8],
  ["Swift", "Benson", 8],
  ["Todd", "Long Prairie", 7],
  ["Traverse", "Wheaton", 8],
  ["Wabasha", "Wabasha", 3],
  ["Wadena", "Wadena", 7],
  ["Waseca", "Waseca", 3],
  ["Washington", "Stillwater", 10],
  ["Watonwan", "St. James", 5],
  ["Wilkin", "Breckenridge", 8],
  ["Winona", "Winona", 3],
  ["Wright", "Buffalo", 10],
  ["Yellow Medicine", "Granite Falls", 8],
];

const details: Record<string, CountyDetail> = {
  Hennepin: {
    verified: "2026-10-29",
    sheriffName: "Hennepin County Sheriff's Office",
    jailName: "Hennepin County Jail (Public Safety Facility)",
    jailAddress: "401 South 4th Avenue, Suite 100, Minneapolis, MN 55415",
    jailPhone: "612-348-5112",
    roster: { label: "Hennepin County Jail Roster", url: "https://jailroster.hennepin.us/" },
    rosterNotes: [
      "Lists people currently in the county jail plus anyone released in the past 7 days.",
      "Each entry shows charges, bail, and scheduled court dates.",
      "The sheriff's office updates it hourly.",
      "The jail also operates a location inside Minneapolis City Hall at 350 South 5th Street.",
    ],
    warrants: { label: "Hennepin County warrant search", url: "https://www.hennepinsheriff.org/jail-warrants/warrants" },
    warrantNotes: "The sheriff's office offers an online lookup you can use to check whether a warrant exists.",
    otherLinks: [{ label: "Hennepin County Sheriff: Jail information", url: "https://hennepinsheriff.org/jail-warrants/jail" }],
    sources: [
      { label: "Hennepin County Sheriff's Office, Jail", url: "https://hennepinsheriff.org/jail-warrants/jail" },
    ],
  },
  Ramsey: {
    verified: "2026-10-29",
    sheriffName: "Ramsey County Sheriff's Office",
    jailName: "Ramsey County Adult Detention Center",
    jailAddress: "425 Grove St., Saint Paul, MN 55101",
    jailPhone: "651-266-9350",
    roster: {
      label: "Ramsey County Inmates In-Custody (Booking Reports)",
      url: "https://www.ramseycountymn.gov/your-government/leadership/sheriffs-office/sheriffs-office-divisions/detention-services/adult-detention-center-jail/inmates-custody-booking-reports",
    },
    rosterNotes: [
      "Shows booking details including names, booking dates, and arresting charges.",
      "Formal charges appear only once they have been filed.",
      "Includes court information such as case numbers, court dates, and where hearings are held.",
      "Refreshes every 30 minutes. A record stays up while the person is in custody and for five days after release.",
      "The Adult Detention Center is a 500-bed pretrial facility.",
    ],
    bookingPhotos: {
      label: "Ramsey County booking photo requests",
      url: "https://www.ramseycountymn.gov/your-government/leadership/sheriffs-office/sheriffs-office-divisions/administration/booking-photos",
    },
    sources: [
      {
        label: "Ramsey County Sheriff's Office, Booking Reports",
        url: "https://www.ramseycountymn.gov/your-government/leadership/sheriffs-office/sheriffs-office-divisions/detention-services/adult-detention-center-jail/inmates-custody-booking-reports",
      },
      {
        label: "Ramsey County Sheriff's Office, Booking Photos",
        url: "https://www.ramseycountymn.gov/your-government/leadership/sheriffs-office/sheriffs-office-divisions/administration/booking-photos",
      },
    ],
  },
  Anoka: {
    verified: "2026-10-29",
    sheriffName: "Anoka County Sheriff's Office",
    jailName: "Anoka County Jail",
    jailAddress: "325 Jackson Street, Anoka, MN 55303",
    jailPhone: "763-324-5100",
    roster: { label: "Anoka County Inmate Locator", url: "https://www.anokacountymn.gov/727/Inmate-Locator" },
    rosterNotes: [
      "Searches people currently in custody and people recently released.",
    ],
    warrants: { label: "Anoka County Online Warrant Search", url: "https://www.anokacountymn.gov/3266/Online-Warrant-Search" },
    warrantNotes:
      "Lists public information on people with an active Anoka County warrant. Questions go to 763-422-7500. Warrants issued by other Minnesota jurisdictions have to be checked with the agency that issued them.",
    otherLinks: [{ label: "Anoka County Sheriff: Jail and Warrants", url: "https://www.anokacountymn.gov/443/Jail-Warrants" }],
    sources: [{ label: "Anoka County, Jail & Warrants", url: "https://www.anokacountymn.gov/443/Jail-Warrants" }],
  },
  Dakota: {
    verified: "2026-10-29",
    sheriffName: "Dakota County Sheriff's Office",
    jailName: "Dakota County Jail (Hastings)",
    jailPhone: "651-438-4800",
    sheriffPhone: "651-438-4700",
    roster: { label: "Dakota County Jail Inmate Search", url: "https://www.co.dakota.mn.us/LawJustice/Jail/Pages/Inmate-Search.aspx" },
    rosterNotes: [
      "The county's own inmate search covers people held at the Dakota County Jail in Hastings.",
      "The county also publishes jail visitation, mail and money, and bail posting instructions alongside the search.",
    ],
    sources: [{ label: "Dakota County, Jail", url: "https://www.co.dakota.mn.us/LawJustice/Jail/Bail" }],
  },
  Washington: {
    verified: "2026-10-29",
    sheriffName: "Washington County Sheriff's Office",
    jailName: "Washington County Jail (Law Enforcement Center)",
    jailAddress: "15015 62nd Street North, Stillwater, MN 55082",
    sheriffPhone: "651-430-7600",
    roster: {
      label: "Washington County Adult Inmate Roster (PDF)",
      url: "https://web1.washingtoncountymn.gov/ImageShare/Images/reports/inmateroster/InmateRosterReport.pdf",
    },
    rosterNotes: [
      "The county publishes the roster as a PDF snapshot rather than a searchable tool. Use your browser's find feature (Ctrl+F or Find in Page) to look for a name.",
      "Check the timestamp at the top of the PDF to see how current it is.",
    ],
    sources: [
      {
        label: "Washington County, Adult Inmate Roster Report",
        url: "https://web1.washingtoncountymn.gov/ImageShare/Images/reports/inmateroster/InmateRosterReport.pdf",
      },
    ],
  },
  Scott: {
    verified: "2026-10-31",
    sheriffName: "Scott County Sheriff's Office",
    jailName: "Scott County Jail",
    jailAddress: "301 Fuller Street South, Shakopee, MN 55379",
    jailPhone: "952-496-8314",
    sheriffPhone: "952-496-8300",
    roster: { label: "Scott County Jail In Custody list", url: "https://www2.co.scott.mn.us/jailroster/custody1.html" },
    rosterNotes: [
      "Lists people currently in custody at the Scott County Jail, with the time the list was generated shown at the top.",
      "Each entry shows booking number, intake date, and charges with statute numbers.",
      "Charge statuses include holds for other agencies, pending court, bail set, sentenced, released on recognizance, and dismissed, so read the status before assuming anything.",
      "People finishing a sentence are released between 4 and 5 a.m. daily.",
    ],
    otherLinks: [
      { label: "Scott County Sheriff: Jail and Warrants", url: "https://www.scottcountymn.gov/1512/Jail-Warrants" },
      { label: "Scott County jail data requests", url: "https://www.scottcountymn.gov/2004/Jail-Data-Request" },
    ],
    sources: [
      { label: "Scott County Sheriff's Office, Contact Us", url: "https://www.scottcountymn.gov/1519/Contact-Us" },
      { label: "Scott County Jail, In Custody", url: "https://www2.co.scott.mn.us/jailroster/custody1.html" },
      { label: "Scott County, Jail / Warrants", url: "https://www.scottcountymn.gov/1512/Jail-Warrants" },
    ],
  },
  Carver: {
    verified: "2026-10-31",
    sheriffName: "Carver County Sheriff's Office",
    jailName: "Carver County Jail",
    jailAddress: "606 E. 4th Street, Chaska, MN 55318",
    jailPhone: "952-361-1278",
    sheriffPhone: "952-361-1212",
    roster: { label: "Carver County Online Jail Roster", url: "https://gis.carvercountymn.gov/digital_docs/SHRF/jailroster/Home.html" },
    rosterNotes: [
      "Shows name, age, booking date and time, release date and time, custody status, bail, and next court date.",
      "Each record includes the arresting agency, charges, and charge status.",
      "The county also publishes a daily In Custody list by day of the week from its Daily Inmate Roster page.",
    ],
    warrantNotes:
      "Carver County's online active warrant list is listed as coming soon. For now, call dispatch at 952-361-1231 (24 hours) with warrant questions.",
    otherLinks: [
      { label: "Carver County Sheriff: Daily Inmate Roster", url: "https://www.carvercountymn.gov/departments/county-sheriff/jail-services/daily-inmate-roster" },
      { label: "Carver County Sheriff: Contact Directory", url: "https://www.carvercountymn.gov/departments/county-sheriff/general-information/contact-directory" },
    ],
    sources: [
      { label: "Carver County Custody Records", url: "https://gis.carvercountymn.gov/digital_docs/SHRF/jailroster/Home.html" },
      { label: "Carver County Sheriff's Office", url: "https://www.carvercountymn.gov/departments/county-sheriff" },
      { label: "Carver County Sheriff, Contact Directory", url: "https://www.carvercountymn.gov/departments/county-sheriff/general-information/contact-directory" },
      { label: "Carver County Sheriff, Active Warrants", url: "https://www.carvercountymn.gov/departments/county-sheriff/warrants/active-warrants" },
    ],
  },
  Wright: {
    verified: "2026-10-31",
    sheriffName: "Wright County Sheriff's Office",
    jailName: "Wright County Jail",
    jailAddress: "3800 Braddock Ave NE, Buffalo, MN 55313",
    sheriffPhone: "763-682-3900",
    roster: { label: "Wright County Jail Census (PDF)", url: "https://www.wrightcountymn.gov/DocumentCenter/View/13203/Jail-Census" },
    rosterNotes: [
      "The Jail Census lists every adult currently in custody. It's a PDF, so use Find in Page (Ctrl+F) to search for a name.",
      "A separate Jail Media Report lists adults recently booked into the jail.",
      "Both are updated daily Monday through Friday, except holidays. Weekend bookings show up the next business day.",
      "Wright County has an inmate voicemail line at 763-515-4160.",
    ],
    otherLinks: [
      { label: "Wright County Jail Media Report (recent bookings, PDF)", url: "https://www.wrightcountymn.gov/DocumentCenter/View/489/Jail-Media-Report" },
      { label: "Wright County Sheriff: Warrants and Transports", url: "https://www.wrightcountymn.gov/296/Warrants---Transports" },
    ],
    sources: [
      { label: "Wright County FAQ: Who's in jail?", url: "https://www.wrightcountymn.gov/FAQ.aspx?QID=100" },
      { label: "Wright County, Jail / Corrections", url: "https://www.wrightcountymn.gov/292/Jail-Corrections" },
      { label: "Wright County, Jail", url: "https://www.co.wright.mn.us/237/Jail" },
    ],
  },
  Sherburne: {
    verified: "2026-10-31",
    sheriffName: "Sherburne County Sheriff's Office",
    jailName: "Sherburne County Jail",
    jailAddress: "13880 Business Center Dr NW, Suite 100, Elk River, MN 55330",
    sheriffPhone: "763-765-3500",
    roster: { label: "Sherburne County Inmate Search", url: "https://inmatelocatorext.co.sherburne.mn.us/inmatelocator" },
    rosterNotes: [
      "Searches people currently in custody at the Sherburne County Jail. Once someone is released, they drop out of the search.",
      "For someone in immigration custody, the county points to the ICE Online Detainee Locator, which also covers people released from ICE custody in the past 60 days.",
      "The sheriff's office also publishes a weekly report that includes jail bookings, citations, and calls for service.",
    ],
    otherLinks: [
      { label: "ICE Online Detainee Locator", url: "https://locator.ice.gov" },
      { label: "Sherburne County FAQ: Is the offender in custody?", url: "https://www.co.sherburne.mn.us/FAQ.aspx?QID=133" },
    ],
    sources: [{ label: "Sherburne County, Inmate Search", url: "https://www.co.sherburne.mn.us/903/Inmate-Search" }],
  },
  Stearns: {
    verified: "2026-10-31",
    sheriffName: "Stearns County Sheriff's Office",
    jailName: "Stearns County Jail",
    roster: { label: "Stearns County Jail Roster: Current Inmates", url: "https://jailroster.stearnscountymn.gov/Current" },
    rosterNotes: [
      "Lists current inmates with booking photo, name, age, physical description, and charges, plus a details page for each booking.",
      "The database updates several times a day and shows the time of the last update. The sheriff's office notes it can differ from court records.",
      "The same site has Outstanding Warrants and Most Wanted lists.",
    ],
    warrants: { label: "Stearns County Outstanding Warrants", url: "https://jailroster.stearnscountymn.gov/Outstanding" },
    warrantNotes:
      "Covers criminal warrants venued in Stearns County District Court only. A listing means a warrant was on file when the list was published, not that the person is guilty. For warrant questions during business hours, call 320-259-3955.",
    otherLinks: [{ label: "Stearns County: Inmate and warrant searches", url: "https://www.stearnscountymn.gov/inmate-warrant-searches" }],
    sources: [
      { label: "Stearns County Jail Roster", url: "https://jailroster.stearnscountymn.gov/" },
      { label: "Stearns County Jail", url: "https://www.stearnscountymn.gov/stearns-county-jail" },
    ],
  },
  Olmsted: {
    verified: "2026-10-31",
    sheriffName: "Olmsted County Sheriff's Office",
    jailName: "Olmsted County Adult Detention Center",
    jailAddress: "101 4th Street SE, Rochester, MN 55904",
    jailPhone: "507-328-6790",
    roster: { label: "Olmsted County In Custody list", url: "https://webapp.co.olmsted.mn.us/PubIntWebApps/detaineelist" },
    rosterNotes: [
      "The county's daily-updated list of who is held at the Adult Detention Center.",
      "The ADC is a 202-bed direct supervision facility inside the Olmsted County Government Center.",
      "You can also call the ADC to ask whether someone is in custody.",
    ],
    warrants: {
      label: "Olmsted County active warrants search",
      url: "https://www.olmstedcounty.gov/residents/public-safety-law-enforcement/active-warrants/see-active-warrants",
    },
    otherLinks: [
      { label: "Olmsted County: Contact someone in jail", url: "https://www.olmstedcounty.gov/residents/public-safety-law-enforcement/contact-someone-jail" },
      { label: "Olmsted County Sheriff's Office activity logs", url: "https://www.olmstedcounty.gov/residents/public-safety-law-enforcement/sheriffs-office-activity-logs" },
    ],
    sources: [
      { label: "Olmsted County, Who is in custody", url: "https://www.olmstedcounty.gov/residents/public-safety-law-enforcement/custody" },
      {
        label: "Olmsted County, About the Adult Detention Center",
        url: "https://www.olmstedcounty.gov/government/county-departments/sheriffs-office/adult-detention-center-adc/about-adult-detention-center-adc",
      },
      { label: "Olmsted County, Active Warrants", url: "https://www.olmstedcounty.gov/residents/public-safety-law-enforcement/active-warrants" },
    ],
  },
  "St. Louis": {
    verified: "2026-10-31",
    sheriffName: "St. Louis County Sheriff's Office",
    jailName: "St. Louis County Jail",
    jailAddress: "4334 Haines Road, Duluth, MN 55811",
    jailPhone: "218-726-2345",
    sheriffPhone: "218-726-2340",
    roster: { label: "St. Louis County Jail Roster", url: "https://www.stlouiscountymn.gov/departments-a-z/sheriff/jail/jail-roster" },
    rosterNotes: [
      "The county posts two PDFs: current inmates, and people released in the past 48 hours. Use Find in Page (Ctrl+F) to search for a name.",
      "The rosters update every hour.",
      "People still in intake don't appear until they're assigned a booking number.",
      "Besides the 197-bed Duluth jail, the county runs 72-hour lockups in Hibbing and Virginia.",
    ],
    otherLinks: [
      { label: "Current inmates (PDF)", url: "https://www.stlouiscountymn.gov/Portals/0/rpts/SLCJ_Jail_Roster.PDF" },
      { label: "Released in the past 48 hours (PDF)", url: "https://www.stlouiscountymn.gov/Portals/0/rpts/SLCJ_Jail_Roster_Rel.pdf" },
      { label: "St. Louis County Sheriff: About the jail", url: "https://www.stlouiscountymn.gov/departments-a-z/sheriff/jail/about-jail" },
    ],
    sources: [
      { label: "St. Louis County Sheriff, Jail Roster", url: "https://www.stlouiscountymn.gov/departments-a-z/sheriff/jail/jail-roster" },
      { label: "St. Louis County Sheriff, About Jail", url: "https://www.stlouiscountymn.gov/departments-a-z/sheriff/jail/about-jail" },
      { label: "St. Louis County Sheriff, Our Locations", url: "https://www.stlouiscountymn.gov/departments-a-z/sheriff/about-the-sheriffs-office/our-locations" },
    ],
  },
};

export const slugify = (s: string) =>
  s.toLowerCase().replace(/\./g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-county";

export const counties: County[] = raw.map(([name, seat, district]) => ({
  slug: slugify(name),
  name,
  seat,
  district,
  detail: details[name],
}));

export const publishedCounties = counties.filter((c) => c.detail);

export const getCounty = (slug: string) => counties.find((c) => c.slug === slug);

export const districtCounties = (district: number) => counties.filter((c) => c.district === district);

const ordinals = ["", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];
export const districtName = (d: number) => `${ordinals[d]} Judicial District`;
