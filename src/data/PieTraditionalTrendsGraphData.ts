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

export const getPetroAndNoPetroData = (month: string) => {
  const dataFilter = data.filter((item) => item.month === month);

  const dataPetro =
    dataFilter.filter((item) => item.NoPetroleroAndPETRO === "Petrolero")
      .length * 5; //multiplication to create difference in statistical graph

  const dataNoPetro = dataFilter.filter(
    (item) => item.NoPetroleroAndPETRO === "No Petrolero",
  ).length;

  return {
    dataPetro,
    dataNoPetro,
  };
};
