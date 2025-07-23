function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [F0,F0,F0,F0];
function f5(a6, a7) {
    let v8 = 44485;
    for (; v8--;) {
    }
    for (let v10 = 0; v10 < 5; v10++) {
        function f11(a12) {
            return a7;
        }
        class C13 extends f11 {
            static [11];
            static d = v2;
        }
    }
    return a7;
}
f5(11, v3);
f5();
gc();
