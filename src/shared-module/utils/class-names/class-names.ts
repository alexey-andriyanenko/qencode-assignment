export const classNames = (
  ...classes: (string | null | undefined | Record<string, boolean>)[]
): string => {
  return classes
    .filter((c) => !!c)
    .map((c) => {
      if (typeof c === "string") {
        return c;
      }

      // @ts-ignore
      return Object.keys(c)
        .filter((key) => c?.[key])
        .join(" ");
    })
    .join(" ");
};
