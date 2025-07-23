function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        class C13 extends Date {
        }
        const v14 = new C13();
        const v16 = v14.toLocaleTimeString(this, this, i5).substring;
        try { v16(Date, this); } catch (e) {}
        for (let v18 = 0; v18 < 250; v18++) {
        }
    }
}
new F0();
gc();
