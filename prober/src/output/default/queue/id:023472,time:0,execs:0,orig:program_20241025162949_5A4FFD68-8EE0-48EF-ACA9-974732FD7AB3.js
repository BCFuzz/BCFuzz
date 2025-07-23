for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [12,129,-2147483648,-719364873];
    function f2(a3, a4) {
        const o5 = {
        };
        const v8 = new Int8Array(255);
        for (const v9 in v8) {
        }
        const v11 = new Proxy(f2, o5);
        (typeof v11).indexOf(a3, f2, v0, v1, Int8Array);
        return o5;
    }
    const o14 = {
        "get": f2,
    };
    const v16 = new Proxy(v1, o14);
    v16[2];
}
gc();
