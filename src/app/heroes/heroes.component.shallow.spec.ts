import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

@Component({
    selector: 'app-hero',
    template: '<div>test</div>'
  })
  class HeroComponent {
    @Input() hero: Hero;
  }

describe('Hero Complete Component', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let HeroMockService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 },
            { id: 14, name: 'Celeritas', strength: 15 },
            { id: 15, name: 'Magneta', strength: 22 },
            { id: 16, name: 'RubberMan', strength: 50 },
            { id: 17, name: 'Dynama', strength: 43 },
            { id: 18, name: 'Dr IQ', strength: 4 },
            { id: 19, name: 'Magma', strength: 18 },
            { id: 20, name: 'Tornado', strength: 15 }
        ];
        // create a mock services
        HeroMockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        // create a Test layer
        TestBed.configureTestingModule({
            declarations: [HeroesComponent, HeroComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: HeroService,
                    useValue: HeroMockService
                }
            ]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    })

    it('should set heroes on init', () => {
        HeroMockService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(10);
    })

    it('should create each li for each hero', () => {
        HeroMockService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(10);
    })
})

