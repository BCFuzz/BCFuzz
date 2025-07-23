const v0 = [NaN,2.220446049250313e-16,-0.0,1.7238637709528993e+308];
const o1 = {
    "c": v0,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                try { C3(); } catch (e) {}
            `;
            const v9 = v7.split(a5);
            try { v9.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
