import { Injectable,EventEmitter } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: "root"
})
export class CommonService {



  loaderr = new EventEmitter;
  sidebarEmmiter = new EventEmitter;
  datePicker = {
    config:{
      dateInputFormat: 'DD/MM/YYYY',
      adaptivePosition: true,
      isAnimated: true
    }

  }
  alert = Swal.mixin({
    confirmButtonColor: '#00B7F4',
    cancelButtonColor: '#3c3c3c',
    cancelButtonText: 'No',
    confirmButtonText: 'Yes',
    width: 300
  })
   toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  paginate = {
    firstText:"<i class='la la-angle-double-left'></i>",
    lastText:"<i class='la la-angle-double-right'></i>",
    nextText:"<i class='la la-arrow-right'></i>",
    previousText:"<i class='la la-arrow-left'></i>"

  }



  constructor( private http:HttpClient,private location:Location) {



   }
  short(item) {
    var html = '';
    item.split(' ').map(x => {
      html += x.charAt(0).toUpperCase();
    })
    return html;
  }


  goBack(e){
    e.preventDefault();
    this.location.back()
  }

  auth(){
    return (localStorage.getItem('token') ? true : false)
  }


  dateformat(val){
    let input = val;
    let format = new Date(input);
    let date  = `${format.getFullYear()}-${format.getMonth() + 1}-${format.getDate()}`;
    return date;
  }


  loader(item){
    this.loaderr.emit(item);
   }

   loaderAction(){
     return this.loaderr;
   }


   sidebarEmmiterEmit(){
    this.sidebarEmmiter.emit('');
   }
   sidebarEmmiterSubscribe(){
    return this.sidebarEmmiter;
  }



}
