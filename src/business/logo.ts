import { Args, Extensions, Mutation, Resolver } from "@nestjs/graphql";
import { rejects } from "assert";
import { createWriteStream } from "fs";
import { GraphQLUpload } from "graphql-tools";
import { Upload } from "./upload";


@Resolver()
export class logoResolver {
    @Mutation(()=> Boolean)
    async addLogo(@Args('logo') {createReadStream,filename } : Upload):Promise<Boolean>{
        return new Promise(async (resolve,reject) => 
        createReadStream().pipe(createWriteStream(__dirname + `/src/images/${filename}`))
        .on('finish',()=>resolve(true))
        .on('error',()=>reject(false))
        )
    }
}