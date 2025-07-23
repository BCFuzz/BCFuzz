const v1 = `
    async function* f2(a3, a4) {
        try { a3.toLocaleLowerCase(); } catch (e) {}
        const v6 = a4.substring;
        let v7;
        try { v7 = v6(a3, v1, v6, v6, v6); } catch (e) {}
        try { v6(); } catch (e) {}
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        const v20 = [BigInt64Array];
        try { v20.slice(); } catch (e) {}
        const v23 = v20.pop().__defineSetter__;
        let v24;
        try { v24 = v23(); } catch (e) {}
        try { v23(v24, v24); } catch (e) {}
        try { v23(); } catch (e) {}
        let v27;
        try { v27 = a3.substring(); } catch (e) {}
        let v28;
        try { v28 = v27.match(-1, v27, -1); } catch (e) {}
        try { v27.big(v28, v1, v23); } catch (e) {}
        const v30 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        const v31 = v30.map;
        try { v31(v31, -1, f2); } catch (e) {}
        try { v31(); } catch (e) {}
        for (const v34 of v30) {
        }
        const v35 = a4.at(-1, v7, -1);
        let v36;
        try { v36 = v35.search(v1); } catch (e) {}
        let v37;
        try { v37 = v35.toLocaleUpperCase(v36, v36); } catch (e) {}
        const v38 = v37.match(f2, v1, f2);
        try { v38.copyWithin(); } catch (e) {}
        return -1;
    }
    f2(v1, v1);
`;
for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
    for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
    }
}
eval(v1).next();
gc();
