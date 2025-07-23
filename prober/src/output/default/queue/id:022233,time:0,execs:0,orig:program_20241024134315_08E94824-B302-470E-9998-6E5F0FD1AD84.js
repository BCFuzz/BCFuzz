const v1 = new Float64Array();
const v2 = v1.buffer;
const v3 = v2.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.slice(v1, v2, a7, this); } catch (e) {}
        return v3;
    },
};
o9.n.apply(v1);
gc();
