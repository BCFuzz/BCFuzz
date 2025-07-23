const v0 = [16];
const v1 = [1000,268435440,8];
const v2 = [-9007199254740990,-1543020116,-17970,-47671,-8255,19341,536870887];
function f3(a4, a5) {
    a4.toLocaleString();
    try { a4.values(); } catch (e) {}
    a5[0];
    const o14 = {
        "h": a4,
        ...v1,
        ...v2,
        "g": f3,
        __proto__: a4,
        976499057: v0,
        "d": v1,
        m(a10, a11, a12, a13) {
            return a11;
        },
    };
    return o14;
}
const v15 = f3(v2, v0);
const v16 = f3(v1, v1);
const v17 = f3(v15, v2);
v17[0] = v17;
const v18 = v17.flatMap(f3);
function f19(a20, a21) {
    try { a20.findLast(a21, a20, f3); } catch (e) {}
    a21.findLast(f3);
    const o24 = {
    };
    return o24;
}
const v26 = f19(v1, v15)[1];
v26 & v26;
const v28 = f19(v2, v16);
f19(v0, v15);
Math.atan2(v18, v28);
gc();
