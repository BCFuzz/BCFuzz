class C0 {
}
const v1 = `
    class C2 extends C0 {
    }
    new C2();
`;
eval(v1.trimRight());
gc();
