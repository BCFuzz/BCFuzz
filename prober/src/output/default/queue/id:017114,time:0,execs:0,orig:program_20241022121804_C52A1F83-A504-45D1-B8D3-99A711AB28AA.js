class C1 extends Int8Array {
}
const v2 = new C1();
const o12 = {
    [undefined](a5, a6, a7) {
        createGlobalObject().Atomics.load(v2);
    },
};
try { o12.undefined(); } catch (e) {}
gc();
