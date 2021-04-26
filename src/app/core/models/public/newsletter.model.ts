export interface datosNewsletter {
    email: string;
}

export interface datosNewsletterResponse {
    errorCode: string;
    message: string;
    status: string;
    data?: {
        _id: string;
        email: string;
        creationDate:  string;
        __v: Number;
    }
}