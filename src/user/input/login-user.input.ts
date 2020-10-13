import { Field, InputType } from "@nestjs/graphql"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column } from "sequelize-typescript"

@InputType()
export class LoginUser{
    

    @IsNotEmpty()
    @IsEmail()
    @Field()
    email:string

    
    @IsNotEmpty()
    @MinLength(6)
    @Field()
    password:string 


}  
     