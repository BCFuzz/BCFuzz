function f0(a1, a2, a3, a4) {
    try { a1(); } catch (e) {}
    Object.getOwnPropertyNames(a2);
    return f0;
}
for (let v8 = 0; v8 < 5; v8++) {
    f0(f0, v8);
}
gc();
