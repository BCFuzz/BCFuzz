const v1 = `
    async function* f2(a3, a4) {
        const v5 = [a4,a4];
        switch (v5) {
            case 2:
                break;
            case 2:
                const v6 = a4.constructor;
                let v7;
                try { v7 = v6(f2, f2); } catch (e) {}
                const v8 = v7;
                v8.Intl;
                const t11 = "POSITIVE_INFINITY";
                delete t11[Set];
                break;
            case 2:
                break;
        }
        return v5;
    }
    for (let i15 = -1716696, i16 = 10; i15 < i16; i16--) {
    }
    f2(f2, 2);
`;
for (let i26 = 0, i27 = 10;
    (() => {
        const v28 = i26 != i27;
        new Uint32Array();
        return v28;
    })();
    i27--) {
    for (let [i39, i40] = (() => {
            class C36 {
            }
            new C36();
            return [i27, 10];
        })();
        i27 < i40;
        i40--) {
    }
}
const v48 = eval(v1);
v48.next(v48, v48);
for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
}
gc();
