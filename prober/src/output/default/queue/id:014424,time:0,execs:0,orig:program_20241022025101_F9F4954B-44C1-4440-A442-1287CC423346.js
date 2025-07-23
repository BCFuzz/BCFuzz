for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const v9 = [v7,v7,v7,v7];
        function f10(a11) {
            const o18 = {
                valueOf(a13, a14) {
                    const v16 = Symbol.hasInstance;
                    a14[v16] = f10;
                    a13 instanceof a14;
                    return v16;
                },
            };
            try { o18.valueOf(65536n, o18); } catch (e) {}
            return 27805n;
        }
        v9[Symbol.toPrimitive] = f10;
        27805n <= v9;
    })()) {
}
gc();
