import {Stream} from 'stream'

export interface Upload {
    filename : string
    type : string
    encoding:string
    createReadStream : () => Stream
}