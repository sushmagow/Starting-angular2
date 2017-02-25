import {Component} from 'angular2/core';

@Component({
	selector: 'sec-app',
	template:`
		<h1>Second App by {{name}}</h1>
	`
})
export class SecondComponent{
	name = 'test'
}