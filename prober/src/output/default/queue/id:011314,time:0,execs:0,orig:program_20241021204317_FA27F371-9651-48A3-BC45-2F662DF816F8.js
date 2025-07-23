for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            return F1;
        }
        const v5 = f3(f3);
        function f6(a7, a8, a9, a10) {
            return a8;
        }
        const v12 = f6(v5, f6(f6, f3));
        function f13() {
            for (let v14 = 0; v14 < 25; v14++) {
                delete v12.length;
            }
            return this;
        }
        ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f13);
    }
    new F1();
}
gc();
