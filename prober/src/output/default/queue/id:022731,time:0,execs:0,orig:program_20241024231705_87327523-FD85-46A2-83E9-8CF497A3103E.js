const v2 = [17428,39892,10000,65536,7,-268435456,-62031];
const o3 = {
};
o3.ownKeys = String;
const v5 = new Proxy(v2, o3);
const v6 = new Uint16Array();
const v8 = this.constructor;
try { v8.defineProperties(v6, v5); } catch (e) {}
gc();
