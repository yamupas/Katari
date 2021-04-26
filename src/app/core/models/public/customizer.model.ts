export interface newCustomizer {
    category: string;
}

export interface Customizer {
    size: Array<any>;
    _id: string;
    category: string;
    code: string;
    name: string;
    state: string;
    minuature: string;
    default: boolean;
    modelID: ModelId;
    heelHeight: HeelHeight[];
    id: string;
}


export interface ModelId {
    url: string;
}

export interface HeelHeight {
    code: string;
    name: string;
    state: string;
    price: boolean;
    miniature: string;
    modelId: ModelId;
    shoeTips: ShoeTip[];
}

export interface ShoeTip {
    code: string;
    name: string;
    state: string;
    miniature: string;
    modelId: ModelId;
    design: Design[];
}

export interface Design {
    code: string;
    name: string;
    state: string;
    miniature: string;
    modelId: ModelIdExt;
}

export interface ModelIdExt {
    url: string;
    parts: ModelParts[];
}

export interface ModelParts {
    layerName: string;
    name: string;
    category: string;
    visible: string;    
}


export interface InitialMap {
    childID: string;
}

export interface ModelId4 {
    initialMap: InitialMap[];
    url: string;
}

export interface Accessory {
    code: string;
    name: string;
    state: string;
    modelId: ModelId4;
}


export interface CustomizerResponse {
    errorCode: string;
    message: string;
    status: string;
    data: Customizer[];
}
