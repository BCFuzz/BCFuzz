function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = -9223372036854775808;
    t2.b = -9223372036854775808;
}
new F0();
new F0();
new F0();
for (let v6 = 0; v6 < 250; v6++) {
}
gc();
