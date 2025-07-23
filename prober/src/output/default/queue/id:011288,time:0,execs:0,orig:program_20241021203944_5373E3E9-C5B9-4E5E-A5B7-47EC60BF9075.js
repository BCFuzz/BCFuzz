const v1 = `
    async function f2(a3, a4) {
        const o5 = {
        };
        function f6() {
            return f6;
        }
        function f7(a8) {
            function f9() {
                return f9;
            }
            function f10(a11, a12) {
                return f10;
            }
            return a8;
        }
        Object.defineProperty(o5, "d", { configurable: true, enumerable: true, get: f6, set: f7 });
        o5.d = -1.7976931348623157e+308;
        return f6;
    }
    f2(f2, f2);
    /\u{12345}/myvis;
`;
eval(v1);
gc();
