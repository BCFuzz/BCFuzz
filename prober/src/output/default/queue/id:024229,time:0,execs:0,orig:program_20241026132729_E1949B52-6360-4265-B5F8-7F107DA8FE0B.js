class C0 {
}
const v1 = new C0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const o7 = {
        "maxByteLength": a6,
    };
    o7.toJSON = o7;
    function f9() {
        return f9;
    }
    const v11 = Date();
    const o12 = {
        [Math]: v11,
        "h": o7,
    };
    o12.toJSON = f9;
    JSON.stringify(o12);
}
const v15 = new F3();
const t21 = v15.constructor;
new t21(v1, true);
gc();
