class C1 {
    constructor() {
        Object.defineProperty(this, "hour12", { enumerable: true, value: -65537n });
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
            class C14 extends Date {
            }
            const v15 = new C14();
            v15.toLocaleTimeString(v15, this);
        }
    }
}
new C1();
gc();
