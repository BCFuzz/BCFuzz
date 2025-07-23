function f0() {
    return f0;
}
const o2 = {
};
o2.get = f0;
const v4 = new Proxy(Int32Array, o2);
try { new v4(v4); } catch (e) {}
gc();
