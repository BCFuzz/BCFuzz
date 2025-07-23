function f0(a1, a2, a3, a4) {
    const v6 = new Int32Array(a2, a2, a3);
    const v7 = `
        for (let [v8,v9,v10] of v6) {
        }
    `;
    eval(v7);
    return f0;
}
f0();
gc();
