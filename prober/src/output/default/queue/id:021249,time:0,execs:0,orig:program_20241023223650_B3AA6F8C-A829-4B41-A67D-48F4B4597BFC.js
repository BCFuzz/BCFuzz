class C0 {
    m(a2) {
        const v3 = `
            for (let v4 = 0; v4 < 5; v4++) {
                for (let i7 = 0, i8 = 10;
                    i7 !== i8;
                    (() => {
                        /a\nW/vgi;
                        function f13(a14, a15, a16, a17) {
                            return C0;
                        }
                    })()) {
                }
            }
        `;
        eval(v3);
    }
}
const v22 = new C0();
class C23 {
    constructor(a25, a26, a27) {
        try { a25.m(a27, a27, C0, a27); } catch (e) {}
    }
}
new C23(v22);
gc();
