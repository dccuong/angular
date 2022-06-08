export type Prd = {
    _id: string,
    name: string,
    price: number,
    img: string,
    desc: string,
}
export type PrdAdd = {
    name: string,
    price: number,
    img: string,
    desc: string,
    category: string
}