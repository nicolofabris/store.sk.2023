import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
      pName: "Jacket",
      price: 45,
      img: "#",
    },
    {
      pName: "Dress",
      price: 5,
      img: "#",
    },
    {
      pName: "Shoes",
      price: 50,
      img: "#",
    },
    {
      pName: "Boots",
      price: 30,
      img: "#",
    },
    {
      pName: "Bag",
      price: 45,
      img: "#",
    },
  ];

const productSlice = createSlice({
    name: 'Products',
    initialState
})

export default productSlice