import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) {}
  companiesAll(){
    return []
  }

  liquidSolutionsAll(){
    return {}
 }
 liquidSolutionsAdd(data){
    return {}
 }
 user(){
  return {}
}
}
