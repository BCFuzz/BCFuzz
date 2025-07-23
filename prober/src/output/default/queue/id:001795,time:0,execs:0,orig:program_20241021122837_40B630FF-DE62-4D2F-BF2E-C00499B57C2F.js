function f0(a1, a2, a3, a4) {
    a2 - a2;
    return a2;
}
function f6() {
    for (let v7 = 0; v7 < 250; v7++) {
        f0();
        const v10 = Symbol.unscopables;
        v7[v10] = v10;
        v7++;
        v7--;
    }
    return f0;
}
([1000000.0,-1e-15,0.8476032769886023,NaN,371.3185464265514,0.49417834342952816,1.0,-2.220446049250313e-16,2.2250738585072014e-308,-Infinity])["forEach"](f6);
gc();
