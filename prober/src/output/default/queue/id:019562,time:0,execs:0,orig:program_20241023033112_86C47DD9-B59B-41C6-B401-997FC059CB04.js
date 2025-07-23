const v0 = [1000000000.0,-2.0];
function f2() {
    const v5 = new Int16Array(1880);
    for (const v6 in v5) {
    }
    const v7 = [-5.0,1.3528388846609236e+308];
    for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
        const v20 = createGlobalObject().Atomics;
        try { v20.store(Proxy, v7, v0); } catch (e) {}
    }
    return v5;
}
f2();
f2();
gc();
