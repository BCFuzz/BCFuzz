const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.copyWithin(a6, a6); } catch (e) {}
        return a7;
    },
};
o9.n.apply(v1);
gc();
