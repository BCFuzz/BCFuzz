for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    (() => {
        for (let i17 = 0, i18 = 10 + 10; i18--, i17 < i18;) {
        }
        return i12 < i13;
    })();
    i13--) {
}
for (let i33 = -3, i34 = 10;
    (() => {
        const v36 = new BigInt64Array();
        function f37(a38) {
            new Uint8Array(i34);
            return a38;
        }
        v36[Symbol.toPrimitive] = f37;
        const v46 = ("valueOf").slice(i34, i33).split.bind(v36);
        try { v46(); } catch (e) {}
        return i33 <= i34;
    })();
    i34--) {
}
gc();
