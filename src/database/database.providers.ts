import { Sequelize } from "sequelize-typescript"
import { Business } from "src/business/business.model";
import { Profile } from "src/profile/profile.model";
import { User } from "src/user/user.model";


export const databaseProviders = [{
        provide:'SEQUELIZE',
        useFactory : async ()=> {
            const sequelize = new Sequelize({
              dialect:'postgres',
              host:'localhost',
              port:5432,
              username:'postgres',
              password:'last4digit',
              database:'rigowDB'
            });
            sequelize.addModels([User,Business,Profile])
            return sequelize.sync()
        }
}]