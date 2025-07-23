function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3();
const v9 = `
    const v11 = ("-13")[undefined];
    const o12 = {
    };
    function f14(a15, a16) {
        eval();
        const t9 = a16.constructor;
        const v22 = new t9(a15, Uint32Array);
        const v23 = v22.constructor;
        try { v23(v22, undefined, o12); } catch (e) {}
    }
    f14(v11, v8);
    class C26 {
    }
`;
eval(v9);
gc();
