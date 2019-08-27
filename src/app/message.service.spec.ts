import { MessageService } from "./message.service";

describe('Message Service', () => {
    let service: MessageService

    beforeEach(() => {
        service = new MessageService();
    });

    it('Message should be added', () => {
        service.add('message');
        expect(service.messages.length).toBe(1);
    })

    it('Message should be cleared', () => {
        service.add('message');
        service.clear();
        expect(service.messages.length).toBe(0);
    })

})