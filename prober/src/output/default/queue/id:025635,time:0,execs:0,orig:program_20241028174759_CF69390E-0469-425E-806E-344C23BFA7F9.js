for (let i2 = -3, i3 = 10;
    (() => {
        const v5 = new BigInt64Array();
        function f6() {
            const v7 = new BigInt64Array(i3);
            return v7;
        }
        v5[Symbol.toPrimitive] = f6;
        const v13 = ("valueOf").slice(i3, i3).split.bind(v5);
        try { v13(f6, v13); } catch (e) {}
        return i2 <= i3;
    })();
    i3--) {
}
gc();
