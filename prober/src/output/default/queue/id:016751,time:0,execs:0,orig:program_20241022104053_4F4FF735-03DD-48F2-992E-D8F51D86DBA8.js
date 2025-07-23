const v0 = `
    async function* f1(a2, a3) {
        const v4 = a3.substring;
        try { v4(v4); } catch (e) {}
        for (let [i9, i10] = (() => {
                0 >>> 0;
                return [0, 10];
            })();
            i9 < i10;
            i10--) {
        }
        const v18 = [BigInt64Array];
        let v19;
        try { v19 = v18.slice(); } catch (e) {}
        const v20 = new BigInt64Array();
        for (const v21 of v20) {
        }
        const v23 = v18.pop().__defineSetter__;
        try { v23(); } catch (e) {}
        try { v23(); } catch (e) {}
        try { a2.substring(v20, f1); } catch (e) {}
        const v27 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        const v28 = v27.map;
        try { v28(); } catch (e) {}
        for (const v30 of v27) {
        }
        let v31;
        try { v31 = a3.at(v19, v4, a2, v0); } catch (e) {}
        try { v31.toLocaleUpperCase(v31); } catch (e) {}
    }
    f1(v0, v0);
`;
for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
    for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
    }
}
eval(v0).next();
gc();
