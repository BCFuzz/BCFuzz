function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v3 = `
    function f4() {
        return f4;
    }
    const v5 = f4();
    const v6 = f4();
    function f7(a8) {
        try { v6(...a8, v5, v5, a8, v2, ...a8); } catch (e) {}
        return a8;
    }
    v6.valueOf = f7;
    const v10 = f4();
    v10[0] = v10;
    class C11 extends f4 {
        constructor(a13, a14) {
        }
    }
    new Uint8Array(C11);
    /\u{12345}/myvis;
`;
eval(v3);
gc();
