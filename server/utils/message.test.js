const expect = require('expect');

const {generateMessage,generateLocationMessage} =require('./message');

describe('generateMessage',() =>{
    it('should generate a message' ,() =>{
        var from='Priyanka';
        var text = 'Hello';
        var message  = generateMessage(from,text);

       // expect(message.createdAt).toBe('number');
        expect(message.text).toBe(text);
        expect(message.from).toBe(from);
    });    
});

describe('generateLocationMessage',() =>{
    it('should generate correct location object' ,() =>{
        var from='Priyanka';
        var latitude = 13;
        var longitude = 35;
        var url = 'https://google.com/maps?q=13,35';
        var message  = generateLocationMessage(from,latitude,longitude);

       // expect(message.createdAt).toBe('number');
        expect(message.url).toBe(url);
        expect(message.from).toBe(from);
    });    
});