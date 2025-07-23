function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        class C13 extends Date {
        }
        const v14 = new C13();
        const v15 = v14.toLocaleTimeString();
        for (let v16 = 0; v16 < 25; v16++) {
        }
        i4 * v15;
    }
    this.a = -1024;
}
new F0();
new F0();
new F0();
gc();
