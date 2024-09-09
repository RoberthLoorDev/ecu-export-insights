import { data } from "../data/data";

export const getTradicionalData = (month: string) => {
  const dataFilter = data.filter((item) => item.month === month);

  const dataTraditional = dataFilter.filter(
    (item) => item.TraditionalAndNoTrad === "TRADICIONAL",
  ).length;

  const dataNoTraditional = dataFilter.filter(
    (item) => item.TraditionalAndNoTrad === "NO TRADICIONAL",
  ).length;

  return {
    dataTraditional,
    dataNoTraditional,
  };
};
