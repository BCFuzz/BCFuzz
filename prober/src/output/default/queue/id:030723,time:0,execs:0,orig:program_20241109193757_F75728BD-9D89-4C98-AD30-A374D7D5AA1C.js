const v0 = `
    const o5 = {
        toString(a2, a3) {
            return /\u{12345}/myvis;
        },
    };
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
    for (let i18 = 0, i19 = 10; i18 != i19; i19--) {
    }
    class C26 {
        constructor(a28) {
            const v29 = /(k)/mvs;
            v29.constructor.$1;
            const v32 = C26.toLocaleString();
            v32.replace(v29, v32);
        }
    }
    new C26(o5);
    for (let i37 = 0, i38 = 65537; i38--;) {
    }
`;
for (let i46 = 0, i47 = 10; i46 != i47; i47--) {
    for (let i56 = 0, i57 = 10; i56 < i57; i57--) {
    }
}
eval(v0);
gc();
