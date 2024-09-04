import type { TooltipItem } from "chart.js";

export const formattAmountsMoney = (amount: number) => {
  const realValue = amount * 1000;

  return `${realValue.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;
};

/**
 * add a custom title to the chart tooltip
 */
export const addCustomTitleToolTip = (
  context: TooltipItem<"line">[],
  labelPrefix: string,
) => {
  return `${labelPrefix}: ${context[0].label}`;
};
