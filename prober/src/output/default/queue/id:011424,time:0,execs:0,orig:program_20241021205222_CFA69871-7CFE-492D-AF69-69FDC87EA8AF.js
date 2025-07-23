function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 10; v5++) {
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
            const v16 = [-7677,1613127934,16,47879,12,10000,-56627,-4096,21519];
            const v18 = new SharedArrayBuffer(a3, SharedArrayBuffer);
            const v20 = new DataView(v18);
            try { v20.getUint16(v16); } catch (e) {}
            for (let v22 = 0; v22 < 25; v22++) {
            }
        }
    }
    return a3;
}
f0(f0, f0(f0, f0, f0, f0), f0, f0);
gc();
