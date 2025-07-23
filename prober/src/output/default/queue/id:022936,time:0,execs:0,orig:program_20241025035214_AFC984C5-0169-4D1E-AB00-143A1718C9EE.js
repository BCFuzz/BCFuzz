for (let v0 = 0; v0 < 5; v0++) {
    const v1 = `
        const v4 = new Uint32Array(255);
        v4[64] /= -5;
        for (let i7 = 0; i7 < 21768; i7++) {
        }
    `;
    eval(v1);
}
gc();
