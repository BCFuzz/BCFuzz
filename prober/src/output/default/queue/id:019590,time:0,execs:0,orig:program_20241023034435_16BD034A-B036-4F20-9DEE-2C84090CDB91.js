const v3 = new Int16Array(2932);
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return f9;
    }
    Object.defineProperty(a7, 0, { configurable: true, enumerable: true, get: f9 });
}
const v10 = new F4(F4, F4);
const v11 = v10.constructor;
try { new v11(Float64Array, v3); } catch (e) {}
gc();
