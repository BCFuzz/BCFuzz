for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        function f5(a6, a7, a8, a9) {
            a7--;
            const v11 = a7 - a7;
            try { a8(); } catch (e) {}
            return v11;
        }
        for (let v13 = 0; v13 < 5; v13++) {
            f5(v13, v13, f5);
        }
        return v4;
    })();
    i3--) {
}
gc();
