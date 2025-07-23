const v1 = new Float64Array(Float64Array);
v1.buffer.transferToFixedLength(v1, Float64Array, v1);
const o9 = {
    n(a5, a6, a7) {
        let v8;
        try { v8 = this.with(); } catch (e) {}
        return v8;
    },
};
o9.n.apply(v1);
gc();
