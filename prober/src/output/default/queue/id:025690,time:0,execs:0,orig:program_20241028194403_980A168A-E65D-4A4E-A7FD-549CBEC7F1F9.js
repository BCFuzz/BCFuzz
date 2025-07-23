const v0 = [];
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const o24 = {
                set b(a18) {
                    for (let v19 = 0; v19 < 5; v19++) {
                        const v21 = "p" + v19;
                        v21.search(this, v21);
                        v21.replace("1254848972", "");
                    }
                },
            };
            o24.b = v0;
        }
        new F10();
    })()) {
}
gc();
