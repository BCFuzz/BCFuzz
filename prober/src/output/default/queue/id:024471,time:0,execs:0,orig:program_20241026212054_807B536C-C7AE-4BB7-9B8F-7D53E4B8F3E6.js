class C0 {
    m(a2) {
        const v3 = `
            for (let v4 = 0; v4 < 5; v4++) {
                for (let i7 = 0, i8 = 10;
                    i7 !== i8;
                    (() => {
                        /a\nW/vgi;
                        for (let v13 = 0; v13 < 5; v13++) {
                            /\ud808\udf45*/mdgi;
                        }
                    })()) {
                }
            }
        `;
        eval(v3);
    }
}
const v19 = new C0();
class C20 {
    constructor(a22, a23, a24) {
        try { a22.m(); } catch (e) {}
    }
}
new C20(v19);
gc();
