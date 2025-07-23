const o2 = {
    [Map]: undefined,
};
const v3 = `
    /\u{12345}/myvis;
    const v7 = new Uint8Array(3144);
    class C8 extends Uint8Array {
        static {
            super[C8 + v7];
        }
    }
`;
eval(v3);
gc();
