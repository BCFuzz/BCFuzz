const v1 = new BigInt64Array();
const o2 = {
    __proto__: v1,
};
v1.subarray();
gc();
