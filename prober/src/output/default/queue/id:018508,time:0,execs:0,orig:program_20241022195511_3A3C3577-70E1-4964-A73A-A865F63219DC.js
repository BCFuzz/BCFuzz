function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
    for (let i = 0; i < 10; i++) {
        delete this.h;
    }
}
new F0(F0, F0);
new F0();
for (let i9 = 10, i10 = 10; -13369 !== i10; i10--) {
}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();
