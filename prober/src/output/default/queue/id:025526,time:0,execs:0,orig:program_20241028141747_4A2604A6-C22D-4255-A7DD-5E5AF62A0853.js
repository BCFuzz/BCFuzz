function f0() {
    return f0;
}
const o3 = {
};
o3.get = f0;
const v5 = new Proxy(Array, o3);
try { new v5(2958); } catch (e) {}
gc();
