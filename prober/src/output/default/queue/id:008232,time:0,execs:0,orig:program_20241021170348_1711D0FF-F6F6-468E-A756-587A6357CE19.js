function f0(a1, a2, a3) {
}
class C4 {
    constructor(a6, a7, a8) {
    }
}
for (let v9 = 0; v9 < 5; v9++) {
    const v10 = /\P{Decimal_Number}/mvgi;
    v10[Symbol.toPrimitive] = f0;
    const v13 = /Kdxyz{0,1}?/dyvi;
    function f14() {
    }
    function f15(a16) {
    }
    Object.defineProperty(v13, Symbol.toPrimitive, { configurable: true, get: f14, set: f15 });
    class C18 {
        constructor(a20, a21, a22) {
            a20[Symbol.toPrimitive] = Symbol;
        }
    }
    new C18(v10);
    new C18(v13);
}
new C4();
gc();
