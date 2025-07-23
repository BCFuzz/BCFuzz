for (let v1 = 0; v1 < 5; v1++) {
    const v2 = `
        new Uint8ClampedArray(v1);
    `;
    eval(v2).sort(eval);
}
gc();
