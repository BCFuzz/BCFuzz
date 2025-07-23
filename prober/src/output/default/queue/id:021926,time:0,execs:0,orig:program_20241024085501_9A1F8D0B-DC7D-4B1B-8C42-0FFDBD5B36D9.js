class C0 {
    constructor() {
        for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
            let v12 = Date;
            class C13 extends v12 {
            }
            v12++;
            let v16 = C0 << C0;
            const v19 = (4294967297 ^ v12) & --v16;
            const v20 = new C13();
            const v22 = v20.toLocaleTimeString().substring;
            try { v22(this, v22, v19); } catch (e) {}
            for (let v24 = 0; v24 < 250; v24++) {
            }
        }
    }
}
new C0();
gc();
