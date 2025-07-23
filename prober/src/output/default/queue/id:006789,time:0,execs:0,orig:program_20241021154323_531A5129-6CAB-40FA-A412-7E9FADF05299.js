function f13(a14, a15, a16, a17) {
    const v19 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    const v20 = [4096];
    function f21(a22, a23) {
        const v24 = a23.at();
        const o25 = {
            __proto__: v19,
            "c": v24,
            "d": v20,
        };
    }
    const v27 = a16--;
    const v28 = /[(?:a?)+wM24(ab|cde)\p{Script=Greek}?]/myg;
    let v29;
    try { v29 = v28.toString(); } catch (e) {}
    const v30 = /7LL(?: foo )/isu;
    const v31 = /(O)/gisu;
    function F32(a34, a35, a36) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = v29;
    }
    const v37 = new F32();
    v37.b = v37;
    const v38 = new F32();
    v38.length = -4294967296n;
    const v39 = `
        const o40 = {
        };
        function f41(a42, a43, a44, a45) {
            const o46 = {
            };
            return f41;
        }
        function f47(a48) {
            return v38;
        }
    `;
    eval(v39);
    try { a14.toString(1.7976931348623157e+308, v27, a15, v31); } catch (e) {}
    const v54 = (1.7976931348623157e+308).toString().link(f13);
    const v56 = ("n").toLowerCase;
    try { v56(eval); } catch (e) {}
    for (const v58 of v54) {
    }
    const o60 = {
        get stack() {
        },
    };
    return v30;
}
f13();
f13();
gc();
