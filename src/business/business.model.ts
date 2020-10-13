import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/user/user.model";
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { fileURLToPath, Url } from "url";
import { makeExecutableSchema, UrlLoader } from "graphql-tools";
import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Upload } from "./upload";
import { DataTypes } from "sequelize/types";
import { Max, max } from "class-validator";

 
const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
      scalar Upload
    `,
    resolvers: {
      Upload: GraphQLUpload,
    },
  });

@ObjectType()
@Table({timestamps:true,
        paranoid:true})
export class Business extends Model<Business>{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({type:DataType.UUID})
    @Field()
    id:string

    @Unique
    @ForeignKey(()=> User)
    @Column({type:DataType.UUID})
    @Field(type => ID)
    userId:string
      
    @BelongsTo(()=>User, 'userId')
    @Field(type => User,{nullable:true})
    user?:User

    @Column
    @Field({nullable:true})
    mainCategory?:string

    @Column
    @Field({nullable:true})
    subCategory?:string

    
    @Column({type:DataType.STRING})
    @Field(type => GraphQLUpload)
    img:Upload
    
    @Column
    @Field({nullable:true})
    businessName?:string

    @Column
    @Field({nullable:true})
    aboutBusiness?:string

    @Column
    @Field({nullable:true})
    customerGender?:string

    @Column
    @Field({nullable:true})
    businessPhoneNum?:string

    @Column
    @Field({nullable:true})
    webSite?:string

    @Column
    @Field({nullable:true})
    socialMedia?:string

    @Column({type:DataType.STRING})
    @Field(type => GraphQLUpload)
    businessImg:Upload




}