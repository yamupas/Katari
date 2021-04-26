export interface Product {
    productId: string;
}

export interface Colection {
    _id: string;
    name: string;
    icon: string;
    portada: string;
    startDate: Date;
    endDate: Date;
    description: string;
    product: Product[];
    state: boolean;
    creationDate: Date;
}

export interface Colections {
    errorCode: string;
    message: string;
    status: string;
    data: Colection[];
}
