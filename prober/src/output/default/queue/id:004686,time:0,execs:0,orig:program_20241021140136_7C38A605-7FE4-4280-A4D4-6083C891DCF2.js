class C0 {
}
const v1 = new C0();
const v3 = new Uint32Array(v1, C0, Uint32Array);
v3.set(v1);
gc();
