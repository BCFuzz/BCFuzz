const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        async function* f7(a8, a9) {
            return a5;
        }
        function f10() {
            return F1;
        }
        class C11 extends f10 {
            constructor(a13, a14) {
            }
        }
    }
    new F1();
    /\u{12345}/myvis;
`;
eval(v0);
gc();
