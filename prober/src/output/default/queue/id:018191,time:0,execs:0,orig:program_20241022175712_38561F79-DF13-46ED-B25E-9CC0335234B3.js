function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5(a6) {
    return 5n;
}
F1.valueOf = f5;
for (let i9 = 0, i10 = 10;
    i9 < i10;
    (() => {
        i10--;
        class C16 {
            constructor(a18) {
                ("c" + a18) + a18;
            }
        }
        new C16(F1);
    })()) {
}
gc();
