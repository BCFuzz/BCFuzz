class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
const v3 = new Uint8ClampedArray();
const v6 = new FinalizationRegistry(Int8Array);
v6.register(v3, Uint8ClampedArray, v2);
v6.unregister(FinalizationRegistry);
gc();
