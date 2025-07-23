const v0 = [-2.2250738585072014e-308,-2.9829981044766685,1000000.0,1000000000.0];
function f1(a2, a3) {
    return a2;
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
class C7 {
    constructor(a9, a10) {
        Object.defineProperty(a10.constructor, "constructor", { configurable: true, enumerable: true, value: f1 });
    }
}
Object.defineProperty(C7, "constructor", { enumerable: true, value: f1 });
const v12 = new C7(v6, v6);
const v13 = v12.constructor;
try { new v13(v0, v12); } catch (e) {}
gc();
