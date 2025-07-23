function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 13;
}
const v3 = new F0();
for (const v4 in v3) {
    const v7 = new Uint8Array(3129);
    for (const v8 in v7) {
    }
}
gc();
