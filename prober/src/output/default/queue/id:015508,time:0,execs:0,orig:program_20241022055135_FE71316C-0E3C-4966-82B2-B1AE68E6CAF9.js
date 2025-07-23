class C0 {
    constructor(a2, a3) {
        const t2 = this.__proto__;
        t2.valueOf = a3;
    }
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i13 = 0, i14 = 10;
        i13 < i14;
        (() => {
            i14--;
            class C20 {
            }
            const v21 = new C20();
            const v22 = new C20();
            function f23(a24, a25, a26, a27) {
                const o39 = {
                    [a26](a29, a30, a31) {
                    },
                    10: a24,
                    toString(a33, a34, a35) {
                        JSON["stringify"](this);
                        return a26;
                    },
                };
                return o39;
            }
            f23(v21, 1000000.0, f23(v22));
        })()) {
    }
}
new F5();
new C0();
gc();
