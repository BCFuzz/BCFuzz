function f2(a3, a4, a5) {
    a4[Symbol.toPrimitive] = f2;
    try { a3(a5, Promise); } catch (e) {}
    return a4 * a4;
}
f2(f2, 4);
gc();
