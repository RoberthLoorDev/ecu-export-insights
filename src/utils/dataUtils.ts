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
