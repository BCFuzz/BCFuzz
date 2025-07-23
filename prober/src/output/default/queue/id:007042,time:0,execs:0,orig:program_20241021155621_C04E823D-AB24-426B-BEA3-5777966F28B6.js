class C0 {
}
const v2 = new Float32Array(C0, Float32Array);
const v4 = Proxy.revocable(v2, C0);
v4.proxy = v4;
gc();
