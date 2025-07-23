const v1 = Date();
const o2 = {
};
o2[Symbol.toStringTag] = v1;
Math.asin(o2);
gc();
