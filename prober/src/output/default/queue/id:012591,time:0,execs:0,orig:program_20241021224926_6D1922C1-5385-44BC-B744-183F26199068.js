for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const v9 = [v7,v7,v7,v7];
        function f10(a11) {
            const o16 = {
                valueOf(a13, a14) {
                    return a13 instanceof a14;
                },
            };
            try { o16.valueOf(65536n, o16); } catch (e) {}
        }
        v9[Symbol.toPrimitive] = f10;
        27805n <= v9;
    })()) {
}
gc();
