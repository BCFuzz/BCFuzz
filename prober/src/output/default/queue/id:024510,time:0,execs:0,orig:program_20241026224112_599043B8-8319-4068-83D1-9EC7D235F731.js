const v1 = new Uint32Array();
const v2 = v1.buffer;
v2.transferToFixedLength(v1, v1, v2, Uint32Array, v2);
const o8 = {
    n(a5, a6, a7) {
        return v1;
    },
};
const v10 = o8.n.apply();
try { v10.subarray(); } catch (e) {}
gc();
