const v2 = createGlobalObject().Float16Array;
const v3 = new v2(v2, v2, createGlobalObject, v2);
v3.buffer.transferToFixedLength();
const o10 = {
    n(a7, a8, a9) {
        return v3;
    },
};
const t8 = o10.n;
const v12 = t8();
try { v12.fill(); } catch (e) {}
gc();
