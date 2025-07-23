for (let i = 0; i < 5; i++) {
    async function f1(a2, a3, a4, a5) {
        const v8 = new Uint8Array(1024);
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = v8;
        }
        const v15 = new F9(FinalizationRegistry, F9, a4, FinalizationRegistry);
        for (const v17 of v15.d) {
        }
        await FinalizationRegistry;
        return a4;
    }
    f1();
}
gc();
