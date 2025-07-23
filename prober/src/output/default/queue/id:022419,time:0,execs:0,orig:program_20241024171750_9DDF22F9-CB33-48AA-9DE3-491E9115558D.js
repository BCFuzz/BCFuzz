for (let i2 = -1, i3 = 10;
    i2 < i3;
    (() => {
        class C7 {
        }
        function f8() {
            const v11 = createGlobalObject().Atomics;
            v11.compareExchange(v11, v11, C7, C7);
            return i3;
        }
        try { f8.call(); } catch (e) {}
        i3--;
    })()) {
    for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
    }
}
gc();
