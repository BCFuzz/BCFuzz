function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const v14 = `
                class C15 {
                    static {
                        const o17 = {
                            "construct": this,
                        };
                    }
                }
            `;
            eval(v14);
        })()) {
    }
}
new F0();
gc();
