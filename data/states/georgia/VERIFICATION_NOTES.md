# Georgia county verification notes (checked 2026-11-15)

Method: WebSearch restricted to official domains plus WebFetch of official pages. Several county sites refused automated fetching (robots or client errors); those facts are marked. The session's shared web-search budget ran out partway through the county list, so 9 counties (Bibb, Douglas, Carroll, Clarke, Newton, Fayette, Lowndes, Bartow, Walton) are not yet verified and are fully TODO below. Nothing in this file was filled in from memory.

## Statewide

Statewide: Criminal history (GCIC/GBI): GCIC does NOT do name-based criminal history checks for the public; it says to get your own Georgia record from most sheriff's offices or police departments, and fingerprint checks go through GAPS (https://ga.state.identogo.com/ata); GCIC phone 404-244-2639; mailing P.O. Box 370808, Decatur, GA 30037; fee schedule PDF https://gbi.georgia.gov/document/document/gcic-fees/download (amounts not checked); source https://gbi.georgia.gov/services/obtaining-criminal-history-record-information-frequently-asked-questions.
Georgia Felon Search (run by the Georgia Technology Authority (GTA), searching GCIC data): returns only felony convictions reported to GCIC; requester needs full name, race, sex and DOB (GBI FAQ); "$15 for each search", charged even when no record is found; info page https://georgia.gov/georgia-felon-search; FAQ https://georgia.gov/faqs-georgia-felon-search; search application https://services.georgia.gov/gta/gafs/ (shown in official search results as "Georgia Felony Search"; page itself not fetched). Note: the official name is "Georgia Felon Search" and GTA runs it. GBI does not.
Court records: Felony cases are filed in Superior Court and the elected Clerk of Superior Court keeps them. Misdemeanors are usually in State Court where a county has one (DeKalb's county page: State Court "handles misdemeanor criminal cases"), otherwise Superior Court. Magistrate Court issues arrest warrants and holds first appearances (DeKalb: Magistrate "handles criminal arrest warrants"). In many counties one clerk serves Superior and State Court; source https://www.dekalbcountyga.gov/dekalb-county-judicial-system. There is no single statewide criminal case search. Many clerks use Tyler's re:SearchGA (https://researchga.tylerhost.net/), and Forsyth's clerk says "Participants must register in order to search cases" and that it offers paid document purchase (https://www.forsythclerk.com/HowDoI/CaseSearch.aspx). TODO: confirm re:SearchGA per-page document price on an official page.
GSCCCA: no public criminal search found. The GSCCCA site's search menu lists only UCC Search, Lien Index, Real Estate Index and Notary Search (https://www.gsccca.org/search-results/page/6?indexCatalogue=site-search&searchQuery=criminal&wordsMode=0). It does have a clerk directory per county (e.g. https://www.gsccca.org/clerks/clerk-results?cid=115).
First appearance: arrestees must go before a judge "as soon as possible, but in no case later than 48 hours after a warrantless arrest or 72 hours after an arrest on a warrant", citing O.C.G.A. 17-4-26 (Judicial Council of Georgia misdemeanor bail bench card, July 2024, https://jcaoc.georgiacourts.gov/wp-content/uploads/2024/09/Misdemeanor-Bail-Practices-Bench-Card-July-2024.pdf). The 17-4-62 cite for the 48-hour warrantless rule is UNVERIFIED: the bench card does not cite it. 2021 HB 479 refers to hearings "pursuant to Code Section 17-4-26 or 17-4-62" (https://gov.georgia.gov/document/2021-signed-legislation/hb-479/download), but I did not get the text of 17-4-62 itself.
Record restriction (O.C.G.A. 35-3-37): restriction limits access to criminal justice agencies and needs prosecutor approval. For arrests on or after July 1, 2013 there is no application; you contact the prosecutor. For arrests before July 1, 2013 you apply at the arresting agency, which may charge a fee "not to exceed $50.00" (https://georgiacourts.gov/a2j/self-help-resources/record-restrictions-expungement/; https://gbi.georgia.gov/georgia-criminal-history-record-restrictions). Guilty dispositions are not eligible for arrest restriction (GBI FAQ above).
CORRECTION: The brief said the 2021 expansion was "SB 105". That is wrong. The 2021 Senate Research Office report shows SB 105 (Act 151, signed May 3, 2021) is a probation-termination bill (https://www.legis.ga.gov/api/document/docs/default-source/senate-research-office-document-library/2021/2021-sro-final-report-of-legislation-passed-post-vetoes_09202021.pdf?sfvrsn=8b9ea71_2). The expansion was SB 288 (Act 582, 2020 session), which "provides for the expansion of the ability for certain individuals to request record restriction" for "certain misdemeanor and conditional discharges", effective January 1, 2021 (https://www.legis.ga.gov/api/document/docs/default-source/general-statutes/summary-of-2020-general-statutes.pdf?sfvrsn=3dc9689d_2). TODO: verify SB 288's specific limits (number of misdemeanors, waiting period, excluded offenses) from the statute text; the official summaries I read don't give them. Official pro se restriction petition form: https://law.georgia.gov/document/document/pro-se-restriction-form-2021-pdf/download (not opened).
Mugshot law: under O.C.G.A. 10-1-393.5 a site must remove a booking photo "within thirty (30) days" of a written request sent by "certified mail, return receipt requested or statutory overnight delivery". The request must include name, DOB, arrest date and arresting agency, and removal is free; charging for it violates the Fair Business Practices Act; source Georgia Dept of Law Consumer Protection Division https://consumer.georgia.gov/consumer-topics/mugshot-websites.
GDC offender search: https://services.gdc.ga.gov/GDC/OffenderQuery/jsp/OffQryForm.jsp (linked from https://gdc.georgia.gov/offender-info/find-offender); the page says it covers offenders "currently in a GDC facility".
VINE (state victim notification service): Fulton site https://www.vinelink.com/classic/#/home/site/11059 and DeKalb site https://www.vinelink.com/vinelink/siteInfoAction.do?siteId=11043 (both linked from the sheriffs' official pages); toll-free 877-994-8463 (Fulton jail page).

County list source: Georgia Department of Community Affairs, "2025 Georgia County Populations" (https://dca.georgia.gov/document/document/georgia-county-populations-2025/download). Its Whitfield figure (106,212) matches Census QuickFacts V2025 "Population estimates, July 1, 2025" (https://www.census.gov/quickfacts/fact/table/whitfieldcountygeorgia/PST045224), so the list appears to use Census Vintage 2025 estimates. Top 25: Fulton 1,098,791; Gwinnett 1,018,099; Cobb 793,345; DeKalb 774,394; Chatham 311,855; Cherokee 299,273; Clayton 297,471; Forsyth 282,805; Henry 264,922; Hall 226,568; Richmond 206,559; Muscogee 202,171; Paulding 190,996; Houston 178,214; Columbia 169,189; Coweta 160,240; Bibb 157,556; Douglas 154,293; Carroll 131,036; Clarke 129,921; Newton 125,583; Fayette 125,156; Lowndes 122,867; Bartow 120,800; Walton 112,696. (Next are Whitfield 106,212 and Floyd 101,378.)

## Counties

Fulton: Sheriff Patrick "Pat" Labat; sheriff main/customer service 404-612-4000; office 141 Pryor St SW, Atlanta 30303; Fulton County Jail, 901 Rice St NW, Atlanta 30318, jail 404-613-2000; also Marietta Annex (781 Marietta Blvd, 404-613-2149) and South Annex (6500 Watson St, Union City 30291, 404-613-6637); charges/bond info 404-613-2002 or 404-662-3516; Main Jail front desk open 24/7; inmate search: the county has an "Inmate Search" page at https://fultoncountyga.gov/services/public-safety/jail/inmate-search (from search snippet; page refused fetch, so the actual tool URL and what it shows are TODO). The jail page mentions an "Arrest Inquiry" link without giving its URL. Open data: "FCSO App: Current Jail Inmates List" https://sharefulton.fultoncountyga.gov/Courts-Justice/FCSO-App-Current-Jail-Inmates-List/3vfv-9mmr (fields not confirmed); cash bonds online via https://www.cashbondonline.com/home.html (linked from county page); warrants: none found; Court: Clerk of Superior Court criminal 404-613-5313, "Check case records online" https://publicrecordsaccess.fultoncountyga.gov/Portal/ (Magistrate, State and Superior; robots blocked fetch). CONFLICT: the clerk's eServices page instead lists https://portal-gafulton.tdr.tylerhosting.cloud/portal (Magistrate/State) and https://portal-gafulton.tylertech.cloud/portal (Superior), so a URL change may be underway. No registration or fee stated. Ché Alexander (Superior Court clerk) is also interim Clerk of State Court per clerk site; sources https://fultoncountyga.gov/inside-fulton-county/fulton-county-departments/sheriff, https://www.fultoncountyga.gov/inside-fulton-county/fulton-county-departments/sheriff/jail, https://www.fultonclerk.org/144/eServices, https://www.fultonclerk.org/360/Criminal-Matters.

Gwinnett: Sheriff Keybo Taylor; sheriff info line 770-619-6500; Gwinnett County Jail, 2900 University Pkwy NE, Lawrenceville 30043 (listed as sheriff/jail mailing address; no separate physical jail address stated); no dedicated inmate-info phone listed (county general line 770-822-8000); inmate search https://www.gwinnettcountysheriff.com/smartwebclient/ (search "by name and booking date"; results not fetched (robots); charges/bond/release coverage TODO); warrants: none found; Court: Clerk of Courts (Tiana P. Garner per clerk site page title) Odyssey portal for Superior, State, Magistrate and Probate estate https://portal-gagwinnett.tylertech.cloud/Portal, Recorder's Court https://www.gwinnettcourts.com/casesearch/recorderscourt.aspx, also re:SearchGA; no registration or fee stated on the case search page; notable: sentenced state and county inmates are held separately by the Gwinnett County Department of Corrections (Comprehensive Correctional Complex, 750 Hi Hope Rd, Lawrenceville), which the sheriff does not run; county site moved from /web/gwinnett/departments/... to /government/departments/... (old URLs still resolve); sources https://www.gwinnettcounty.com/contact/departmental-phone-listing/sheriff, https://www.gwinnettcounty.com/government/departments/sheriff/inmate-services, https://www.gwinnettcourts.com/casesearch/, https://www.gwinnettcounty.com/government/departments/corrections/comprehensive-correctional-complex.

Cobb: Sheriff Craig D. Owens Sr.; general info 770-499-4600; Cobb County Adult Detention Center, 1825 County Services Pkwy, Marietta (ZIP CONFLICT: the ADC contact page says 30008, the sheriff home page says 30060; visitors center is 1877 County Services Pkwy, 30008); detention facility/bonding/switchboard 770-499-4200; jail administration 770-499-4221 (M-F 8-5); inmate search http://inmate-search.cobbsheriff.org/enter_name.shtm (people "in custody", with "criminal charges and bond amounts"; http only); warrants: no online search, warrant information 770-499-4634; most wanted https://www.cobbsheriff.org/inmates/most-wanted; Court: Superior Court Clerk (Connie Taylor shown on the site, but not explicitly labeled as clerk) "Search Court Records" https://superiorcourtclerk.cobbcounty.gov/WebCaseManagement (no registration or fee stated; criminal coverage not stated); older clerk domains still indexed (ctsearch.cobbsuperiorcourtclerk.com), so a URL change is likely; State Court search https://courts.cobbcounty.gov/StateCourtRecordSearch/ (State Court criminal division 770-528-1246); Magistrate search https://courts.cobbcounty.gov/MagistrateCourtRecordSearch/SearchMag?ct=MG (from search result); notable: county domain moving from cobbcounty.org to cobbcounty.gov; sources https://www.cobbsheriff.org/, https://www.cobbsheriff.org/contact-us, https://www.cobbsheriff.org/inmates/adult-detention-center, https://superiorcourtclerk.cobbcounty.gov/records-search/, https://www.cobbcounty.gov/courts/state-court/state-court-clerk/state-court-court-connect.

DeKalb: Sheriff Melody M. Maddox; main 404-298-8111; DeKalb County Jail, 4425 Memorial Dr, Decatur 30032; jail general information hotline 404-298-8145; bonding office 404-298-8195 (daily 7am-11:59pm); warrants unit 404-298-8200; inmate lookup: the sheriff home page's "Inmate Lookup" link goes to https://correctionsrecordssearch.com/dekalbcountyga. CAUTION: that domain is not a government domain, and I could not confirm who runs it. It is linked from the official sheriff page, but have a person check it before publishing (UNVERIFIED); warrants: no online search found; Court: docket and "Smart Search" https://portal-gadekalb.tylertech.cloud/portal/Home/Dashboard/29 (linked from both the county judicial page and the sheriff home page); the older https://ody.dekalbcountyga.gov/portal/... is still indexed (likely URL change); State Court also has BenchmarkWeb https://statecourt.dekalbcountyga.gov/BenchmarkWeb/Home.aspx/Search (from search result); no fees stated; sources https://www.dekalbsheriff.org/contact/, https://www.dekalbsheriff.org/, https://www.dekalbsheriff.org/bonding-inmate-services/, https://www.dekalbcountyga.gov/dekalb-county-judicial-system.

Chatham: Sheriff Richard S. Coleman; sheriff 912-652-7634 / 912-652-7660; Chatham County Jail at Sheriff's Complex, 1050 Carl Griffin Dr, Savannah 31405 (some mailing instructions use 1074 Carl Griffin Dr: CONFLICT); receiving and discharge/booking 912-651-3700; front lobby 912-652-7785; no inmate-info line listed; booking lists: last 24h https://sheriff.chathamcountyga.gov/Corrections/Bookings?days=1 and last 72h https://sheriff.chathamcountyga.gov/Corrections/Bookings?days=3 (show name, DOB, race/sex, arrest date, agency, bond, charges with M/F degree; no release field; recent bookings only, not a full roster); full current-inmate search: none found (TODO); bonding procedure https://sheriff.chathamcountyga.gov/Corrections/BondingsProcedure; warrants: none found; Court: Superior Court Clerk "Criminal Record information can be viewed on-line at re:Search GA" https://researchga.tylerhost.net/ (registration required per Forsyth clerk); clerk main 912-434-8920; county also runs a Tyler portal https://cmsportal.chathamcounty.org/Portal/ (from search result; coverage TODO); sources https://sheriff.chathamcountyga.gov/, https://superiorcourtclerk.chathamcountyga.gov/Superior/CriminalDivision, https://courts.chathamcountyga.gov/.

Cherokee: Sheriff Frank Reynolds; headquarters and jail (Adult Detention Center) 498 Chattin Dr, Canton 30115, 678-493-4200 (no separate inmate-info line listed); "Jail Inmate List" https://sheriff.cherokeecountyga.gov/jaillist/warning.php (opens with a scam warning that must be acknowledged before the list; fields beyond the warning not fetched: TODO); warrants: no public search (https://sheriff.cherokeecountyga.gov/jail/warrant.php describes the Warrant/Civil Unit only; it says the office "will not collect or solicit payment for warrants nor fines via telephone"); Court: county clerk page says to "visit us at https://www.cherokeecourtclerk.com" (could not fetch; criminal search URL and terms TODO); notable: sheriff moved from cherokeega-sheriff.org (old, still indexed) to sheriff.cherokeecountyga.gov, and county from cherokeega.com to cherokeecountyga.gov; sources https://sheriff.cherokeecountyga.gov/, https://sheriff.cherokeecountyga.gov/contact_us.php, https://www.cherokeecountyga.gov/clerk-of-courts/.

Clayton: Sheriff Levon Allen; main 770-477-4479; jail at Harold R. Banke Justice Center, 9157 Tara Blvd, Jonesboro 30236; no inmate-info line listed (inmate-record corrections: Classification 770-477-4441, M-F 8-5); inmate search page https://www.claytoncountyga.gov/government/sheriff/inmate-search/ which leads to tool https://weba.claytoncountyga.gov/sjiserver/htdocs/index.shtml (tool did not return readable text; fields TODO); warrants: none found. WARNING: claytonsheriff.com is NOT the official site. It calls itself "Clayton County GA Inmate Search, Jail and Public Records" and has a "Georgia Inmate Search" page, which looks like a third-party lookalike. Never link it. Court: Clerk of Superior and Magistrate Courts Chanae Q. Clemons, 770-477-3395; case search https://clerk.claytoncountyga.gov/case-search/ which leads to https://weba.claytoncountyga.gov/casinqsvr/htdocs/index.shtml (coverage and fees not stated); Magistrate "Find My Case" https://clerk.claytoncountyga.gov/magistrate-court/find-my-case/; State Court case search TODO; sources https://www.claytoncountyga.gov/government/sheriff/, https://clerk.claytoncountyga.gov/, https://clerk.claytoncountyga.gov/case-search/.

Forsyth: Sheriff Ron H. Freeman (from official page titles "FCSO - Sheriff Ron H. Freeman" and "Sheriff Freeman" on forsythsheriff.org; search snippet only); the sheriff site refused all fetches; jail is at the "Veterans Memorial intersection" and you must bond in person at the jail lobby (https://www.forsythsheriff.org/bonding-information); jail street address, main phone, inmate phone and inmate search URL are all TODO; warrants: TODO; Court: Clerk of Superior, State and Juvenile Courts case search via re:SearchGA https://researchga.tylerhost.net/CourtRecordsSearch/Home#!/home (covers Superior and State; "Participants must register in order to search cases"; paid document purchase); source https://www.forsythclerk.com/HowDoI/CaseSearch.aspx.

Henry: Sheriff Reginald Scandrett; main 770-288-7100; Sheriff's Office 120 Henry Pkwy, McDonough 30253 (jail street address not stated: TODO); inmate-info line TODO; inmate search https://inmatesearch.henrycountyga.gov/NewWorld.InmateInquiry/GA0750000 (search by name, subject number, booking number, booking date range, with an "In Custody" filter; charges/bond fields not confirmed). The old host inmatesearch.co.henry.ga.us is still indexed, so this is a URL change. The site has a scam alert about inmate, bonding and payment requests, pointing to https://henrycountysheriffga.gov/bonding/. Warrants: none found; Court: Clerk of Superior Court "Find a Case in Superior Court" https://micropact.co.henry.ga.us/SuperiorCourtsCMWS/ (no fee or registration stated); State Court search TODO; notable: sheriff site is henrycountysheriffga.gov and county site moved from co.henry.ga.us to henrycountyga.gov; sources https://henrycountysheriffga.gov, https://www.henrycountyga.gov/clerk-of-superior-court.

Hall: Sheriff Gerald Couch; headquarters 2859 Browns Bridge Rd, Gainesville 30504, 770-531-6900; Hall County Detention Center, 1700 Barber Rd, Gainesville 30507, jail bureau contact 770-531-6904; current population list https://hallcounty.policetocitizen.com/Inmates/Catalog ("Current Detention Center Population", "automatically updated every 15 minutes"; vendor-hosted (P2C) but linked from the official county page); warrants: no online search, Warrant Unit 770-531-6907; Court: Clerk of Superior and State Courts (hallcounty.org clerk pages redirect to https://www.hallclerk.com/), criminal division 770-531-7038, main 770-531-7025, online docket https://docket.hallcourts.com/ (no registration stated; card payments carry an eZCourtPay convenience fee); clerk name TODO; notable: separate county Correctional Institute (staff directory https://www.hallcounty.org/Directory.aspx?did=122); sources https://www.hallcounty.org/168/Sheriffs-Office, https://www.hallcounty.org/741/Inmate-Population-List, https://www.hallcounty.org/241/Warrant-Service-Unit, https://www.hallclerk.com/ClerksOffices/CriminalDivision.aspx.

Richmond: consolidated Augusta-Richmond County; Sheriff Eugene "Gino" Brantley; main 706-821-1000; office 400 Walton Way, Augusta 30901; Charles B. Webster Detention Center, 1941 Phinizy Rd, Augusta 30906, 706-821-1101; inmate inquiry https://www.richmondcountysheriffsoffice.com/inmate-inquiry.cfm ("Search for current and past inmates", with mug shots, booking numbers, arrest dates, charges and bonds); the underlying app is http://appweb2.augustaga.gov/InmateInquiry/RCSOBookings.html (http only); warrants: none found; records division 706-821-1010; Court: Clerk of Superior, State and Juvenile Court (Hattie Sullivan, listed as "Clerk of Court"), 735 James Brown Blvd Suite 1500, 706-821-2460; "Case Management Search" https://www.augustaga.gov/421/Case-Management-Search (disclaimer, then https://www.augustaga.gov/cocaugusta; criminal coverage, registration and fees not stated: TODO); sources https://www.richmondcountysheriffsoffice.com/how-do-i.cfm, https://www.richmondcountysheriffsoffice.com/jail-division.cfm, https://www.augustaga.gov/Directory.aspx?did=15, https://www.augustaga.gov/1429/Elected-Officials, https://www.augustaga.gov/296/Clerk-of-Superior-State-Juvenile-Court.

Muscogee: consolidated Columbus-Muscogee County; Sheriff Greg Countryman; sheriff 706-653-4225, 100 E 10th St (4th floor), Columbus 31901; Muscogee County Jail, 700 E 10th St, Columbus 31901, 706-653-4258; inmate search: sheriff page links "Inmate Search" to https://www.columbusga.gov/eCourts, and the court portal page links "Jail Search" https://portal-gamuscogee.tylertech.cloud/app/JailSearch/#/search (fields TODO); warrants: none found; Court: "Muscogee County Superior & State Court ePortal" Smart Search https://portal-gamuscogee.tylertech.cloud/Portal/Home/Dashboard/29 (registration "may take up to 24 hours"; fees not stated); notable: the separate Muscogee County Prison (7175 Sacerdote Ln, 706-641-5800) is run by the consolidated government, not the sheriff; sources https://columbusga.gov/sheriff/, https://columbusga.gov/sheriff/Contact-Us, https://muscogeecourts.columbusga.gov/Resources/Court-Portal, https://columbusga.gov/mcp/General-Information.

Paulding: Sheriff name TODO (paulding.gov blocks fetching); Paulding County Jail on the Watson Government Complex, Dallas (street address and phone TODO); inmate search https://inmate.paulding.gov:9443/NewWorld.InmateInquiry/GA1100000 (shows Name, Subject Number, In Custody; no charges or bond columns in the view fetched); warrants: TODO; Court: Clerk criminal 678-224-4333 (from GSCCCA clerk listing snippet); online criminal search TODO; sources https://www.paulding.gov/460/Jail-Division, https://inmate.paulding.gov:9443/NewWorld.InmateInquiry/GA1100000.

Houston: Sheriff Matthew L. Moulton; sheriff office 202 Carl Vinson Pkwy, Warner Robins 31088, 478-542-2125 (Perry office 478-218-4790); Houston County Detention Center 478-218-4900 (street address TODO); inmate search https://houston-so-ga.zuercherportal.com (vendor-hosted, linked from the official sheriff page; fields TODO); warrants: no online search, warrants 478-542-2095; Court: Clerk of Superior/State Court search TODO; sources https://www.houstoncountyga.gov/government/sheriff.cms, https://www.houstoncountyga.gov/skins/userfiles/files/Quarterly%20Info%20for%20HB%201105Q3%202026.pdf.

Columbia: Sheriff Clay N. Whittle; main/non-emergency 706-541-2800; Columbia County Detention Center, County Camp Rd, Appling 30802 (ADDRESS CONFLICT: 2269 vs 2273 County Camp Rd on the same official page; the county directory uses 2273), detention 706-541-0754; inmate inquiry: menu links https://columbiacountyso.policetocitizen.com/Inmates/Catalog. CONFLICT: the same page says "A list of inmates currently in custody ... is no longer available on this website" and directs callers to 706-541-0754. Treat the online roster as unavailable until a person checks it. Warrants: none found; Court: Clerk of Superior Court search TODO; sources https://columbiacountyso.org/detention-center/, https://columbiacountyso.org/inmate-inquiry/, https://columbiacountyga.gov/Directory.aspx?DID=14.

Coweta: Sheriff name TODO (not on the county pages fetched); Sheriff's Office and Coweta County Jail, 560 Greison Trail, Newnan 30263; sheriff 770-253-1502; jail division 770-253-1664; inmate search: none on county pages; the Public Safety page lists a "Police to Citizen" portal https://cowetacosoga.policetocitizen.com/Home without description (whether it has an inmate list is TODO); bond fee $20 per bond instrument (jail FAQ); warrants: none found; Court: Clerk search TODO; notable: the separate Coweta County Prison (101 Selt Rd, Newnan, 770-254-3723) is under the Board of Commissioners and GDC and mainly houses state inmates; sources https://www.coweta.ga.us/400/Jail-Division, https://www.coweta.ga.us/406/Jail-Frequently-Asked-Questions-FAQs, https://www.coweta.ga.us/476/Public-Safety, https://www.coweta.ga.us/340/Prison.

Bibb: consolidated Macon-Bibb County; NOT VERIFIED (search budget exhausted): sheriff, jail, phones, inmate search, warrants and clerk search all TODO.

Douglas: NOT VERIFIED: all fields TODO.

Carroll: NOT VERIFIED: all fields TODO.

Clarke: consolidated Athens-Clarke County; NOT VERIFIED: all fields TODO.

Newton: NOT VERIFIED: all fields TODO.

Fayette: NOT VERIFIED: all fields TODO.

Lowndes: NOT VERIFIED: all fields TODO.

Bartow: NOT VERIFIED: all fields TODO.

Walton: NOT VERIFIED: all fields TODO.

## Gaps

Statewide
1. UNVERIFIED: O.C.G.A. 17-4-62 as the cite for the 48-hour warrantless rule (bench card cites only 17-4-26).
2. TODO: SB 288 eligibility details (number of misdemeanors, waiting period, exclusions) from statute text.
3. TODO: GCIC fee amounts (fee PDF not opened).
4. TODO: re:SearchGA registration and document-fee terms from an official page.
5. TODO: confirm the Georgia Felon Search application URL https://services.georgia.gov/gta/gafs/ by fetching it (seen only as an official search result).
6. CORRECTION to brief: SB 105 (2021) is not the record restriction law; it is SB 288 (2020, effective 1/1/2021).

Fulton
7. TODO: actual inmate search tool URL and fields (county "Inmate Search" page refused fetch).
8. CONFLICT/TODO: court portal URL (publicrecordsaccess.fultoncountyga.gov vs portal-gafulton.*.tylertech/tylerhosting). Pick the one the clerk's office confirms.

Gwinnett
9. TODO: dedicated jail inmate-info phone; what smartwebclient results show (charges, bond, releases).

Cobb
10. CONFLICT: ADC ZIP 30008 vs 30060.
11. TODO: confirm Connie Taylor's title and whether WebCaseManagement includes criminal cases.

DeKalb
12. UNVERIFIED: correctionsrecordssearch.com/dekalbcountyga (non-government domain linked from sheriff page). Confirm operator before linking.

Chatham
13. CONFLICT: 1050 vs 1074 Carl Griffin Dr.
14. TODO: full current-inmate search (only 24h/72h booking lists found); cmsportal.chathamcounty.org coverage.

Cherokee
15. TODO: jail list fields; clerk criminal search at cherokeecourtclerk.com (fetch blocked).

Clayton
16. TODO: inmate search tool fields; court search coverage and fees; State Court search.
17. WARNING (not a gap, but required action): claytonsheriff.com is a non-official lookalike. Exclude it.

Forsyth
18. TODO: jail address, sheriff main phone, inmate phone, inmate search URL, warrants (site refused fetches). Sheriff name came from search snippet only.

Henry
19. TODO: jail street address, inmate-info phone, State Court search, inmate search result fields.

Hall
20. TODO: Clerk name.

Richmond
21. TODO: whether Case Management Search covers criminal cases, and its terms.

Muscogee
22. TODO: Jail Search fields.

Paulding
23. TODO: sheriff name, jail address, jail phone, warrants, clerk online search (site blocks fetching).

Houston
24. TODO: detention center street address; zuercherportal fields; clerk criminal search.

Columbia
25. CONFLICT: 2269 vs 2273 County Camp Rd; online roster said to be discontinued but still linked.
26. TODO: clerk criminal search.

Coweta
27. TODO: sheriff name; whether the P2C portal has an inmate list; clerk criminal search.

Unverified counties (all fields TODO)
28. Bibb (Macon-Bibb).
29. Douglas.
30. Carroll.
31. Clarke (Athens-Clarke).
32. Newton.
33. Fayette.
34. Lowndes.
35. Bartow.
36. Walton.

Vendor-hosted tools linked from official pages (OK to cite, but note the vendor domain on the site): Hall and Columbia (policetocitizen.com), Houston (zuercherportal.com), Gwinnett, Fulton, DeKalb and Muscogee court portals (tylertech.cloud), re:SearchGA (tylerhost.net), Fulton cash bonds (cashbondonline.com).
