function f0(a1, a2, a3) {
    const v4 = `
        const o18 = {
            [2n](a7, a8, a9, a10) {
                class C11 {
                    constructor(a13, a14) {
                        this[6] in arguments;
                    }
                }
            },
        };
    `;
    eval(v4);
}
f0(f0, f0, f0);
const v24 = new Uint8ClampedArray(2502);
for (const v25 in v24) {
}
gc();
