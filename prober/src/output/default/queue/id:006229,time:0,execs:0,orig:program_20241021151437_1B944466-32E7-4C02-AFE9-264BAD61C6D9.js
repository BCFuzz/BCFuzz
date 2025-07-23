function f1() {
    return 4294967295n;
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        return f1;
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(this, "valueOf", { configurable: true, enumerable: true, get: f8, set: f9 });
}
const v11 = new F2();
const v13 = new Float32Array();
try { v13.copyWithin(v11); } catch (e) {}
gc();
