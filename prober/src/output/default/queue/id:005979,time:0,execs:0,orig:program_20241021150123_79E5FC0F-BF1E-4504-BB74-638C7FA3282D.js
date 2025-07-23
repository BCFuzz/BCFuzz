for (let i = 0; i < 5; i++) {
    const o15 = {
        toString(a2, a3) {
            class C4 {
            }
            const v5 = new C4();
            async function f6(a7, a8, a9) {
                const o10 = {
                };
                const v12 = new Proxy(v5, o10);
                v12.then = Symbol;
                await v12;
                return this;
            }
            f6();
            return a2;
        },
    };
    o15.toString();
    o15.toString();
}
gc();
