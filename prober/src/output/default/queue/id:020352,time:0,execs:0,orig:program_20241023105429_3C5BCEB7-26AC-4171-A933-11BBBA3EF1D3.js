function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        for (let i3 = 0; i3 < 21768; i3++) {
        }
        function F10(a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v15 = new F10(F10, f0, F10);
        const v16 = v15.__defineSetter__;
        try { v16(); } catch (e) {}
        v15.undefined = v15;
        "undefined" in v15;
    }
    return f0;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f0);
gc();
