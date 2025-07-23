function f0(a1, a2, a3, a4) {
    const o28 = {
        toString(a6, a7) {
            const o17 = {
                n(a10, a11, a12) {
                    const v13 = this;
                    const t6 = v13.Intl.Segmenter;
                    const v16 = new t6();
                    return v16;
                },
            };
            const v18 = o17.n;
            const v19 = v18(v18, f0, a7, a7, f0);
            const v20 = v19.segment();
            const v21 = [7.557860512229595,-1e-15,319.89261808269794];
            const v22 = v19.segment();
            function f23(a24, a25) {
                a24(1, a25, a25, ...v21, ...v20);
                return a4;
            }
            v22.toString = f23;
            let v27;
            try { v27 = v22.toLocaleString(v18); } catch (e) {}
            return v27;
        },
    };
    o28.toString(a1);
    return o28.toString();
}
for (let i = 0; i < 5; i++) {
    f0(f0, f0, f0, f0);
}
gc();
