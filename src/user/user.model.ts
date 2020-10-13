import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { IsMobilePhone, IsPhoneNumber, isPhoneNumber, MinLength } from "class-validator";
import { BeforeFind, BelongsTo, Column, DataType, Default, HasOne, IsEmail, Length, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { NUMBER } from "sequelize/types";
import { Business } from "src/business/business.model";
import { Profile } from "src/profile/profile.model";

export enum UserRole {
    ADMIN ='admin',
    USER = 'user'
}



@ObjectType()
@Table({
    timestamps:true,
    paranoid:true
})
export class User extends Model<User>{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({type:DataType.UUID})
    @Field(type => ID)
    id:string

    @Column
    @Field()
    firstname:string

    @Column
    @Field()
    lastname:string

    @Unique
    @IsEmail
    @Column
    @Field()
    email:string

    @Unique
    @Length({min:10,max:15})
    @Column
    @Field({nullable:true})
    tel?:string
    
    @Column({type:DataType.TEXT,allowNull:false})
    @Field()
    password:string

    @HasOne(()=>Profile)
    @Field(type => Profile,{nullable:true})
    profile?:Profile

    @HasOne(()=>Business)
    @Field(type => Business,{nullable:true})
    businessProfile:Business

    @Column({type:DataType.ENUM })
    @Field(type => UserRole)
    role:UserRole
}

 