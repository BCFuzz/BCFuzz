function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        for (let v12 = 0; v12 < 10; v12++) {
            Promise.withResolvers();
        }
    }
}
new F0();
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
