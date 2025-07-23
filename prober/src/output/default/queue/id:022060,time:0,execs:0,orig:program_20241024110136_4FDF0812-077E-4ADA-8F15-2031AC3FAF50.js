const v1 = new BigInt64Array();
const v2 = v1.buffer;
v2.transferToFixedLength(v1, v2, BigInt64Array);
const o9 = {
    n(a5, a6, a7) {
        try { this.lastIndexOf(v1, v1); } catch (e) {}
        return a7;
    },
};
o9.n.apply(v1);
gc();
