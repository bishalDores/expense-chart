"use client";

import data from "../expense-data.json";

export default function Home() {
  return (
    <main className="page_wrapper">
      <h1>Expense Chart</h1>
      <div className="chart_box">
        <h2>Expenses</h2>
        <div className="expense_tabs">
          <button className="active">1m</button>
          <button>6m</button>
          <button>1y</button>
          <button className="active">all time</button>
        </div>
      </div>
    </main>
  );
}
