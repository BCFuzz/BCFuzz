const v0 = [1000000000.0,-2.0];
function f2() {
    const v3 = [-5.0,1.3528388846609236e+308];
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        const v16 = createGlobalObject().Atomics;
        try { v16.store(Proxy, v3, v0); } catch (e) {}
        for (let v18 = 0; v18 < 10; v18++) {
        }
    }
    return v0;
}
f2();
f2();
gc();
