function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this + "";
}
new F0();
for (let i6 = 0; i6 < 6; i6++) {
}
gc();
