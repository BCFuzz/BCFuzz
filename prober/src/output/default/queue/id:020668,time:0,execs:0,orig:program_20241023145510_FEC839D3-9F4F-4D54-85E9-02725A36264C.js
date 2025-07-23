function f0(a1, a2, a3, a4) {
    a1[Symbol.toPrimitive] = f0;
    try { a1(Symbol, f0, Symbol, f0, a4); } catch (e) {}
    return parseInt(a1);
}
for (let v10 = 0; v10 < 5; v10++) {
    f0(f0);
}
gc();
