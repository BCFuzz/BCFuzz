const v0 = [1.7976931348623157e+308,-1.0,2.220446049250313e-16,2.2250738585072014e-308,1.0,2.220446049250313e-16,1e-15];
try { v0.flat(); } catch (e) {}
class C2 {
}
class C3 extends C2 {
}
const v4 = new C3();
const v5 = v4.constructor;
class C6 extends C2 {
}
for (let v7 = 0; v7 < 250; v7++) {
    let v8;
    try { v8 = v7(C2, C6, v5, v5); } catch (e) {}
    try { new v5(...v8); } catch (e) {}
    v7++;
    v7--;
}
gc();
