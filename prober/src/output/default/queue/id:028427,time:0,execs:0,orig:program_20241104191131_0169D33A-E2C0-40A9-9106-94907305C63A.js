const v2 = new Uint8Array(1024);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F3();
v5.g = v2;
const v6 = v5.g;
const v9 = createGlobalObject().Atomics;
v9[Symbol.toPrimitive] = createGlobalObject;
try { v9.compareExchange(v6, v6, v2, v9); } catch (e) {}
gc();
