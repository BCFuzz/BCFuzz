function f0(a1, a2) {
    class C3 {
    }
    try { C3.apply(C3, C3); } catch (e) {}
    const v6 = new Uint16Array(a2, a1, a1);
    return v6;
}
for (let v7 = 0; v7 < 25; v7++) {
    const v9 = new Uint8Array(v7);
    v9.valueOf = f0;
    v9[9] = v9;
}
gc();
