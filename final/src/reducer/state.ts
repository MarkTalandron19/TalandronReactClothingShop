import { Product } from "../models";

export type ShopState = {
    products: Product[],
    total: number,
    addToCart: any,
    removeFromCart: any
}

export const initialState = {
    products: [],
    total: 0,
    addToCart: null,
    removeFromCart: null,
}