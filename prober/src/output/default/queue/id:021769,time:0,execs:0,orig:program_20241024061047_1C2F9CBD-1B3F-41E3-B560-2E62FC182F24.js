const o1 = {
    "get": Object,
};
const v3 = new Proxy(Object, o1);
try { new v3(); } catch (e) {}
for (let i7 = 0, i8 = 10; i7 !== i8; i8--) {
}
gc();
