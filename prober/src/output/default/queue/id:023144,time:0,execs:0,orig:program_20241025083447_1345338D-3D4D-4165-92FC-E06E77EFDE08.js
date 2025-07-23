const v1 = new Float64Array();
const v2 = v1.buffer;
v2.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        let v8;
        try { v8 = this.reverse(Float64Array, a5, a5, Float64Array, v2); } catch (e) {}
        return v8;
    },
};
o9.n.apply(v1);
gc();
