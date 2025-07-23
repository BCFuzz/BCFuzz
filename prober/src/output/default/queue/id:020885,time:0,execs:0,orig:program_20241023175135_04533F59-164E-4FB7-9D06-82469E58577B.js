for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v9 = [27805n,27805n,27805n];
        function f10(a11) {
            const o16 = {
                valueOf(a13, a14) {
                    return a13 instanceof a14;
                },
            };
            function f17() {
                return f17;
            }
            Object.defineProperty(o16, Symbol.hasInstance, { configurable: true, enumerable: true, get: f17 });
            ++f17;
            try { o16.valueOf(65536n, o16); } catch (e) {}
            return a11;
        }
        v9[Symbol.toPrimitive] = f10;
        27805n <= v9;
    })()) {
}
gc();
