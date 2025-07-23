function f0(a1, a2) {
    return f0;
}
const o5 = {
};
o5.get = f0;
const v7 = new Proxy(Uint8Array, o5);
try { new v7(Int16Array); } catch (e) {}
gc();
