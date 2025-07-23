function f0(a1, a2, a3, a4) {
    const v5 = `
        function f6(a7, a8) {
            return a8;
        }
        new Promise(f6);
    `;
    eval(v5);
    return v5;
}
f0();
gc();
