function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
v4.b = v4;
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v9 = a8.big();
            const v11 = `
                let {"a":v12,"b":v13,"f":v14,} = v9;
            `;
            const v15 = v11.split(a8);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
