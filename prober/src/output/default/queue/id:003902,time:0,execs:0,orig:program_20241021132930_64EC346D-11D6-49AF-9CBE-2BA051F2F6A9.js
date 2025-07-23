const v1 = Symbol.toPrimitive;
const o2 = {
    ...v1,
};
gc();
