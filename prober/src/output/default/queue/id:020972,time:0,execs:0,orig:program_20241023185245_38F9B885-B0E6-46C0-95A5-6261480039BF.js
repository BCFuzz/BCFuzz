class C0 {
}
const v1 = new C0();
const v2 = [v1,v1,v1,v1];
const v3 = `
    async function* f4(a5, a6) {
        for (let [i9, i10] = (() => {
                delete v1.a;
                return [0, 0];
            })();
            i9 > i10;
            ) {
        }
        const v16 = v2.isConcatSpreadable;
        const v17 = [f4,f4,f4];
        try { v17.sort(a5); } catch (e) {}
        let v19;
        try { v19 = v16(); } catch (e) {}
        try { f4.substring(v19, v19, v19, v19, v16); } catch (e) {}
        const v21 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        const v22 = v2.map;
        try { v22(); } catch (e) {}
        for (const v24 of v21) {
        }
        try { a6.at(); } catch (e) {}
        return v2;
    }
    f4.apply(f4);
`;
for (let i29 = 0, i30 = 10;
    (() => {
        const v31 = i29 < i30;
        for (let i34 = 0, i35 = 10; i34 !== i35; i35--) {
        }
        return v31;
    })();
    i30--) {
}
eval(v3).next();
gc();
