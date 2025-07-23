const o1 = {
};
o1[Symbol.toStringTag] = -2;
const o4 = {
};
o4.constructor.values(o1);
gc();
