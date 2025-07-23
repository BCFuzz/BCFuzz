function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = `
        function f7(a8, a9) {
            return a9;
        }
    `;
    eval(v6);
    for (let i14 = 0, i15 = 10;
        i14 < i15;
        (() => {
            i15--;
            for (let v20 = 0; v20 < 25; v20++) {
                function F21() {
                    if (!new.target) { throw 'must be called with new'; }
                    const v23 = -Infinity;
                    const v25 = new Date();
                    v25.setTime(v23);
                }
                new F21();
            }
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
