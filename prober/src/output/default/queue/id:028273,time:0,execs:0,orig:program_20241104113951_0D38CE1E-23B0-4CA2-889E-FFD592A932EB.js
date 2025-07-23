for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    /\u{12345}/myvis;
    class C12 {
    }
    const v13 = new C12();
    function f14() {
        return v10;
    }
    function f15() {
        return f14;
    }
    Object.defineProperty(f14, Symbol.toPrimitive, { enumerable: true, get: f15 });
    v13.constructor = f14;
    const v18 = v13.constructor;
    const v20 = createGlobalObject();
    const t17 = v20.EvalError;
    const v22 = t17(v18);
    /((\xed\xa0\x80))\x02/gisu;
    try { v20.load(v22); } catch (e) {}
`;
eval(v10);
gc();
