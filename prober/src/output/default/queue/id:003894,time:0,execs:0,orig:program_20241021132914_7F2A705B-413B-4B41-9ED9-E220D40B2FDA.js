function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 {
}
class C3 extends C2 {
}
const v4 = new F0();
function f5() {
    return F0;
}
class C6 {
    constructor(a8, a9) {
        for (let i = 0; i < 10; i++) {
            Object.defineProperty(v4, C3, { configurable: true, enumerable: true, get: f5 });
        }
    }
}
const v10 = new C6(C2, C6);
const v11 = new C6(C6, C3);
const v12 = v11.constructor;
new v12(C2, v10, C6, v12);
const t22 = v11.constructor;
new t22();
const v16 = v11.constructor;
const v17 = new v16();
const v18 = new v16(C2, v17);
const t27 = v18.constructor;
new t27();
gc();
