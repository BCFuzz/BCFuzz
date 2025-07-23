const v0 = [-65536,-13];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new Uint32Array();
const v6 = v5.sort();
const v7 = v6.subarray(v5, v0, v6, Uint32Array, o1);
try { v7.sort(v3); } catch (e) {}
gc();
