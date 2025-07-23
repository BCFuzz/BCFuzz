class C1 {
    static o(a3) {
        Object.defineProperty(this, "hour12", { writable: true, configurable: true, enumerable: true, value: 202 });
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            class C15 extends Date {
            }
            const v16 = new C15();
            for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
            }
            v16.toLocaleTimeString(i6, this);
        }
    }
}
C1.o();
gc();
