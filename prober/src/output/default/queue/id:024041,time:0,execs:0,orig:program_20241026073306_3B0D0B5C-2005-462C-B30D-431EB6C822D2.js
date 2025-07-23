class C0 {
    m(a2) {
        const v3 = `
            for (let i6 = 0, i7 = 10;
                i6 !== this;
                (() => {
                    /[\0]/vgi;
                    function f12(a13, a14, a15, a16) {
                        return C0;
                    }
                })()) {
                /\u{12345}/myvis;
            }
        `;
        eval(v3);
    }
}
const v22 = new C0();
class C23 {
    constructor(a25, a26, a27) {
        try { a25.m(C23, a26, a27, a27); } catch (e) {}
    }
}
new C23(v22);
for (let i32 = 10, i33 = 10; -13369 !== i33; i33--) {
}
gc();
