import React from "react";
import { Filter } from "../types/todo.type";

type FilterButtonsProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  setTodos: () => void
};

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, setFilter, setTodos }) => {
  const filterOptions = [
    { value: Filter.All, label: "Все" },
    { value: Filter.Active, label: "Активные" },
    { value: Filter.Completed, label: "Выполненные" },
  ];

  return (
    <div className="mb-4">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setFilter(option.value)}
          className={`mr-2 ${
            filter === option.value
              ? "bg-blue-500 text-white hover:bg-blue-700 transition"
              : "bg-gray-300 hover:bg-gray-400 transition"
          } px-4 py-2 rounded`}
        >
          {option.label}
        </button>
      ))}
      <button
        onClick={setTodos}
        className="mr-2  px-4 py-2 rounded hover:text-red-500 transition"
      >
        Очистить
      </button>
    </div>
  );
};

export default FilterButtons;
