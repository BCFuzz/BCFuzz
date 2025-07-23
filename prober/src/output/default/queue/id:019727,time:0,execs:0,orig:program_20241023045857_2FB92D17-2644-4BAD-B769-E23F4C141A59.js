function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let v3 = 0; v3 < 25; v3++) {
    v2["p" + v3] = v3;
}
JSON.stringify(v2);
gc();
