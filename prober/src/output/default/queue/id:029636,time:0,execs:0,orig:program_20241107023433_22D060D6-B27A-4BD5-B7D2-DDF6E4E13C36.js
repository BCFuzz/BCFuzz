class C0 {
}
const v1 = new C0();
const v4 = new Uint8Array(266);
const o14 = {
    n(a7, a8, a9) {
        return createGlobalObject().Atomics.and(a9, a9, 9223372036854775807n);
    },
};
const v15 = o14.n;
try { v15(v1, v1, v4); } catch (e) {}
gc();
