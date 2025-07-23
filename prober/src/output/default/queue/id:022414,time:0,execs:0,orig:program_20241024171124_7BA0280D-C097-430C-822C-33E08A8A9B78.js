for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 100; v10++) {
    function f11() {
        function f12(a13, a14) {
            for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
            }
            return a13(f12, a14, f11, f12, a13);
        }
        new Promise(f12);
    }
    class C28 extends f11 {
    }
    new C28();
}
gc();
