const o0 = {
};
const o1 = {
};
o1.b = o1;
o1.c = o1;
o1.constructor.defineProperties(o0, o1);
gc();
