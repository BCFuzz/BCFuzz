class C0 {
    constructor() {
        for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
            class C13 extends Date {
            }
            const v14 = new C13();
            v14.getTime();
            const v17 = v14.toLocaleTimeString(i4, C13).substring;
            try { v17(Date, C0); } catch (e) {}
            for (let v19 = 0; v19 < 250; v19++) {
            }
        }
    }
}
new C0();
gc();
