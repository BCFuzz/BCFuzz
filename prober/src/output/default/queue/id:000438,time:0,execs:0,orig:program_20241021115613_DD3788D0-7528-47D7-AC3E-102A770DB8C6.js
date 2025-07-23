function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (const v3 in v2) {
}
gc();
