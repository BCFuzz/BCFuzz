function f1(a2, a3, a4, a5) {
    for (let v6 = 0; v6 < 10; v6++) {
        for (let i8 = 0, i9 = v6; i8 < i9; i9--) {
            const v17 = new SharedArrayBuffer(i8);
            const v19 = new DataView(v17);
            try { v19.getUint16(a4, v6); } catch (e) {}
            for (let v21 = 0; v21 < 25; v21++) {
            }
        }
    }
    return f1;
}
f1();
f1();
for (let i25 = 10, i26 = 10; -13369 < i26; i26--) {
}
gc();
