import {obj} from "./extra/types";

export class BadResponse extends Error {
    response
    constructor(response, message = 'Bad Response') {
        super(message);
        this.response = response
    }
}

export class MalformedResponse extends Error {
    response
    missingData
    constructor(response, missingData) {
        super('Malformed Response');
        this.response = response
        this.missingData = missingData
    }
}

export class BadJSONResponse extends BadResponse {
    constructor(
        response: Response,
        public data,
        public checkedField: string,
        public successValues: obj
    ) {
        super(response, 'Json Response does not indicates success');
    }
}

export class BadHTTPStatusResponseError extends BadResponse {
    constructor(response: Response) {
        super(response, 'Response status code does not indicate success: ' +
            response.status + ' ' + response.statusText
        )
    }
}

export class BadProtobufResponse extends BadResponse {
    eresult: number
    constructor(response: Response, eresult: string | number) {
        super(response, 'Protobuff response code does not indicate success ' + eresult);
        this.eresult = Number(eresult)
    }
}