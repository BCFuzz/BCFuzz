933147364 / 933147364;
const o23 = {
    set d(a3) {
        function f5(a6) {
            try { a6("m", a6, a6); } catch (e) {}
            class C8 {
            }
            class C9 extends C8 {
            }
        }
        function f10(a11, a12) {
            const o18 = {
                [a12](a14, a15, a16, a17) {
                },
            };
            return o18;
        }
        const v19 = f10();
        v19[Symbol.toPrimitive] = f5;
        for (let i = 0; i < 250; i++) {
            f10("m", v19);
        }
    },
};
o23.d = o23;
gc();
