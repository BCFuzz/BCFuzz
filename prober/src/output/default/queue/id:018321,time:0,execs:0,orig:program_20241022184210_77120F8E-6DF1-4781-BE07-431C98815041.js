class C0 {
}
const v1 = new C0();
const v2 = `
    /\u{12345}/myvis;
    class C4 {
    }
    const v5 = new C4();
    function f6(a7, a8) {
        try { v1.toString(a7, v5, new.target); } catch (e) {}
        return new.target;
    }
    f6();
`;
eval(v2);
gc();
