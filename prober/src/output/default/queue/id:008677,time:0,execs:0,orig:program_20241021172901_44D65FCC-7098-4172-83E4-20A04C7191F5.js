function f0(a1, a2, a3) {
    return f0;
}
for (let v5 = 0; v5 < 5; v5++) {
    const v6 = `
        new Uint8ClampedArray(v5);
    `;
    eval(v6).sort(f0);
}
gc();
