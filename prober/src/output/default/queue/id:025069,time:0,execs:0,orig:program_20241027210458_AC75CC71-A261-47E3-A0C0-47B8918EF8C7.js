class C1 {
    static o(a3) {
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
function f28() {
    return -1024;
}
Object.defineProperty(C1, "timeZone", { enumerable: true, get: f28 });
C1.o();
gc();
