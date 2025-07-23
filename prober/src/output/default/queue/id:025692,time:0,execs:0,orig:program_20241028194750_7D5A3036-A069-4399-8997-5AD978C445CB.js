class C1 {
    constructor(a3) {
        const v5 = `
            for (let i9 = 0, i10 = 10;
                i9 < i10;
                (() => {
                    Object.defineProperty(Float64Array(), "h", { writable: true, configurable: true, enumerable: true, value: 257 });
                })()) {
            }
        `;
        const v18 = v5.split(a3);
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C1("m");
gc();
