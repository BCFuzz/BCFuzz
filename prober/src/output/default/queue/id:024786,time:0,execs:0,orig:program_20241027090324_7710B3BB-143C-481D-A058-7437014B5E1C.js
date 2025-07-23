const v1 = new Int32Array();
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
    Object.defineProperty(f3, Symbol.c, { writable: true, enumerable: true, get: f6, set: f7 });
    return Int32Array;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f2, set: f11 });
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    a15.slice(a16, a15);
}
try { new F13(v1); } catch (e) {}
gc();
