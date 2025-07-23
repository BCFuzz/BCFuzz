const v1 = new Int8Array();
function f2() {
    function f3(a4, a5) {
        return f3;
    }
    function f6() {
        return f6;
    }
    function f7(a8) {
        return a8;
    }
    const v10 = Symbol.species;
    Object.defineProperty(f3, v10, { writable: true, enumerable: true, get: f6, set: f7 });
    return v10;
}
function f11(a12) {
    return Int8Array;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f2, set: f11 });
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a15.slice(); } catch (e) {}
}
new F13(v1);
gc();
