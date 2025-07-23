const v1 = new BigUint64Array();
const o3 = {
};
const v5 = new Proxy(v1, o3);
try { v5.slice(); } catch (e) {}
class C7 {
}
const v8 = new C7();
const t8 = v8.constructor;
const v10 = new t8();
v10.__defineGetter__(v10, Uint16Array);
gc();
