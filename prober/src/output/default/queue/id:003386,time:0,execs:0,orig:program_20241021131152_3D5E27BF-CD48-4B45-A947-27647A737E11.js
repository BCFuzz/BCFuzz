function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 309847243;
}
let v3 = new F0();
function f4(a5) {
    v3 ^= v3;
}
v3[Symbol.toPrimitive] = f4;
const v9 = new F0();
const v10 = new F0();
v10.d = v10;
class C11 {
    constructor(a13, a14) {
        this.d = this;
        a14.p19;
        a14.e;
        this.isConcatSpreadable;
        for (let v18 = 0; v18 < 32; v18++) {
            v18 - v18;
        }
    }
    d = C11;
}
try { new C11(C11); } catch (e) {}
const v21 = new C11(v10, v9);
new C11(v21, v3);
const v23 = new C11(v9, v3);
try { v23.hasOwnProperty(v3); } catch (e) {}
const v27 = new Set();
function f28(a29) {
}
v27.constructor = f28;
v27.constructor;
v27.add(SharedArrayBuffer);
new Set(v27);
gc();
