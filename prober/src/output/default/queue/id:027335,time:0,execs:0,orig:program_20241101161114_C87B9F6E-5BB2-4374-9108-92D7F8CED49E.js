function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
new F1(-50399, -50399);
for (let v7 = 0; v7 < 250; v7++) {
    const v8 = /(ab|cde)\1/mis;
    v8.lastIndex = -50399;
    v8.test(v8);
}
gc();
