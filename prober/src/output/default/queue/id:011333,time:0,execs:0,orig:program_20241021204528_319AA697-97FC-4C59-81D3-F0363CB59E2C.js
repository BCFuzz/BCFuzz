function f0() {
    return f0;
}
const v3 = new Float64Array(257);
for (const v4 of v3) {
    const v5 = f0.toString(v4, Float64Array, v4);
    try { v5.o(); } catch (e) {}
    for (let v7 = 0; v7 < 25; v7++) {
    }
}
gc();
