for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v11 = new Int32Array();
const v14 = new Uint32Array(1000);
for (const v15 in v14) {
    let v18 = v15 ** -1;
    --v18;
    Math.pow(v11, v18);
}
gc();
