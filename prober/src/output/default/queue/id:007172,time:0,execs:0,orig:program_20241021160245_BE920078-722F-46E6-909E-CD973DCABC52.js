class C0 {
}
const v2 = new Float32Array();
const v4 = Proxy.revocable(v2, C0);
v4.b = v4;
gc();
