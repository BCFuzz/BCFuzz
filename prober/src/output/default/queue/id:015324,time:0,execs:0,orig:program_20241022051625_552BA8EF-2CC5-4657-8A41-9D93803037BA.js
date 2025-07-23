function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float32Array(3008);
    let v8 = v7[285];
    v8--;
    v7[991] = v8;
    for (const v10 in v7) {
    }
}
new F0();
gc();
