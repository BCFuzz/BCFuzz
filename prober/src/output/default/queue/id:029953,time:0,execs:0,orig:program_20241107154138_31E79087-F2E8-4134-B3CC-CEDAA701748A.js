const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
        }
        class C14 {
        }
        const v15 = new C14();
        const v16 = v15.__defineSetter__;
        let v17;
        try { v17 = v16(f1, v0); } catch (e) {}
        for (let i23 = 0, i24 = 10 + 10;
            i24--, i23 < i24;
            (() => {
                for (let i32 = -3, i33 = 10; 8 < i33; i33--) {
                }
            })()) {
        }
        const v43 = new Float64Array(C14, a3, a2);
        for (const v44 of v43) {
            switch (v44) {
                case 0:
                    break;
                case 2:
                    break;
                case 2:
                    break;
            }
        }
        switch (v17) {
            case 0:
                break;
            case 2:
                break;
            case 2:
                break;
        }
        return a3;
    }
    f1(f1, v0);
`;
eval(v0).next();
gc();
