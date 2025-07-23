for (let i2 = -3, i3 = 10;
    (() => {
        const v6 = new Int32Array(681);
        function f7(a8, a9, a10, a11) {
            function f12(a13) {
                const v16 = new Map(a11);
                v16.delete(a13);
                return arguments;
            }
            f12();
            return f12;
        }
        v6.map(f7);
        return i2 !== i3;
    })();
    i3--) {
}
gc();
