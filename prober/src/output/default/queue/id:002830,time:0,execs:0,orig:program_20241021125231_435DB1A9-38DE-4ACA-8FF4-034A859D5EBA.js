const o1 = {
};
o1.toString = Symbol;
const o6 = {
    [o1](a3, a4, a5) {
    },
};
gc();
