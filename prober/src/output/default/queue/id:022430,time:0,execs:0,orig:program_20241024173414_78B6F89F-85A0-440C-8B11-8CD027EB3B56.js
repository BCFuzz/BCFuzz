const o1 = {
    "get": Uint32Array,
};
const v3 = new Proxy(Uint32Array, o1);
try { new v3(); } catch (e) {}
for (let i7 = 10, i8 = 10; -13369 < i8; i8--) {
}
gc();
