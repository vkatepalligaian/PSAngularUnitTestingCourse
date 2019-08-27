import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('Heroes Component', () => {
    let component: HeroesComponent;
    let HEROES;
    let HeroesMockService;

    beforeEach(() => {
        // on every testcase in the sense of it
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
        ]
        // creating a dummy mock service using jasmine
        HeroesMockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        // assigning a mock service to component
        component = new HeroesComponent(HeroesMockService);
    })

    describe('Delete here', () => {

        it('Delete a Hero', () => {
            HeroesMockService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[1]);
            
            expect(component.heroes.length).toBe(9);
        })
    })
})
