const o12 = {
    o(a1, a2, a3) {
        const v4 = `
            /\u{12345}/myvis;
            class C6 {
                constructor(a8) {
                    a8.#toString();
                }
            }
        `;
        eval(v4);
        return a2;
    },
};
try { o12.o(o12, o12, o12, o12, o12); } catch (e) {}
gc();
