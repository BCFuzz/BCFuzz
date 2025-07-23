const v1 = [17428,39892,10000,65536,7,-268435456,-62031];
const o2 = {
};
o2.getOwnPropertyDescriptor = 1073741825n;
const v4 = new Proxy(v1, o2);
const v6 = this.constructor;
try { v6.values(v4); } catch (e) {}
gc();
