import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Hero Complete Component', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    })

    it('Should have correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'sai', strength: 2};

        expect(fixture.componentInstance.hero.name).toBe('sai');
    })

    it('Should render correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'sai', strength: 2};
        fixture.detectChanges();
        let ele = fixture.debugElement.query(By.css('a'));
        expect(ele.nativeElement.textContent).toContain('sai');
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('sai');

    })
})