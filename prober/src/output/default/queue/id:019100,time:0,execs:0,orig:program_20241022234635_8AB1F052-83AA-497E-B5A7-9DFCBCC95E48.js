const v1 = new Uint16Array();
for (let v2 = 0; v2 < 5; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v5 = 0; v5 < 5; v5++) {
            for (let i7 = 10, i8 = 10;
                v2 < i8;
                (() => {
                    i8--;
                    for (let i = 0; i < 5; i++) {
                        v1[115];
                    }
                })()) {
            }
        }
    }
    new F3();
}
gc();
