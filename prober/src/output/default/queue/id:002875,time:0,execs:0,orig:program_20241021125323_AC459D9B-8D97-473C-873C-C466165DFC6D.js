function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
gc();
for (const v7 in v4) {
}
gc();
