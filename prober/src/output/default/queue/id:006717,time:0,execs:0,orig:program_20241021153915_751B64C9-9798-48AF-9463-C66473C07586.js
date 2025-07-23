function f1(a2, a3, a4, a5) {
    try { a4(); } catch (e) {}
    return f1;
}
for (let v7 = 0; v7 < 5; v7++) {
    f1(v7, v7, f1);
}
const v10 = new Uint8ClampedArray(25842);
for (const v11 in v10) {
}
gc();
