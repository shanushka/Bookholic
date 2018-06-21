import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService{
constructor(private http:Http)
{

}

storeServers(servers:any[])
{
 return this.http.post('https://first-af1a9.firebaseio.com/data.json',servers);
}

storeSignup(servers:any[])
{
	return this.http.post('https://first-af1a9.firebaseio.com/signup',servers);
}
getServers()
{
	return this.http.get("https://bookholic-28cc3.firebaseio.com/books.json");
}

}