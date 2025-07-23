function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 {
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F10(F2, undefined, F2);
const v16 = v15.length;
const v17 = new F10();
const v19 = `
    4 <= "-13";
    class C24 extends Set {
        static #toString(a26, a27) {
        }
    }
    try { ("-13").trimRight(); } catch (e) {}
    const v29 = ("-13")[undefined];
    const o30 = {
        "maxByteLength": -1,
        __proto__: v16,
        1073741825: v16,
        ...undefined,
    };
    o30[1073741825];
    o30[1073741825] = o30;
    o30.h = o30;
    o30.h = v29;
    const o32 = {
        "h": v29,
        "e": v29,
        "a": "undefined",
        "b": "-13",
        __proto__: undefined,
    };
    o32.g = o32;
    o32.a = o32;
    o32.h = v29;
    o32.e = v29;
    const o33 = {
    };
    o33.f = o33;
    o33.h = o33;
    o33.h = v29;
    Uint32Array.d = Uint32Array;
    function f35(a36, a37) {
        return v15;
    }
    const v38 = f35(v29, v15);
    const v39 = v38.constructor;
    v39.name = v39;
    const v40 = new v39();
    const v41 = f35(undefined, v17);
    const v42 = o30?.constructor;
    try { v42(F2, C6, F2); } catch (e) {}
    v41.propertyIsEnumerable();
    !v39;
    const v46 = f35(v38, v15);
    try { v46.toLocaleString(); } catch (e) {}
    try { Reflect.apply(); } catch (e) {}
    const v50 = [];
    const v51 = Reflect.construct(Uint32Array, v50);
    0 >>> 0;
    for (let v54 = 0; v54 < 5; v54++) {
        6 << 6;
    }
    C24[v40] = 8.224127138510412e+307;
    v51.fill(v50, v17);
    v50 | v38;
`;
eval(v19);
gc();
