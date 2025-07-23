function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F0 {
}
for (let i9 = 0, i10 = 10;
    i9 < i10;
    (() => {
        i10--;
        new C6();
        for (let i = 0; i < 10; i++) {
            const o21 = {
                set b(a18) {
                    "" + a18;
                    for (let v20 = 0; v20 < 50; v20++) {
                    }
                },
            };
            o21.b = o21;
        }
    })()) {
}
gc();
