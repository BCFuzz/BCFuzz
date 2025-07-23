function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o4 = {
    5: 268435456,
    725: v2,
};
gc();
