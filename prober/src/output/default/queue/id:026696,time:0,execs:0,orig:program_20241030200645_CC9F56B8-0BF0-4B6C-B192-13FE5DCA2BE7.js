function f0() {
    const o2 = {
        "h": 2.220446049250313e-16,
    };
    for (const v3 in o2) {
        class C4 {
            constructor(a6) {
                const v8 = `
                    const o12 = {
                        toString(a10, a11) {
                            do {
                            } while (a6)
                            return this;
                        },
                    };
                `;
                const v13 = v8.split(a6);
                try { v13.flatMap(eval); } catch (e) {}
            }
        }
        new C4(v3);
    }
    return 2.220446049250313e-16;
}
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    const o22 = {
        "defineProperty": f0,
    };
    const v24 = new Proxy(this, o22);
    v24.f = v24;
}
new F16(f0, f0, f0, f0);
gc();
