const v3 = new WeakMap();
const t1 = v3.constructor;
const v5 = new t1();
const v6 = v5.set;
try { v6(2, Uint8ClampedArray); } catch (e) {}
for (let v8 = 0; v8 < 250; v8++) {
}
gc();
