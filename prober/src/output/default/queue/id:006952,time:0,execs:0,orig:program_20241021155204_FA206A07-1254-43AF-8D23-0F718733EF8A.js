for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        function F8(a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            const o13 = {
            };
            Reflect.ownKeys(o13);
        }
        new F8(F8, i2, i3);
    })()) {
}
gc();
