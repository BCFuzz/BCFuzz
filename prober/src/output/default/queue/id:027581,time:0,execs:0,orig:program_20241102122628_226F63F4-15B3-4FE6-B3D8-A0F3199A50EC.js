const v2 = new Int32Array(4096);
function f3(a4) {
    function f5(a6, a7) {
        return a6;
    }
    return f5;
}
v2.toString = f3;
const v11 = createGlobalObject().Atomics;
try { v11.sub(v2, BigUint64Array, v2); } catch (e) {}
gc();
