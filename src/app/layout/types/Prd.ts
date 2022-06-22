
export type Prd = {
    _id: string,
    name: string,
    price: number,
    img: string,
    desc: string,
    category: string
}
export type PrdAdd = {
    name: string,
    price: number,
    img: string,
    desc: string,
    category: string
}
export type cate = {
    _id: string,
    name: string,
    status: number
}
export type PrdCate = {
    category: {
        _id: string,
        name: string,
        status: number
    },
    products: Prd[]
}

export type bookcart = {
    _id: string,
    name: string,
    price: number,
    img: string,
    quantity: number
}