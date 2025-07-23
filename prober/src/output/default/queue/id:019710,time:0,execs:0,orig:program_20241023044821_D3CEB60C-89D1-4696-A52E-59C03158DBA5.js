const v2 = `
    const v5 = Reflect.construct(Float64Array, ["7","7","7"]);
    try { v5(); } catch (e) {}
    const v7 = [v2];
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        a11.search(v7);
    }
    const v13 = new F8(v2, v2);
    const v14 = /\u{12345}/myvis;
    function f15(a16) {
        return v13;
    }
    v14.toString = f15;
    v14.toString("7");
`;
const t16 = eval(v2).constructor;
new t16("7", "7");
gc();
