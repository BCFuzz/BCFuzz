function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    const v4 = [-985168975,268435439,255,-2029723201,4294967296,-1177784798,10,6,-34719202];
    v4[307] = v4;
    const v6 = createGlobalObject();
    const t8 = v6.Float16Array;
    const v8 = new t8(v4);
    v8.toSorted();
    return v6;
}
v2.constructor = f3;
const t14 = v2.constructor;
t14();
gc();
