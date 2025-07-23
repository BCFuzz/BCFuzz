const o9 = {
    n(a1) {
        let v2 = 65535;
        const v3 = ++v2;
        const v4 = `
            const v5 = /az\p{Script_Extensions=Greek}?/mygu;
            if (!v3) {
                v5[v3];
            }
        `;
        return eval(v4);
    },
};
try { o9.n(o9, o9); } catch (e) {}
for (let i13 = -3, i14 = 10; i13 < i14; i14--) {
}
gc();
