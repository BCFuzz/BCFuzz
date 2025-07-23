const v0 = `
    function f1() {
        function f2() {
            return f2;
        }
        class C3 extends f2 {
            constructor(a5, a6) {
                const o7 = {
                };
                return o7;
            }
        }
        const v8 = new C3(C3, f2);
        return v8;
    }
    f1();
    function f10() {
        return f10;
    }
    class C11 extends f10 {
        static p(a13) {
            do {
            } while (0 < 3)
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
