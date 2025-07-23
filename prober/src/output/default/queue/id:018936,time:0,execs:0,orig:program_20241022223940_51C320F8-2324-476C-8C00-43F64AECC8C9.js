function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const v8 = Float64Array.apply;
v8.F50 = v5;
function f9(a10, a11) {
}
for (let v12 = 0; v12 < 5; v12++) {
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        F14.name in a17;
    }
    const v21 = new F14(196.25100004624983, f9);
    const t14 = v21.constructor;
    new t14(649, v8);
}
gc();
