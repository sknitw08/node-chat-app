const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Jen';
        let text = 'Some message';
        let message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from,text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        let from = 'Jen';
        let lat = 33.17;
        let long = 77.18;
        let url = "https://www.google.com/maps?q=33.17,77.18"
        let message = generateLocationMessage(from, lat, long);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from,url });
    });
});