function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    const v8 = new Uint16Array();
    return v8.fill(v8, 8, F0);
}
F0.valueOf = f5;
const v10 = new F0(F0, f5, F0);
const v11 = [6.514568310428352,NaN,-1000000000.0,7.438554286054682,0.45235546200344956,-4.0,-3.0,-5.0,1.7976931348623157e+308];
try { v11.copyWithin(v10, F0); } catch (e) {}
gc();
