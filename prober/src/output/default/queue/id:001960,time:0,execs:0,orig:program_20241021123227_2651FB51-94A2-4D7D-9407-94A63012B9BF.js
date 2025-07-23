async function* f0(a1, a2) {
    function f3() {
        const v5 = new BigInt64Array();
        return v5;
    }
    a2.then = f3;
    return a1;
}
f0(f0, f0).next();
gc();
