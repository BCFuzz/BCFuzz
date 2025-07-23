class C0 {
    constructor() {
        for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
            let v12 = Date;
            class C13 extends v12 {
            }
            v12++;
            const v16 = 35809 >> v12;
            const v18 = v16 ^ ~v16;
            const v19 = new C13();
            const v21 = v19.toLocaleTimeString().substring;
            try { v21(this, v21, v18); } catch (e) {}
            for (let v23 = 0; v23 < 250; v23++) {
            }
        }
    }
}
new C0();
gc();
