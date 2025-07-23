class C2 {
    constructor(a4) {
        const v6 = `
            switch (a4) {
                case 10:
                    break;
                case "boolean":
                    /(?<=a)?/v;
                    break;
            }
        `;
        const v8 = v6.split();
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C2(C2);
gc();
