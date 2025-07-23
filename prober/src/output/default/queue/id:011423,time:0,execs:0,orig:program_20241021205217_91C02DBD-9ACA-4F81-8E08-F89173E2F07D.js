const v1 = new Int16Array(Int16Array);
const o2 = {
    __proto__: v1,
};
o2[Symbol.toStringTag];
gc();
