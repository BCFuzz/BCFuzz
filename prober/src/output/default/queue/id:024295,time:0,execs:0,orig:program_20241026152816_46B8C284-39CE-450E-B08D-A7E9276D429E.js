const v1 = new BigInt64Array();
const v3 = v1.buffer.transferToFixedLength(BigInt64Array);
const o10 = {
    n(a5, a6, a7) {
        const v8 = this.constructor;
        try { v8.from(this); } catch (e) {}
        return v3;
    },
};
o10.n.apply(v1);
gc();
