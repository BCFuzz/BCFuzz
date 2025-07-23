class C0 {
    n(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            i6 **= i7;
            const v16 = new Float32Array(3845);
            v16[10] **= i6;
            for (let v17 = 0; v17 < 250; v17++) {
            }
        }
    }
}
const v18 = new C0();
v18.n(C0, C0);
gc();
