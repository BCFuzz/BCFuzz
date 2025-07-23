const v0 = `
    async function* f1(a2, a3) {
        let v4;
        try { v4 = a2.strike(); } catch (e) {}
        try { v4.link(v4, v4); } catch (e) {}
        try { a3.fontsize(); } catch (e) {}
        const v9 = [a3,a3,a3,a3,a3];
        let v10;
        try { v10 = v9.shift(); } catch (e) {}
        switch (v9) {
            case 9:
                break;
            case -8:
                break;
            case -8:
                break;
        }
        return v10;
    }
    f1();
`;
for (let i14 = 0, i15 = 10; i14 != i15; i15--) {
    for (let i23 = i15, i24 = 10; i23 < i24; i24--) {
    }
}
eval(v0).next(v0);
gc();
