for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            return a4;
        }
        const v5 = f3(this);
        function f6(a7, a8, a9, a10) {
            return a8;
        }
        const v11 = f6(f6, f3);
        const v12 = f6(v5, v11);
        function f13() {
            for (let v14 = 0; v14 < 25; v14++) {
                delete v12.length;
            }
            return v11;
        }
        ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f13);
    }
    new F1();
}
gc();
