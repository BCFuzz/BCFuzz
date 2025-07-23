class C0 {
}
const v2 = new Float32Array(C0, Float32Array);
const v4 = Proxy.revocable(v2, C0);
v4.revoke(Float32Array, v4, v4, C0, Float32Array);
v4.revoke();
gc();
