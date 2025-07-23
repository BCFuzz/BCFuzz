const v0 = [17428,39892,10000,65536,7,-268435456,-62031];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new Uint16Array();
const v6 = v5.sort();
const v7 = v6.subarray(v6);
try { v7.sort(v3); } catch (e) {}
gc();
