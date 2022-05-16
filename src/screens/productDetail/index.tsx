import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { HeaderTop } from "../../components/common/Header/HeaderTop";
import { IProduct } from "./../../interface";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
      )
      .then((res: { data: IProduct }) => {
        setProduct(res.data);
      })
      .catch((err: any) => console.log("error", err));
  }, [id]);

  const Product = (): JSX.Element => {
    return (
      <div className="mt-16  max-w-[1080px] m-auto px-24">
        <div className="flex flex-row border-b-black">
          <img
            className="object-contain h-56 w-60 rounded-xl"
            src={product?.avatar}
            alt="Product Img"
          />
          <div className="flex flex-col justify-between ml-8">
            <p className="text-4xl font-bold">{product?.name}</p>
            <p className="text-xl font-medium">${product?.price}</p>
          </div>
        </div>
        <div className="flex flex-col items-start mt-12">
          <p className="text-xl font-bold">Description</p>
          <p>{product?.description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        <HeaderTop />
        {Product()}
      </div>
    </>
  );
};
export default ProductDetail;
