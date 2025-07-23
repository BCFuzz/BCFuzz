function f0(a1, a2) {
    function f5(a6, a7) {
        const o8 = {
            [2n]: a7,
            [a7]: f5,
        };
        return 2n;
    }
    class C9 {
    }
    const v10 = new C9();
    async function f11(a12, a13, a14) {
        const o15 = {
        };
        const v17 = new Proxy(v10, o15);
        await v17;
        return a13;
    }
    f11(2n, v10, a1);
    for (let v20 = 0; v20 < 100; v20++) {
        f5();
    }
    arguments.callee += a1;
    return f0;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
