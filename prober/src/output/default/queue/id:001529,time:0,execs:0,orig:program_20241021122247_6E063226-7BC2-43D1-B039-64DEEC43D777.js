const v2 = new Uint32Array(8);
let {...v3} = v2;
for (let v5 = 0; v5 < 5; v5++) {
    const v6 = `
        new Uint8ClampedArray(v5);
    `;
    eval(v6);
}
gc();
