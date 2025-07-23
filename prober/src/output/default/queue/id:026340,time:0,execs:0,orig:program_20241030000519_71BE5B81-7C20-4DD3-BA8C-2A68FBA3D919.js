for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    function f11() {
        return 9;
    }
    const v12 = [-2147483648,1073741825,4294967295,-1810460340];
    v12.toString = f11;
    const v15 = ("-789426228").constructor;
    v15.toString = f11;
    const v16 = v15.fromCharCode(255, v15, v12, "-789426228");
    const o23 = {
        n(a18, a19, a20) {
            const v21 = this;
            try { v21.eval(v16); } catch (e) {}
            return v16;
        },
    };
    const t16 = o23.n;
    t16();
}
for (let i28 = 0, i29 = 10; i28 !== i29; i29--) {
}
gc();
