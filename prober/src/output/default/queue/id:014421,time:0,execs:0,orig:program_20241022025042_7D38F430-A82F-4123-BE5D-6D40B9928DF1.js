const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
        class C2 {
            static #b;
            constructor(a4, a5) {
                this.#b ^= v1;
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
