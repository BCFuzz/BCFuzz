function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
const v3 = new C1();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a6[8];
}
new F4(v3);
new F4(v2);
new F4(C1);
for (const v16 of [1612,3,55297,-1024,4294967297]) {
}
for (const v18 of [-5.0,-5.732518605507154e+307,-1.7976931348623157e+308,-7.707478463508556e+307,-1000000000000.0,-1000.0]) {
    function f19() {
    }
    const v20 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
    const o21 = {
    };
    const v23 = new Proxy(v20, o21);
    try { v23.every(); } catch (e) {}
    v23.join;
    v23.constructor = f19;
}
gc();
