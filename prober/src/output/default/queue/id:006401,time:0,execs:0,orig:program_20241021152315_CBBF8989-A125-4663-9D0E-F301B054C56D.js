const v1 = [];
const o2 = {
    __proto__: v1,
    2147483648: "species",
};
new BigUint64Array(o2);
gc();
