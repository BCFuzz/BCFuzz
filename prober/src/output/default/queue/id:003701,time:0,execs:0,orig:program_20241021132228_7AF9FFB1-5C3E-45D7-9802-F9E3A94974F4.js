function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = this;
    this.d = F0;
}
const v3 = new F0(F0);
new F0(v3);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5();
const v14 = new Uint8Array(3129);
for (const v15 in v14) {
}
gc();
