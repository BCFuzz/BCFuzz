function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
class C5 extends F0 {
    #o(a7) {
    }
    #f = v3;
    static [F0];
    static [v2];
    static [v4] = F0;
}
C5[4017885744] = C5;
C5[4017885744] = C5;
C5.b = C5;
for (let i11 = 0, i12 = 10 + 10; i12--, i11 < i12;) {
    const v20 = createGlobalObject();
    const v21 = v20.EvalError;
    const v22 = v20.Atomics;
    try { v22.add(C5, C5, v21); } catch (e) {}
    for (let v24 = 0; v24 < 250; v24++) {
    }
}
gc();
