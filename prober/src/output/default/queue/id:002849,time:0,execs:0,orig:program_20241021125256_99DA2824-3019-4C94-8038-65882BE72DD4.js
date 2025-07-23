const o1 = {
};
const v3 = new Proxy(Uint16Array, o1);
try { v3.apply(v3, Uint16Array); } catch (e) {}
gc();
