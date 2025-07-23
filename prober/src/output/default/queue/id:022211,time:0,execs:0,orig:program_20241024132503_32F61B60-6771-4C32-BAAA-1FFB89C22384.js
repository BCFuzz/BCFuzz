class C0 {
}
const v1 = `
    /\u{12345}/myvis;
    class C3 extends C0 {
    }
    new C3();
`;
eval(v1.trimRight(C0, C0));
gc();
