const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
function f2() {
    function f3(a4, a5) {
        return a5;
    }
    function f6() {
        return f3;
    }
    function f7(a8) {
        return a8;
    }
    Object.defineProperty(f3, Symbol.species, { writable: true, enumerable: true, get: f6, set: f7 });
    return f6;
}
function f11(a12) {
    return f11;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f2, set: f11 });
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a15.slice(); } catch (e) {}
}
new F13(v1);
gc();
