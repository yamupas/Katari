export interface Banner {
    _id: string;
    state: string;
    text1: string;
    text2: string;
    description: string;
    design: boolean;
    image: string;
    creationDate: Date;
}

export interface Banners {
    errorCode: string;
    message: string;
    status: string;
    data: Banner[];
}
