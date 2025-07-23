function f1(a2, a3, a4, a5) {
    const v6 = a3 - a3;
    v6 >>> 129;
    return v6;
}
function f8() {
    for (let v9 = 0; v9 < 5; v9++) {
        f1();
    }
    return f8;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f8);
gc();
