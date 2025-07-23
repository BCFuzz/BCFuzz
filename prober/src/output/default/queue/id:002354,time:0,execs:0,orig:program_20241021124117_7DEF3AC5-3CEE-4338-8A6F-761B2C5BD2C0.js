function f0(a1) {
    return f0;
}
const v2 = f0();
function f3(a4, a5, a6, a7) {
    return a5;
}
const v9 = f3(v2, f3(f3, f0));
function f10() {
    for (let v11 = 0; v11 < 50; v11++) {
        new BigInt64Array();
        delete v9.length;
        const v15 = new BigInt64Array();
        [...v15];
    }
    return f10;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f10);
gc();
