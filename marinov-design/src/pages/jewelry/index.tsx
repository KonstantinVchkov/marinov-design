import Product from "@/components/Products/Product";
import { IProductProps } from "@/types/ProjectTypes";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import style from "../../components/Products/style.module.css";
import React, { useState } from "react";
import Filters from "@/components/Products/Filters";
import router from "next/router";
const API_URL = "http://localhost:5001";
interface IProductsPage {
  productsData: IProductProps[];
  resProductsFilter: IProductProps[];
}
const JewelryPage: NextPage<IProductsPage> = ({
  productsData,
}) => {
  const handleFilterSelect = (filterValue: string) => {
    // console.log('searchInput',filterValue)
    router.push(
      filterValue === "All items"
        ? "/jewelry"
        : `/jewelry?category=${filterValue}`
    );
  };
  
  
  return (
    <div className={style.MainProductsPage}>
      <Filters onFilterSelect={handleFilterSelect}  />
      <div className={style.ProductJewelryPage}>
        {productsData.map((productCard) => (
          <Product key={productCard.id} {...productCard} />
        ))}
      </div>
    </div>
  );
};

export default JewelryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  try {
    let url = `${API_URL}/products`;
    if (query.category) {
      url += `?category=${query.category}`;
    }
    if (query.search) {
      url += query.category ? `&` : `?`;
      url += `category=${query.search}`;
    }

    const res = await axios.get(url);
    return {
      props: {
        productsData: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        productsData: [],
      },
    };
  }
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { query } = context;

//   try {
//     const url = query.category
//       ? `${API_URL}/products?category=${query.category}`
//       : `${API_URL}/products`;

//     const res = await axios.get(url);
//     return {
//       props: {
//         productsData: res.data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return {
//       props: {
//         productsData: [],
//       },
//     };
//   }
// };
