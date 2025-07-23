class C0 {
    constructor(a2, a3) {
        const v4 = `
            let v5 = 0;
            while ((() => {
                    let v7 = ~5;
                    v7--;
                    return v5 < 5;
                })()) {
                v5++;
            }
            v5 / this;
        `;
        eval(v4);
    }
}
new C0();
gc();
