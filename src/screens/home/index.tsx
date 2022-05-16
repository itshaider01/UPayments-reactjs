import { HeaderTop } from "../../components/common/Header/HeaderTop";
import Products from "../../components/screens/Home/Products";
import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../../interface";
import { useAppDispatch } from "../../redux/hooks";
import { setProducts } from "../../redux/productsSlice";
import { setCategories } from "../../redux/categorySlice";
import HeaderBottom from "../../components/common/Header/HeaderBottom";

interface IProductProps {}

const Home: React.FC<IProductProps> = () => {
  const [category, setCategory] = useState<string | undefined>();
  const [items, setItems] = useState<IProduct[]>([]);
  const dispatch = useAppDispatch();
  const axios = require("axios").default;

  useEffect(() => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
      .then((res: { data: IProduct[] }) => {
        dispatch(setProducts(res.data));
        setItems(res.data);
      })
      .catch((err: any) => console.log("error", err));

    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
      .then((res: { data: ICategory[] }) => {
        dispatch(setCategories(res.data));
      })
      .catch((err: any) => console.log("error", err));
  }, []);
  return (
    <>
      <div className="bg-gray-200">
        <HeaderTop />
        <HeaderBottom setCategory={setCategory} />
        <Products
          items={
            category
              ? items?.filter((item) => item.category === category)
              : items
          }
        />
      </div>
    </>
  );
};
export default Home;
