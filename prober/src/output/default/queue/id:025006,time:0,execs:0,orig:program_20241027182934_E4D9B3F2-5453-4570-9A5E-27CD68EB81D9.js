const v2 = new Int16Array(3);
const v4 = new Float32Array();
const v5 = v4.constructor;
const v6 = new v5(v5, 3, v2, v5);
function f7(a8, a9, a10, a11) {
    return Int16Array;
}
f7[Symbol.species] = v5;
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    a16.constructor = f7;
    a16.slice();
}
const v21 = new F14(v6);
const t14 = v21.constructor;
new t14(v2);
gc();
