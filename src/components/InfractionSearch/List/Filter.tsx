import React from "react";

interface IFilter {
  onFilter: (startDate: string) => void;
}

export const Filter: React.FC<IFilter> = ({ onFilter }) => {

  const [filterValue, setFilterValue] = React.useState<string>("0");
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFilter(filterValue);
  };
  
  return (
    <>
      <form onSubmit={handleFormSubmit} className="">
        <label
          htmlFor="hs-trailing-button-add-on-with-icon-and-button"
          className=""
        >
          Label
        </label>
        <div className="">
          <input
            type="text"
            onChange={(e) => setFilterValue(e.target.value)}
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className=""
          />
          <div className="">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <button
            type="submit"
            className=""
          >
            ຄົ້ນຫາ
          </button>
        </div>
      </form>
    </>
  );
};
