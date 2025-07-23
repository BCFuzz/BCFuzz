class C0 {
}
function f1(a2) {
    for (let [i14, i15] = (() => {
            for (let i7 = 0, i8 = 10; i7 < 0;) {
            }
            return [0, 10];
        })();
        i14 < i15;
        (() => {
            for (let [i29, i30] = (() => {
                    const o26 = {
                        ["eC"](a23, a24) {
                            "object" in a23;
                        },
                    };
                    try { o26.eC(0); } catch (e) {}
                    return [0, 10];
                })();
                i29 < i30;
                i30--) {
            }
            i15--;
        })()) {
    }
    return C0;
}
const v40 = new C0();
const v41 = v40.constructor;
v41.toString = f1;
const t30 = v41.toString;
t30();
gc();
