import type { TooltipItem } from "chart.js";

export const formattAmountsMoney = (amount: number) => {
  // Convert the number to a string with two decimal places
  let [integerPart, decimalPart] = amount.toFixed(2).split(".");

  // Add thin space as thousands separator
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  // Join the integer part and the decimal part with a point
  return `${integerPart}.${decimalPart}`;
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
