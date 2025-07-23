class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
const v3 = v2.valueOf;
let v4;
try { v4 = v3(C1, v3, C1, v3, v3); } catch (e) {}
const v5 = new Uint8ClampedArray(v3, v4, v4);
const v8 = new FinalizationRegistry(Int8Array);
v8.register(v5, Uint8ClampedArray, v2);
gc();
