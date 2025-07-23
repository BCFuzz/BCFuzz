function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        Date.call(f0);
        const v4 = new Date(v1);
        v4.getMonth();
        v4.getDate();
    }
    return f0;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f0);
gc();
