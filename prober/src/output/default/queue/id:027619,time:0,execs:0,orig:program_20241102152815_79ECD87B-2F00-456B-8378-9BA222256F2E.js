const v0 = `
    async function* f1(a2, a3) {
        let v4;
        try { v4 = a2.strike(v0, a2, a2, v0, a3); } catch (e) {}
        try { a3.fontsize(a2, f1, f1, f1); } catch (e) {}
        const v8 = [v4,v4];
        try { v8.shift(); } catch (e) {}
        switch (v8) {
            case 9:
                break;
            case -8:
                break;
            case -8:
                break;
        }
        return v4;
    }
    f1(v0, f1);
`;
for (let i13 = 0, i14 = 10; i13 != i14; i14--) {
    for (let i22 = i14, i23 = 10; i22 < i23; i23--) {
    }
}
eval(v0).next();
gc();
