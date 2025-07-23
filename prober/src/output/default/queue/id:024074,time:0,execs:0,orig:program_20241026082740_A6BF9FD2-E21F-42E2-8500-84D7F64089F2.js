const v1 = new Int16Array();
const v3 = v1.buffer.transferToFixedLength();
const o8 = {
    n(a5, a6, a7) {
        return v1;
    },
};
const v9 = o8.n;
const v10 = v9.apply(v9, v3, v1, o8);
try { v10.subarray(); } catch (e) {}
gc();
