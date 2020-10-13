import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUrl, IsUUID } from "class-validator";
import { startsWith } from "sequelize/types/lib/operators";
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { fileURLToPath, Url } from "url";
import { UrlLoader } from "graphql-tools";
import { GraphQLNonNull, GraphQLObjectType } from "graphql";
     

@InputType()
export class BusinessProfile {
    
    
    @IsNotEmpty()
    @IsUUID('4')
    @Field(type => ID)
    userId:string
    
    @Field({nullable:true})
    mainCategory?:string

    @Field({nullable:true})
    subCategory?:string

    @Field()
    img:string
    
    @Field({nullable:true})
    businessName?:string

    @Field({nullable:true})
    aboutBusiness?:string
    
    @Field({nullable:true})
    customerGender?:'Male'|'Female'

    @Field({nullable:true})
    businessPhoneNum?:string




    @IsUrl()
    @Field({nullable:true})
    webSite?:string

    
    @Field({nullable:true})
    socialMedia?:string

    //businessImg

}