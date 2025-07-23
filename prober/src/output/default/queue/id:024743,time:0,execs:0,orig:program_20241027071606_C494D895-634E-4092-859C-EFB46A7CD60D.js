function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float32Array(3008);
    const v8 = v7[285];
    const v10 = [6,268435440,-1872111987,-15,1889378099];
    for (let v11 of v10) {
        v11 >>= v11;
        v10[v11] = "matchAll";
    }
    v7[991] = v8;
}
new F0();
gc();
