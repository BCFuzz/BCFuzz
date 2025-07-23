const v1 = new Int32Array();
const v2 = v1.buffer;
v2.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.slice(); } catch (e) {}
        return v2;
    },
};
o9.n.apply(v1);
gc();
