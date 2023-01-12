import { Component, Input } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Component({
	selector: 'app-study',
	templateUrl: './study.component.html',
	styleUrls: ['./study.component.scss']
})
export class StudyComponent {

	@Input() studies: any = [];

	formatDate(row: any) {
		return moment(row).format('MMMM-YYYY')
	}
}
