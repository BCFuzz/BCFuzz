const v1 = [17428,39892,10000,65536,7,-268435456,-62031];
const o2 = {
};
o2.ownKeys = o2;
const v4 = new Proxy(v1, o2);
const v5 = new Uint16Array();
const v7 = this.constructor;
try { v7.defineProperties(v5, v4); } catch (e) {}
gc();
