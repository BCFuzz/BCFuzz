function f0() {
    return f0;
}
class C1 extends f0 {
    static {
        const v5 = new Int16Array(1880);
        function f7(a8, a9) {
            const v10 = a9 === a9;
            const o17 = {
                [a9](a12, a13, a14, a15) {
                    a9(this, a15, f0, C1, a12);
                },
            };
            return v10;
        }
        const v18 = f7();
        for (let i = 0; i < 10; i++) {
            f7("m", v18);
        }
        for (const v20 in v5) {
        }
    }
}
gc();
