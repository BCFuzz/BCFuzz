const v1 = new Float64Array();
const v3 = v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.lastIndexOf(); } catch (e) {}
        return v3;
    },
};
o9.n.apply(v1);
gc();
