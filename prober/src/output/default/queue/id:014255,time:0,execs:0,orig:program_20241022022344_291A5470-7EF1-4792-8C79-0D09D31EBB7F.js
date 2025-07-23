const v0 = `
    function f1() {
        return f1;
    }
    class C2 extends f1 {
        constructor(a4, a5) {
        }
        /*
        constructor(a7) {
            5.0 * +0;
        }
        */
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
gc();
