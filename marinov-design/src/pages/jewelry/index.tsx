import Product from "@/components/Products/Product";
import { IProductProps } from "@/types/ProjectTypes";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import style from "../../components/Products/style.module.css";
import React from "react";
import Filters from "@/components/Products/Filters";
const API_URL = "http://localhost:5001";
interface IProductsPage {
  productsData: IProductProps[];
}
const JewelryPage: NextPage<IProductsPage> = ({ productsData }) => {
  console.log(productsData);
  return (
    <div className={style.MainProductsPage}>
      <Filters />
      <div className={style.ProductJewelryPage}>
        {productsData.map((productCard) => (
          <Product key={productCard.id} {...productCard} />
        ))}
      </div>
    </div>
  );
};

export default JewelryPage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    // const productsData = res.data
    return {
      props: {
        productsData: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [], // Return an empty array if there's an error
      },
    };
  }
};
