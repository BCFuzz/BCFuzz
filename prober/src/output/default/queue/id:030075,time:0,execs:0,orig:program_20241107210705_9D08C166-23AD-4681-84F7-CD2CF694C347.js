const v1 = `
    class C2 {
        constructor() {
        }
        /*
        constructor(a5) {
            /(?:a*)*OW*/miu;
            if ([eval] == 64n) {
            }
        }
        */
    }
`;
const v10 = v1.split();
try { v10.flatMap(eval); } catch (e) {}
gc();
