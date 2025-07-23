function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = `
    async function* f6(a7, a8) {
        const v9 = a8.substring;
        try { v9(); } catch (e) {}
        let v11;
        try { v11 = v9(); } catch (e) {}
        try { Float32Array(a8); } catch (e) {}
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        const v25 = [BigInt64Array];
        let v26;
        try { v26 = v25.slice(v11, v11); } catch (e) {}
        let v27;
        try { v27 = v26.lastIndexOf(); } catch (e) {}
        const v28 = new BigInt64Array(v11, v27, v27);
        const v29 = v28.__lookupSetter__;
        let v30;
        try { v30 = v29(F0, v11); } catch (e) {}
        for (const v31 of v28) {
        }
        const v32 = v25.pop();
        try { v32(); } catch (e) {}
        let v34;
        try { v34 = v32.apply(f6, v5, a8); } catch (e) {}
        const v35 = v32.__defineSetter__;
        let v36;
        try { v36 = v35(); } catch (e) {}
        try { v35(v30, F0, v5, v27); } catch (e) {}
        try { v35(); } catch (e) {}
        let v39;
        try { v39 = a7.substring(); } catch (e) {}
        let v40;
        try { v40 = v39.blink(v36, f6); } catch (e) {}
        try { F0.big(v5, f6, v36, v40, F0); } catch (e) {}
        const v42 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        const v43 = v42.map;
        try { v43(); } catch (e) {}
        for (const v45 of v42) {
        }
        let v46;
        try { v46 = a8.at(); } catch (e) {}
        let v47;
        try { v47 = v46.fixed(); } catch (e) {}
        let v48;
        try { v48 = v46.toLocaleUpperCase(v47, v47, v25, v34); } catch (e) {}
        try { v48.match(); } catch (e) {}
        return v27;
    }
    f6(v5, v5);
`;
for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
    for (let i63 = 0, i64 = 10; i53 < i64; i64--) {
    }
}
eval(v5).next();
gc();
