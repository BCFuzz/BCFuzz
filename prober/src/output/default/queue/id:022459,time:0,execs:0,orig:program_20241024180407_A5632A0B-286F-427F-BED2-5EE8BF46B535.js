const v1 = new Float32Array();
v1.buffer.transferToFixedLength(Float32Array, v1);
const o9 = {
    n(a5, a6, a7) {
        try { this.subarray(); } catch (e) {}
        return a6;
    },
};
o9.n.apply(v1);
gc();
