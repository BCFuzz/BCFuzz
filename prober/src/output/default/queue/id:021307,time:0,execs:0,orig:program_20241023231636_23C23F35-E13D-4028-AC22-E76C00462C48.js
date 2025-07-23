class C0 {
    m(a2) {
        const v3 = `
            for (let i6 = 0, i7 = 10;
                i6 !== i7;
                (() => {
                    /[\0]/vgi;
                    function f12(a13, a14, a15, a16) {
                        return f12;
                    }
                })()) {
            }
        `;
        eval(v3);
    }
}
const v21 = new C0();
class C22 {
    constructor(a24, a25, a26) {
        try { a24.m(); } catch (e) {}
    }
}
new C22(v21);
gc();
