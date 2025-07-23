const v0 = `
    class C2 {
        p(a4, a5) {
            const t3 = "qI";
            t3.length ^= a4;
        }
    }
    const v6 = new C2();
    try { v6.p(v6, v6, v0, v6, v6); } catch (e) {}
    /[\0]/diu;
`;
eval(v0);
gc();
