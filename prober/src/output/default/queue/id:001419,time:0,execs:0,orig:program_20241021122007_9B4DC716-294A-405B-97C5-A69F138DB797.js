const v0 = /\p{gc=Nd}(?<a>)V(?=)/mdysu;
const v3 = new Uint8ClampedArray(1394);
for (let i5 = 0; i5 < 2; i5++) {
    let v11;
    try { v11 = v0.test(i5); } catch (e) {}
    v3[i5] = v11;
}
for (let v12 = 0; v12 < 250; v12++) {
    v12++;
    v12--;
}
gc();
