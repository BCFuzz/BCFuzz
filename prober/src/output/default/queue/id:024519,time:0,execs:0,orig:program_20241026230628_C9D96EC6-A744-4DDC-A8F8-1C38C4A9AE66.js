function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        const v3 = createGlobalObject();
        for (let i6 = -3, i7 = 10;
            (() => {
                const v8 = i7--;
                const v10 = new Uint16Array();
                const v11 = v3.toLocaleString(f0, v8, v10, i6, createGlobalObject);
                v10[v11 + v11] = v1;
                return i6 < i7;
            })();
            ) {
        }
    }
    return f0;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f0);
gc();
