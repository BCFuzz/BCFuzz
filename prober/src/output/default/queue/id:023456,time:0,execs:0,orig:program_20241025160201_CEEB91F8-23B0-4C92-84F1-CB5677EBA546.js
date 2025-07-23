for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [12,129,-2147483648,-719364873];
    function f2(a3, a4) {
        const o5 = {
        };
        const v7 = new Proxy(f2, o5);
        (typeof v7).indexOf();
    }
    const o10 = {
        "get": f2,
    };
    const v12 = new Proxy(v1, o10);
    v12[2];
}
gc();
