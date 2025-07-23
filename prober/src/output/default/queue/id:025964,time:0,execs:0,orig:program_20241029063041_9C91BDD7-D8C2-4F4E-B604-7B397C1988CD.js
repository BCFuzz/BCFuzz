const v2 = new Uint16Array();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t3 = createGlobalObject().Float16Array;
    const v13 = new t3(BigUint64Array);
    v13.constructor = a9;
    v13.slice();
}
const v15 = new F4();
const t9 = v15.constructor;
new t9(v2, Map, v2, Uint16Array);
gc();
