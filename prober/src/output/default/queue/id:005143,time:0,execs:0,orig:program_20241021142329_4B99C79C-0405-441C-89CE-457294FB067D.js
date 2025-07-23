function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new F0();
Boolean(10);
for (let v7 = 0; v7 < 250; v7++) {
}
gc();
