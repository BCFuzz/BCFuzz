const v0 = [10,-9007199254740990,56877394,-1];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new Int32Array(o1, Proxy, o1);
try { v5.sort(v3); } catch (e) {}
gc();
