import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: 'Men',
        items: ['Coats', 'Jacket', 'Party Wear', 'Shirts']
    },
    {
        category: 'Women',
        items: ['Coats', 'Jacket', 'Party Wear', 'Shirts']
    },
    {
        category: 'Kids',
        items: ['Coats', 'Jacket', 'Party Wear', 'Shirts']
    },
]

const accordionSlice = createSlice({
    name: 'AccordionSlice',
    initialState
})


export default accordionSlice