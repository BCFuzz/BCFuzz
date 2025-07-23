for (let i = 0; i < 100; i++) {
    const v0 = [];
    class C2 {
        #g;
        constructor(a4, a5, a6, a7) {
            const v8 = v0.pop();
            v8 | v8;
            try {
                v8.#g %= 255;
            } catch(e10) {
            }
        }
    }
    const v11 = new C2(C2, C2, C2, v0);
    const v12 = v11.constructor;
    new v12(v0, v12, v0, C2);
}
gc();
