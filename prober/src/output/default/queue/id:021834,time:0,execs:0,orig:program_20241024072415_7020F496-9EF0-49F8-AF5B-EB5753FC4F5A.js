function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -1;
    this.a = -1;
}
const v3 = new F0();
const v4 = new F0();
for (const v5 in v4) {
    for (let v6 = 0; v6 < 32; v6++) {
        v3[v5 + v6] = v6;
    }
}
const o8 = {
    ...v3,
    ...v4,
};
gc();
