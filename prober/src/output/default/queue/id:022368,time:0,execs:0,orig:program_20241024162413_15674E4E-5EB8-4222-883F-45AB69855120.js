function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float32Array(3008);
    const v8 = v7[285];
    let v9 = v8 < v8;
    let v10 = v9 || v9;
    v9--;
    for (const v12 in v7) {
        ++v10;
    }
}
new F0();
for (let i17 = -3, i18 = 10; i17 < i18; i18--) {
}
gc();
