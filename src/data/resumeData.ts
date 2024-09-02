import { set } from "astro/zod";
import { data } from "./data";

//Total exports (FOB) from January to August and its improvement
export const totalFOB = (actualMonth: string) => {
  const pastMonth = "02";

  //calculate count data for months
  const countPastMonthData = data.filter(
    (item) => item.month == pastMonth,
  ).length;
  const countActualMonthData = data.filter(
    (item) => item.month === actualMonth,
  ).length;

  //calculate percentage to aprovement
  const improvement = countActualMonthData - countPastMonthData;
  const percentage = (improvement / countPastMonthData) * 100;

  return {
    countPastMonthData,
    countActualMonthData,
    percentage,
  };
};

//weight exported in that period
export const totalWeight = (actualMont: string) => {
  const pastMonth = "02";

  const totalWeightActualMonth = data
    .filter((item) => item.month === actualMont)
    .reduce(
      (acumulator, item) => acumulator + parseFloat(item.SumOfMTNetWeight),
      0,
    );

  const totalWeightPastMonth = data
    .filter((item) => item.month === pastMonth)
    .reduce(
      (acumulator, item) => acumulator + parseFloat(item.SumOfMTNetWeight),
      0,
    );

  const improvement = totalWeightActualMonth - totalWeightPastMonth;
  const percentageWight = (improvement / totalWeightPastMonth) * 100;

  return {
    percentageWight,
    totalWeightPastMonth,
    totalWeightActualMonth,
  };
};

export const getTotalUniqueItems = (actualMont: string) => {
  const pastMonth = "02";
  const uniqueItemsPastMonth = Array.from(
    new Set(
      data
        .filter((item) => item.month === pastMonth)
        .map((item) => item.CodeSubheading),
    ),
  ).length;

  const uniqueItemsActualMonth = Array.from(
    new Set(
      data
        .filter((item) => item.month === actualMont)
        .map((item) => item.CodeSubheading),
    ),
  ).length;

  const improvement = uniqueItemsActualMonth - uniqueItemsPastMonth;
  const percentageUniqueItems = (improvement / uniqueItemsPastMonth) * 100;

  return {
    uniqueItemsActualMonth,
    percentageUniqueItems,
  };
};

//main export category
interface CategoryTotals {
  [key: string]: number;
}

export const getMainExportCategory = (actualMonth: string) => {
  //current month
  const categoryTotalsActualMonth = data
    .filter((item) => item.month === actualMonth)
    .reduce<CategoryTotals>((acc, item) => {
      const category = item.MainProdN4.PPN4BCEDescrip;
      const fobValue = parseFloat(item.SumOfFOBThousands);

      if (!acc[category]) {
        acc[category] = 0;
      }

      acc[category] += fobValue;
      return acc;
    }, {});

  let mostExportedCategoryActualMonth = null;
  let maxFOBValueActualMonth = 0;
  for (const [category, totalFOB] of Object.entries(
    categoryTotalsActualMonth,
  )) {
    if (totalFOB > maxFOBValueActualMonth) {
      mostExportedCategoryActualMonth = category;
      maxFOBValueActualMonth = totalFOB;
    }
  }

  //past month
  const pastMonth = "02";
  const categoryTotalsPastMonth = data
    .filter((item) => item.month === pastMonth)
    .reduce<CategoryTotals>((acc, item) => {
      const category = item.MainProdN4.PPN4BCEDescrip;
      const fobValue = parseFloat(item.SumOfFOBThousands);

      if (!acc[category]) {
        acc[category] = 0;
      }

      acc[category] += fobValue;
      return acc;
    }, {});

  let mostExportedCategoryPastMonth = null;
  let maxFOBValuePastMonth = 0;
  for (const [category, totalFOB] of Object.entries(categoryTotalsPastMonth)) {
    if (totalFOB > maxFOBValuePastMonth) {
      mostExportedCategoryPastMonth = category;
      maxFOBValuePastMonth = totalFOB;
    }
  }


  return {
    mostExportedCategoryPastMonth,
    mostExportedCategoryActualMonth,
  };
};
