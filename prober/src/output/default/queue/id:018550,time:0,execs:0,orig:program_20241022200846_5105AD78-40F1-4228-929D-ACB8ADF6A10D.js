const v2 = Float64Array.apply;
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
const v7 = new Uint32Array();
function f8(a9, a10) {
    return v6;
}
for (let v11 = 0; v11 < 5; v11++) {
    function F13(a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        F13.name in a16;
    }
    new F13(v7, F4);
    const v21 = new F13(196.25100004624983, f8);
    const t16 = v21.constructor;
    new t16(649, v2);
}
gc();
