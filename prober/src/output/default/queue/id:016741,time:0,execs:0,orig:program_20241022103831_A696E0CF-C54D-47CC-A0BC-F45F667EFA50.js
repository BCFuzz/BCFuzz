const v0 = [4294967296,-1507112381];
const o1 = {
};
o1.deleteProperty = o1;
const v3 = new Proxy(v0, o1);
try { v3.shift(o1, o1, Proxy, v3); } catch (e) {}
gc();
