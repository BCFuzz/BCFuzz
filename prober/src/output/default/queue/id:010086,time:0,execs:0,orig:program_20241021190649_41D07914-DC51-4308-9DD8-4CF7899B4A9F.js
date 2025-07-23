const v0 = `
    /(?<=)/gu;
    class C2 {
        constructor(a4, a5, a6) {
            class C7 {
                static #o(a9, a10) {
                }
            }
            a4.exec()?.push;
            function f13() {
                return f13;
            }
            class C14 extends f13 {
                129;
                static #g = f13;
            }
            let v15 = C14();
            let v16 = v15.__proto__;
            ({"c":v15,...v16} = C14);
        }
        static {
            const o18 = {
            };
            o18.h = o18;
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
