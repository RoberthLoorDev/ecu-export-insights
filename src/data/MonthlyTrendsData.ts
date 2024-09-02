import type { ExportationDataInterface } from "../interfaces/interfaces";
import { data } from "./data";

//line graph of total of income generated

export const getRevenuesPerMonth = (
  currentMonth: string,
  pastMonth: string,
) => {
  //current month
  const currentMonthData = data.filter((item) => item.month === currentMonth);
  const amountCurrentMonth = currentMonthData.reduce(
    (acc, item) => acc + Number(item.SumOfFOBThousands),
    0,
  );

  //past month
  const pastMonthData = data.filter((item) => pastMonth === item.month);
  const amountPastMonth = pastMonthData.reduce(
    (acc, item) => acc + Number(item.SumOfFOBThousands),
    0,
  );

  const improvement = amountCurrentMonth - amountPastMonth;
  const percentageDifference = (improvement / amountPastMonth) * 100;

  //extract the money for the selected month

  return {
    percentageDifference,
    amountPastMonth,
    amountCurrentMonth,
  };
};

export const extractAmountAndChaptersMonth = (currentMonth: string) => {
  // Group data by month
  const monthDataCurrentMonth = data.filter(
    (item) => item.month === currentMonth,
  );

  // Group data by chapters
  const groupedData = monthDataCurrentMonth.reduce(
    (acc: { [key: string]: number }, item) => {
      const chapterKey = `chapter_${item.chapter}`;
      const sumOfFOB = parseFloat(item.SumOfFOBThousands);

      if (!acc[chapterKey]) {
        acc[chapterKey] = 0;
      }

      acc[chapterKey] += sumOfFOB;
      return acc;
    },
    {},
  );

  //obtain separate chapter arrays and their corresponding values
  const chaptersArray = Object.keys(groupedData).map(
    (key) => `${key.split("_")[1]} `,
  );

  const valuesArray = Object.values(groupedData).map((item) =>
    Number(item.toFixed(2)),
  );

  return { groupedData, chaptersArray, valuesArray };
};
