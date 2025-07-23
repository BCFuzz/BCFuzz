class C0 {
    constructor(a2, a3) {
        function F4(a6, a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v10 = new F4();
        for (let i = 0; i < 10; i++) {
            const o17 = {
                set b(a12) {
                    for (let v13 = 0; v13 < 5; v13++) {
                        ("p" + v13).replace("p", v10);
                    }
                },
            };
            o17.b = o17;
        }
    }
}
const v18 = new C0();
new C0(v18, v18);
gc();
