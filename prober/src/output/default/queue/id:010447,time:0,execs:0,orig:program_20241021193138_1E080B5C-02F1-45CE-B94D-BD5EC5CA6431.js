function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 {
}
const v6 = [257];
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F10();
const v16 = v15.length;
const v17 = new F10(undefined, v16, "undefined");
const v19 = `
    try { ("-13").small(); } catch (e) {}
    const v22 = ("-13")[undefined];
    const o23 = {
        "maxByteLength": -1,
        __proto__: v16,
        1073741825: v16,
        ...undefined,
    };
    o23[1073741825];
    o23[1073741825] = o23;
    o23.h = o23;
    o23.h = v22;
    const o25 = {
        "h": v22,
        "e": v22,
        "a": "undefined",
        "b": "-13",
        __proto__: undefined,
    };
    o25.g = o25;
    o25.a = o25;
    this.Int32Array;
    class C29 {
        #d = "ignoreCase";
        n(a31, a32) {
        }
    }
    o25.h = v22;
    o25.e = v22;
    const o33 = {
    };
    o33.f = o33;
    o33.h = o33;
    o33.h = v22;
    Uint32Array.d = Uint32Array;
    function f35(a36, a37) {
        return v15;
    }
    const v38 = f35(v22, v15);
    const v39 = v38.constructor;
    v39.name = v39;
    const v40 = new v39();
    const v41 = f35(undefined, v17);
    const v42 = v41?.constructor;
    try { v42(F1, C5, F1); } catch (e) {}
    !v41.propertyIsEnumerable();
    const v46 = f35(v38, v15);
    try { v46.toLocaleString(); } catch (e) {}
    try { Reflect.apply(); } catch (e) {}
    const v50 = [];
    const v51 = Reflect.construct(Uint32Array, v50);
    0 >>> 0;
    for (let v54 = 0; v54 < 5; v54++) {
        6 >>> 6;
    }
    v51.fill(v40, C5, v6);
    v6[Symbol.toStringTag] = v40;
    v50 | v38;
`;
eval(v19);
gc();
