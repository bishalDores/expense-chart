"use client";

import { ExpenseType } from "@/app/page";
import { formatNumbers } from "@/utils/helpers";
import React from "react";

const ExpenseChart = ({ expenses }: { expenses: ExpenseType[] }) => {
  const cx = 50;
  const cy = 50;
  const strokeWidth = 10;
  const radius = 42;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;

  let filled = 0;

  const sum = expenses.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  const ratio = 100 / sum;

  expenses.forEach((obj) => {
    const itemRatio = ratio * obj.value;

    obj.itemRatio = itemRatio;
    obj.angle = (filled * 360) / 100 + startAngle;
    obj.offset = dashArray - (dashArray * itemRatio) / 100;
    obj.filled = filled;

    filled += itemRatio;
  });

  return (
    <>
      <div className="chart_wrapper">
        <svg width="300px" height="300px" viewBox="0 0 100 100">
          {expenses.map((item, index) => (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r={radius}
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={item.color}
              strokeDasharray={dashArray}
              strokeDashoffset={item.offset}
              transform={`rotate(${item.angle} ${cx} ${cy})`}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`${startAngle} ${cx} ${cy}`}
                to={`${item.angle} ${cx} ${cy}`}
                dur="1s"
              />
            </circle>
          ))}
        </svg>
        <div className="total_amount">{formatNumbers(sum)}</div>
      </div>

      <ul className="expense_category">
        {expenses.map((item, index) => (
          <li key={index++} className="item-name">
            <span style={{ background: item.color }}></span>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExpenseChart;
