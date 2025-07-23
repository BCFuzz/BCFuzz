for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v10 = [27805n,27805n];
        function f11(a12) {
            const o17 = {
                valueOf(a14, a15) {
                    27805n instanceof a15;
                    return i3;
                },
            };
            Object.defineProperty(o17, Symbol.hasInstance, { configurable: true, enumerable: true, get: Array });
            try { o17.valueOf(65536n, o17); } catch (e) {}
        }
        v10[Symbol.toPrimitive] = f11;
        27805n <= v10;
    })()) {
}
gc();
