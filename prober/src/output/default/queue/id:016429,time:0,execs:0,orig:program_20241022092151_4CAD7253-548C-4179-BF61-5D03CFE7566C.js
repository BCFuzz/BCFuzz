function f0() {
    const o21 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                const v3 = [a2];
                function f4() {
                    function f5(a6, a7) {
                        return a6;
                    }
                    return f5;
                }
                function f8(a9) {
                    return f8;
                }
                Object.defineProperty(v3, "toString", { get: f4, set: f8 });
                const v10 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
                const v11 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
                function f12(a13, a14) {
                    a13.toString();
                    const o16 = {
                        __proto__: v11,
                    };
                    return o16;
                }
                f12(v3);
                f12(f12(v10)).flatMap(f12);
            }
        },
    };
    o21.d = o21;
    o21.d = o21;
    const o22 = {
    };
    return o22;
}
f0();
const v24 = f0();
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    const v29 = [1073741824,-26526];
    const o30 = {
    };
    const v32 = new Proxy(v29, o30);
    v32.with().every(f0);
}
new F25(v24, f0);
gc();
