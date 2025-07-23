const v0 = [];
const v2 = `
    for (let v3 = 0; v3 < 5; v3++) {
        const v6 = ("p" + v3).codePointAt;
        let v7;
        try { v7 = v6.getFloat64(v6, v2, v3); } catch (e) {}
        try { v6.call(v0, -4.0, v7); } catch (e) {}
    }
    let v9 = 128;
    function f12(a13, a14) {
        const o17 = {
            ...a13,
            __proto__: a13,
            "b": 462505212n,
            [2n]: a14,
            set f(a16) {
            },
        };
        return o17;
    }
    f12();
    v9--;
    const v20 = \`
        v0.length;
        /\u{12345}/myvis;
    \`;
    class C23 {
        static set b(a25) {
            Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
        }
    }
    const v27 = new C23();
    C23.b = v27;
    function f28() {
    }
    let v30 = 9;
    v30 /= 257;
    for (const v31 in -4.0) {
    }
    eval(v20);
`;
eval(v2);
gc();
