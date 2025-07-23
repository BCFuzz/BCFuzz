class C3 {
    static #g = NaN;
    static #f = 1000000.0;
    static 523540742 = NaN;
    o(a5) {
        try { a5(NaN, 2.220446049250313e-16, 2.220446049250313e-16); } catch (e) {}
        return 2.220446049250313e-16;
    }
    static c = 2.220446049250313e-16;
}
const v10 = C3?.constructor;
try { new v10(1000000.0); } catch (e) {}
const v12 = new C3();
let v13 = new C3();
try { v13.toString(); } catch (e) {}
const v15 = new C3();
function f16(a17, a18, a19) {
    const v20 = a17?.constructor;
    try { new v20(); } catch (e) {}
    a19 - a19;
    const o23 = {
        "f": a18,
        [-2]: v12,
        [2.220446049250313e-16]: a19,
        ...a19,
        __proto__: v15,
        "c": v12,
        "b": a18,
        "e": NaN,
        ...v13,
        1073741823: 1000000.0,
        "h": v12,
    };
    o23[1073741823] = o23;
    return C3;
}
const v24 = f16(v13, NaN, 1000000.0);
try { new v24(); } catch (e) {}
f16(v15, v24, C3);
f16(C3, NaN, 1000000.0);
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    const v30 = this?.constructor;
    try { new v30(); } catch (e) {}
}
const v32 = new F28();
const v33 = v32?.constructor;
try { new v33(); } catch (e) {}
v32.valueOf = f16;
const v35 = v13--;
const o48 = {
    n(a37, a38, a39) {
        try { a38.valueOf(F28, C3, v15); } catch (e) {}
        const v41 = this;
        const v42 = v41.Intl;
        const v43 = v42?.PluralRules;
        try { new v43(); } catch (e) {}
        const v45 = v42.DateTimeFormat;
        a38.calendar = v35;
        const v46 = v45(a38, v45);
        try { v46.formatRangeToParts(this, this); } catch (e) {}
        return v46;
    },
};
const v49 = o48.n;
const v50 = v49(F28, v32, v49);
try { v50.format(C3); } catch (e) {}
gc();
