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
            let v12 = C11();
            let v13 = v12.__proto__;
            ({"c":v12,...v13} = C11);
        }
        static {
            try { this(v0, v0, this, C1); } catch (e) {}
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
