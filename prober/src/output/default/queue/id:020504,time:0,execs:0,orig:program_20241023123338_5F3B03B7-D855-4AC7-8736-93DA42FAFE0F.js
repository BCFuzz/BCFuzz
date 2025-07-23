const v2 = new Float64Array(2932);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        return f8;
    }
    Object.defineProperty(a6, 0, { configurable: true, enumerable: true, get: f8 });
}
const v9 = new F3(F3, F3);
const v10 = v9.constructor;
try { new v10(Float64Array, v2); } catch (e) {}
gc();
