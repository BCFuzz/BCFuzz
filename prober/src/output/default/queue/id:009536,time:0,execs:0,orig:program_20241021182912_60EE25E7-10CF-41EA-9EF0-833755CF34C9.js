function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        const v5 = `
            class C6 {
            }
            const v7 = new C6();
            async function f8(a9, a10, a11) {
                const o12 = {
                };
                new Proxy(v7, o12);
                function f15(a16) {
                    return this;
                }
                class C17 extends f15 {
                    constructor(a19, a20, a21) {
                    }
                }
                return v5;
            }
            f8();
        `;
        eval(v5);
    }
}
new C1(f0, f0);
for (let i28 = -3, i29 = 10; i28 < i29; i29--) {
}
gc();
