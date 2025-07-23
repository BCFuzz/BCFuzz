const v0 = [609241973,-1787086791,1597286262,745758435,12,268435440,256];
const v1 = [-9223372036854775808];
const o6 = {
    __proto__: v1,
    valueOf(a3, a4) {
        const t5 = a3 && v1;
        t5[118] -= v0;
        return v0;
    },
};
function f7(a8, a9, a10, a11) {
    a8.length = a8;
    try { a11.constructor(o6); } catch (e) {}
    return f7;
}
for (let v13 = 0; v13 < 5; v13++) {
    const t16 = f7(f7);
    t16(o6, v13, f7, f7);
}
gc();
