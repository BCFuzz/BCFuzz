function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        const v15 = ~i7;
        let v17 = v15 << +v15;
        --v17;
    }
    const v21 = new Float32Array(3008);
    for (const v22 in v21) {
    }
}
new F0();
for (let i26 = -3, i27 = 10; i26 < i27; i27--) {
}
gc();
