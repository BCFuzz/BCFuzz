const o2 = {
    "maxByteLength": 1073741823,
};
o2.toJSON = o2;
function f3() {
    return 1e-15;
}
class C4 extends f3 {
    constructor(a6, a7) {
        for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
        }
        super();
        function f19() {
            return f3;
        }
        Object.defineProperty(Math, Symbol.toPrimitive, { configurable: true, get: f19 });
        const v23 = Date(1e-15);
        const o24 = {
            [Math]: v23,
            "h": o2,
        };
        o24.toJSON = f19;
        JSON.stringify(o24);
    }
}
new C4(C4, 1e-15);
gc();
