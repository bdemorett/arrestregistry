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
  "Blue Earth": {
    verified: "2026-10-31",
    sheriffName: "Blue Earth County Sheriff's Office",
    jailName: "Blue Earth County Jail (Justice Center)",
    jailAddress: "401 Carver Road, Mankato, MN 56001",
    roster: { label: "Blue Earth County Jail Roster Report", url: "https://jailroster.blueearthcountymn.gov/" },
    rosterNotes: [
      "Lists people currently booked into the jail, with booking date and time, arresting agency, case number, each charge, charge status, and projected release date.",
      "The roster shows when it was last updated.",
      "People still in intake may not show up until about 24 hours after they get a booking number.",
    ],
    otherLinks: [{ label: "Blue Earth County: Jail custody roster info", url: "https://www.blueearthcountymn.gov/1302/Jail-Custody-Roster" }],
    sources: [
      { label: "Blue Earth County, Jail", url: "https://www.blueearthcountymn.gov/321/Jail" },
      { label: "Blue Earth County, Jail Custody Roster", url: "https://www.blueearthcountymn.gov/1302/Jail-Custody-Roster" },
      { label: "Blue Earth County Jail Roster Report", url: "https://jailroster.blueearthcountymn.gov/" },
    ],
  },
  Rice: {
    verified: "2026-10-31",
    sheriffName: "Rice County Sheriff's Office",
    jailName: "Rice County Jail",
    jailPhone: "507-332-6021",
    rosterNotes: [
      "Rice County doesn't post a searchable in-custody roster. Call the jail at 507-332-6021 to ask whether someone is being held.",
      "The Rice County Jail is separate from the state prison in Faribault. For someone in state prison, use the Minnesota DOC offender locator instead.",
    ],
    otherLinks: [{ label: "Minnesota DOC offender locator", url: "https://coms.doc.state.mn.us/publicviewer" }],
    sources: [
      { label: "Rice County FAQ: Jail", url: "https://www.ricecountymn.gov/m/faq?cat=29" },
      { label: "Rice County Sheriff's Office", url: "https://www.ricecountymn.gov/208/Sheriffs-Office" },
    ],
  },
  Clay: {
    verified: "2026-10-31",
    sheriffName: "Clay County Sheriff's Office",
    jailName: "Clay County Correctional Facility",
    jailAddress: "800 9th St. N., Moorhead, MN 56560",
    jailPhone: "218-299-5163",
    roster: { label: "Clay County Inmate Roster", url: "https://claycountymn.gov/1454/Inmate-Roster" },
    rosterNotes: [
      "Lists people booked into custody, grouped by last name, with age, booking date and time, arresting agency, and charges.",
      "The county also posts a daily lockup list as a PDF.",
      "The lobby is at Door 1 and open 8 a.m. to 4:30 p.m.",
    ],
    otherLinks: [
      { label: "Clay County lockup list (PDF)", url: "https://files.claycountymn.gov/LockUpList/lockup.pdf" },
      { label: "Clay County: How to post bail", url: "https://claycountymn.gov/1493/How-to-Post-Bail-at-the-Correctional-Fac" },
      { label: "Clay County: Court schedule", url: "https://claycountymn.gov/1494/Court-Schedule" },
    ],
    sources: [{ label: "Clay County Correctional Facility", url: "https://claycountymn.gov/223/Correctional-Facility" }],
  },
  "Crow Wing": {
    verified: "2026-10-31",
    sheriffName: "Crow Wing County Sheriff's Office",
    jailName: "Crow Wing County Jail",
    jailAddress: "313 Laurel St, Brainerd, MN 56401",
    jailPhone: "218-822-7050",
    roster: { label: "Crow Wing County In Custody List", url: "https://www.crowwing.gov/1532/In-Custody-List" },
    rosterNotes: [
      "The sheriff's office In Custody report lists current inmates at the Crow Wing County Jail.",
      "The jail lobby is open Monday through Friday, 8 a.m. to 4:30 p.m.",
    ],
    otherLinks: [{ label: "Crow Wing County LENS case search", url: "https://lens.crowwing.gov/" }],
    sources: [
      { label: "Crow Wing County, Jail", url: "https://www.crowwing.gov/396/Jail" },
      { label: "Crow Wing County Sheriff FAQ", url: "https://www.crowwing.gov/FAQ.aspx?QID=297" },
    ],
  },
  Goodhue: {
    verified: "2026-10-31",
    sheriffName: "Goodhue County Sheriff's Office",
    jailName: "Goodhue County Adult Detention Center",
    jailAddress: "430 W. 6th St., Red Wing, MN 55066",
    sheriffPhone: "651-267-2804",
    roster: { label: "Goodhue County Jail Roster", url: "https://goodhuecountymn.gov/sheriff/adult_detention_center/jail_roster/" },
    rosterNotes: [
      "The daily roster for the Adult Detention Center, with booking photos and booking details. A PDF version is also posted.",
      "The county notes the roster shouldn't be relied on for legal action, and that identity can only be confirmed by fingerprints.",
      "The non-emergency line is 651-385-3155.",
    ],
    warrants: { label: "Goodhue County warrant list", url: "https://goodhuecountymn.gov/sheriff/adult_detention_center/warrant_list/" },
    otherLinks: [{ label: "Goodhue County jail roster (PDF)", url: "https://goodhuecountymn.gov/files/sheriff/jail_roster.pdf" }],
    sources: [
      { label: "Goodhue County, Jail Roster", url: "https://goodhuecountymn.gov/sheriff/adult_detention_center/jail_roster/" },
      { label: "Goodhue County, Adult Detention Center", url: "https://goodhuecountymn.gov/sheriff/adult_detention_center/" },
    ],
  },
  Beltrami: {
    verified: "2026-10-31",
    sheriffName: "Beltrami County Sheriff's Office",
    jailName: "Beltrami County Jail (Adult Corrections Center)",
    jailAddress: "613 Minnesota Ave NW, Bemidji, MN 56601",
    jailPhone: "218-333-4189",
    sheriffPhone: "218-333-9111",
    roster: {
      label: "Beltrami County Adult Corrections Center (current inmate list)",
      url: "https://www.beltramicountymn.gov/services/public-safety-law-enforcement/adult-corrections-center/",
    },
    rosterNotes: [
      "The sheriff's office points to its Adult Corrections Center page for the current inmate list.",
      "The jail is in the Law Enforcement Center in Bemidji. Call 218-333-4189 to confirm whether someone is in custody.",
    ],
    warrants: { label: "Beltrami County active warrant listing", url: "https://beltramitax.co.beltrami.mn.us/letg/warrant2.html" },
    sources: [
      { label: "Beltrami County Sheriff's Office", url: "https://www.beltramicountymn.gov/departments/sheriffs-office/" },
      { label: "Beltrami County Law Enforcement Center", url: "https://www.beltramicountymn.gov/our-government/buildings-and-locations/law-enforcement-center/" },
    ],
  },
  Kandiyohi: {
    verified: "2026-10-31",
    sheriffName: "Kandiyohi County Sheriff's Office",
    jailName: "Kandiyohi County Jail",
    jailAddress: "2201 23rd St NE, Willmar, MN 56201",
    jailPhone: "320-214-6700",
    roster: { label: "Kandiyohi County In Custody List", url: "https://www2.kcmn.us/LETG/custody/custody.html" },
    rosterNotes: [
      "The sheriff's office In Custody list shows who is currently held at the jail.",
      "For inmate information by phone, call 320-214-6700, ext. 3600.",
    ],
    otherLinks: [{ label: "Kandiyohi County Sheriff's reports", url: "https://www.kcmn.us/departments/sheriff/reports/index.php" }],
    sources: [{ label: "Kandiyohi County Sheriff, Jail", url: "https://www.kcmn.us/departments/sheriff/departments/jail.php" }],
  },
  Isanti: {
    verified: "2026-10-31",
    sheriffName: "Isanti County Sheriff's Office",
    jailName: "Isanti County Jail",
    jailPhone: "763-691-2397",
    sheriffPhone: "763-691-2445",
    rosterNotes: [
      "Isanti County's online in-custody page still showed a January 2025 date when we checked, so call the jail's master control line at 763-691-2397 to confirm whether someone is being held.",
      "The jail holds up to 112 people after a 2005 expansion.",
      "For records requests, call 763-691-2480.",
    ],
    sources: [
      { label: "Isanti County, Contact Us", url: "https://www.isanticountymn.gov/582/Contact-Us" },
      { label: "Isanti County, Jail", url: "https://www.isanticountymn.gov/420/Jail" },
    ],
  },
  Chisago: {
    verified: "2026-10-31",
    sheriffName: "Chisago County Sheriff's Office",
    jailName: "Chisago County Jail",
    jailPhone: "651-257-2931",
    roster: { label: "Chisago County Inmate Locator", url: "https://inmatelocator.chisagocountymn.gov/inmatelocator/" },
    rosterNotes: ["The county's inmate locator searches people currently held in the Chisago County Jail."],
    sources: [
      { label: "Chisago County, Corrections / Jail Division", url: "https://www.chisagocountymn.gov/231/Corrections-Jail-Division" },
      { label: "Chisago County Inmate Locator", url: "https://inmatelocator.chisagocountymn.gov/inmatelocator/" },
    ],
  },
  "Otter Tail": {
    verified: "2026-10-31",
    sheriffName: "Otter Tail County Sheriff's Office",
    jailName: "Otter Tail County Jail",
    roster: { label: "Otter Tail County Jail In Custody List", url: "https://ottertailcountymn.us/jail-in-custody-list/" },
    rosterNotes: ["The county posts an In Custody list showing who is currently held at the Otter Tail County Jail in Fergus Falls."],
    warrants: { label: "Otter Tail County Sheriff warrant list", url: "http://www.co.otter-tail.mn.us/990/Warrant-List" },
    otherLinks: [{ label: "Otter Tail County: Jail FAQs", url: "https://ottertailcountymn.us/content-page/jail-faqs/" }],
    sources: [
      { label: "Otter Tail County, Jail In Custody List", url: "https://ottertailcountymn.us/jail-in-custody-list/" },
      { label: "Otter Tail County, Warrant List", url: "http://www.co.otter-tail.mn.us/990/Warrant-List" },
    ],
  },
  Winona: {
    verified: "2026-10-31",
    sheriffName: "Winona County Sheriff's Office",
    jailName: "Winona County Detention Center",
    roster: { label: "Winona County Sheriff's Office Inmate Roster", url: "https://www.co.winona.mn.us/315/Inmate-Roster" },
    rosterNotes: [
      "The sheriff's office posts its inmate roster as a multi-page document. Use Find in Page (Ctrl+F) to search for a name.",
    ],
    otherLinks: [{ label: "Winona County Detention Center", url: "http://www.co.winona.mn.us/314/Jail" }],
    sources: [{ label: "Winona County, Inmate Roster", url: "https://www.co.winona.mn.us/315/Inmate-Roster" }],
  },
  Mower: {
    verified: "2026-10-31",
    sheriffName: "Mower County Sheriff's Office",
    jailName: "Mower County Jail",
    roster: { label: "Mower County Jail Inmates in Custody (PDF)", url: "https://mower-sftp.co.mower.mn.us/WSFTPSVR/mcounty/jail/JailRoster.rpt.pdf" },
    rosterNotes: [
      "The county publishes a PDF of inmates in custody with an \"Updated\" timestamp at the top. Use Find in Page (Ctrl+F) to search for a name.",
    ],
    otherLinks: [{ label: "Mower County: County Jail", url: "https://www.co.mower.mn.us/198/County-Jail" }],
    sources: [
      { label: "Mower County Jail Inmates in Custody", url: "https://mower-sftp.co.mower.mn.us/WSFTPSVR/mcounty/jail/JailRoster.rpt.pdf" },
      { label: "Mower County, County Jail", url: "https://www.co.mower.mn.us/198/County-Jail" },
    ],
  },
  Itasca: {
    verified: "2026-10-31",
    sheriffName: "Itasca County Sheriff's Office",
    jailName: "Itasca County Jail",
    roster: { label: "Itasca County Sheriff inmate search", url: "https://www.sheriff.itascacountymn.gov/inmateSearch" },
    rosterNotes: ["The sheriff's office inmate search lists people held at the Itasca County Jail in Grand Rapids, with a detail page for each booking."],
    otherLinks: [{ label: "Itasca County Sheriff: Contact an inmate", url: "https://www.sheriff.itascacountymn.gov/inmatevisitation" }],
    sources: [{ label: "Itasca County Sheriff's Office, Inmate Search", url: "https://www.sheriff.itascacountymn.gov/inmateSearch" }],
  },
  Douglas: {
    verified: "2026-10-31",
    sheriffName: "Douglas County Sheriff's Office",
    jailName: "Douglas County Jail",
    jailAddress: "509 3rd Avenue W, Alexandria, MN 56308",
    jailPhone: "320-762-2139",
    sheriffPhone: "320-762-8151",
    roster: { label: "Douglas County Inmate Roster", url: "https://www.douglascountymn.gov/inmate-roster" },
    rosterNotes: [
      "Lists people booked into the jail with booking date and time, charges, arresting agency, and status (for example bail set, released on recognizance, sentenced).",
      "You can browse A to Z or search by keyword.",
    ],
    warrants: { label: "Douglas County outstanding warrants", url: "https://www.douglascountymn.gov/outstanding-warrants" },
    otherLinks: [{ label: "Douglas County: Arrest warrants and turning yourself in", url: "https://www.douglascountymn.gov/arrest-warrants-turning-self-in" }],
    sources: [
      { label: "Douglas County Sheriff, Contact Us", url: "https://www.douglascountymn.gov/contact-us-sheriff" },
      { label: "Douglas County, Inmate Roster", url: "https://www.douglascountymn.gov/inmate-roster" },
    ],
  },
  Benton: {
    verified: "2026-10-31",
    sheriffName: "Benton County Sheriff's Office",
    jailName: "Benton County Jail",
    jailPhone: "320-968-8180",
    roster: { label: "Benton County current inmate list", url: "https://correctionsrecordssearch.com/bentoncountymn" },
    rosterNotes: [
      "The sheriff's Jail Division links to this current inmate list.",
      "To leave a message for an inmate, call 320-818-0338. Visits are scheduled through jail administration on weekdays, 8 a.m. to 4 p.m.",
    ],
    sources: [{ label: "Benton County, Jail Division", url: "https://www.bentoncountymn.gov/220/Jail-Division" }],
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
