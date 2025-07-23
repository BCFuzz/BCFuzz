for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let i = 0; i < 5; i++) {
        const o25 = {
            toString(a12, a13) {
                class C14 {
                }
                const v15 = new C14();
                async function f16(a17, a18, a19) {
                    const o20 = {
                    };
                    const v22 = new Proxy(v15, o20);
                    v22.then = Symbol;
                    return await v22;
                }
                f16(i3, C14, C14);
                return i3;
            },
        };
        o25.toString(o25, i2);
        o25.toString();
    }
}
gc();
