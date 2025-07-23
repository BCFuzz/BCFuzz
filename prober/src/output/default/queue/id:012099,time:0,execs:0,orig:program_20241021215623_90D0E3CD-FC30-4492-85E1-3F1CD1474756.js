for (let i2 = 0, i3 = 10; i3--, i2 != i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        class C15 {
            constructor(a17, a18) {
                a18 += 2147483648;
                for (let v19 = 0; v19 < 25; v19++) {
                    "p" + a18;
                }
            }
        }
        new C15();
    }
}
new F10(F10);
gc();
