function f0(a1, a2, a3) {
    const v5 = new Float64Array(a1);
    v5[125] = v5;
    return f0;
}
for (let v6 = 0; v6 < 10; v6++) {
    f0(v6, v6, v6);
}
gc();
