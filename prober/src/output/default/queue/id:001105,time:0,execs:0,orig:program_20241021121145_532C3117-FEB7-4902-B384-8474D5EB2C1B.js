Array(10);
const v5 = new Uint8Array(1024);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v5;
    const v13 = new Int8Array(this, a11);
    v13.slice();
}
const v15 = new F6();
new F6(v5, v15, Uint8Array, Uint8Array);
for (const v18 of v15.d) {
}
gc();
