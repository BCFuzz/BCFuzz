function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = [273609.9446739196,-213.15539042571947,-351.98532308847643,-1000.0,-1000.0,-2.220446049250313e-16,-1.7976931348623157e+308,-0.5728269429675752,-5.36002194793717];
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = v4["slice"]();
    function f13(a14, a15) {
        let v16;
        try { v16 = v2.throw(960839528, "slice", a15, v4); } catch (e) {}
        v16 == v16;
    }
    v12.toString = f13;
    for (let i20 = 0, i21 = 10; i21++, Math.round(v12), i20 < i21; i21--) {
        i21--;
    }
}
new F5(F0, 960839528, 960839528, F5);
gc();
