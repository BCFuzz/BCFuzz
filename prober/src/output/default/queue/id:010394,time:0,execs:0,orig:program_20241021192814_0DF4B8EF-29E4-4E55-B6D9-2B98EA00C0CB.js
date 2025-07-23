const o1 = {
};
o1[Symbol.toStringTag] = -2;
const o4 = {
    __proto__: o1,
};
class C5 {
    [o4];
}
gc();
