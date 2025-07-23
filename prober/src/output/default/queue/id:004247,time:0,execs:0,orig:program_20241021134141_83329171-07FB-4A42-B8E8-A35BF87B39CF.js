function f0() {
    return f0;
}
const v2 = new BigInt64Array();
for (let v3 = 0; v3 < 5; v3++) {
    for (let [i10, i11] = (() => {
            const o5 = {
                "get": f0,
            };
            const v7 = new Proxy(v2, o5);
            v7.includes;
            return [0, 10];
        })();
        i10 < i11;
        i11--) {
    }
}
gc();
