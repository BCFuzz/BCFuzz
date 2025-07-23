function f0() {
}
const o2 = {
};
o2.construct = f0;
const v4 = new Proxy(Uint16Array, o2);
try { new v4(Uint16Array, Uint16Array); } catch (e) {}
gc();
