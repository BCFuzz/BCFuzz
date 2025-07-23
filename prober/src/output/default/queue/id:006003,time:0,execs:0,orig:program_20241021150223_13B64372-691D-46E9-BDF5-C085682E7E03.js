const v0 = /\p{gc=Nd}(?<a>)V(?=)/mdysu;
const v2 = new Uint8ClampedArray();
for (let v3 = 0; v3 < 5; v3++) {
    const v4 = v0.test(v3);
    !v4;
    v2[v3] = v4;
}
const v8 = new Int16Array(2403);
for (const v9 in v8) {
}
gc();
