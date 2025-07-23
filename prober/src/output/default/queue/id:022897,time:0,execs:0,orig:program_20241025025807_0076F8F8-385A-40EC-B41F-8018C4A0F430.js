const v1 = new BigInt64Array();
const v2 = v1.buffer;
v2.transferToFixedLength();
const o10 = {
    n(a5, a6, a7) {
        const v8 = this.constructor;
        try { new v8(this); } catch (e) {}
        return v2;
    },
};
o10.n.apply(v1);
gc();
