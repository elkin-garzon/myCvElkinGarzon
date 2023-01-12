import { Component, Input } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

	@Input() experiences: any = [];

	//row.mes = moment().month(row.mes - 1).format('MMM')
	ngOnInit(): void {
	}

	formatDate(row: any) {
		return moment(row).format('MMMM-YYYY')
	}

	rederList(row:string){
		return row.split(',');
	}
}
