for (let i2 = 0, i3 = 10; i2 < i3;) {
    i3--;
}
for (let v10 = 0; v10 < 10; v10++) {
    function f11(a12, a13) {
        const o14 = {
        };
        for (let v15 = 0; v15 < 10; v15++) {
            o14["p" + v15] = v15;
        }
        return v10;
    }
    f11();
    createGlobalObject();
}
gc();
