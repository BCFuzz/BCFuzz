class C1 extends String {
    static {
        const v3 = `
            function* f4(a5, a6) {
                yield v3;
                return f4;
            }
            f4(v3, C1).next();
        `;
        eval(v3);
    }
}
gc();
