const v2 = `
    class C3 extends 65537n {
        static get h() {
            with (Uint8Array()) {
            }
        }
    }
    /\u{12345}/mdvgi;
`;
const v8 = v2.split();
try { v8.flatMap(eval); } catch (e) {}
gc();
