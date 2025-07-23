function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            const v13 = i9--;
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v19 = new F14();
            const v20 = `
                for (const v21 in v19) {
                    /\ud808\udf45*/mdgi;
                    eval(v13);
                }
                eval("");
            `;
            eval(v20);
        })()) {
    }
}
new F0();
gc();
