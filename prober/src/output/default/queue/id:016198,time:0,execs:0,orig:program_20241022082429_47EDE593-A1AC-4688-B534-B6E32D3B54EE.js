function f0(a1, a2, a3) {
    return a2;
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i12 = 0, i13 = 10;
        i13++, i12 < i13;
        (() => {
            i13--;
            class C20 {
                constructor(a22) {
                    ("c" + a22) + a22;
                }
            }
            new C20(f0);
        })()) {
        i13--;
    }
}
new F4(f0, f0, f0, F4);
gc();
