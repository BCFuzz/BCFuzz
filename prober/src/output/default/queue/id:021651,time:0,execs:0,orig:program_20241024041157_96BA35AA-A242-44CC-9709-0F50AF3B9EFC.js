function f0(a1, a2, a3, a4) {
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        const v15 = [f0,f0,f0,f0];
        for (let v17 = 0; v17 < 250; v17++) {
        }
        const v18 = new SharedArrayBuffer();
        const v20 = new DataView(v18);
        try { v20.setInt16(v15, a2); } catch (e) {}
        for (let v22 = 0; v22 < 5; v22++) {
        }
    }
    return a2;
}
f0(f0, f0, f0, f0);
gc();
