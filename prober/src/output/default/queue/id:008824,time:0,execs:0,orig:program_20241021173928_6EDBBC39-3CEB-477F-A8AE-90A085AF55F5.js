class C0 {
}
const v1 = new C0();
const v3 = new Uint8ClampedArray();
const v6 = new FinalizationRegistry(Int8Array);
v6.register(FinalizationRegistry, v3, v1);
gc();
