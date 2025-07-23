const v0 = `
    async function* f1(a2, a3) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        for (let i = 0; i < 5; i++) {
            class C15 extends URIError {
                constructor(a17, a18) {
                    super();
                    this instanceof URIError;
                }
            }
            new C15(URIError, f1);
        }
        return v0;
    }
    f1(f1, f1);
`;
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
    for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    }
}
eval(v0).next();
gc();
