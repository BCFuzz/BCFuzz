class C1 {
    constructor(a3, a4, a5, a6) {
        try {
            arguments.callee **= -14;
        } catch(e8) {
            e8.line;
        }
    }
}
new C1(-14, -14, -14, -14);
gc();
