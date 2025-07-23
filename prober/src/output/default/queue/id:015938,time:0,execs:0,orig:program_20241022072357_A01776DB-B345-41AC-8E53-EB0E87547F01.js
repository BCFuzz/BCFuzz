const o1 = {
};
const v3 = new Proxy(Int16Array, o1);
try { v3.arguments(); } catch (e) {}
gc();
