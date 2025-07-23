function f0() {
    return f0;
}
class C1 {
}
function f2(a3, a4) {
    return a3;
}
const v5 = new C1();
function f6() {
    return f0;
}
Object.defineProperty(v5, "toJSON", { configurable: true, get: f6 });
JSON.stringify(v5, f2);
gc();
