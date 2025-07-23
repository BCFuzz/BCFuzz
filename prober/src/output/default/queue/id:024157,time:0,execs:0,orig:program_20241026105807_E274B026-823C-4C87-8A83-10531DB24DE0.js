class C0 {
}
const v2 = Uint8ClampedArray.of();
const v4 = new Proxy(C0, C0);
v2.toSorted(v4);
gc();
