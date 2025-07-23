function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C3 extends F1 {
    }
    const v4 = new C3();
    function f5() {
        return f0;
    }
    function f6(a7) {
        return a7;
    }
    Object.defineProperty(v4, Symbol.iterator, { enumerable: true, get: f5, set: f6 });
    new Uint32Array(v4);
}
const v12 = /ab\b\d\bcdxyz??/;
v12.toString = f0;
try { v12.toString(); } catch (e) {}
gc();
