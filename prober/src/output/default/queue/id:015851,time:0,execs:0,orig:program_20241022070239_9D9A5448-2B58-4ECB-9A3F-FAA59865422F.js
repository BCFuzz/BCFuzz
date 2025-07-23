function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new Object();
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    }
}
new F0();
gc();
