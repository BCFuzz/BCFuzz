function f1(a2, a3) {
    a3.toLocaleString();
    return Symbol;
}
Object.defineProperty(Symbol, "toString", { writable: true, configurable: true, value: f1 });
function f6() {
    return Symbol;
}
function f7(a8) {
    return f7;
}
Object.defineProperty(Uint32Array, 2, { configurable: true, enumerable: true, get: f6, set: f7 });
try { new Uint32Array(Uint32Array); } catch (e) {}
gc();
