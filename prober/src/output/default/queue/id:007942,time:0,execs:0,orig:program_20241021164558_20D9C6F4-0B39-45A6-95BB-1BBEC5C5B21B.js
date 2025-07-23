function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
function f3() {
    for (let v4 = 0; v4 < 250; v4++) {
        v2.toString();
    }
    return f3;
}
([1000000.0,-1e-15,0.8476032769886023,NaN,371.3185464265514,0.49417834342952816,1.0,-2.220446049250313e-16,2.2250738585072014e-308,-Infinity])["forEach"](f3);
gc();
