import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

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
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	styles:[`
		.heroes-container {
			display: flex;
		}
	  .heroes {
	  	list-style-type: none;
	  	margin-left: 1em;
	  	padding: 0;
	  	width: 10em;
	  	flex: 1;
	 	}
	  .heroes li {
	  	cursor: pointer;
	  	position: relative;
	  	left: 0;
	  	transition: all 0.2s ease;
	    line-height: 1em;
	    padding: 5px 0;
	  }
	  .heroes li:hover,
	  .heroes li.selected {
	  	color: #369;
	  	background-color: #EEE;
	  	left: .2em;
	  	padding: 5px;
	  	border-radius: 5px;
	  }
	  .heroes .badge {
	    font-size: small;
	    color: white;
	    padding: 0.1em 0.7em;
	    background-color: #369;
	    position: relative;
	    border-radius: 3px;
	  }
	  .selected-hero {
	  	flex: 3;
	  	padding: 0 20px;
	  	transition: all 1s ease;
	  	animation: 1s fadeIn;
	  }

	  @keyframes fadeIn {
	  	0% {
	  		opacity: 0;
	  	}

	  	100% {
	  		opacity: 1;
	  	}
	  }
  `],
	template: `
		<div class="heroes-container">
			<ul class="heroes">
				<li *ng-for="#hero of heroes" (click)="onSelect(hero)" [ng-class]="getSelectedClass(hero)">
					<span class="badge">{{hero.id}}</span> {{hero.name}}</a>
				</li>
			</ul>
			<div class="selected-hero" *ng-if="selectedHero">
				<h1>{{title}}</h1>
				<h2>{{selectedHero.name}} details!</h2>
				<div><label>id: </label>{{selectedHero.id}}</div>
				<label>name: </label>
				<div><input [(ng-model)]="selectedHero.name" placeholder="name"></div>
			</div>
		</div>
		`
})

class AppComponent {
	public title = 'Tour of Heroes';
	public heroes = HEROES;
	public selectedHero: Hero;

	onSelect(hero: Hero) { this.selectedHero = hero; }

	getSelectedClass(hero: Hero) {
		return { 'selected': hero === this.selectedHero };
	}
}

bootstrap(AppComponent);