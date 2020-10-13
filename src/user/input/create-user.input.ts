import { Field, Float, InputType, Int } from "@nestjs/graphql"
import { IsEmail, isMobilePhone, IsMobilePhone, IsNotEmpty, IsNumber, length, Min, MinLength } from "class-validator"
import { Length } from "sequelize-typescript"



@InputType()
    export class NewUser{
        
        
        @IsNotEmpty()
        @IsEmail()
        @Field()
        email:string
        
        @IsNotEmpty()
        @MinLength(6)
        @Field()
        password:string 
        
        @IsNotEmpty()
        @Field()
        firstname:string

        @IsNotEmpty()
        @Field()
        lastname:string

        @IsNotEmpty()
        @IsMobilePhone()
        @MinLength(10)
        
        @Field({nullable:true})
        tel?:string


    }
