function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
    }
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F3(f0, f0, F3);
    v8.undefined = v8;
    for (let v9 = 0; v9 < 250; v9++) {
        for (let v10 = 0; v10 < 5; v10++) {
        }
    }
    "undefined" in v8;
    return f0;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f0);
gc();
