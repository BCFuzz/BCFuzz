class C0 {
    m(a2) {
        const v3 = `
            for (let [i9, i10] = (() => {
                    let v5 = 44485;
                    for ((() => {
                            class C6 {
                            }
                        })();
                        v5--;
                        ) {
                    }
                    return [0, 10];
                })();
                i9 !== i10;
                /a\nW/vgi) {
            }
        `;
        eval(v3);
    }
}
const v19 = new C0();
class C20 {
    constructor(a22, a23, a24) {
        try { a22.m(a23, a24, this, this, a24); } catch (e) {}
    }
}
new C20(v19);
gc();
