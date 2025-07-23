for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const v9 = [v7,v7,v7];
        function f10(a11) {
            const o16 = {
                valueOf(a13, a14) {
                    a13 instanceof a14;
                    return 27805n;
                },
            };
            function f17() {
                return f10;
            }
            Object.defineProperty(o16, Symbol.hasInstance, { configurable: true, enumerable: true, get: f17 });
            try { o16.valueOf(65536n, o16); } catch (e) {}
            return 65536n;
        }
        v9[Symbol.toPrimitive] = f10;
        27805n <= v9;
    })()) {
}
gc();
