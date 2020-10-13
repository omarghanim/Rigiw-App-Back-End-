import { Field, Float, ID, InputType, Int, InterfaceType, ObjectType } from "@nestjs/graphql";
import { IsArray, IsDate, isEnum, IsEnum, IsNotEmpty, IsObject, IsUUID, IS_ENUM } from "class-validator";
import { isType } from "graphql";
import { isGraphQLInterface } from "graphql-tools";
import { type } from "os";


@InputType()
export class AddProfile{

    @IsNotEmpty()
    @IsUUID('4')
    @Field(type => ID)
    userId:string

    @Field({nullable:true})
    bio?:string

    @Field({nullable:true})
    gender?:string

    @IsDate()
    @Field(type => Date ,{nullable:true})
    birthdate?:Date

    @Field({nullable:true})
    city?:string
    
    @Field({nullable:true})
    currentWeight?:string

    @Field({nullable:true})
    height?:string

    
    @IsNotEmpty()
    @Field({nullable:true})
    howActiveIam?:string

    @Field({nullable:true})
    myGoal?:string

    @Field({nullable:true})
    myGoalWeight?:string
}