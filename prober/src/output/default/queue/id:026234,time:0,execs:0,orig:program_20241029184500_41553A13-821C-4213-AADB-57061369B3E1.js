const v0 = [17428,39892,10000,65536,7,-268435456,-62031];
const o1 = {
};
o1.isExtensible = o1;
const v3 = new Proxy(v0, o1);
const v5 = this.constructor;
try { v5.isFrozen(v3); } catch (e) {}
gc();
