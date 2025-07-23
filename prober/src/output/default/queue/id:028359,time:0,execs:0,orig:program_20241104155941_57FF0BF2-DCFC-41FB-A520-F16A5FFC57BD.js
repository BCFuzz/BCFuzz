const v0 = [];
const v1 = [-21625171,-14,536870888,-40191,3];
const v3 = `
    class C4 extends v1 {
        static {
            /\u{12345}/myvis;
            try {
            } catch(e7) {
                with (v0) {
                }
            }
        }
    }
`;
const v8 = v3.split();
try { v8.flatMap(eval); } catch (e) {}
gc();
