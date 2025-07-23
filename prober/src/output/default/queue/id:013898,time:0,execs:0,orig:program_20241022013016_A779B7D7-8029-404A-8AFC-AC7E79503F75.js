const v1 = new Set();
const o2 = {
};
o2.constructor.seal(v1);
gc();
