import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	public url: string = '';

	constructor(
		private HttpClient: HttpClient
	) { 
		this.url = `${environment.config}/data.json`;
	}

	getData() {
		return this.HttpClient.get<any>(this.url);
	}
}
