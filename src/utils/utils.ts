import type { TooltipItem } from "chart.js";

export const formattAmountsMoney = (amount: number) => {
  const realValue = amount * 1000;

  return `${realValue.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;
};

//formatt weight
export const formattingLargeQuantities = (value: number) => {
  const formattedValue = value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
};

//add a custom title to the chart tooltip
export const addCustomTitleToolTip = (
  context: TooltipItem<"line">[],
  labelPrefix: string,
) => {
  return `${labelPrefix}: ${context[0].label}`;
};

// abbreviate quantities of very large numbers
export const abbreviateNumberAmount = (value: number) => {
  const realValue = value * 1000;

  if (realValue >= 1000000 && realValue <= 300000000) {
    return (realValue / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  return `$${realValue}`;
};
