function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 {
}
class C3 extends C2 {
}
const v4 = new F0();
function f5() {
    return f5;
}
class C6 {
    constructor(a8, a9) {
        for (let i = 0; i < 10; i++) {
            Object.defineProperty(v4, C3, { configurable: true, enumerable: true, get: f5 });
        }
    }
}
new C6(C2, f5);
const v11 = new C6(C3, v4);
const v12 = v11.constructor;
new v12();
const v14 = v11.constructor;
new v14(v12, v14);
const v16 = v11.constructor;
new v16();
const v18 = new v16();
const v19 = v18.constructor;
new v19(v12, v16, v11, v19);
gc();
