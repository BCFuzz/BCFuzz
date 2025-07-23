class C1 {
    constructor(a3, a4) {
        let v5;
        try { v5 = a4(); } catch (e) {}
        ("concat").concat(v5, a3);
    }
}
const v7 = new C1();
for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
}
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v21 = 0; v21 < 50; v21++) {
        function F22(a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i32, i33] = (() => {
                    for (let v29 = 0; v29 < 25; v29++) {
                        ("function").concat();
                    }
                    return [0, 10];
                })();
                i32 < i33;
                i33--) {
            }
        }
        new F22(F22, F22, v7);
    }
}
new F18("concat");
gc();
