function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.propertyIsEnumerable;
    try { new v5(); } catch (e) {}
    const v9 = new Float32Array(3008);
    let v11 = -1000.0 + a2;
    v9[285];
    const v14 = v11--;
    for (let i = 0; i < 5; i++) {
        try { a2(); } catch (e) {}
    }
    v14 & 1073741823;
    for (const v17 in v9) {
    }
}
new F0();
for (let i21 = -3, i22 = 10; i21 < i22; i22--) {
}
gc();
