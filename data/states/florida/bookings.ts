// Arrests booked into Florida county jails, from FDLE's Criminal Justice Data Transparency
// County Detention Arrest dataset (downloaded 2026-11-07). The dataset lists each charge separately;
// we count one arrest per person per arrest date. Counties are included only for years where
// their reporting looks complete; several counties began reporting partway through 2024 or 2025.
export const bookingsSource = {
  label: "FDLE Criminal Justice Data Transparency: County Detention Arrest data",
  url: "https://www.fdle.state.fl.us/cjab/cjdt/cd-arrest-reports",
};

export type FlBookings = {
  y2024?: number;
  y2025?: number;
  felonyPct2025?: number; // share of 2025 arrests with at least one felony charge
  topAgencies2025?: [string, number][];
};

export const flBookings: Record<string, FlBookings> = {
  "Miami-Dade": {"y2024": 39598, "y2025": 38676, "felonyPct2025": 35, "topAgencies2025": [["Miami Dade County Sheriff's Office/PD", 15091], ["Miami Police Department", 8026], ["Miami Beach Police Department", 3169], ["Hialeah Police Department", 2230]]},
  "Broward": {"y2024": 26087, "y2025": 30811, "felonyPct2025": 48, "topAgencies2025": [["Broward County Sheriff's Office", 15681], ["Fort Lauderdale Police Department", 3727], ["Hollywood Police Department", 1921], ["Coral Springs Police Department", 1080]]},
  "Palm Beach": {"y2024": 21361, "y2025": 21226, "felonyPct2025": 42, "topAgencies2025": [["Palm Beach County Sheriff's Office", 10921], ["West Palm Beach Police Department", 2489], ["Boynton Beach Police Department", 1579], ["Riviera Beach Police Department", 956]]},
  "Hillsborough": {"y2024": 31963, "y2025": 33535, "felonyPct2025": 58, "topAgencies2025": [["Hillsborough County Sheriff's Office", 20963], ["Tampa Police Department", 10222], ["Plant City Police Department", 849], ["Florida Highway Patrol - Tampa", 608]]},
  "Orange": {"y2024": 27890, "y2025": 31918, "felonyPct2025": 52, "topAgencies2025": [["Orange County Sheriff's Office", 14859], ["Orlando Police Department", 12278], ["Apopka Police Department", 1090], ["Ocoee Police Department", 870]]},
  "Duval": {"y2024": 24325, "y2025": 23387, "felonyPct2025": 50, "topAgencies2025": [["Jacksonville Sheriff's Office", 21489], ["Jacksonville Beach Police Department", 801], ["Atlantic Beach Police Department", 367], ["Florida Highway Patrol", 359]]},
  "Pinellas": {"y2024": 24019, "y2025": 27323, "felonyPct2025": 46, "topAgencies2025": [["Pinellas County Sheriff's Office", 12149], ["St. Petersburg Police Department", 6313], ["Clearwater Police Department", 3288], ["Largo Police Department", 2323]]},
  "Lee": {"y2024": 13987, "y2025": 14935, "felonyPct2025": 32, "topAgencies2025": [["Lee County Sheriff's Office", 9673], ["Fort Myers Police Department", 2378], ["Cape Coral Police Department", 2017], ["Florida Highway Patrol - Ft. Myers", 620]]},
  "Volusia": {"y2024": 14050, "y2025": 11886, "topAgencies2025": [["Volusia County Sheriff's Office", 4512], ["Daytona Beach Police Department", 3409], ["Port Orange Police Department", 874], ["New Smyrna Beach Police Department", 545]]},
  "Sarasota": {"y2024": 9695, "y2025": 9300, "topAgencies2025": [["Sarasota County Sheriff's Office", 6061], ["Sarasota Police Department", 1885], ["North Port Police Department", 971], ["Venice Police Department", 214]]},
  "Collier": {"y2024": 6822, "y2025": 6298, "topAgencies2025": [["Collier County Sheriff's Office", 5685], ["Naples Police Department", 347], ["Florida Highway Patrol - Naples", 231], ["Marco Island Police Department", 29]]},
  "Marion": {"y2024": 10890, "y2025": 11020, "felonyPct2025": 44, "topAgencies2025": [["Marion County Sheriff's Office", 7907], ["Ocala Police Department", 2634], ["Florida Highway Patrol", 220], ["Belleview Police Department", 137]]},
  "Lake": {"y2024": 7177, "y2025": 6794, "topAgencies2025": [["Lake County Sheriff's Office", 4050], ["Leesburg Police Department", 535], ["Mount Dora Police Department", 475], ["Clermont Police Department", 415]]},
  "Osceola": {"y2024": 5572, "y2025": 5446, "topAgencies2025": [["Osceola County Sheriff's Office", 3946], ["Kissimmee Police Department", 827], ["St. Cloud Police Department", 641], ["Florida Highway Patrol - Kissimmee", 29]]},
  "Bay": {"y2024": 10988, "y2025": 10566, "felonyPct2025": 37, "topAgencies2025": [["Bay County Sheriff's Office", 4536], ["Panama City Police Department", 3407], ["Panama City Beach Police Department", 1496], ["Lynn Haven Police Department", 360]]},
  "Charlotte": {"y2024": 2429, "y2025": 2672, "felonyPct2025": 46, "topAgencies2025": [["Charlotte County Sheriff's Office", 2672]]},
  "Pasco": {"y2025": 11367, "felonyPct2025": 55, "topAgencies2025": [["Pasco County Corrections", 11366], ["Pasco County Sheriff's Office", 1]]},
  "Seminole": {"y2025": 7947, "topAgencies2025": [["Seminole County Sheriff's Office", 7891], ["Florida Highway Patrol Troop D", 50], ["Longwood Police Department", 2], ["Altamonte Springs Police Department", 2]]},
  "St. Lucie": {"y2025": 6288, "felonyPct2025": 53, "topAgencies2025": [["St. Lucie County Sheriff's Office", 6288]]},
  "Leon": {"y2025": 6070, "felonyPct2025": 56, "topAgencies2025": [["Tallahassee Police Department", 2760], ["Leon County Sheriff's Office", 1967], ["Florida Highway Patrol - DHSMV", 1007], ["Florida State University Police Department", 113]]},
  "Clay": {"y2025": 3084, "felonyPct2025": 41, "topAgencies2025": [["Clay County Sheriff's Office", 3084]]},
  "Walton": {"y2025": 1721, "felonyPct2025": 46, "topAgencies2025": [["Walton County Sheriff's Office", 1607], ["DeFuniak Springs Police Department", 114]]},
  "Manatee": {"y2025": 4524, "felonyPct2025": 42, "topAgencies2025": [["Manatee County Sheriff's Office", 4496], ["Longboat Key Police Department", 27], ["Bradenton Police Department", 1]]},
  "Brevard": {"y2024": 13637},
};
