const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v2, createGlobalObject, v2, createGlobalObject);
const v4 = v3.buffer;
v4.transferToFixedLength(v4, v1, v4);
const o10 = {
    n(a7, a8, a9) {
        return v3;
    },
};
const t10 = o10.n;
const v12 = t10();
try { v12.subarray(); } catch (e) {}
gc();
