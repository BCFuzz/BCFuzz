const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
const v4 = v3.buffer;
const v5 = v4.transferToFixedLength(v4, v4, v2, createGlobalObject);
const o10 = {
    n(a7, a8, a9) {
        return v3;
    },
};
const t9 = o10.n;
const v12 = t9();
try { v12.reverse(v5, v12, v3, v12); } catch (e) {}
gc();
