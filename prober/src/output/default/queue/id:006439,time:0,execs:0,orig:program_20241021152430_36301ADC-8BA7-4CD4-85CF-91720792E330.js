function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    new Map();
}
new F0();
const v11 = new Uint32Array(1000);
for (const v12 in v11) {
}
gc();
