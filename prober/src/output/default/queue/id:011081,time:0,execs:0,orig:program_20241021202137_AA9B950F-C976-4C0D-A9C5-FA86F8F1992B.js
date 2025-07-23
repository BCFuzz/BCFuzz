function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
let v5 = new F0();
for (let v6 = 0; v6 < 5; v6++) {
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
        for (let i11 = 0, i12 = 10;
            i11 < i12;
            (() => {
                const t0 = Math.asin;
                t0();
                v5++;
                i12--;
            })()) {
        }
        const v23 = `
            function F24() {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v23);
    }
    new F7();
}
gc();
