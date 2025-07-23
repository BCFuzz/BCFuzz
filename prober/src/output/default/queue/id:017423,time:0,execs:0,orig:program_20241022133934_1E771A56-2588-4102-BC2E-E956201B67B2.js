function f0(a1) {
    return a1;
}
const o3 = {
};
o3.get = f0;
const v5 = new Proxy(Map, o3);
try { new v5(); } catch (e) {}
gc();
