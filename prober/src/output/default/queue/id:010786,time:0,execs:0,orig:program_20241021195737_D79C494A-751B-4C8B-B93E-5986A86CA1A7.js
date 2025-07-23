function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 32; v3++) {
        this["p" + v3] = v3;
    }
    this.h = 2;
}
const v6 = new F0();
const v7 = new F0();
const o8 = {
    ...v6,
    ...v7,
};
gc();
