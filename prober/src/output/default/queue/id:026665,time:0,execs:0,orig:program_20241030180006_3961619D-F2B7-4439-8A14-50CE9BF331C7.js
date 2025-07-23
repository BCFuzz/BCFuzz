const v2 = `
    async function* f3(a4, a5) {
        switch (-1.5702441622995532e+308) {
            case 2:
                break;
            case 2:
                const v6 = a5.constructor;
                let v7;
                try { v7 = v6(f3, f3); } catch (e) {}
                const v8 = v7;
                v8.Intl;
                const t10 = "POSITIVE_INFINITY";
                delete t10[Set];
                break;
            case 2:
                break;
        }
        return a4;
    }
    for (let i15 = -1716696, i16 = 10; i15 !== i16; i16--) {
    }
    f3();
`;
for (let i26 = 0, i27 = 10; i26 != i27; i27--) {
    for (let i35 = i27, i36 = 10; i36; i36--) {
    }
}
const v43 = eval(v2);
v43.next(eval, -1.5702441622995532e+308, v43, v2, -1.5702441622995532e+308);
for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
}
gc();
