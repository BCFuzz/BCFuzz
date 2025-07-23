function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const v6 = v5.constructor;
const v7 = new v6(v6, v6, v6, v6);
function f8(a9) {
    function f10() {
        return f10;
    }
    class C11 extends f10 {
        constructor() {
            for (let i15 = 0, i16 = 10;
                (() => {
                    for (let v17 = 0; v17 < 50; v17++) {
                    }
                    return i15 < i16;
                })();
                ) {
                i16--;
            }
        }
    }
    const v24 = new C11();
    return v24;
}
v7.constructor = f8;
const v25 = v7.constructor;
try { v25(); } catch (e) {}
gc();
