const o21 = {
    toString(a1, a2) {
        class C4 {
            constructor(a6) {
                const v8 = [-4294967297,2147483647,-213375386,-9223372036854775808];
                function f9(a10) {
                    v8 & a10;
                    return 50359;
                }
                v8[Symbol.toPrimitive] = f9;
                ("c" + 50359) + a6;
                function f16(a17, a18) {
                    return f16;
                }
                function f19() {
                    return f19;
                }
            }
        }
        new C4(this);
        return "c";
    },
};
try { o21.toString(o21); } catch (e) {}
gc();
