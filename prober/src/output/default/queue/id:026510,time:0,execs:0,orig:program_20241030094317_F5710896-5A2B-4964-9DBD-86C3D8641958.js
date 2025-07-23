class C1 extends Uint8ClampedArray {
}
let v2 = new C1();
const v3 = new Uint8ClampedArray();
class C4 {
}
const v5 = new C4();
const v8 = new FinalizationRegistry(Int8Array);
v8.register(v3, Uint8ClampedArray, v2);
v2 <<= v5;
gc();
