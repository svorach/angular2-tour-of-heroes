import {Component, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';

class Hero {
	id: number;
	name: string;
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Component({
	selector: 'app',
	directives: [FORM_DIRECTIVES, NgFor],
	template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		<ul class="heroes">
			<li *ng-for="#hero of heroes">
				<span class="badge">{{hero.id}}</span> {{hero.name}}</a>
			</li>
		</ul>
		<div><label>id: </label>{{hero.id}}</div>
		<div>
			<label>name: </label>
			<div><input [(ng-model)]="hero.name" placeholder="name"></div>
		</div>
		`
})

class AppComponent {
	public title = 'Tour of Heroes';
	public heroes = HEROES;
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}

bootstrap(AppComponent);