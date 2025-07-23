function f2(a3, a4) {
    const o5 = {
    };
    return o5;
}
const v6 = f2();
const v7 = [55133,128,129,1073741824,4294967296,11,2147483648,5,536870912,12];
const v8 = [-772643886,4];
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
class C12 extends F9 {
}
const v13 = new C12();
let v14;
try { v14 = v13.constructor(f2); } catch (e) {}
const v15 = `
    function f16() {
        return f16;
    }
    const v17 = f16();
    const o18 = {
        "f": v17,
    };
    class C19 {
    }
    -(-2147483648);
    -2147483648 >> -2147483648;
    const v23 = [1.7664845889080372,0.18563487804419587,2.0,-1.0,2.3318882112552703];
    const v24 = [2.0,1.7976931348623157e+308,1.495268757093988e+308,-2.220446049250313e-16,868534.9674234882,728.6010299510945,-2.1354866943347628e+307,-190.92537356432058,3.0];
    try { v24.some(); } catch (e) {}
    const v26 = [-9.898163380270953,-1.1922601555653612e+308,941.8923739441186,2.220446049250313e-16];
    try { v26.copyWithin(v14, C19); } catch (e) {}
    const v28 = v7 >>> v26;
    const v29 = v14 >> "xpsEF";
    v29 >> v29;
    try { v26.map(f2, v8); } catch (e) {}
    v7.a = 1024;
    v6[256] &= v28;
    class C32 {
    }
    new C32(v24, v24, v23);
`;
eval(v15);
gc();
