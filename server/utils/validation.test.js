const expect= require('expect');

const {isRealString} = require('./validation');

describe('isRealString',()=>{
    it('should reject non-string values',()=>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject spaces',()=>{
        var res = isRealString('  ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space values',()=>{
        var res = isRealString('   pri');
        expect(res).toBe(true);
    });
});