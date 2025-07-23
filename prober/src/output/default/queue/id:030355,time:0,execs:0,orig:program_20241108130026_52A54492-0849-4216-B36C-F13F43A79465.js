const v1 = `
    class C2 {
        constructor() {
        }
        /*
        constructor(a5) {
            /(?:a*)*OW*/miu;
            {
            }
        }
        */
    }
    /\u{12345}/myvis;
`;
const v8 = v1.split();
try { v8.flatMap(eval); } catch (e) {}
gc();
