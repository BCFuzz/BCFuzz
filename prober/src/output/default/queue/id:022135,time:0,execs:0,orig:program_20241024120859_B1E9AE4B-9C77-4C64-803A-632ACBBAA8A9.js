const v1 = new Float32Array(Float32Array, Float32Array);
const v3 = v1.buffer.transferToFixedLength(Float32Array, v1, Float32Array, Float32Array, v1);
const o9 = {
    n(a5, a6, a7) {
        let v8;
        try { v8 = this.slice(v3, a7, a6, a5, this); } catch (e) {}
        return v8;
    },
};
o9.n.apply(v1);
gc();
