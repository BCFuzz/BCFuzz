function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(); } catch (e) {}
    const v8 = new Float32Array(3008);
    v8[285];
    v8[991] = v8;
    for (const v10 in v8) {
    }
}
new F0();
for (let i14 = -3, i15 = 10; i14 < i15; i15--) {
}
gc();
