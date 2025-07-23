const v1 = new BigInt64Array();
const v2 = v1.buffer;
v2.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.with(); } catch (e) {}
        return v2;
    },
};
o9.n.apply(v1);
gc();
