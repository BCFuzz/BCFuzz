function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    for (let v13 = 0; v13 < 25; v13++) {
    }
    const v15 = new Date(i5);
    v15.getHours();
}
gc();
