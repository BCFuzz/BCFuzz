class C0 {
}
const v1 = new C0();
const v2 = [C0,C0,C0];
const v3 = `
    async function* f4(a5, a6) {
        for (let [i9, i10] = (() => {
                delete v1.a;
                return [0, 0];
            })();
            i9 != i10;
            ) {
        }
        const v16 = v2.__defineSetter__;
        const v17 = [C0,C0,C0,C0,C0];
        let v18;
        try { v18 = v17.sort(a5); } catch (e) {}
        try { v16(v17, C0, f4, v18); } catch (e) {}
        try { f4.substring(); } catch (e) {}
        const v21 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        const v22 = v2.map;
        try { v22(); } catch (e) {}
        try { v22(); } catch (e) {}
        for (const v25 of v21) {
        }
        try { a6.at(v16, v21, f4); } catch (e) {}
        return v21;
    }
    f4.apply(f4, v1, f4);
`;
for (let i30 = 0, i31 = 10;
    (() => {
        const v32 = i30 < i31;
        for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
        }
        return v32;
    })();
    i31--) {
}
eval(v3).next();
gc();
