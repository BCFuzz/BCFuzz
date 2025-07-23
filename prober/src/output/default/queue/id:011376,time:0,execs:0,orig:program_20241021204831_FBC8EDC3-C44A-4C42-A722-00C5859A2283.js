const o1 = {
};
const v3 = new Proxy(parseInt, o1);
try { new v3(v3, Proxy, Proxy); } catch (e) {}
gc();
