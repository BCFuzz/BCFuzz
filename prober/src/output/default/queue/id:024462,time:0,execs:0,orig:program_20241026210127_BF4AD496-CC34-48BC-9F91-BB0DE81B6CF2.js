function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Float32Array(this, a6);
    const v10 = v9[285];
    const v13 = new Int16Array(4096);
    for (const v14 of v13) {
        let v16 = ~v10;
        -F0;
        v16++;
        Math.log1p(v10);
    }
    v9[991] = v10;
}
new F3();
gc();
