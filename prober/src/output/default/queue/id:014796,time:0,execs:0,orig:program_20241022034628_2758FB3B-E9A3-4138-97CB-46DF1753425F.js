const v0 = [];
function f1() {
    return v0;
}
function f2(a3) {
    return f1;
}
Object.defineProperty(v0, 1, { configurable: true, enumerable: true, get: f1, set: f2 });
const v5 = this.constructor;
const v6 = v5.freeze(v0);
try { v6.shift(v6, v5, v6, f1, v5); } catch (e) {}
gc();
