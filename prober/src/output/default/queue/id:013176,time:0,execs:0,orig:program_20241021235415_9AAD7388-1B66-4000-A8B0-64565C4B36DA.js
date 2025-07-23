for (let v2 = 0; v2 < 5; v2++) {
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i11 = 0, i12 = 10;
            (() => {
                i12--;
                class C14 {
                }
                const o19 = {
                    [1](a16, a17, a18) {
                    },
                };
                try {
                    4 in a5;
                    try {
                    } catch(e21) {
                    }
                } catch(e22) {
                }
                return i11 < i12;
            })();
            ) {
        }
    }
    new F3();
}
gc();
