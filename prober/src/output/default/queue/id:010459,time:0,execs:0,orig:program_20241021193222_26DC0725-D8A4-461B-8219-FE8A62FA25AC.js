const v0 = `
    class C1 {
        constructor(a3, a4, a5) {
            class C6 {
                static #o(a8, a9) {
                }
            }
            function f10() {
                return v0;
            }
            class C11 extends f10 {
            }
            C11().__proto__;
        }
        static {
            /xyz{0,1}/myg;
            function F16(a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
