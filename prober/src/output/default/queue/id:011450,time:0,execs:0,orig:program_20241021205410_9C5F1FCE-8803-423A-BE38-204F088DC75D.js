const v2 = new BigInt64Array(512);
for (const v3 in v2) {
    function f4(a5, a6) {
        return a5.bind(f4);
    }
    for (let i = 0; i < 5; i++) {
        f4(f4);
    }
}
gc();
