for (let i = 0; i < 100; i++) {
    const v0 = [];
    class C2 {
        #g;
        constructor(a4, a5, a6, a7) {
            const v8 = v0.pop();
            try {
                v8.#g %= 255;
                return arguments;
            } catch(e10) {
            }
        }
    }
    new C2();
}
gc();
