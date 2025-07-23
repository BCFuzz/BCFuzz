const v0 = `
    /\u{12345}/myvis;
    class C3 extends Uint8Array {
        static {
            for (let i7 = -3, i8 = 10;
                (() => {
                    let v9 = -920.5348287396685;
                    class C10 {
                    }
                    try {
                        super.p();
                    } catch(e12) {
                        v9 = e12;
                    }
                    const v13 = C10.constructor;
                    try { v13(v9); } catch (e) {}
                    return i7 < i8;
                })();
                i8--) {
            }
        }
    }
`;
eval(v0);
gc();
