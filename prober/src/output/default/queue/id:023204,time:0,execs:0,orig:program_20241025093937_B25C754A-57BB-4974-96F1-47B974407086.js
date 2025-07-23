const v1 = new Float32Array();
const v2 = v1.buffer;
v2.transferToFixedLength(v2, Float32Array, Float32Array, Float32Array);
const o9 = {
    n(a5, a6, a7) {
        try { this.reverse(); } catch (e) {}
        return a6;
    },
};
o9.n.apply(v1);
gc();
