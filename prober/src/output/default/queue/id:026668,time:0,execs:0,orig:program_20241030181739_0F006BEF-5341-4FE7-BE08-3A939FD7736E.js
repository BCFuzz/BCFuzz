class C1 {
    constructor(a3) {
        const v5 = `
            let {"f":v6,"g":v7,} = a3;
        `;
        const v8 = v5.split(a3);
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C1("v");
gc();
