const v0 = [2.0,-4.0];
function f1() {
    return v0;
}
function f2() {
    return f2;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(f1, "toString", { configurable: true, get: f2, set: f3 });
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a7.toLocaleString();
}
const v12 = new F5(v0);
const v13 = v12.constructor;
try { new v13(f1); } catch (e) {}
gc();
