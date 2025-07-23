for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let i12 = 0, i13 = 10;
        i12 < i13;
        (() => {
            i13--;
            function F18(a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                const o23 = {
                };
                Reflect.ownKeys(o23);
            }
            new F18(i3, i3, i3);
        })()) {
    }
}
gc();
