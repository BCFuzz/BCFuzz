const v1 = new BigInt64Array();
const v2 = v1.buffer;
v2.transferToFixedLength(v2);
const o8 = {
    n(a5, a6, a7) {
        return this;
    },
};
const v10 = o8.n.apply(v1);
try { v10.reverse(); } catch (e) {}
gc();
