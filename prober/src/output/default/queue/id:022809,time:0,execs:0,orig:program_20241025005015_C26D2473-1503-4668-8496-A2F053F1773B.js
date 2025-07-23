const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v2 = v1.buffer;
const v3 = v2.transferToFixedLength(v1, v2, Float32Array);
const o9 = {
    n(a5, a6, a7) {
        try { this.indexOf(a5, v3); } catch (e) {}
        return a7;
    },
};
o9.n.apply(v1);
gc();
