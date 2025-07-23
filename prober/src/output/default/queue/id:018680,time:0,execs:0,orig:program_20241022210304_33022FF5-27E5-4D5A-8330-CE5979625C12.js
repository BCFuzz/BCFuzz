function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
    for (let i = 0; i < 10; i++) {
        delete this.h;
    }
}
new F0(F0, F0);
for (let i8 = 10, i9 = 10; -13369 !== i9; i9--) {
}
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
