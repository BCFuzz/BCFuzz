function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        for (let i18 = 0, i19 = 10;
            i18 < i19;
            (() => {
                i19--;
                const v24 = `
                    0 < 6;
                    /\ud808\udf45*/mdgi;
                `;
                const v30 = parseInt(v24);
                v30 - v30;
            })()) {
        }
    }
    new F4();
    return f3;
}
F0.toString = f3;
F0.toLocaleString(F0, f3);
gc();
