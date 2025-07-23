const v1 = new Int32Array();
v1.subarray();
const o11 = {
    n(a4, a5, a6) {
        const v9 = createGlobalObject().Atomics;
        try { v9.wait(a6); } catch (e) {}
        return Int32Array;
    },
};
const t9 = o11.n;
t9(Int32Array, o11, v1);
gc();
