["number",4294967297,1149373572,4294967297];
const v11 = [["number",536870888],536870888,"f",-1024];
let v14 = -1.0;
const v15 = [];
function f16(a17) {
    return -4294967297;
}
v15.toString = f16;
const v22 = `
    for (let v23 = 0; v23 < 5; v23++) {
        const v26 = ("p" + v23).codePointAt;
        let v27;
        try { v27 = v26.getFloat64(v26, v22, v23); } catch (e) {}
        try { v26.call(v15, -4.0, v27); } catch (e) {}
    }
    let v29 = 128;
    function f32(a33, a34) {
        const o37 = {
            ...a33,
            "a": 2n,
            ...a34,
            ...v11,
            [4294967297]: 536870888,
            "e": 2n,
            __proto__: a33,
            "b": 462505212n,
            [2n]: a34,
            set f(a36) {
            },
        };
        return o37;
    }
    const v38 = f32();
    v29--;
    const v40 = \`
        v15.length;
        /\u{12345}/myvis;
    \`;
    class C43 {
        static set b(a45) {
            this.sort = 462505212n;
            Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
        }
    }
    C43.sort = 2n;
    const v47 = new C43();
    C43.b = v47;
    function f48() {
    }
    const v50 = v38.f;
    v15[536870887] = v50;
    v14 >>= -1000000.0;
    try { v50(257, f48, v29); } catch (e) {}
    try { C43.sort(1149373572); } catch (e) {}
    let v53 = 9;
    v53 /= 257;
    for (const v54 in -4.0) {
    }
    eval(v40);
`;
eval(v22);
gc();
