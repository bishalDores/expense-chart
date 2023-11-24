export const formatNumbers = (value: number) => {
  let formattedNumber = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value).toString().split(".");

  return (
    <h2>
      {formattedNumber[0]}
      <span className="decimal">.</span>
      <span>{formattedNumber[1]}</span>
    </h2>
  );
};
