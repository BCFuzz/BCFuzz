class C0 {
}
const v1 = new C0();
const v2 = v1.propertyIsEnumerable;
let v3;
try { v3 = v2(); } catch (e) {}
let v4;
try { v4 = v2(); } catch (e) {}
const v5 = new C0();
const v6 = v5.propertyIsEnumerable;
try { v6(); } catch (e) {}
const v9 = ("isConcatSpreadable").small(C0, v3);
const v10 = v9.substring;
let v11;
try { v11 = v10(); } catch (e) {}
const v12 = v9.includes;
const v13 = v12.toString;
let v14;
try { v14 = v13(v9, v5); } catch (e) {}
try { v12(); } catch (e) {}
function f16() {
    return "isConcatSpreadable";
}
const v17 = f16();
const v18 = v17.h;
let v19;
try { v19 = v18(); } catch (e) {}
const v20 = f16();
class C21 {
}
const v22 = C21.apply;
const v23 = v22.call;
try { v23(v4, v23, v11, v18, v20); } catch (e) {}
let v25;
try { v25 = v22(); } catch (e) {}
const v26 = C21.__lookupGetter__;
try { v26(v11, v26); } catch (e) {}
let v28;
try { v28 = v26(); } catch (e) {}
try { C21(); } catch (e) {}
const v30 = new C21();
try { v30.constructor(v30, C0, v13); } catch (e) {}
const v32 = new C21();
let v33;
try { v33 = v32.constructor(); } catch (e) {}
try { Uint32Array.apply(); } catch (e) {}
try { Float32Array(v33, v6, v2); } catch (e) {}
try { Uint16Array(); } catch (e) {}
const v40 = new Uint16Array();
let v41;
try { v41 = v40.sort(v17); } catch (e) {}
const v42 = v40.constructor;
let v43;
try { v43 = v42.from(); } catch (e) {}
const v44 = v43?.forEach;
let v45;
try { v45 = v44(); } catch (e) {}
const v46 = new v42();
let v47;
try { v47 = v46.forEach(v30, v3); } catch (e) {}
const v48 = v46.sort(C21, v41, v47, v47, v14);
const v49 = v48.__lookupGetter__;
try { v49(Uint16Array); } catch (e) {}
try { v48.sort(v32); } catch (e) {}
let v53;
try { v53 = Int16Array.call(v44, v40, Int16Array, v48, v41); } catch (e) {}
new Int16Array(v53, v28, v9);
try { BigUint64Array(v45); } catch (e) {}
const v57 = new BigUint64Array(v19);
try { v57.findLastIndex(v25, v46); } catch (e) {}
try { Uint32Array.call(v44, v53, C21, v49); } catch (e) {}
class C60 {
}
const v61 = C60.__defineSetter__;
try { v61(); } catch (e) {}
try { v61(); } catch (e) {}
const v64 = new C60();
const v66 = v64.constructor.constructor;
try { v66(v66); } catch (e) {}
for (let v68 = 0; v68 < 5; v68++) {
}
for (let i71 = 0, i72 = 10; i71 < i72; i72--) {
    for (let v79 = 0; v79 < 10; v79++) {
        for (let v80 = 0; v80 < 5; v80++) {
        }
    }
}
gc();
