import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginUser } from 'src/user/input/login-user.input';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector:Reflector,
        
        @Inject(()=>UserService)
        private userService:UserService){}
 
    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
          return true;
        }
        const request = context.switchToHttp().getRequest();
        console.log(request);
        const user : User= request.user;
      
        return this.userService.findUser(user.id).pipe(map(user:User)=>{
          const hasRole = () => roles.indexOf(user.role) > -1 ;
          let hasPermission : boolean = false;
          console.log(hasRole);

          if(hasRole()){
            console.log('Has Role True');
            hasPermission=true
            return user && hasPermission;

            
          }
          
        })
  }


}
