# North Carolina county verification notes (checked 2026-11-15)

Method note: all facts below come from official pages fetched on 2026-11-15 (nccourts.gov, ncleg.gov, dac.nc.gov, osbm.nc.gov, county and sheriff domains). The session's shared web-search budget ran out partway through, so 14 of the 25 counties are only partly verified (eCourts date and population confirmed; sheriff/jail/clerk details TODO). The search tool returned titles and URLs only, with no text snippets, so nothing here is "(from search snippet)" text. Where a fact rests only on a search-result title or a URL, it is marked "(title only)". Several sheriff P2C pages block automated fetching (robots.txt), so their field lists are TODO even though the URL is confirmed as linked from an official page.

ELECTION CAVEAT (UNVERIFIED): NC sheriffs serve 4-year terms and the last regular election was 2022, so the 2026 general election (Nov 3, 2026) likely just decided every sheriff race, with new terms starting in early December 2026. I did not confirm this on an official page. Re-check every sheriff name after the new terms begin.

## Statewide

Unified courts: NC courts are "a state-operated and state-funded unified court system" called the General Court of Justice, with three divisions (appellate, superior, district); the state pays all Judicial Branch operating costs and counties provide the facilities. https://www.nccourts.gov/about

Who keeps criminal records: an elected Clerk of Superior Court in each of the 100 counties (partisan election, 4-year term) handles "all clerical and record-keeping functions of the superior court and district court." Magistrates are nominated by the clerk, appointed by the senior resident superior court judge, and handle initial appearances and issue warrants. https://www.nccourts.gov/learn/court-officials

eCourts Portal: https://portal-nc.tylertech.cloud/Portal/ (labeled "Portal (Search/Pay)" on nccourts.gov). The public can search without registering: "Registration for Portal is not required for anonymous users to search and view publicly available court information," and registering does not unlock restricted case types. Smart Search supports party-name search, including wildcards, and has a "Criminal Actions" filter. The FAQ does not say outright that district criminal cases are included. TODO: confirm by a live test. https://nccourts.gov/documents/publications/ecourts-portal-information-and-faqs ; https://www.nccourts.gov/ecourts

Portal is not for background checks: nccourts.gov says "Individuals performing background checks should use the county clerk's office for doing so, not Portal." https://www.nccourts.gov/help-topics/court-records/obtaining-court-records

Clerk criminal record check: a certified name search on form AOC-CR-314 costs $25 and covers one county only ("It is not a statewide record search"). A non-certified search of any county or the whole state is free on public-access terminals in any clerk's office. The SBI offers a non-certified statewide check of your own record by fingerprint card. https://www.nccourts.gov/help-topics/court-records/criminal-background-check

eCourts rollout (Enterprise Justice/Odyssey replaced the legacy county systems):
- Track 1/pilot, Feb 13, 2023: Harnett, Johnston, Lee, Wake. https://www.nccourts.gov/news/tag/press-release/ecourts-to-launch-in-harnett-johnston-lee-and-wake-counties-on-february-13-2023 (title only); the Feb 5, 2024 release confirms these counties were live: https://www.nccourts.gov/news/tag/press-release/ecourts-is-now-live-in-twelve-additional-counties
- Mecklenburg, Oct 9, 2023. https://www.nccourts.gov/news/tag/press-release/mecklenburg-county-courts-upgrade-to-digital-case-management-system-october-9-2023
- Track 3, Feb 5, 2024: 12 northeastern counties.
- Track 4, Apr 29, 2024: Alamance, Chatham, Durham, Franklin, Granville, Guilford, Orange, Person, Vance, Warren. https://www.nccourts.gov/news/tag/press-release/ecourts-expands-to-nearly-half-of-states-population
- Track 5, Jul 22, 2024: 11 western counties, including Buncombe and Henderson. https://www.nccourts.gov/news/tag/press-release/ecourts-extends-to-mountains-of-western-north-carolina
- Track 6, Oct 14, 2024: Anson, Cabarrus, Cumberland, Hoke, Montgomery, Moore, Randolph, Richmond, Scotland, Stanly, Union. https://www.nccourts.gov/news/tag/press-release/ecourts-is-now-live-in-11-more-counties-in-southern-and-central-piedmont
- Track 7, Feb 3, 2025: 13 coastal counties, including Brunswick, New Hanover and Onslow. https://www.nccourts.gov/news/tag/press-release/ecourts-conversion-continues-on-nc-coastline-february-3-2025
- Track 8, Apr 28, 2025: 11 counties, including Pitt and Wayne. https://www.nccourts.gov/news/tag/general-news/ecourts-track-8-go-live-timeline-and-transition-process-starts-april-16-2025
- Track 9, Jul 21, 2025: 14 counties, including Forsyth. https://www.nccourts.gov/news/tag/press-release/ecourts-is-now-live-in-14-more-north-carolina-counties
- Track 10, Oct 13, 2025, the last group: 13 counties, including Catawba, Davidson, Gaston, Iredell and Rowan. https://www.nccourts.gov/news/tag/press-release/ecourts-is-now-live-in-13-more-north-carolina-counties

All 100 counties have been on eCourts since Oct 13, 2025. https://www.nccourts.gov/news/tag/press-release/north-carolina-implements-ecourts-conversion-in-all-100-counties

Initial appearance: an officer "must take the arrested person without unnecessary delay before a magistrate" (G.S. 15A-511(a)(1)). https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_15a/gs_15a-511.html

First appearance before a district court judge (G.S. 15A-601): required for defendants charged with crimes in superior court's original jurisdiction (felonies), and for misdemeanor defendants held in custody. The default deadline is 72 hours after custody or the first regular district court session in the county, whichever comes first. The deadline becomes 96 hours only when the courthouse is closed for transactions for more than 72 hours. CORRECTION to the brief: the 96-hour figure is the exception, not the rule. Defendants who are not in custody, or are released early, appear at the next district court session. https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_15a/gs_15a-601.html

Expunction:
- G.S. 15A-145 et seq. covers petitions.
- G.S. 15A-146 covers dismissals and not-guilty findings. Subsection (a4), "Dismissal, Not Guilty, or Not Responsible on or After December 1, 2021," expunges such charges by operation of law 180 to 210 days after final disposition. https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_15a/gs_15a-146.html
- The Second Chance Act (S.L. 2020-35, S562) created the automatic expunction for cases disposed of on or after Dec 1, 2021. It also expanded G.S. 15A-145.5, allowing more than one nonviolent misdemeanor to be expunged after 7 years, and added G.S. 15A-145.8 for offenses committed at ages 16 to 17. https://dashboard.ncleg.gov/api/Services/BillSummary/2019/S562-SMSA-137(CSSA-70)-v-2 ; https://www.ncleg.gov/Sessions/2019/Bills/Senate/PDF/S562v7.pdf
- Automatic expunction under (a4) was suspended from Aug 1, 2022 until July 1, 2024. S.L. 2024-35 (S565, effective July 8, 2024) set the 180-to-210-day window, gave the AOC 365 days to process the backlog, and tightened confidentiality of expunged files. https://dashboard.ncleg.gov/api/Services/BillSummary/2023/S565-SMSA-77(sl)-v-7
- Site copy should say: some dismissed charges may still appear for up to about 7 months, and sheriff arrest portals are not notified of automatic expunctions (Wake's arrest portal says this explicitly).

NC Department of Adult Correction offender search:
- Offender Public Information: https://webapps.doc.state.nc.us/opi/offendersearch.do?method=view. It covers "state prison offenders, probationers and parolees," with history back to 1972, and "does not include county jail information."
- NC SAVAN (the state's VINE service): https://www.vinelink.com/vinelink/siteInfoAction.do?siteId=34003
- Both listed at https://www.dac.nc.gov/dac-services/criminal-offender-searches

Statewide warrant search: none found. NCAWARE was available only to court and law-enforcement users (https://www.nccourts.gov/assets/documents/publications/NCAWARE_FactSheet_2020-21_WEB_FINAL.pdf). eWarrants replaced the older warrant systems statewide in July 2022 (https://www.nccourts.gov/news/tag/press-release/ecourts-expands-to-nearly-half-of-states-population). I found no official page offering public eWarrants search. Mecklenburg's sheriff says warrant information "is housed in" the eCourts Portal and that the Portal is publicly accessible, so served or charged cases appear there. Whether unserved warrants appear on the Portal is UNVERIFIED. The safe public answer: search the eCourts Portal, then call the county sheriff or clerk to confirm. A few sheriffs publish their own wanted lists (see Cabarrus).

## County list

Source: NC OSBM 2025 Certified County Population Estimates (July 1, 2025 vintage), https://www.osbm.nc.gov/facts-figures/population-demographics/state-demographer/county-population-estimates/certified-county-population-estimates. The table was read through a page-summarizing fetch, not a direct CSV download. TODO: spot-check the CSV (https://files.nc.gov/osbm/2026-10/County-Pop-Estimates2025_0.csv).

Rank and July 1, 2025 estimate:
1. Wake 1,259,530
2. Mecklenburg 1,224,717
3. Guilford 557,963
4. Forsyth 400,766
5. Durham 345,085
6. Cumberland 341,048
7. Buncombe 278,235
8. Union 271,383
9. Johnston 257,598
10. Cabarrus 251,342
11. Gaston 249,916
12. New Hanover 245,917
13. Onslow 217,827
14. Iredell 214,151
15. Alamance 187,982
16. Pitt 182,281
17. Davidson 181,248
18. Brunswick 176,619
19. Catawba 171,604
20. Rowan 155,298
21. Orange 151,404
22. Harnett 149,841
23. Randolph 148,941
24. Henderson 123,440
25. Wayne 120,861

Robeson (118,295) is 26th, close behind Wayne.

## Counties

Wake: Sheriff Willie L. Rowe (https://www.wake.gov/departments-government/sheriffs-office/wcso-locations/wake-county-detention-center); Wake County Detention Center, 3301 Hammond Road, Raleigh, NC 27610, phone 919-773-7930 (same page; no separate inmate-info line); visit scheduling 919-857-9103 (https://www.wake.gov/departments-government/sheriffs-office-willie-rowe-sheriff/divisions/detention); sheriff main phone TODO; inmate search is the Wake County Sheriff's Office P2C "Inmate Inquiry" at http://p2c.wakeso.net/jailinmates.aspx/1000 (title only; fetch blocked by robots.txt; the wakeso.net homepage calls itself the "Wake County Civil / Criminal Justice Automation System"); TODO: confirm that wake.gov links to p2c.wakeso.net, and list what the P2C shows; arrest records: Wake County Bureau of Forensic Services Arrest Record Portal https://dwslivescan.co.wake.nc.us/mug/Disclaimer.aspx covers Wake arrests "since April 27, 2007" and warns that automatically expunged offenses may still appear because the Bureau is not notified (https://www.wake.gov/departments-government/wake-county-bureau-forensic-services/identification-division/arrest-records); Bureau phone 919-856-6300; warrants: none found; court records: eCourts Portal (live Feb 13, 2023); Clerk of Superior Court main line (919) 792-4000, felonies/superior court (919) 792-4300 (https://www.nccourts.gov/locations/wake-county/contact-directory); Wake County Courthouse, 316 Fayetteville St. Mall, Raleigh 27601, handles civil matters (https://www.nccourts.gov/locations/wake-county/wake-county-courthouse); Wake County Justice Center, 300 S. Salisbury St, Raleigh 27601, handles "All Criminal matters" (https://www.nccourts.gov/locations/wake-county/wake-county-justice-center); notable: the sheriff's pages on wake.gov use two URL patterns (/sheriffs-office/ and /sheriffs-office-willie-rowe-sheriff/), and co.wake.nc.us redirects to wake.gov; the arrest record page shows two different email addresses (wcfs.arrestrecords@ in the text, ccbi.arrestrecords@ in the mailto link), so do not publish either.

Mecklenburg: Sheriff Garry L. McFadden per the jail handbook (https://www.mecksheriff.com/pdf/Handbookeng.pdf; the search title says "August 2024" but the fetched text says October 2021, so this is an older source; UNVERIFIED as current); Sheriff's Office information line 704-336-8100; administration, 901 Elizabeth Avenue, Charlotte 28204; Detention Center Central, 801 East Fourth Street, Charlotte 28202, phone (980) 314-5200; Arrest Processing, same address, (980) 314-5100 (https://www.mecksheriff.com/index.php/contact-us/); inmate search: the "Resident Inquiry" page (https://www.mecksheriff.com/index.php/resident-inquiry/) describes Resident Inquiry ("Mug Shots and more"), Arrest Inquiry ("who has been arrested") and Civil Inquiry, with records kept online 3 years from arrest or release; TODO: exact search-tool URL (the fetch returned no link targets); the legacy URL http://www.mecksheriff.com/inmatesearch.asp could not be fetched, so do not use it; notable: the Arrest Processing page says arrest and warrant inquiry data has been "unavailable online" since July 17, 2022, when eWarrants launched; for arrests or warrants, email the Public Information Office (address TODO) or call Arrest Processing at (980) 314-5100; the page also says warrant information is in the eCourts Portal (https://www.mecksheriff.com/index.php/arrest-processing/); the resident-inquiry page (still describing an online arrest inquiry) conflicts with the arrest-processing page, so flag before publishing; warrants: no online search (see above); court records: eCourts Portal (live Oct 9, 2023); Clerk of Superior Court, Mecklenburg County Courthouse, 832 East Fourth St, Charlotte 28202, main (704) 686-0400, criminal files email Mecklenburg.Criminal@nccourts.org (https://www.nccourts.gov/locations/mecklenburg-county/mecklenburg-county-courthouse ; https://www.nccourts.gov/locations/mecklenburg-county/contact-directory); the county also publishes an arrest dashboard at https://wowbiz.mecknc.gov/CriminalJusticeServices/Dashboards/Pages/ArrestProcessing.aspx (title only; aggregate data, TODO).

Guilford: Sheriff Danny H. Rogers, direct line 336-641-3694 (https://www.guilfordcountync.gov/government/sheriffs-office/about-gcso); sheriff main phone TODO; the county runs two jails: Greensboro Detention Center, 201 S Edgeworth St, Greensboro 27401, (336) 641-2700, and High Point Detention Center, 507 E. Green Drive, High Point 27260, (336) 641-7900 (https://www.guilfordcountync.gov/government/sheriffs-office/detention-centers); inmate search: "Inmate Search" links to the sheriff's Police-to-Citizen page https://guilfordcountysheriff.policetocitizen.com/Inmates/Catalog, and https://inmatesearch.guilfordcountync.gov/ ("View Arrest Records") redirects to the same P2C catalog; TODO: what it shows; an older P2C at p2c.guilfordcountysheriff.com appears in search results, so treat it as legacy and do not use it; warrants: none found; court records: eCourts Portal (live Apr 29, 2024); Clerk of Superior Court address and phone TODO (Greensboro and High Point courthouses).

Forsyth: Sheriff Bobby F. Kimbrough, Jr.; administration, 301 North Church Street, Winston-Salem 27101, 336-917-7001 (https://forsyth.cc/sheriff/); Law Enforcement Detention Center (LEDC), 201 North Church Street, Winston-Salem 27101, 336-917-7600 (https://forsyth.cc/sheriff/LEDC.aspx); inmate search: "Inmate Inquiry" at https://forsythsheriffnc.policetocitizen.com/Inmates/Catalog (same page; TODO: fields shown); warrants: none found; court records: eCourts Portal (live Jul 21, 2025); Clerk of Superior Court TODO; notable: the sheriff's pages are on both forsyth.cc and co.forsyth.nc.us, and the co.forsyth.nc.us copy blocks fetching, so use forsyth.cc.

Durham: Sheriff Clarence F. Birkhead (title only: "A Message from Sheriff Clarence F. Birkhead" on dconc.gov; page could not be fetched; UNVERIFIED); detention facility name and address TODO (the commonly cited address was not confirmed on an official page, so it is not used here); inmate search: Durham County Sheriff's Office "Inmate Population Search" https://www2.dconc.gov/sheriff/ips/default.aspx, refreshed several times daily (last update 11/15/2026 8:00 AM when checked); shows name (linked to VINE), date confined, date charged, date released, charge (statute description), bond type, bond amount, court docket, and days in jail; filters are Last 24 Hours, Last 30 Days, or Incarcerated, so it includes recent releases, not just current inmates; phone on that page (919) 560-0897; warrants: none found; court records: eCourts Portal (live Apr 29, 2024); Clerk of Superior Court TODO; notable: the sheriff also publishes civil process and calls-for-service reports at www2.dconc.gov/sheriff/ (title only).

Cumberland: Sheriff Johnathan Morgan, appointed by the Board of Commissioners on Aug 11, 2025 (title only: https://www.cumberlandcountync.gov/departments/public-information-group/public-information/news-releases/news-release-full-story/2025/08/11/cumberland-county-board-of-commissioners-appoints-major-johnathan-morgan-as-sheriff; the article body was not retrieved); main line 910-323-1500; Detention Center, 131 Dick Street, Fayetteville 28301; information desk (910) 672-5630 and (910) 672-5622; visitation (910) 672-5632; public magistrate (910) 672-5610 (https://cumberlandsheriffnc.gov/detention-center/); inmate search: "Active Inmate Lookup" page https://cumberlandsheriffnc.gov/active-inmate-page/ points to https://cumberlandsheriffnc.gov:8000/active_inmates/Inmates.aspx (current inmates per the label; TODO: fields shown); warrants: no public search; the Fugitive/Warrants page (https://cumberlandsheriffnc.gov/fugitivewarrants-section/) only describes the division, admin line (910) 672-5660; court records: eCourts Portal (live Oct 14, 2024); Clerk of Superior Court TODO; notable: RECENT URL CHANGE: the old domain ccsonc.org now redirects (302) to cumberlandsheriffnc.gov (emails still use @ccsonc.org); OUTDATED LINK on the sheriff's "Court Appearances / Case Lookup" page (https://cumberlandsheriffnc.gov/court-appearances/): it still points to the pre-eCourts AOC query https://www1.aoc.state.nc.us/www/calendars/CriminalQuery.html, so link the eCourts Portal instead; the page also says some inmate court appearances happen in a courtroom at the jail.

Buncombe: Sheriff Quentin E. Miller; Sheriff's Office administration, 60 Court Plaza, 4th Floor, Asheville 28801, (828) 250-4503 (https://www.buncombecounty.org/Governing/Depts/Sheriff/); Buncombe County Detention Facility, 20 Davidson Drive, Asheville 28801; facility administrator (828) 250-4550; front desk (828) 250-4610 or (828) 250-4557 (https://www.buncombecounty.org/Governing/Depts/Sheriff/detention-division/jail-inmate-resources.aspx); inmate search: Buncombe County Sheriff's Office P2C "jailinmates" at https://bcsdp2c.buncombecounty.org/jailinmates.aspx (title only; fetch blocked by robots.txt; TODO: fields shown); warrants: none found; court records: eCourts Portal (live Jul 22, 2024); Clerk of Superior Court TODO; notable: the county is moving its site from buncombecounty.org to buncombenc.gov (sheriff page https://www.buncombenc.gov/663/Sheriff lists an "Active Secured Bonds Dashboard," https://www.buncombenc.gov/665/Active-Secured-Bonds-Dashboard), so recheck all buncombecounty.org links before publishing.

Union: Sheriff Eddie Cathey (title only: county agenda attachment "Eddie Cathey Sheriff of Union County 3344 Presson Road," https://novusagenda.unioncountync.gov/agendapublic/AttachmentViewer.ashx?AttachmentID=2957&ItemID=2274; UNVERIFIED as current); Sheriff's Office, 3344 Presson Road, Monroe 28112, 704-283-3789; jail phone 704-292-2600 (the table layout was ambiguous, so UNVERIFIED) (https://www.unioncountync.gov/government/departments-f-p/public-communications/union-county-office-addresses-and-phone-numbers); jail street address TODO; inmate search: "Union County Jail Inmate Inquiry" https://sheriff.unioncountync.gov/jailinmates.aspx shows name with race/sex/age, primary charge, arrest date, booking agency, and a details report; no bond shown in the list view; current-only status not stated; warrants: none found; court records: eCourts Portal (live Oct 14, 2024); Clerk of Superior Court TODO; notable: unioncountysheriffsoffice.com pages could not be fetched.

Johnston: Sheriff Steve Bizzell; Sheriff's Office, 2875 US-70 BUS E, Smithfield, 919-989-5010, non-emergency 919-989-5000 (https://jcso.org/meet-the-sheriff/); jail: "Johnston County Jail," 120 South Third Street, Smithfield; mailing P.O. Box 1809, Smithfield 27577 (https://www.johnstonnc.gov/sheriffs_office/content.cfm?page_desc=jail; older page, recheck against jcso.org); inmate search: "Who's In Jail?" current inmates; jcso.org's Inmate Search page (https://jcso.org/detention-center/inmate-search/) links to https://www.johnstonnc.com/sheriffs_office/b_jailsearch1.cfm, while the older county page links to http://www.johnstonnc.com/sheriffs_office/jailsearch1.cfm, so confirm which works; recent arrests: "Search Recent Arrest Records" https://www.johnstonnc.gov/sheriffs_office/content.cfm?page_desc=srcharr covers only the last 15 calendar days of arrests (search by name or date range); warrants: none found; court records: eCourts Portal (live Feb 13, 2023); Clerk of Superior Court TODO; notable: RECENT URL CHANGE: https://www.johnstonnc.gov/sheriffs_office/ now redirects (302) to https://jcso.org/, but the search tools still run on johnstonnc.com/johnstonnc.gov.

Cabarrus: Sheriff Van W. Shaw; Sheriff's Office, 30 Corban Avenue SE, Concord 28025, 704-920-3000 (https://www.cabarruslaw.us/Home); Detention Center (Jail), 30 Corban Avenue SE, Concord 28025, 704-920-3058 (https://www.cabarruslaw.us/Division-Listing/Detention-Center-Jail); inmate search: Cabarrus Sheriff Office P2C https://onlineservices.cabarruscounty.us/p2c/jailinmates.aspx (linked from the sheriff's jail page; https://www.cabarruscounty.us/Services/Inmate-Lookup also redirects there; TODO: fields shown); warrants: the county "Warrants" service (https://www.cabarruscounty.us/Services/Warrants) redirects to a P2C wanted list at https://onlineservices.cabarruscounty.us/p2c/WantedList.aspx (could not fetch; TODO: confirm contents and disclaimers before publishing); court records: eCourts Portal (live Oct 14, 2024); Clerk of Superior Court TODO; notable: the sheriff has its own domain, cabarruslaw.us, and old county pages sit under ".../Sheriffs-Office-Old/...", so do not use those.

Gaston: Sheriff name TODO (not on any fetched page; the search to confirm it was not run); Gaston County Sheriff's Office and Gaston County Jail (opened Nov 1, 1999), 425 Dr. Martin Luther King Jr. Way, Gastonia 28052, 704-869-6800 (https://www.gastoncountysheriffsoffice.com/detention/ ; https://www.gastoncountysheriffsoffice.com/inmate-information/); separate jail phone TODO; inmate search: disclaimer page https://www.gastoncountysheriffsoffice.com/inmate-search-disclaimer/ ("For a copy of the actual charge against the individual, please contact the Gaston County Clerk of Court"), whose Agree button goes to https://tepsweb.cityofgastonia.com/NewWorld.InmateInquiry/GastonCounty (hosted on a City of Gastonia server; could not fetch; TODO: fields shown); warrants: none found; court records: eCourts Portal (live Oct 13, 2025); Clerk of Superior Court TODO; notable: the county directory lists the sheriff site as http://www.gastoncountysheriffsoffice.com/ (https://www.gastongov.com/Directory.aspx?did=137); the inmate tool is on a city server, so link the sheriff's disclaimer page, not the tool directly.

New Hanover: TODO (sheriff, jail, inmate search, warrants, clerk not checked; search budget exhausted); eCourts Portal live Feb 3, 2025 (verified, see Statewide).

Onslow: TODO (not checked); eCourts live Feb 3, 2025.

Iredell: TODO (not checked); eCourts live Oct 13, 2025.

Alamance: TODO (not checked); eCourts live Apr 29, 2024.

Pitt: TODO (not checked); eCourts live Apr 28, 2025.

Davidson: TODO (not checked); eCourts live Oct 13, 2025.

Brunswick: TODO (not checked); eCourts live Feb 3, 2025.

Catawba: TODO (not checked); eCourts live Oct 13, 2025.

Rowan: TODO (not checked); eCourts live Oct 13, 2025.

Orange: TODO (not checked); eCourts live Apr 29, 2024.

Harnett: TODO (not checked); eCourts live Feb 13, 2023.

Randolph: TODO (not checked); eCourts live Oct 14, 2024.

Henderson: TODO (not checked); eCourts live Jul 22, 2024.

Wayne: TODO (not checked); eCourts live Apr 28, 2025.

## Gaps

Statewide:
1. Confirm on an official page that 2026 sheriff races just took place and when new terms begin, then recheck all 25 sheriff names in December 2026.
2. Confirm by a live test that a Portal name search returns district criminal cases.
3. Find an official statement on whether unserved warrants show on the eCourts Portal. The only source is Mecklenburg's sheriff page.
4. Spot-check the OSBM 2025 CSV to confirm the ranking (it was read through a summarizer).
5. Find the URLs and county list for Track 3 (Feb 5, 2024). It contains none of the top 25.

Wake:
6. Confirm that wake.gov links to p2c.wakeso.net, and list what it shows.
7. Sheriff main phone.
8. Clerk criminal-division address (probably the Justice Center; the page does not say).
9. Correct arrest-records email (the page shows two conflicting addresses).

Mecklenburg:
10. Confirm Sheriff McFadden is current (only source is a 2021-dated handbook text).
11. Exact Resident Inquiry and Arrest Inquiry tool URLs.
12. Resolve the conflict between "arrest inquiry unavailable online since July 17, 2022" and the resident-inquiry page.
13. Public Information Office email.
14. Check what the arrest dashboard shows.

Guilford:
15. P2C fields.
16. Sheriff main phone.
17. Clerk address and phone.

Forsyth:
18. P2C fields.
19. Clerk address and phone.

Durham:
20. Confirm sheriff name (title only).
21. Detention facility name, address and phone.
22. Clerk address and phone.

Cumberland:
23. Confirm Sheriff Morgan from the article body (title only).
24. Active-inmate tool fields.
25. Clerk address and phone.

Buncombe:
26. P2C fields (fetch blocked).
27. Clerk address and phone.
28. Check buncombecounty.org links after the move to buncombenc.gov.

Union:
29. Confirm Sheriff Cathey is current (title only).
30. Jail street address.
31. Confirm jail phone 704-292-2600.
32. Clerk address and phone.

Johnston:
33. Which jail-search URL works (b_jailsearch1.cfm or jailsearch1.cfm).
34. Whether the jail address 120 S. Third St is current (older page).
35. Clerk address and phone.

Cabarrus:
36. P2C inmate fields.
37. Wanted-list contents and disclaimer.
38. Clerk address and phone.

Gaston:
39. Sheriff name.
40. Jail-specific phone.
41. Inmate tool fields.
42. Clerk address and phone.

Counties not checked:
43. New Hanover, Onslow, Iredell, Alamance, Pitt, Davidson, Brunswick, Catawba, Rowan, Orange, Harnett, Randolph, Henderson and Wayne still need every county-level fact: sheriff, phone, jail, inmate search, warrants, clerk and notable items. Only the eCourts date is verified (14 counties).
