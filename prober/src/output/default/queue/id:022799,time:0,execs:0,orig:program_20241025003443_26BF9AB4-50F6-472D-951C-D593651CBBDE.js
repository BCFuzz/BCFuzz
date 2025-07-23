function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
const o8 = {
    "get": v6,
};
const v10 = new Proxy(Uint32Array, o8);
try { new v10(Uint32Array); } catch (e) {}
for (let i14 = 10, i15 = 10; -13369 < i15; i15--) {
}
gc();
