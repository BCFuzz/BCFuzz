const v0 = [];
const v1 = [-21625171,-14,536870888,-40191,3];
const v3 = `
    class C4 extends v1 {
        static {
            try {
            } catch(e6) {
                with (v0) {
                }
            }
        }
    }
`;
const v7 = v3.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
