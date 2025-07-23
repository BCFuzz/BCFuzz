class C0 {
}
const v1 = `
    class C2 {
        static {
            class C4 {
                [C0];
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v1);
gc();
