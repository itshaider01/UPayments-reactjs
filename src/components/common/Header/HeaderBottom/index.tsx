import React, { useEffect, useState } from "react";
import { selectCategory } from "../../../../redux/categorySlice";
import { useAppSelector } from "../../../../redux/hooks";

interface IProps {
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface IOption {
  label: string;
  value: string;
}

const HeaderBottom: React.FC<IProps> = ({ setCategory }) => {
  const data = useAppSelector(selectCategory);

  const [options, setOptions] = useState<IOption[]>([]);

  useEffect(() => {
    const arrayOfcategories = data.map((item) => {
      const newObject = {
        label: item.name,
        value: item.name,
      };
      return newObject;
    });

    setOptions(arrayOfcategories);
  }, [data]);

  const onChangeEvent = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex flex-row item-center justify-between mt-12 mx-20">
      <p className="bg-white flex flex-row items-center h-10 rounded-xl content-center px-4">
        Apple Watch, Samsung S21, Macbook Pro,...
      </p>
      {/* <div className=""> */}
      <select onChange={onChangeEvent} className="w-60 h-10 rounded-xl px-2">
        <option value="" disabled selected>
          Category
        </option>
        {options.map((item) => {
          return <option value={item.value}>{item.label}</option>;
        })}
      </select>
      {/* <button onClick={() => setCategory("")}>clear</button>
      </div> */}
    </div>);
};

export default HeaderBottom;
