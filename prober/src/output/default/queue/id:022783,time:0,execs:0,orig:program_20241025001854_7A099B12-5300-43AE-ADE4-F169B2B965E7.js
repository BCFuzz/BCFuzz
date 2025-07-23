const v1 = new Float64Array(Float64Array);
const v2 = v1.buffer;
v2.transferToFixedLength(v2);
const o9 = {
    n(a5, a6, a7) {
        try { this.toSorted(); } catch (e) {}
        return a5;
    },
};
o9.n.apply(v1);
gc();
