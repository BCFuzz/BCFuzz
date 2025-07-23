function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 10; v5++) {
        for (let i7 = 10, i8 = 10; i8; i8--) {
            const v15 = new SharedArrayBuffer();
            const v17 = new DataView(v15);
            try { v17.setInt16(a4, a2, DataView); } catch (e) {}
            for (let v19 = 0; v19 < 25; v19++) {
            }
        }
    }
    return f0;
}
f0(f0, f0, f0, f0);
gc();
