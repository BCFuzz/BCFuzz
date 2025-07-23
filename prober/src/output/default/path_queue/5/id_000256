function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v3 = `
    async function* f4(a5, a6) {
        const v7 = [-1.0727626069849728e+308,-456.71558519068367,1.7976931348623157e+308,1000.0];
        class C8 {
            #f = v7;
            static o(a10) {
                try {
                    a5.#f = v2;
                } catch(e11) {
                }
            }
        }
        C8.o();
        return f4;
    }
    f4(v3);
`;
eval(v3).next();
gc();
