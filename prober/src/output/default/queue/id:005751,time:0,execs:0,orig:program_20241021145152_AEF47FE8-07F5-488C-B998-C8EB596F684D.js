function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 {
}
const v6 = [257];
function f8() {
    return v6;
}
const v9 = f8();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F11(f8, v6, v6);
const v17 = v16.length;
const v18 = v16.constructor;
const v19 = new F11();
const v21 = `
    try { ("-13").small(); } catch (e) {}
    const v24 = ("-13")[undefined];
    const o25 = {
        "maxByteLength": -1,
        __proto__: v17,
        1073741825: v17,
        ...v9,
    };
    o25[1073741825];
    o25[1073741825] = o25;
    o25.h = o25;
    o25.h = v24;
    const o27 = {
        "h": v24,
        "e": v24,
        "a": "undefined",
        "b": "-13",
        __proto__: undefined,
    };
    o27.g = o27;
    o27.a = o27;
    o27.h = v24;
    o27.e = v24;
    const o28 = {
    };
    o28.f = o28;
    o28.h = o28;
    o28.h = v24;
    Uint32Array.d = Uint32Array;
    function f30(a31, a32) {
        return v16;
    }
    const v33 = f30(v24, v16);
    const v34 = v33.constructor;
    v34.name = v34;
    const v35 = new v34();
    const v36 = f30(undefined, v19);
    const v37 = v36?.constructor;
    try { v37(F1, C5, F1); } catch (e) {}
    !v36.propertyIsEnumerable();
    const v41 = f30(v33, v16);
    try { v41.toLocaleString(); } catch (e) {}
    try { Reflect.apply(); } catch (e) {}
    const v45 = [];
    const v46 = Reflect.construct(Uint32Array, v45);
    0 >>> 0;
    for (let v49 = 0; v49 < 5; v49++) {
        6 >>> 6;
        v49 < 6;
        const v53 = Reflect[f30];
        Object.defineProperty(v18, 0, { enumerable: true, get: f8, set: f30 });
        v16[228004202] = v53;
    }
    v46.fill();
    v6[Symbol.toStringTag] = v35;
    v45 | v33;
`;
eval(v21);
gc();
