function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
    for (let i = 0; i < 10; i++) {
        delete this.h;
    }
    const v7 = new Uint8Array(3129);
    for (const v8 in v7) {
    }
}
new F0(F0, F0);
for (let i12 = 10, i13 = 10; -13369 !== i13; i13--) {
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
