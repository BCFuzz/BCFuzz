new Float32Array();
Float64Array.apply;
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
const v8 = new Uint32Array();
function f9(a10, a11) {
    return v7;
}
for (let v12 = 0; v12 < 5; v12++) {
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        a17.F43 = a17;
        F14.name in a17;
    }
    new F14(v8, F5);
    new F14(196.25100004624983, f9);
}
gc();
