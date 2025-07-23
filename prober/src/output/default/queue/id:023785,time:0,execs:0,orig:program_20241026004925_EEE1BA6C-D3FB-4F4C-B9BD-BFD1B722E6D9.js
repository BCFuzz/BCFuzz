function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this?.constructor;
    try { new v5(); } catch (e) {}
    v5 === a4;
}
new F1(4.0, 4.0);
new F1(4.0, 4.0);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
