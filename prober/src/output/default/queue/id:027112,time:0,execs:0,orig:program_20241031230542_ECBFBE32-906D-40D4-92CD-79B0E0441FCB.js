function f0() {
    const o2 = {
        "h": 2.220446049250313e-16,
    };
    for (const v3 in o2) {
        class C4 {
            constructor(a6) {
                const v8 = `
                    const o13 = {
                        toString(a10, a11) {
                            do {
                            } while (a6)
                            /\u{12345}\u{23456}/ygiu;
                            return a10;
                        },
                    };
                `;
                const v14 = v8.split(a6);
                try { v14.flatMap(eval); } catch (e) {}
            }
        }
        new C4(v3);
    }
    return o2;
}
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const o23 = {
        "defineProperty": f0,
    };
    const v25 = new Proxy(this, o23);
    v25.f = v25;
}
new F17();
gc();
