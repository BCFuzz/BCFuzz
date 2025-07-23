for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
}
for (let i32 = -3, i33 = 10; i33--;) {
}
const v40 = `
    class C41 {
        constructor() {
        }
        /*
        constructor(a44) {
            /\u{12345}/myvis;
            /(?:a*)*OW*/miu;
            for (let v47 = 0; v47 < 5; v47++) {
            }
        }
        */
    }
`;
const v48 = v40.split();
try { v48.flatMap(eval); } catch (e) {}
gc();
