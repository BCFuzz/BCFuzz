const v1 = new BigUint64Array();
const v2 = [17428,39892,10000,65536,7,-268435456,-62031];
const o3 = {
};
o3.ownKeys = v1;
const v5 = new Proxy(v2, o3);
const v7 = this.constructor;
try { v7.values(v5); } catch (e) {}
gc();
