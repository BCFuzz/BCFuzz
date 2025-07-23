const v2 = new Int32Array(653);
const v4 = new Uint8Array(v2, 653, 653);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
v7.g = v2;
const v8 = v7.g;
const v11 = createGlobalObject().Atomics;
v11[Symbol.toPrimitive] = createGlobalObject;
try { v11.compareExchange(v8, v8, v4, v11); } catch (e) {}
gc();
