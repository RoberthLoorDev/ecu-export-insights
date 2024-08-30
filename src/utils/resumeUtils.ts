import { data } from "../data/data";

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
