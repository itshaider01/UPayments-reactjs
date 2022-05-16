import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IProduct } from "../../../interface";
import { HeaderTop } from "../../common/Header/HeaderTop";

import { selectCategory } from "../../../redux/categorySlice";
import { addProduct } from "../../../redux/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

interface IOption {
  label: string;
  value: string;
}

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const data = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [category, setCategory] = useState<string>();
  const [price, setPrice] = useState<string>("");

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
    target: { value: SetStateAction<string | undefined> };
  }) => {
    setCategory(e.target.value);
  };

  const axios = require("axios").default;

  const handleSubmit = () => {
    if (name.length == 0 || description.length == 0 || avatar.length == 0 || category?.length == 0 || price.length == 0) {
      alert("Please Fill the Empty Field Properly")
    }
    else {
      axios
        .post(
          "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/",
          {
            name,
            description,
            avatar,
            category,
            price,
            developerEmail: "haiderali0118@gmail.com",
          }
        )
        .then((res: { data: IProduct }) => {
          dispatch(addProduct(res.data));
        })
        .catch((err: any) => console.log("error", err));

      navigate("/");
    }
  };

  const CreateProductFun = (): JSX.Element => {
    return (
      <>
        <div className="flex flex-col items-center justify-between">
          <p className="font-semibold text-3xl py-12">Create Product</p>
          <input
            className="w-1/4 h-12 pl-6 my-3 rounded-xl"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            name="name"
          />
          <input
            className="w-1/4 h-12 pl-6 my-3 rounded-xl"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value);
            }}
            name="description"
          />
          <input
            className="w-1/4 h-12 pl-6 my-3 rounded-xl"
            type="text"
            placeholder="Image URL"
            value={avatar}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAvatar(e.target.value);
            }}
            name="avatar"
          />
          {/* <div className="flex flex-row items-center justify-between w-1/4 h-12 px-6 my-3 rounded-xl bg-white"> */}
          <select
            onChange={onChangeEvent}
            className="w-1/4 h-12 rounded-xl px-2"
          >
            <option value="" disabled selected>
              Category
            </option>
            {options.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
          {/* </div> */}
          <input
            className="w-1/4 h-12 pl-6 my-3 rounded-xl"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPrice(e.target.value);
            }}
            name="price"
          />
          <button
            className="w-1/4 h-12 pl-6 my-3 rounded-xl bg-white font-semibold text-xl"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="bg-gray-200">
      <HeaderTop />
      {CreateProductFun()}
    </div>
  );
};

export default CreateProduct;
