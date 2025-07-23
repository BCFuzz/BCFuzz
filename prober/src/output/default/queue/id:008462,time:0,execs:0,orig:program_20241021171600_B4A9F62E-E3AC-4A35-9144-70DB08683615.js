class C0 {
}
const v1 = new C0();
function f2() {
    function f3() {
        return v1();
    }
    return f3;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f2, set: f5 });
try { v1.constructor(f5); } catch (e) {}
gc();
