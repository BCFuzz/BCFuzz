function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        const v3 = new Date(v1);
        v3.getDate();
    }
    return f0;
}
const v5 = [1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15];
Date();
v5["forEach"](f0);
gc();
