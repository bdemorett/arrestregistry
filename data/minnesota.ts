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
