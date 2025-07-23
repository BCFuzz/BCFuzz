for (let i1 = 0;
    i1 < 2;
    (() => {
        const v5 = [1.0,2.2250738585072014e-308,856.6031785749715,-391.05999748798445,0.5534730186507218];
        const v6 = v5.toSorted;
        let v7;
        try { v7 = v6(v5, v5, v6); } catch (e) {}
        const v10 = new Int8Array(255);
        for (const v11 in v10) {
            for (let i14 = -3, i15 = 10;
                (() => {
                    const v16 = v11 != v7;
                    v16 || v16;
                    return i14 < i15;
                })();
                i15--) {
            }
        }
        i1++;
    })()) {
}
gc();
