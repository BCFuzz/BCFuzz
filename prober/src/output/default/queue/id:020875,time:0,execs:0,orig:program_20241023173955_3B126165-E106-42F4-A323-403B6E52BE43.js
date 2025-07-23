const v0 = /\P{Any}/mygsu;
const v1 = /ab\b\d\bcds(ab)(?=.)[\d-z]/d;
const v2 = /abc|def/mygsu;
function f3(a4, a5, a6, a7) {
    const v8 = a4.toString(v0, v1);
    const t5 = a6.constructor;
    t5(v8);
    return v1;
}
const v11 = f3(v0, v2, v0);
f3(v1, v11, f3(v2, v2, v11));
gc();
