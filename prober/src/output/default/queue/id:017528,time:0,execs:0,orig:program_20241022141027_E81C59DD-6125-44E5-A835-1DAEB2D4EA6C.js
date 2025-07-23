const v0 = `
    /\u{12345}/myvis;
    function f2() {
        const v5 = new Uint8Array(3144);
        class C6 extends Uint8Array {
            static {
                super[C6 + v5];
            }
        }
        0 < 10;
    }
    f2();
`;
eval(v0);
gc();
