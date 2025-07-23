const t0 = Array().constructor;
const v3 = t0();
function f4(a5) {
    return a5;
}
Object.defineProperty(v3, 1, { configurable: true, set: f4 });
try { new BigUint64Array(v3); } catch (e) {}
gc();
