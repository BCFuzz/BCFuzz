async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
        }
        for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
        }
        for (let i39 = 0, i40 = 10; i39 !== i40; i40--) {
        }
        const v47 = `
            function f48(a49, a50) {
                return a49;
            }
            for (let i53 = 0, i54 = 10;
                i53 < i54;
                (() => {
                    let v58 = -12n;
                    const v60 = v58++;
                    const v63 = new BigInt64Array(128);
                    function f64() {
                        (v60 + "-14248") + undefined;
                        return BigInt64Array;
                    }
                    v63.sort(f64);
                    i54--;
                })()) {
            }
        `;
        for (let i74 = 0, i75 = 10;
            (() => {
                for (let i78 = 0, i79 = 10; i79; i79--) {
                }
                return i74 < i75;
            })();
            i75--) {
        }
        eval(v47);
        return a5;
    }
    a3.then = f4;
    return a3;
}
f0(f0, f0, f0);
for (let i96 = 0, i97 = 10; i96 < i97; i97--) {
}
gc();
