for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = new BigUint64Array();
const v12 = v11.join();
const v13 = `
    /\u{12345}/myvis;
    class C15 {
        get c() {
        }
        get c() {
            this || v12;
        }
    }
`;
eval(v13);
gc();
