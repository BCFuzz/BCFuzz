function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v7 = new F0();
for (const v8 in v7) {
}
for (let v9 = 0; v9 < 5; v9++) {
    v6["p" + v9] = v9;
}
gc();
