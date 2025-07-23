function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 {
}
const v6 = [257];
function f7() {
    return f7;
}
const v8 = f7();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F10();
const v16 = v15.length;
const v17 = v15.constructor;
const v18 = new F10();
const v19 = v18.toLocaleString();
const v21 = `
    try { ("-13").small(); } catch (e) {}
    const v24 = ("-13")[undefined];
    const o25 = {
        "maxByteLength": -1,
        __proto__: v16,
        1073741825: v16,
        ...v8,
    };
    o25[1073741825];
    o25[1073741825] = o25;
    o25.h = o25;
    o25.h = v24;
    const o27 = {
    };
    o27.e = o27;
    o27.g = o27;
    o27.a = o27;
    const o28 = {
    };
    function F29(a31, a32) {
        if (!new.target) { throw 'must be called with new'; }
    }
    o27.h = v24;
    o27.e = v24;
    const o33 = {
    };
    o33.f = o33;
    o33.h = o33;
    o33.h = v24;
    const v35 = [-1000000.0,-6.1160637174311105,783765.0150424987,-38955.71588714409];
    function f36() {
        return v35;
    }
    let v37;
    try { v37 = v19.fontsize(f36); } catch (e) {}
    const o38 = {
        __proto__: v37,
    };
    Uint32Array.e = Uint32Array;
    Uint32Array.d = Uint32Array;
    function f39(a40, a41) {
        return v15;
    }
    try { ("MIN_VALUE").substring("MIN_SAFE_INTEGER", -4294967296); } catch (e) {}
    function f46() {
        return o38;
    }
    const v47 = f39(v24, v15);
    const v48 = v47.constructor;
    try { v48(v47, "-13", "-13"); } catch (e) {}
    const v50 = v47.constructor;
    v50.name = undefined;
    const v51 = new v50();
    const v52 = f39(undefined, v18);
    const v53 = v52?.constructor;
    let v54;
    try { v54 = new v53(F1, C5, F1); } catch (e) {}
    v54.length;
    const v56 = v52.propertyIsEnumerable();
    v56 && v56;
    !v56;
    const v59 = f39(v47, v15);
    let v60;
    try { v60 = v59.toLocaleString(); } catch (e) {}
    try { v60.match(F10); } catch (e) {}
    try { Reflect.apply(); } catch (e) {}
    const v64 = [];
    const v65 = Reflect.construct(Uint32Array, v64);
    const v67 = 0 >>> 0;
    for (let v68 = 0; v68 < 5; v68++) {
        v68 != v68;
        6 >>> 6;
        v68 < 6;
        const v73 = Reflect[f39];
        Object.defineProperty(v17, 0, { enumerable: true, get: f7, set: f39 });
        v15[228004202] = v73;
    }
    const v74 = v65.fill();
    try { v74.sort(v67); } catch (e) {}
    v6[Symbol.toStringTag] = v51;
    v64 | v47;
`;
eval(v21);
gc();
