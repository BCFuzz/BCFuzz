function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(3129, Uint8Array);
v6[1813] == F2;
const v9 = new Uint8Array(3129);
for (const v10 in v9) {
}
gc();
