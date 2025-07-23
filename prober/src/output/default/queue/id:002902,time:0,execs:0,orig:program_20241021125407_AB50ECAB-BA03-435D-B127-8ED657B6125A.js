function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1(F1);
const v5 = new F1(v4);
const o6 = {
    __proto__: v5,
};
const o7 = {
    [o6]: o6,
    __proto__: v4,
};
v4[10] >>= -1980578279;
gc();
