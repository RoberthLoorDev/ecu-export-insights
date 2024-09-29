import { data } from "../data/data";

export const getMostWeightCategories = (
  month: string,
  numberOfData: number,
) => {
  const filteredData = data.filter((item) => item.month === month);

  const sumWeightCategories = filteredData.reduce(
    (acc, item) => {
      const category = item.MainProdN4.PPN4BCEDescrip;
      const SumOfMTNetWeight = parseFloat(item.SumOfMTNetWeight);

      if (!acc[category]) acc[category] = 0;
      acc[category] = acc[category] = SumOfMTNetWeight;

      return acc;
    },
    {} as { [key: string]: number },
  );

  const groupedData = Object.keys(sumWeightCategories).map((item) => ({
    category: item,
    weight: sumWeightCategories[item],
  }));

  //order data
  groupedData.sort((a, b) => b.weight - a.weight);
  const partData = groupedData.slice(0, numberOfData);
  console.log(partData);

  const onlyCategories = partData.map((item) => item.category);
  const onlyWeights = partData.map((item) => item.weight);

  console.log(onlyCategories);

  return {
    onlyCategories,
    onlyWeights,
    groupedData,
  };
};
