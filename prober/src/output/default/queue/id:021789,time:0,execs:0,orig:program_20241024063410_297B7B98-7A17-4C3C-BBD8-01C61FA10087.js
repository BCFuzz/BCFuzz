const v1 = new Float32Array(Float32Array);
const v2 = v1.buffer;
v2.transferToFixedLength(Float32Array, v1, v2, v2);
const o9 = {
    n(a5, a6, a7) {
        let v8;
        try { v8 = this.toReversed(); } catch (e) {}
        return v8;
    },
};
o9.n.apply(v1);
gc();
