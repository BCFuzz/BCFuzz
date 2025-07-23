for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    class C11 {
        constructor(a13) {
        }
        /*
        constructor(a15, a16, a17, a18) {
            /[\0]/vgi;
        }
        */
    }
    const o24 = {
        toString(a21, a22) {
            /\u{12345}/myvis;
            return this;
        },
    };
`;
eval(v10);
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
