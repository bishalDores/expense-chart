"use client";

import { useState } from "react";
import data from "../expense-data.json";

type ExpenseType = {
  name: string;
  value: number;
  color: string;
};
export default function Home() {
  const [expense, setExpense] = useState({
    type: "1M",
    categories: data["1M"],
  });

  const selectExpenseCategory = (type: string, category: ExpenseType[]) => {
    setExpense({ type: type, categories: category });
  };

  return (
    <main className="page_wrapper">
      <h1>Expense Chart</h1>
      <div className="chart_box">
        <h2>Expenses</h2>
        <div className="expense_tabs">
          {Object.keys(data).map((item: string, index: number) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => selectExpenseCategory(item, (data as any)[item])}
                className={expense.type === item ? "active" : ""}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
