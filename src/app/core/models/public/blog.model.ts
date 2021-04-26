export interface listadoBlog  {
    errorCode: string;
    message: string;
    status: string;
    data: Blog;
}

export interface detalleBlog  {
    errorCode: string;
    message: string;
    status: string;
    data: Doc;
}

export interface Blog{
    docs: Doc[];
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


export interface Doc {
    category: string[];
    _id: string;
    title: string;
    image: string;
    body: string;
    type: string;
    creationDate: Date;
    alias: string;
    publish?: string;
    __v?: number;
}

