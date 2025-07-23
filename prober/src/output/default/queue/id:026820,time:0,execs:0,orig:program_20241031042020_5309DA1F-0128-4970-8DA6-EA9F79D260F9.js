const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1(createGlobalObject, v1);
const v4 = v3.buffer;
v4.transferToFixedLength(createGlobalObject, v3, v4, v1);
const o10 = {
    n(a7, a8, a9) {
        return v3;
    },
};
const t10 = o10.n;
const v12 = t10();
try { v12.includes(); } catch (e) {}
gc();
