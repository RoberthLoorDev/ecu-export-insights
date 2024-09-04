import { data } from "../data/data";
import { formattAmountsMoney } from "../utils/utils";

export const getMostExportedProductsBar = (month: string) => {
  const monthData = data.filter((item) => month === item.month);
  const sumDataCategories = monthData.reduce(
    (acc, item) => {
      const description = item.MainProdN4.PPN4BCEDescrip;
      const sumOfFOB = parseFloat(item.SumOfFOBThousands);

      if (!acc[description]) {
        acc[description] = 0;
      }

      acc[description] = acc[description] = sumOfFOB;

      return acc;
    },
    {} as { [key: string]: number },
  );

  const groupedData = Object.keys(sumDataCategories).map((key) => ({
    PPN4BCEDescrip: key,
    SumOfFOBThousands: sumDataCategories[key],
  }));

  //sort the data
  groupedData.sort((a, b) => b.SumOfFOBThousands - a.SumOfFOBThousands);

  const increasedExports = groupedData.slice(0, 5);
  const onlyCategories = increasedExports.map((item) => item.PPN4BCEDescrip);
  const onlyValues = increasedExports.map((item) => item.SumOfFOBThousands);

  const onlyValuesFormattMoney = onlyValues.map((item) =>
    formattAmountsMoney(item),
  );

  console.log(onlyValuesFormattMoney);
  console.log(onlyValues);

  return {
    increasedExports,
    onlyCategories,
    onlyValues,
  };
};
