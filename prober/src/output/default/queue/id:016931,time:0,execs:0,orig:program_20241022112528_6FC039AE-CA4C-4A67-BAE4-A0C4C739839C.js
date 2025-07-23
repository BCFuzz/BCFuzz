const v1 = ReferenceError();
const o2 = {
};
o2.constructor.freeze(v1);
gc();
