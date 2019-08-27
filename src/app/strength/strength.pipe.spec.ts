import { StrengthPipe } from "./strength.pipe";

describe('Strength Pipe', () => {

    it('if value is 5, it should returns week', () => {

        const pipe = new StrengthPipe();

        expect(pipe.transform(5)).toBe('5 (weak)');
    })

    it('if value is 10, it should returns strong', () => {

        const pipe = new StrengthPipe();
        
        expect(pipe.transform(10)).toBe('10 (strong)');
    })
})