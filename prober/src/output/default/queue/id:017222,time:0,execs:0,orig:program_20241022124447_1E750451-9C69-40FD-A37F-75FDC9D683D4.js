function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        try { Reflect.apply(); } catch (e) {}
    }
}
new F0();
function f8(a9, a10, a11) {
    return f8;
}
const v12 = f8();
for (let i15 = 0, i16 = 7; i15 < i16; i16--) {
    for (let v23 = 0; v23 < 25; v23++) {
        const v24 = [43319,256,-12,536870889,383344779,257];
        const v26 = [f8];
        Reflect.apply(v24.flatMap, v12, v26);
    }
}
gc();
