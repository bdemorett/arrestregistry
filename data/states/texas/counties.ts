// Texas county dataset (first 25 counties by population).
// Every link and phone number was checked against the county's own official pages; see VERIFICATION_NOTES.md.
// Texas splits criminal court records between two elected clerks in most counties:
// the district clerk keeps felony cases and the county clerk keeps Class A and B misdemeanors.
// Some counties combine them or run one shared search portal, which `courtSearch` reflects.

import type { Link } from "@/data/states/minnesota/counties";
import tcjs from "./tcjs-2026-10.json";

export type TxCountyDetail = {
  verified: string;
  noindex?: boolean;
  sheriffName: string;
  jailName?: string;
  jailAddress?: string;
  jailPhone?: string;
  jailPhoneLabel?: string;
  infoPhone?: string;
  infoPhoneLabel?: string;
  roster?: Link; // official in-custody search; absent when the county posts none
  rosterNotes: string[];
  pastSearch?: string; // phrase after the roster name saying how it covers released people
  warrants?: Link;
  warrantNote?: string;
  courtSearch: Link[]; // official case search portals
  courtNote: string; // who keeps felony vs misdemeanor records here
  otherLinks?: Link[];
  sources: Link[];
};

export type TxCounty = { slug: string; name: string; seat: string; detail: TxCountyDetail };

export type TcjsRow = {
  name: string;
  noJail: boolean;
  total: number;
  totalYearAgo: number;
  capacity: number | null;
  pctCapacity: number | null;
  localTotal: number;
  pretrialPct: number | null;
  housedElsewhere: number | null;
};

// Only population-report fields are used. The rate fields in the JSON came from a file
// with an impossible date and are deliberately ignored.
export const tcjsDate = tcjs.popDate as string;
export const tcjsRows: Record<string, TcjsRow> = Object.fromEntries(
  Object.entries(tcjs.counties as unknown as Record<string, Partial<TcjsRow>>).filter(([, r]) => "total" in r && "capacity" in r),
) as Record<string, TcjsRow>;

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-county";

const V = "2026-11-13";

const d: Record<string, { seat: string; detail: TxCountyDetail }> = {
  Harris: {
    seat: "Houston",
    detail: {
      verified: "2026-11-12",
      sheriffName: "Harris County Sheriff's Office",
      jailPhone: "713-755-5300",
      jailPhoneLabel: "Inmate information",
      infoPhone: "713-221-6000",
      infoPhoneLabel: "Sheriff non-emergency",
      roster: { label: "HCSO Find Someone in Jail", url: "https://harriscountyso.org/JailInfo/Default" },
      rosterNotes: [
        "Search by name to see whether someone is in the Harris County jail.",
        "The same page also has the sheriff's Class A and B misdemeanor warrant search.",
      ],
      warrants: { label: "HCSO misdemeanor warrant search (same page)", url: "https://harriscountyso.org/JailInfo/Default" },
      warrantNote: "This covers Class A and B misdemeanor warrants held by the sheriff, not every warrant in the county.",
      courtSearch: [{ label: "Harris County District Clerk record search", url: "https://www.hcdistrictclerk.com/edocs/public/search.aspx" }],
      courtNote:
        "In Harris County the district clerk keeps both felony cases and Class A and B misdemeanors, so one search covers both. It doesn't include Class C tickets from justice of the peace or city courts.",
      sources: [
        { label: "Harris County Sheriff's Office: Jail Information", url: "https://harriscountyso.org/JailInfo/Default" },
        { label: "Harris County District Clerk: Criminal", url: "https://www.hcdistrictclerk.com/common/criminal/criminal.aspx" },
      ],
    },
  },
  Dallas: {
    seat: "Dallas",
    detail: {
      verified: "2026-11-12",
      sheriffName: "Dallas County Sheriff's Office",
      jailPhone: "214-761-9025",
      jailPhoneLabel: "Jail and inmate information",
      roster: { label: "Dallas County Inmate Look Up", url: "https://www.dallascounty.org/jaillookup/" },
      rosterNotes: ["Search by name for people in the Dallas County jail."],
      courtSearch: [
        { label: "Dallas County record search (district clerk)", url: "https://www.dallascounty.org/services/record-search/" },
        { label: "Dallas County Clerk (misdemeanors)", url: "https://www.dallascounty.org/government/county-clerk/" },
      ],
      courtNote:
        "Felony cases are kept by the Dallas County District Clerk (214-712-3088). Class A and B misdemeanors are kept by the County Clerk. Cases with an order of nondisclosure aren't public.",
      sources: [
        { label: "Dallas County: Inmate Look Up", url: "https://www.dallascounty.org/jaillookup/" },
        { label: "Dallas County: Record Search", url: "https://www.dallascounty.org/services/record-search/" },
      ],
    },
  },
  Tarrant: {
    seat: "Fort Worth",
    detail: {
      verified: "2026-11-12",
      sheriffName: "Tarrant County Sheriff's Office",
      infoPhone: "817-884-1111",
      infoPhoneLabel: "County main line",
      roster: { label: "Tarrant County Inmate Search", url: "https://inmatesearch.tarrantcounty.com/" },
      rosterNotes: ["Search by name for people in the Tarrant County jail."],
      pastSearch: "covers people in custody now; the sheriff also posts daily booked-in reports",
      courtSearch: [
        { label: "Tarrant County District Clerk case search (felonies)", url: "https://dcsa.tarrantcounty.com" },
        { label: "Tarrant County Clerk case search (misdemeanors)", url: "https://portal-txtarrant.tylertech.cloud/PublicAccess/default.aspx" },
      ],
      courtNote:
        "Felony cases are kept by the Tarrant County District Clerk (817-884-1342). Class A and B misdemeanors are kept by the County Clerk (817-884-1066).",
      otherLinks: [{ label: "Tarrant County Sheriff: daily booked-in reports", url: "https://www.tarrantcountytx.gov/en/sheriff/detention-bureau/daily-booked-in-reports.html" }],
      sources: [
        { label: "Tarrant County Inmate Search", url: "https://inmatesearch.tarrantcounty.com/" },
        { label: "Tarrant County Sheriff: Daily Booked-In Reports", url: "https://www.tarrantcountytx.gov/en/sheriff/detention-bureau/daily-booked-in-reports.html" },
      ],
    },
  },
  Bexar: {
    seat: "San Antonio",
    detail: {
      verified: "2026-11-12",
      sheriffName: "Bexar County Sheriff's Office",
      jailPhone: "210-335-6201",
      jailPhoneLabel: "Inmate information",
      roster: { label: "Bexar County Inmate & Bond Information", url: "https://www.bexar.org/738/Inmate-Bond-Information" },
      rosterNotes: [
        "The inmate information line gives charges, bond and warrant information when you have the person's name and date of birth.",
        "Bexar County also runs a Central Magistrate search, linked below.",
      ],
      courtSearch: [{ label: "Bexar County Justice Information Portal", url: "https://www.bexar.org/justiceinfoportal" }],
      courtNote: "Bexar County's Justice Information Portal searches both felony and misdemeanor cases.",
      otherLinks: [{ label: "Bexar County Central Magistrate search", url: "https://centralmagistrate.bexar.org/" }],
      sources: [
        { label: "Bexar County: Inmate & Bond Information", url: "https://www.bexar.org/738/Inmate-Bond-Information" },
        { label: "Bexar County: Justice Information Portal", url: "https://www.bexar.org/justiceinfoportal" },
      ],
    },
  },
  Travis: {
    seat: "Austin",
    detail: {
      verified: "2026-11-15",
      sheriffName: "Travis County Sheriff's Office",
      jailName: "Travis County Jail (Central Booking) and Travis County Correctional Complex",
      jailAddress: "500 W. 10th St., Austin; 3614 Bill Price Rd., Del Valle",
      jailPhone: "512-854-9033",
      jailPhoneLabel: "Inmate and charge information",
      roster: { label: "Travis County Sheriff's Office inmate search", url: "https://www.tcsheriff.org/" },
      rosterNotes: [
        "Use \"Inmate Search\" on the sheriff's home page. It searches people currently in custody by name.",
        "Travis County holds people at the downtown jail and at the Correctional Complex in Del Valle.",
      ],
      courtSearch: [
        { label: "Travis County Odyssey case search", url: "https://odysseyweb.traviscountytx.gov/Portal/" },
        { label: "Travis County criminal docket search (court dates)", url: "https://www.traviscountytx.gov/courts/criminal/docket-search" },
      ],
      courtNote:
        "Felony cases are kept by the Travis County District Clerk and Class A and B misdemeanors by the County Clerk. The free Odyssey portal covers criminal cases from 2008 on, and the docket search finds upcoming court dates by name.",
      sources: [
        { label: "Travis County Sheriff's Office: Contact an Inmate", url: "https://www.tcsheriff.org/inmate-jail-info/inmate-info/contact-an-inmate" },
        { label: "Travis County Attorney: helpful links (jail information line)", url: "https://www.traviscountytx.gov/county-attorney/family-violence/resources" },
        { label: "Travis County: Docket Search", url: "https://www.traviscountytx.gov/courts/criminal/docket-search" },
      ],
    },
  },
  Collin: {
    seat: "McKinney",
    detail: {
      verified: V,
      sheriffName: "Collin County Sheriff's Office",
      jailName: "Collin County Detention Facility",
      jailAddress: "4300 Community Ave., McKinney, TX 75071",
      jailPhone: "972-547-5200",
      infoPhone: "972-547-5100",
      infoPhoneLabel: "Sheriff main line",
      roster: { label: "Collin County inmate information", url: "https://www.collincountytx.gov/sheriff/inmate-information" },
      rosterNotes: ["Lists people currently in custody and people released in the past 24 hours."],
      pastSearch: "also lists people released in the past 24 hours",
      warrants: { label: "Collin County Judicial Online Search (includes active warrants)", url: "https://apps2.collincountytx.gov/JudicialRecords/" },
      courtSearch: [{ label: "Collin County Judicial Online Search", url: "https://apps2.collincountytx.gov/JudicialRecords/" }],
      courtNote:
        "Collin County's Judicial Online Search covers cases from traffic tickets to felonies, plus current inmates and active warrants, 24 hours a day. Older cases may need a search at the clerk's office.",
      sources: [
        { label: "Collin County Sheriff: Inmate Information", url: "https://www.collincountytx.gov/sheriff/inmate-information" },
        { label: "Collin County: Case Information", url: "https://www.collincountytx.gov/Services/case-information" },
      ],
    },
  },
  Denton: {
    seat: "Denton",
    detail: {
      verified: V,
      sheriffName: "Denton County Sheriff's Office",
      jailAddress: "127 N. Woodrow Lane, Denton, TX 76205",
      jailPhone: "940-349-1700",
      jailPhoneLabel: "Jail information",
      infoPhone: "940-349-1560",
      infoPhoneLabel: "Warrants",
      roster: { label: "Denton County Records (jail and bond records)", url: "https://justice1.dentoncounty.gov/PublicAccess/default.aspx" },
      rosterNotes: [
        "Choose Jail Records to search people booked into the Denton County jail. The same site has bond records, court cases and court calendars.",
        "Jail records: 940-349-1630. Prisoner information: 940-349-1600.",
      ],
      courtSearch: [{ label: "Denton County Records (cases and calendars)", url: "https://justice1.dentoncounty.gov/PublicAccess/default.aspx" }],
      courtNote: "Denton County's records site searches criminal cases and court calendars along with jail and bond records.",
      sources: [
        { label: "Denton County: Judicial & Law Enforcement Records Search", url: "https://www.dentoncounty.gov/920/Judicial-Law-Enforcement-Records-Search" },
        { label: "Denton County Sheriff: Helpful Phone Numbers", url: "https://www.dentoncounty.gov/715/Sheriffs-Office-Helpful-Phone-Numbers" },
      ],
    },
  },
  "Fort Bend": {
    seat: "Richmond",
    detail: {
      verified: V,
      sheriffName: "Fort Bend County Sheriff's Office",
      infoPhone: "281-342-3411",
      infoPhoneLabel: "Sheriff's Office",
      jailPhone: "281-341-4619",
      jailPhoneLabel: "Bonding office",
      roster: { label: "Fort Bend County Jail Public Information Inquiry", url: "https://jailinq.fortbendcountytx.gov/" },
      rosterNotes: ["Shows people in custody. Enter the full last name; the first name is optional."],
      courtSearch: [{ label: "Fort Bend County court records (Odyssey)", url: "https://tylerpaw.fortbendcountytx.gov/PublicAccess/" }],
      courtNote:
        "Felony cases are kept by the Fort Bend County District Clerk and Class A and B misdemeanors by the County Clerk (281-341-8685). The Odyssey portal searches both.",
      sources: [
        { label: "Fort Bend County: Sheriff's Office", url: "https://www.fortbendcountytx.gov/node/76" },
        { label: "Fort Bend County: E-Government services", url: "https://www.fortbendcountytx.gov/services/e-government" },
      ],
    },
  },
  Hidalgo: {
    seat: "Edinburg",
    detail: {
      verified: "2026-11-15",
      sheriffName: "Hidalgo County Sheriff's Office",
      jailAddress: "711 El Cibolo Rd., Edinburg, TX 78541",
      infoPhone: "956-383-8114",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Hidalgo County Records Inquiry (jail records)", url: "https://pa.co.hidalgo.tx.us/default.aspx" },
      rosterNotes: ["Choose Jail Records to search people booked into the Hidalgo County jail. Jail bond records are on the same site."],
      courtSearch: [{ label: "Hidalgo County Records Inquiry (criminal cases)", url: "https://pa.co.hidalgo.tx.us/default.aspx" }],
      courtNote:
        "Felony cases are kept by the Hidalgo County District Clerk (956-318-2200; a staff search without a case number costs $5) and Class A and B misdemeanors by the County Clerk. The records inquiry site searches both.",
      sources: [
        { label: "Hidalgo County: Detention", url: "https://www.hidalgocounty.us/3007/Detention" },
        { label: "Hidalgo County District Clerk: FAQs", url: "https://www.hidalgocounty.us/205/FAQs" },
        { label: "Hidalgo County Clerk: Criminal Department", url: "https://www.hidalgocounty.us/1342/Criminal-Department" },
      ],
    },
  },
  "El Paso": {
    seat: "El Paso",
    detail: {
      verified: V,
      sheriffName: "El Paso County Sheriff's Office",
      jailName: "Downtown Detention Facility and Jail Annex",
      jailAddress: "601 E. Overland Ave., El Paso; 12501 E. Montana Ave., El Paso",
      jailPhone: "915-546-2212",
      jailPhoneLabel: "Inmate information",
      infoPhone: "915-546-2213",
      infoPhoneLabel: "Bonding",
      roster: { label: "El Paso County Records Search", url: "https://www.epcounty.com/576/Records-Search" },
      rosterNotes: [
        "The county's Records Search page links the jail records search (current inmates only), jail bond records, criminal court cases and a warrant search.",
        "Release questions: 915-546-2235.",
      ],
      warrants: { label: "El Paso County warrant search (from Records Search)", url: "https://www.epcounty.com/576/Records-Search" },
      courtSearch: [{ label: "El Paso County Records Search (criminal cases)", url: "https://www.epcounty.com/576/Records-Search" }],
      courtNote: "Criminal case searches for both the County Clerk (misdemeanors) and District Clerk (felonies) are linked from the county's Records Search page.",
      sources: [
        { label: "El Paso County: Records Search", url: "https://www.epcounty.com/576/Records-Search" },
        { label: "El Paso County Sheriff's Office 2025 Annual Report", url: "https://epcounty.com/DocumentCenter/View/5330/2025-Annual-Report-pdf" },
      ],
    },
  },
  Williamson: {
    seat: "Georgetown",
    detail: {
      verified: V,
      sheriffName: "Williamson County Sheriff's Office",
      jailName: "Williamson County Jail",
      jailAddress: "306 W. 4th St., Georgetown, TX 78626",
      jailPhone: "512-943-1365",
      jailPhoneLabel: "Jail information",
      infoPhone: "512-943-1300",
      infoPhoneLabel: "Records (option 5)",
      roster: { label: "Williamson County Look Up (inmates and court records)", url: "https://www.wilcotx.gov/982/Look-Up" },
      rosterNotes: ["The county's Look Up page links the jail records inquiry and court records search."],
      courtSearch: [{ label: "Williamson County Look Up", url: "https://www.wilcotx.gov/982/Look-Up" }],
      courtNote: "Felony cases are kept by the Williamson County District Clerk and Class A and B misdemeanors by the County Clerk; both are searchable from the Look Up page.",
      sources: [
        { label: "Williamson County: Corrections Bureau", url: "https://www.wilcotx.gov/649/Corrections-Bureau" },
        { label: "Williamson County: Look Up", url: "https://www.wilcotx.gov/982/Look-Up" },
      ],
    },
  },
  Montgomery: {
    seat: "Conroe",
    detail: {
      verified: "2026-11-15",
      sheriffName: "Montgomery County Sheriff's Office",
      jailName: "Montgomery County Jail",
      jailAddress: "1 Criminal Justice Dr., Conroe, TX 77301",
      jailPhone: "936-760-5800",
      jailPhoneLabel: "Inmate and bonding information (option 1)",
      roster: { label: "Montgomery County Jail Roster", url: "https://jailroster.mctx.org/" },
      rosterNotes: ["Lists people currently in the Montgomery County jail."],
      courtSearch: [
        { label: "Montgomery County District Clerk records (felonies)", url: "https://odyssey.mctx.org/unsecured/" },
        { label: "Montgomery County Clerk court records (misdemeanors)", url: "https://odyssey.mctx.org/County/default.aspx" },
      ],
      courtNote:
        "Felony cases are kept by the Montgomery County District Clerk (936-539-7855) and Class A and B misdemeanors by the County Clerk (936-539-7880). The County Clerk doesn't run criminal history checks.",
      sources: [
        { label: "Montgomery County District Clerk: Case Search", url: "https://www.mctx.org/departments/departments_d_-_f/district_clerk/inquiry_index.php" },
        { label: "Montgomery County Clerk: Criminal", url: "https://www.mctx.org/courts/criminal/index.php" },
      ],
    },
  },
  Brazoria: {
    seat: "Angleton",
    detail: {
      verified: "2026-11-15",
      sheriffName: "Brazoria County Sheriff's Office",
      jailName: "Brazoria County Detention Center",
      jailAddress: "3602 County Road 45, Angleton, TX 77515",
      jailPhone: "979-864-2240",
      jailPhoneLabel: "Jail",
      infoPhone: "979-864-2200",
      infoPhoneLabel: "Sheriff non-emergency",
      roster: { label: "Brazoria County jail records search", url: "https://pubweb.brazoriacountytx.gov/PublicAccess/default.aspx" },
      rosterNotes: ["Choose Jail Records to search bookings by name. Add an asterisk (*) after a case number when searching by number."],
      courtSearch: [{ label: "Brazoria County court records inquiry", url: "https://pubweb.brazoriacountytx.gov/PublicAccess/default.aspx" }],
      courtNote:
        "Felony cases are kept by the Brazoria County District Clerk (a phone search at 979-864-1128 costs $5) and misdemeanors by the County Clerk. The records inquiry searches both for free by name.",
      sources: [
        { label: "Brazoria County Sheriff: Inmate Records Search", url: "https://www.brazoriacountytx.gov/departments/sheriff-s-office/detention-center/inmate-records-search" },
        { label: "Brazoria County District Clerk: Criminal Department", url: "https://www.brazoriacountytx.gov/departments/district-clerk/criminal-department" },
      ],
    },
  },
  Bell: {
    seat: "Belton",
    detail: {
      verified: V,
      sheriffName: "Bell County Sheriff's Department",
      jailName: "Bell County Jail (Central Jail and Loop Jail)",
      jailAddress: "111 W. Central Ave., Belton; 2405 S. Loop 121, Belton",
      jailPhone: "254-933-5402",
      jailPhoneLabel: "Jail main line",
      infoPhone: "254-933-5431",
      infoPhoneLabel: "Warrants",
      roster: { label: "Bell County Jail inmate list", url: "https://www.bellcountytx.com/county_government/sheriff/bell_county_jail.php" },
      rosterNotes: ["The inmate list is updated hourly.", "The jail holds people arrested by about 13 agencies in the county."],
      courtSearch: [{ label: "Bell County District Clerk: criminal FAQ and case search", url: "https://www.bellcountytx.com/district_clerk/criminal/criminal_faq.php" }],
      courtNote:
        "Felony cases are kept by the Bell County District Clerk; the online search needs the person's full name and date of birth. Cash bonds are paid at the District Clerk, 1201 Huey Rd., Belton, during business hours.",
      sources: [
        { label: "Bell County Sheriff: Bell County Jail", url: "https://www.bellcountytx.com/county_government/sheriff/bell_county_jail.php" },
        { label: "Bell County District Clerk: Criminal FAQ", url: "https://www.bellcountytx.com/district_clerk/criminal/criminal_faq.php" },
      ],
    },
  },
  Galveston: {
    seat: "Galveston",
    detail: {
      verified: V,
      sheriffName: "Galveston County Sheriff's Office",
      jailName: "Galveston County Jail",
      jailAddress: "5700 Avenue H, Galveston, TX 77551",
      jailPhone: "409-766-2315",
      infoPhone: "409-766-2300",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Galveston County inmate inquiry", url: "https://p2c.galvestoncountytx.gov/jailinmates.aspx" },
      rosterNotes: ["The sheriff's public portal also has a daily bulletin, recent arrests and a wanted list."],
      courtSearch: [{ label: "Galveston County Odyssey portal", url: "https://portalnav19.galvestoncountytx.gov/portal" }],
      courtNote: "Galveston County's old public access site closed at the end of 2025. Court records are now on the Odyssey portal.",
      sources: [{ label: "Galveston County Sheriff: Inmate Inquiry", url: "https://p2c.galvestoncountytx.gov/jailinmates.aspx" }],
    },
  },
  Nueces: {
    seat: "Corpus Christi",
    detail: {
      verified: V,
      sheriffName: "Nueces County Sheriff's Office",
      jailName: "Nueces County Jail",
      jailAddress: "901 Leopard St., Corpus Christi, TX 78401",
      jailPhone: "361-887-2300",
      jailPhoneLabel: "Jail information",
      infoPhone: "361-887-2239",
      infoPhoneLabel: "Warrants",
      rosterNotes: [
        "We couldn't find an official online jail roster for Nueces County. Call jail information, open 24 hours, with the person's full name and date of birth.",
        "The sheriff's office points people to a private vendor site to find inmate ID numbers for mail; we don't link it.",
      ],
      courtSearch: [{ label: "Nueces County case search portal (how to use it)", url: "https://www.nuecesco.com/courts/district-clerk/portal-smart-search-help" }],
      courtNote: "Search the county's case portal by name (Last, First) or case number. Felonies are kept by the District Clerk and misdemeanors by the County Clerk.",
      sources: [
        { label: "Nueces County Sheriff: Directory", url: "https://www.nuecesco.com/law-enforcement/sheriff/directory" },
        { label: "Nueces County Sheriff: Jail Operations", url: "https://www.nuecesco.com/law-enforcement/sheriff/jail-operations" },
      ],
    },
  },
  Lubbock: {
    seat: "Lubbock",
    detail: {
      verified: V,
      sheriffName: "Lubbock County Sheriff's Office",
      jailName: "Lubbock County Detention Center",
      jailAddress: "3502 N. Holly St., Lubbock, TX 79403",
      infoPhone: "806-775-1400",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Lubbock County Jail Roster", url: "https://publicrecords.lubbockcounty.gov/JailRoster/" },
      rosterNotes: [
        "Filters show people in custody, released today, released since yesterday, booked today and booked since yesterday.",
        "The roster can be downloaded as a spreadsheet.",
      ],
      pastSearch: "has filters for people released today and since yesterday",
      courtSearch: [{ label: "Lubbock County public records portal", url: "https://publicrecords.lubbockcounty.gov/Portal" }],
      courtNote:
        "Felony cases are kept by the Lubbock County District Clerk and misdemeanors by the County Clerk; the free portal (registration required) covers both. The County Clerk doesn't run name searches for you.",
      sources: [
        { label: "Lubbock County: Jail Roster", url: "https://www.lubbockcounty.gov/department/division.php?structureid=190" },
        { label: "Lubbock County: Online Access to Court Records", url: "https://www.lubbockcounty.gov/egov/apps/services/index.egov?action=i&fDD=10-41&id=72&path=details" },
      ],
    },
  },
  Cameron: {
    seat: "Brownsville",
    detail: {
      verified: V,
      sheriffName: "Cameron County Sheriff's Office",
      jailName: "Carrizales-Rucker Detention Center, Cameron County Jail and Ruben Torres Detention Center",
      jailAddress: "7100 Old Alice Rd., Olmito; 954 and 1145 E. Harrison St., Brownsville",
      jailPhone: "956-554-6701",
      jailPhoneLabel: "Jail division",
      roster: { label: "Cameron County inmate list", url: "https://cameroncountytx.gov/os/inmates/" },
      rosterNotes: ["Shows booking date, charges and bond for people in custody."],
      courtSearch: [
        { label: "Cameron County District Clerk case search (felonies)", url: "https://www.cameroncountytx.gov/cameron-county-district-clerk/" },
        { label: "Cameron County Clerk judicial case search (misdemeanors)", url: "https://www.cameroncountytx.gov/county-clerk/cameron-county-clerk-judicial-case-search/" },
      ],
      courtNote:
        "Felony cases are kept by the Cameron County District Clerk (956-544-0838; a search without a case number costs $5). Class A and B misdemeanors are kept by the County Clerk's criminal department (956-544-0848).",
      sources: [
        { label: "Cameron County: Inmates", url: "https://cameroncountytx.gov/os/inmates/" },
        { label: "Cameron County Clerk: Criminal Department", url: "https://www.cameroncountytx.gov/county-clerk/cameron-county-clerk-criminal-department/" },
      ],
    },
  },
  Webb: {
    seat: "Laredo",
    detail: {
      verified: V,
      sheriffName: "Webb County Sheriff's Office",
      jailName: "Webb County Jail",
      jailAddress: "1001 Washington St., Laredo, TX 78040",
      jailPhone: "956-523-4400",
      infoPhone: "956-523-4500",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Webb County Jail and Bond Record Search", url: "https://publicaccess.webbcountytx.gov/BondSearch/" },
      rosterNotes: ["The sheriff's Booking Jail Search separately lists everyone arrested in the last 48 hours."],
      pastSearch: "is paired with a Booking Jail Search that lists everyone arrested in the last 48 hours",
      courtSearch: [{ label: "Webb County court records (Odyssey)", url: "https://publicaccess.webbcountytx.gov/PublicAccess/default.aspx" }],
      courtNote: "Felony cases are kept by the Webb County District Clerk (956-523-4268) and misdemeanors by the County Clerk (956-523-4266).",
      otherLinks: [{ label: "Webb County Booking Jail Search (last 48 hours)", url: "https://www.webbcountytx.gov/Sheriff/BookingJailSearch/" }],
      sources: [
        { label: "Webb County: Sheriff", url: "https://www.webbcountytx.gov/278/Sheriff" },
        { label: "Webb County: District Clerk", url: "https://www.webbcountytx.gov/277/District-Clerk" },
      ],
    },
  },
  Hays: {
    seat: "San Marcos",
    detail: {
      verified: V,
      sheriffName: "Hays County Sheriff's Office",
      jailName: "Hays County Jail",
      jailAddress: "1307 Uhland Rd., San Marcos, TX 78666",
      infoPhone: "512-393-7800",
      infoPhoneLabel: "Sheriff's Office",
      jailPhone: "512-393-7807",
      jailPhoneLabel: "Jail bonding",
      roster: { label: "Hays County court and jail records", url: "https://www.hayscountytx.gov/482/Find" },
      rosterNotes: [
        "Use \"Court & Jail Records\" on the county's Find page. Once someone no longer shows on the inmate search, they've been released.",
        "IVSS (866-268-8959) gives custody information and can call you before someone is released.",
      ],
      courtSearch: [{ label: "Hays County court and jail records", url: "https://www.hayscountytx.gov/482/Find" }],
      courtNote: "Class A and B misdemeanors are kept by the County Clerk's Courts Division and felonies by the District Clerk. The jail doesn't track court dates.",
      otherLinks: [{ label: "Hays County Jail Population Dashboard", url: "https://www.hayscountytx.gov/278/Jail-Population-Dashboard" }],
      sources: [
        { label: "Hays County: Jail Questions & Answers", url: "https://www.hayscountytx.gov/279/Jail-Questions-Answers" },
        { label: "Hays County: Courts Division", url: "https://www.hayscountytx.gov/199/Courts-Division" },
      ],
    },
  },
  McLennan: {
    seat: "Waco",
    detail: {
      verified: V,
      sheriffName: "McLennan County Sheriff's Office",
      jailPhone: "254-757-2555",
      infoPhone: "254-757-5000",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "McLennan County inmate list (PDF)", url: "http://apps.co.mclennan.tx.us/apps/injail.pdf" },
      rosterNotes: ["A PDF list of everyone in the jail, with charges and bond. It's long, so use your browser's find to search a name."],
      courtSearch: [
        { label: "McLennan County District Clerk: record searches", url: "https://www.mclennan.gov/399/Record-Searches-Copy-Requests" },
        { label: "McLennan County Clerk: misdemeanor cases", url: "https://www.mclennan.gov/171/CriminalMisdemeanor-Court-Cases" },
      ],
      courtNote:
        "Felony cases are kept by the McLennan County District Clerk (254-757-5054; $5 name search, free case summary with a case number). Misdemeanors are kept by the County Clerk, whose online search needs registration.",
      sources: [
        { label: "McLennan County: Sheriff's Office", url: "https://www.mclennan.gov/185/Sheriffs-Office" },
        { label: "McLennan County: Criminal/Misdemeanor Court Cases", url: "https://www.mclennan.gov/171/CriminalMisdemeanor-Court-Cases" },
      ],
    },
  },
  Ellis: {
    seat: "Waxahachie",
    detail: {
      verified: V,
      noindex: true,
      sheriffName: "Ellis County Sheriff's Office",
      jailName: "Wayne McCollum Detention Center",
      jailAddress: "300 S. Jackson St., Waxahachie, TX 75165",
      infoPhone: "972-825-4901",
      infoPhoneLabel: "Sheriff's Office",
      rosterNotes: ["We couldn't find an official online jail roster for Ellis County. Call the sheriff's office with the person's full name and date of birth."],
      courtSearch: [{ label: "Ellis County Online Records Search", url: "https://www.elliscountytx.gov/956/New-Online-Records-Search-Information" }],
      courtNote:
        "Felony cases are kept by the Ellis County District Clerk (972-825-5091) and Class A and B misdemeanors by the County Clerk (972-825-5070). The online search needs an account.",
      sources: [
        { label: "Ellis County: Sheriff", url: "https://www.elliscountytx.gov/Directory.aspx?did=31" },
        { label: "Ellis County: Online Records Search", url: "https://www.elliscountytx.gov/956/New-Online-Records-Search-Information" },
      ],
    },
  },
  Smith: {
    seat: "Tyler",
    detail: {
      verified: V,
      sheriffName: "Smith County Sheriff's Office",
      jailAddress: "227 N. Spring Ave., Tyler, TX 75702 (Sheriff's Office)",
      infoPhone: "903-590-2661",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Smith County Judicial (jail records)", url: "https://judicial.smith-county.com/PublicAccess/" },
      rosterNotes: ["Choose Jail Records to search bookings. The same site has jail bond records and criminal court records."],
      courtSearch: [{ label: "Smith County Judicial (court records)", url: "https://judicial.smith-county.com/PublicAccess/" }],
      courtNote: "Felony cases are kept by the Smith County District Clerk (903-590-1660) and misdemeanors by the County Clerk. One site searches both.",
      otherLinks: [{ label: "Smith County Pre-Trial Release (personal bonds)", url: "https://www.smith-county.com/250/Bond-Release" }],
      sources: [
        { label: "Smith County: District Clerk", url: "https://www.smith-county.com/269/District-Clerk" },
        { label: "Smith County: Sheriff", url: "https://www.smith-county.com/266/Sheriff" },
      ],
    },
  },
  Johnson: {
    seat: "Cleburne",
    detail: {
      verified: V,
      sheriffName: "Johnson County Sheriff's Office",
      jailName: "Johnson County Jail",
      jailAddress: "1800 Ridgemar Dr., Cleburne, TX 76031",
      jailPhone: "817-556-6000",
      infoPhone: "817-556-6058",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Johnson County inmate listing", url: "https://jcportal.johnsoncountytx.org/jail/" },
      rosterNotes: ["Enter the full last name and at least the first letter of the first name."],
      courtSearch: [{ label: "Johnson County District Clerk criminal records", url: "https://pa.johnsoncountytx.org/PublicAccess/default.aspx" }],
      courtNote: "Felony cases are kept by the Johnson County District Clerk and misdemeanors by the County Clerk.",
      sources: [
        { label: "Johnson County: Sheriff's Office", url: "https://www.johnsoncountytx.org/Home/Components/FacilityDirectory/FacilityDirectory/237/" },
        { label: "Johnson County DA: Victim Assistance (records links)", url: "https://www.johnsoncountytx.org/government/district-attorney/victim-assistance" },
      ],
    },
  },
  Jefferson: {
    seat: "Beaumont",
    detail: {
      verified: "2026-11-15",
      sheriffName: "Jefferson County Sheriff's Office",
      jailName: "Jefferson County Correctional Facility",
      jailPhone: "409-726-2500",
      infoPhone: "409-835-8411",
      infoPhoneLabel: "Sheriff's Office",
      roster: { label: "Jefferson County Inmate Search", url: "https://co.jefferson.tx.us/InmateSearch/" },
      rosterNotes: ["New bookings show up within about an hour. If you can't find someone, try the last name only."],
      courtSearch: [{ label: "Jefferson County District Clerk criminal index", url: "https://jeffersoncountytx.gov/dclerk/criminal_index/main.htm" }],
      courtNote:
        "Felony cases are kept by the Jefferson County District Clerk (409-835-8580). Its online index lists cases filed 2006 to 2022 by name; full records are on public terminals at the clerk's office. Misdemeanors are kept by the County Clerk (409-835-8475, option 4).",
      sources: [
        { label: "Jefferson County: Inmate Search", url: "https://co.jefferson.tx.us/InmateSearch/" },
        { label: "Jefferson County District Clerk: Criminal Index", url: "https://jeffersoncountytx.gov/dclerk/criminal_index/main.htm" },
      ],
    },
  },
};

export const txPublished: TxCounty[] = Object.entries(d)
  .map(([name, v]) => ({ slug: slugify(name), name, seat: v.seat, detail: v.detail }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const getTxCounty = (slug: string) => txPublished.find((c) => c.slug === slug);
