export interface listadoProductos {
    errorCode: string;
    message: string;
    status: string;
    data: Data;
}

export interface Data {
    docs: Producto[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage?: any;
    nextPage?: any;
}

export interface Producto{
    size:Array<String>;
    category: Array<String>;
    _id: string;
    name: string;
    price: Price;
    sku: string;
    quantity: string;
    season: string;
    imagePath:string;
    state:String;
    collection?: string;
    productTemplate?: string;
    discount?: number;
    creationDate?: Date;
}

export interface Price{
    taxExclude:string;
    taxIncludePrice:string;
    tax: string;
    currency: string;

}