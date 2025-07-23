const v2 = new BigInt64Array(9);
const v3 = [v2,v2,v2];
const o5 = {
    ..."-2",
    __proto__: v3,
};
new Date(Date, o5);
gc();
