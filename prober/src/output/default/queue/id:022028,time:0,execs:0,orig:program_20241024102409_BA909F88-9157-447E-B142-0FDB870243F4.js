function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let v3 = 0; v3 < 100; v3++) {
    v2.length = 2147483649n;
    for (let v6 = 0; v6 < 50; v6++) {
    }
    v2["p" + v3] = v3;
}
gc();
