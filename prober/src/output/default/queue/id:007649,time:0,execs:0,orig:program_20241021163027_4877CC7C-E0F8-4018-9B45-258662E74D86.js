function f1() {
    return f1;
}
const v2 = f1.name;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = [1.4023722071380096];
class C8 {
}
const v9 = new C8();
const v10 = [257];
const v11 = [57100,38971,-65535,-128,15,175539658,2];
class C12 {
}
const v13 = new C12();
const v15 = ("czA").lastIndexOf();
const v16 = [23655,-6,1472624445,-2147483647];
const v17 = [536870887,-38878,-1073741824,-1,6685,342511618,-128,-56059,2147483648,-1907305768];
function f18() {
    return v13;
}
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F20();
const v26 = v25.constructor;
const v27 = new F20(undefined, v13, F20);
const v29 = v27.constructor.length;
const v31 = 7 >> 7;
const v32 = `
    const v34 = ("-13")[undefined];
    const o35 = {
        "c": v15,
        ...v2,
        "e": 1.4023722071380096,
        ...v13,
        __proto__: "-13",
    };
    const o36 = {
    };
    const o37 = {
    };
    function f39(a40, a41) {
        return v25;
    }
    const v42 = f39(v34, v25);
    const v43 = v42.constructor;
    v43.bind(v43);
    v43.name = v43;
    const v45 = new v43();
    const v46 = v45.constructor;
    try { v46(v11, v29, v31); } catch (e) {}
    const v48 = f39(undefined, v27);
    const v49 = v48.constructor;
    try { v49(F3, C8, F3); } catch (e) {}
    const v51 = v48.propertyIsEnumerable();
    v51 && v51;
    const v53 = !v51;
    v53 && v53;
    f39(v42, v25).toLocaleString();
    try { Reflect.apply(); } catch (e) {}
    const v59 = [];
    const v60 = Reflect.construct(Uint32Array, v59);
    0 != 0;
    let v63 = 0 >>> 0;
    v63++;
    for (let v65 = 0; v65 < 5; v65++) {
        6 >= 6;
        6 >>> 6;
        v65 < 6;
        const v70 = Reflect[f39];
        Object.defineProperty(v26, 0, { enumerable: true, get: f18, set: f39 });
        v25[228004202] = v70;
        v65 + v65;
        const v72 = v65++;
        v72 - v72;
        v72 != v72;
    }
    const v77 = v60.fill().sort().slice(v17, v17);
    try { v77.sort(v7); } catch (e) {}
    const v79 = v60.reverse();
    const v80 = v79.forEach;
    try { v80(v49); } catch (e) {}
    const v82 = v79.sort();
    try { v82.sort(v16); } catch (e) {}
    v17[v27] = o36;
    const v85 = Symbol.apply;
    try { v85(v9, v9); } catch (e) {}
    const v87 = Symbol.toStringTag;
    v87.description;
    Symbol.for().description;
    Symbol.for();
    v10[v87] = v45;
    Math.asin(Math);
    -1114 | -1114;
    v59 | v42;
`;
eval(v32);
gc();
