function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        const t3 = Promise.withResolvers(this, Promise, Promise, this).resolve;
        new t3();
    }
}
new F0();
gc();
