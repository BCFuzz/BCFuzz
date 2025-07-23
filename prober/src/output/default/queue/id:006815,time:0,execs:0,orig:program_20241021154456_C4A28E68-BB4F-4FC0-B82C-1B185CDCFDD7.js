function f0() {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const o7 = {
            "maxByteLength": 1953043059,
        };
        const v9 = new ArrayBuffer(7, o7);
        const v11 = new Uint8Array(v9);
        v11[4];
    }
    new F1();
    new F1();
    const o15 = {
    };
    return o15;
}
const v16 = f0();
class C17 extends f0 {
    constructor(a19, a20) {
        a19.valueOf = f0;
        super();
        Math.imul(a19);
        a19 * a20;
    }
}
new C17(v16);
new C17(v16);
gc();
