function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        for (let i = 0; i < 100; i++) {
            function f7(a8, a9, a10, a11) {
                const o12 = {
                    __proto__: a10,
                };
                o12.e = o12;
                return o12;
            }
            f7(2, "o", f7());
        }
    }
}
new C1();
gc();
