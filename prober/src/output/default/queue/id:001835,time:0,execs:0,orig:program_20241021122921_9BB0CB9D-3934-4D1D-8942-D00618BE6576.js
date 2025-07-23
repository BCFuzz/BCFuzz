function f0(a1, a2, a3, a4) {
    return f0;
}
function f5() {
    for (let v6 = 0; v6 < 50; v6++) {
        f0(v6, f0, v6, f0);
        const v9 = new BigInt64Array(v6, v6);
        delete v9.length;
        const v11 = new BigInt64Array();
        [...v11];
        try { ("d").localeCompare("a6y", "d"); } catch (e) {}
    }
    return f5;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f5);
gc();
