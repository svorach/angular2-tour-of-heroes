import {Component, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';

class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'app',
	directives: [FORM_DIRECTIVES],
	template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		<div><label>id: </label>{{hero.id}}</div>
		<div>
			<label>name: </label>
			<div><input [(ng-model)]="hero.name" placeholder="name"></div>
		</div>
		`
})

class AppComponent {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}

bootstrap(AppComponent);