// Minnesota BCA, 2025 Uniform Crime Report to the Legislature (amended), published Sept. 10, 2026.
// County-level tables exist only for the seven Twin Cities metro counties; all counties get judicial district data.

export const ucrSource = {
  label: "Minnesota BCA, 2025 Uniform Crime Report (amended)",
  url: "https://dps.mn.gov/news/bca/correction-bca-issues-updated-2025-uniform-crime-report",
};

type Pair = [number, number]; // [2024, 2025]
export type MetroCounty = {
  homicide: Pair;
  rape: Pair;
  robbery: Pair;
  aggAssault: Pair;
  burglary: Pair;
  larceny: Pair;
  mvTheft: Pair;
  arson: Pair;
};

export const metroCrime: Record<string, MetroCounty> = {
  Anoka: { homicide: [9, 4], rape: [103, 90], robbery: [56, 44], aggAssault: [357, 265], burglary: [423, 333], larceny: [3975, 3494], mvTheft: [369, 272], arson: [26, 16] },
  Carver: { homicide: [1, 0], rape: [16, 23], robbery: [4, 4], aggAssault: [64, 47], burglary: [71, 42], larceny: [437, 424], mvTheft: [28, 22], arson: [8, 1] },
  Dakota: { homicide: [8, 5], rape: [152, 156], robbery: [43, 46], aggAssault: [460, 391], burglary: [590, 499], larceny: [5184, 4326], mvTheft: [371, 317], arson: [19, 34] },
  Hennepin: { homicide: [89, 72], rape: [699, 718], robbery: [2023, 1394], aggAssault: [4102, 3891], burglary: [4198, 3695], larceny: [26504, 24119], mvTheft: [8236, 6070], arson: [183, 160] },
  Ramsey: { homicide: [28, 19], rape: [278, 283], robbery: [468, 346], aggAssault: [1704, 1362], burglary: [2004, 1837], larceny: [11031, 10995], mvTheft: [1896, 1619], arson: [194, 136] },
  Scott: { homicide: [3, 3], rape: [48, 38], robbery: [9, 7], aggAssault: [81, 80], burglary: [99, 80], larceny: [1032, 998], mvTheft: [71, 51], arson: [5, 5] },
  Washington: { homicide: [1, 0], rape: [74, 90], robbery: [31, 14], aggAssault: [170, 108], burglary: [285, 216], larceny: [2381, 2181], mvTheft: [142, 118], arson: [8, 7] },
};

// Violent/property crime rates are per 100,000 residents.
export const districtStats: Record<number, { violentRate: number; violent: number; propertyRate: number; property: number; groupA: number; groupB: number }> = {
  1: { violentRate: 107, violent: 916, propertyRate: 875, property: 7521, groupA: 6310, groupB: 6820 },
  2: { violentRate: 376, violent: 2010, propertyRate: 2727, property: 14587, groupA: 6856, groupB: 7969 },
  3: { violentRate: 126, violent: 632, propertyRate: 929, property: 4649, groupA: 4219, groupB: 4729 },
  4: { violentRate: 474, violent: 6075, propertyRate: 2657, property: 34044, groupA: 16876, groupB: 14028 },
  5: { violentRate: 138, violent: 403, propertyRate: 723, property: 2114, groupA: 2852, groupB: 3538 },
  6: { violentRate: 185, violent: 472, propertyRate: 1626, property: 4142, groupA: 3063, groupB: 2618 },
  7: { violentRate: 181, violent: 948, propertyRate: 1039, property: 5439, groupA: 5132, groupB: 4936 },
  8: { violentRate: 110, violent: 180, propertyRate: 463, property: 756, groupA: 955, groupB: 999 },
  9: { violentRate: 172, violent: 592, propertyRate: 674, property: 2320, groupA: 2800, groupB: 3586 },
  10: { violentRate: 85, violent: 911, propertyRate: 760, property: 8182, groupA: 7037, groupB: 6708 },
};

export const statewide2025 = {
  totalArrests: 112031,
  groupA: 56100,
  groupB: 55931,
  juvenile: 9303,
  juvenilePct: 8.3,
  violent: [15083, 13139] as Pair,
  violentRate: 225.3,
  propertyRate: 1436.5,
};
