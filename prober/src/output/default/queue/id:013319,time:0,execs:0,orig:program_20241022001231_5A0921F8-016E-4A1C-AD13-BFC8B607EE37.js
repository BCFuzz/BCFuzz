const v1 = `
    /\u{12345}/myvis;
    class C3 extends Date {
        static #e;
        constructor(a5, a6) {
            a6.#e += Date();
        }
    }
`;
eval(v1);
gc();
