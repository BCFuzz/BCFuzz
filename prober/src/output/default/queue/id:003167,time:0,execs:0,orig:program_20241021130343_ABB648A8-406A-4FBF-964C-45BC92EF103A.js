const v2 = new Uint8Array(1024);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
}
const v9 = new F3();
for (const v11 of v9.d) {
}
const v13 = new Uint32Array(v2, 1024);
v13[Symbol.toStringTag];
gc();
