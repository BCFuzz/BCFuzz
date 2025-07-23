const v1 = new BigInt64Array();
v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.fill(); } catch (e) {}
        return BigInt64Array;
    },
};
o9.n.apply(v1);
gc();
