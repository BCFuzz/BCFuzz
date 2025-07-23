class C1 {
    constructor(a3) {
        const v5 = `
            do {
                do {
                } while (0 < 3)
            } while (0 < -1494372921)
        `;
        const v12 = v5.split(a3);
        try { v12.flatMap(eval); } catch (e) {}
    }
}
new C1("h");
gc();
