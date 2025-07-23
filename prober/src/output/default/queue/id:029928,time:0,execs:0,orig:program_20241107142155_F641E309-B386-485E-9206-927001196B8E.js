const v0 = `
    async function* f1(a2, a3) {
        class C4 {
        }
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        try {
            class C17 {
            }
            const v18 = C17();
            const t10 = v18.__lookupSetter__;
            const v20 = t10(v18, f1, v0);
            const v21 = C17();
            class C22 extends C17 {
            }
            const v23 = C22();
            const t16 = v23.constructor;
            const t17 = t16().constructor;
            const v27 = t17();
            const t18 = v23.constructor;
            eval(v20, 128, v21, eval, v27, C4, t18(C22, f1).constructor);
        } catch(e32) {
        }
        return f1;
    }
    f1(v0, f1);
`;
for (let i36 = 0, i37 = 10; i36 != i37; --i37) {
    for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
    }
}
eval(v0).next();
gc();
