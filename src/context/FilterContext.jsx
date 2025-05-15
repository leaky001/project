import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";


const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}


const FilterContext = createContext(filterInitialState);


export const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    const initialProductList = (products) => {
        console.log(products)

        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }


    const bestSeller = (product) => {
        return state.bestSellerOnly ? product.filter(product => product.best_seller === true): product
    }

    const sort = (product) => {
        if(state.sortBy === "lowtohigh") {
            return product.sort((a, b) => Number(a.price) - Number(b.price))

        }

        if(state.sortBy === "hightolow") {
            return product.sort((a,b) => Number(b.price) - Number(a.price))
        }

        return product
    }

    const inStock = (product) => {
        return state.onlyInStock ? product.filter(product => product.in_stock === true): product
    }


const rating = (products) => {
    if(state.ratings === "4STARSABOVE") {
        return products.filter(product => product.rating >= 4)
    }
    if(state.ratings === "3STARSABOVE") {
        return products.filter(product => product.rating >= 3)
    }
    if(state.ratings === "2STARSABOVE") {
        return products.filter(product => product.rating>= 2)
    }
    if(state.ratings === "1STARSABOVE") {
        return products.filter(product => product.rating >= 1)
    }

    return products

}



const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));


const value = {
    state, 
    dispatch,
    products: filteredProductList,
    initialProductList
}




return (
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
)

}



export const useFilter = () => {
    const context = useContext(FilterContext);
    

    return context
}