import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'myCv';
	public data: any = {};

	constructor(
		public service: DataService
	) {

	}

	ngOnInit(): void {
		this.service.getData().subscribe((resp: any) => {
			this.data = resp;
		});
	}
}
