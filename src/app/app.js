var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            styles: ["\n\t\t.heroes-container {\n\t\t\tdisplay: flex;\n\t\t}\n\t  .heroes {\n\t  \tlist-style-type: none;\n\t  \tmargin-left: 1em;\n\t  \tpadding: 0;\n\t  \twidth: 10em;\n\t  \tflex: 1;\n\t \t}\n\t  .heroes li {\n\t  \tcursor: pointer;\n\t  \tposition: relative;\n\t  \tleft: 0;\n\t  \ttransition: all 0.2s ease;\n\t    line-height: 1em;\n\t    padding: 5px 0;\n\t  }\n\t  .heroes li:hover,\n\t  .heroes li.selected {\n\t  \tcolor: #369;\n\t  \tbackground-color: #EEE;\n\t  \tleft: .2em;\n\t  \tpadding: 5px;\n\t  \tborder-radius: 5px;\n\t  }\n\t  .heroes .badge {\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.1em 0.7em;\n\t    background-color: #369;\n\t    position: relative;\n\t    border-radius: 3px;\n\t  }\n\t  .selected-hero {\n\t  \tflex: 3;\n\t  \tpadding: 0 20px;\n\t  \ttransition: all 1s ease;\n\t  \tanimation: 1s fadeIn;\n\t  }\n\n\t  @keyframes fadeIn {\n\t  \t0% {\n\t  \t\topacity: 0;\n\t  \t}\n\n\t  \t100% {\n\t  \t\topacity: 1;\n\t  \t}\n\t  }\n  "],
            template: "\n\t\t<div class=\"heroes-container\">\n\t\t\t<ul class=\"heroes\">\n\t\t\t\t<li *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\" [ng-class]=\"getSelectedClass(hero)\">\n\t\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"selected-hero\" *ng-if=\"selectedHero\">\n\t\t\t\t<h1>{{title}}</h1>\n\t\t\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t\t\t<div><label>id: </label>{{selectedHero.id}}</div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<div><input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map