import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FetchdataService  {
public _data: Array<any> = [];
  constructor(private _http: HttpClient) {
   // fetch("https://jsonplaceholder.typicode.com/posts")
    //.then((res) => res.json())
    //.then((data) => this.data.push( data ))
   // .catch((err) => console.log(err));
    _http.get('https://jsonplaceholder.typicode.com/posts')
  .subscribe(result=> this._data.push(result), err => console.log(err),
     () => console.log('fetching data done...'));
  }
  sendData() {
    this._http.post('https://jsonplaceholder.typicode.com/posts',{
      'title': 'Dudddmmy Post Title',
      'body' : 'Dummy Post Body sent'
    })
  .subscribe(result=> console.log(result), err => console.log(err),
     () => console.log('fetching data done...'));
  }

}
