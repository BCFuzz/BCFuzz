for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    function F10(a12) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v13 = 0; v13 < 92; v13++) {
            class C15 extends Date {
            }
            const v16 = new C15();
            const v17 = v16.getFullYear;
            const v20 = Math.abs(-2147483648);
            try { v17(v20); } catch (e) {}
        }
    }
    new F10(i3);
}
gc();
