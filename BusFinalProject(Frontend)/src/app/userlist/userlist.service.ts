import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserList } from './userlist';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http:HttpClient) {
  }
  //creating Employee
  addUserList(user:UserList):Observable<UserList>{

    return this.http.post<UserList>("http://localhost:8081/BusApp/user", user);
  }

  getAllUserList():Observable<UserList[]>{
    // the result of get function. get fun will give you Observable<Employee[]>
    return this.http.get<UserList[]>("http://localhost:8081/BusApp/user");
  }

  getUserListById(userId:number):Observable<UserList>{
      return this.http.get<UserList>(`http://localhost:8081/BusApp/user/${userId}`);

  }

  deleteUserList(userId:number):Observable<UserList>{
    return this.http.delete<UserList>(`http://localhost:8081/BusApp/user/${userId}`);

  }

  updateuserList(user:UserList):Observable<UserList>{
    return this.http.put<UserList>("http://localhost:8081/BusApp/user",user);
  }

}

