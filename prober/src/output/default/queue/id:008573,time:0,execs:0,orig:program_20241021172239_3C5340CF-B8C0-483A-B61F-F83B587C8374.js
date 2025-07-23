const v0 = `
    try { Uint32Array(Uint32Array, Uint32Array, v0); } catch (e) {}
    const v4 = [v0,v0,v0,v0];
    const v6 = ["4294967296"];
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v11 = this.constructor;
        try { new v11(); } catch (e) {}
        for (let v13 = 0; v13 < 5; v13++) {
        }
        const v14 = [-9691,-10999,5,-128,-49986,2130003198,-45965,268435439,2,-9007199254740991];
        function F16() {
            if (!new.target) { throw 'must be called with new'; }
            v14.length |= 1000000000.0;
        }
    }
    new F7();
    class C19 {
    }
    class C20 extends C19 {
        constructor(a22, a23) {
            super();
            delete v6[7];
        }
    }
    new C20();
    Reflect.construct(Uint32Array, v4);
    /\u{12345}/myvis;
`;
eval(v0);
gc();
