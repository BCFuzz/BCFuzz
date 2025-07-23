const v2 = new Uint16Array(228);
const v4 = new Uint8Array(228);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
Object.defineProperty(v7, "g", { value: v2 });
const v8 = v7.g;
for (let i12 = 0, i13 = 1024; i13--;) {
}
const v20 = createGlobalObject().Atomics;
v20[Symbol.toPrimitive] = createGlobalObject;
try { v20.compareExchange(v8, v8, v4, v20); } catch (e) {}
gc();
