import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class bookservice {
  item= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}

    constructor(public http:HttpClient) { }
  
    newuser(item:any)
    {   
      return this.http.post("http://localhost:3000/signup",{"product":item})
      .subscribe(data =>{console.log(data)})
    }
  getBook(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getProducts(){
    return this.http.get("http://localhost:3000/books");
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newBook(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/inserta",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editBook(product:any)
  {
    console.log('book update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/removeauthor/"+id)

  }
  editauthor(product:any)
  {
    console.log('author update')
    return this.http.put("http://localhost:3000/updatea",product)
    .subscribe(data =>{console.log(data)})
  }
}
