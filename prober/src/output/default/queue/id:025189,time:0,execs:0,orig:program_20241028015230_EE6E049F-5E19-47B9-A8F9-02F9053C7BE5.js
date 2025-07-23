function f1(a2, a3, a4, a5) {
    for (let v6 = 0; v6 < 10; v6++) {
        for (let i8 = 10, i9 = 10; i9; i9--) {
            const v16 = new SharedArrayBuffer();
            const v18 = new DataView(v16);
            try { v18.setInt16(a5, a3); } catch (e) {}
            const t6 = "e";
            t6[i9] &&= i9;
            for (let v20 = 0; v20 < 25; v20++) {
            }
        }
    }
    return "e";
}
f1(f1, f1, "e", "e");
gc();
