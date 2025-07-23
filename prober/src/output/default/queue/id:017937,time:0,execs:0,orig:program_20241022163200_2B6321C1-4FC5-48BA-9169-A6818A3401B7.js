function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F0 {
}
for (let i9 = 0, i10 = 10;
    i9 < i10;
    (() => {
        i10--;
        const v15 = new C6();
        const t2 = v15.constructor;
        new t2();
        for (let i = 0; i < 10; i++) {
            const o21 = {
                set b(a19) {
                    for (let v20 = 0; v20 < 10; v20++) {
                    }
                },
            };
            for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
            }
            o21.b = o21;
        }
    })()) {
}
gc();
