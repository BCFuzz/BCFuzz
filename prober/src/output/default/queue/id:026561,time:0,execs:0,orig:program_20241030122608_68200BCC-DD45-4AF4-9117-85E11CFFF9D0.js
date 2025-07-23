const o0 = {
};
class C2 extends Uint8ClampedArray {
}
let v3 = new C2();
const v4 = new Uint8ClampedArray(v3);
class C5 {
}
const v6 = new C5();
const v9 = new FinalizationRegistry(Int8Array);
v9.register(o0);
v9.register(v4, Uint8ClampedArray, v3);
v3 <<= v6;
gc();
