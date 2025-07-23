for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        i13--;
        function F18(a20, a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v24 = new F18();
        for (let v25 = 0; v25 < 10; v25++) {
            v24.a = v24;
            for (let i28 = 0, i29 = 10;
                i28 < i29;
                (() => {
                    let v33 = 0;
                    delete v24.a;
                    v33++;
                    i29--;
                })()) {
            }
        }
    })()) {
}
gc();
