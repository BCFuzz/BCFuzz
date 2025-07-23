function f0(a1, a2, a3, a4) {
    a2 - a2;
    return a1;
}
function f6() {
    for (let v7 = 0; v7 < 25; v7++) {
        v7 >>> v7;
        f0();
        const v11 = Symbol.unscopables;
        v7[v11] = v11;
        const v12 = v7++;
        v12 << v12;
        v7--;
    }
    return f0;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f6);
gc();
