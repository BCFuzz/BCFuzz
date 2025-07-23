const v0 = `
    function f1() {
        return f1;
    }
    class C2 extends f1 {
        static p(a4) {
            for (let i = 0; i < 5; i++) {
                const v5 = (a6, a7) => {
                    return a4;
                };
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
