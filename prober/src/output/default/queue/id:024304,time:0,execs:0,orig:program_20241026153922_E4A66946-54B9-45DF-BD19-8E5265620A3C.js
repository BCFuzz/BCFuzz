function f0() {
    const v1 = `
        let v3 = 12;
        v3++;
        parseInt(("g").constructor.fromCharCode(v3));
        for (let i11 = 10, i12 = 10; -13369 !== i12; i12--) {
        }
    `;
    return eval(v1);
}
f0();
f0();
gc();
