const v0 = `
    /\u{12345}/myvis;
    class C3 extends Uint8Array {
        static {
            for (let v5 = 0; v5 < 5; v5++) {
                for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
                }
                break;
            }
        }
    }
`;
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
eval(v0);
gc();
