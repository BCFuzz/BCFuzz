const v0 = [10,536870912,-128,268435439];
function f1(a2) {
    const v3 = [v0,v0,v0];
    function f4() {
        return v3;
    }
    Object.defineProperty(v3, 1283, { get: f4 });
}
v0[Symbol.toPrimitive] = f1;
([-2.0,NaN,-2.220446049250313e-16,1e-15,-2.2250738585072014e-308,-4.2963908948877037e+307]).toSpliced(v0, v0);
gc();
