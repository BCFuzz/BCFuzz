const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1();
v3.join(v1);
class C5 {
}
const v7 = new Float32Array();
const v9 = Proxy.revocable(v7, C5);
try { v9.revoke(); } catch (e) {}
gc();
