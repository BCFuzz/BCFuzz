const v0 = [3.227363586579575e+307,144.39942255849087,-1000.0,-2.220446049250313e-16,-660182.3334997279,2.2250738585072014e-308,0.9589123302096395,0.8738834811108555];
function f1(a2) {
    class C3 {
    }
    new C3();
    const o5 = {
        [v0]: a2,
    };
    return C3;
}
class C6 {
}
function f8(a9, a10, a11) {
    a10[3] = v0;
    const v12 = a10[3];
    v12.toString = f1;
    v12.every(f1);
    return a9;
}
try { f8(65536, C6); } catch (e) {}
gc();
