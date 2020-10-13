import { Field, Float, ID, Int, InterfaceType, ObjectType } from "@nestjs/graphql";
import { assertInterfaceType, isInterfaceType } from "graphql";
import { type } from "os";
import { Interface } from "readline";
import {BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/user/user.model";


@ObjectType()
@Table({timestamps:true,
    paranoid:true})
export class Profile extends Model<Profile> {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({type:DataType.UUID})
    @Field(type => ID)
    id:string

    @Unique
    @ForeignKey(()=> User)
    @Column({type:DataType.UUID})
    @Field(type => ID)
    userId:string

    @Column({type:DataType.TEXT})
    @Field({nullable:true})
    bio?:string

    @Column
    @Field({nullable:true})
    gender?:string

    @Column({type:DataType.DATE})
    @Field(type =>Date ,{nullable:true})
    birthdate?:Date

    @Column
    @Field({nullable:true})
    city?:string

    @Column({type:DataType.TEXT})
    @Field({nullable:true})
    currentWeight?:string

    @Column
    @Field({nullable:true})
    height?:string

    
    @Column
    @Field({nullable:true})
    howActiveIam?:string

    @Column
    @Field({nullable:true})
    myGoal?:string

    @Column
    @Field({nullable:true})
    myGoalWeight?:string
    
    @BelongsTo(()=>User, 'userId')
    @Field(type => User,{nullable:true})
    user?:User
}