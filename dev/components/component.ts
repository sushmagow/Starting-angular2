import {Component} from 'angular2/core';
import {SecondComponent} from './secondComponent';

//@Component is typescript decorator
@Component({
	selector: 'my-app',
	template:`
	<sec-app>Loading...</sec-app>
		<h1>Angular started by Sushma</h1>
		<p>HEY!!!!</p>

		`,
	directives: [SecondComponent]
	//templateUrl: '',
	//styleUrls:[] or styles:[]
	//#<element> (<event>)
	//class.<className> = positive condition
	//attribute directive
	//style attribute
})
export class AppComponent{
	
}
