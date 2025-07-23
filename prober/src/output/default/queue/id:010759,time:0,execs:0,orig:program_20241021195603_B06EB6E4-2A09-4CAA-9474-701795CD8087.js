class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
const v3 = new Uint8ClampedArray(C1, C1);
class C4 {
}
const v5 = new C4();
const v6 = new Uint8ClampedArray(v2);
const v9 = new FinalizationRegistry(Int8Array);
v9.register(v3, Uint8ClampedArray, v2);
v9.register(FinalizationRegistry, v6, v5);
gc();
