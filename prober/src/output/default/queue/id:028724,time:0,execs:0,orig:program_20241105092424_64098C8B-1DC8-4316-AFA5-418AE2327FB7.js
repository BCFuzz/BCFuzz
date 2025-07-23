const v1 = [17428,39892,10000,65536,7,-268435456,-62031];
const o2 = {
};
o2.preventExtensions = Uint8Array;
const v4 = new Proxy(v1, o2);
const v6 = this.constructor;
try { v6.preventExtensions(v4); } catch (e) {}
gc();
