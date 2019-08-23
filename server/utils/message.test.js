const expect = require('expect');

const {generateMessage} =require('./message');

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