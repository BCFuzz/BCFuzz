const v1 = new Uint16Array(Uint16Array);
const o2 = {
};
const v4 = new Proxy(v1, o2);
try { Uint16Array(v4); } catch (e) {}
gc();
