const v1 = new Float32Array();
const v2 = v1.buffer;
const v3 = v2.transferToFixedLength(v1, v2, v2, v2);
const o9 = {
    n(a5, a6, a7) {
        try { this.sort(); } catch (e) {}
        return v3;
    },
};
o9.n.apply(v1);
gc();
