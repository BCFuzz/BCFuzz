for (let v0 = 0; v0 < 32; v0++) {
    function f1() {
        for (let v2 = 0; v2 < 10; v2++) {
            const v4 = new BigInt64Array(v2, v2, v2);
            v4.length;
        }
        return f1;
    }
    ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f1);
}
gc();
