class C0 {
}
const v1 = new C0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const o7 = {
        "maxByteLength": a6,
    };
    o7.h = o7;
    function f8() {
        return f8;
    }
    const v10 = Date();
    const o11 = {
        [a6]: v10,
        "h": o7,
    };
    o11.toJSON = f8;
    JSON.stringify(o11);
}
const v14 = new F3(v1, C0);
const t21 = v14.constructor;
new t21(v1, false);
gc();
