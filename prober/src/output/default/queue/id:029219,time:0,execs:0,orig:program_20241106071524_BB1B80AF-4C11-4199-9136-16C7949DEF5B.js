for (let v0 = 0; v0 < 10; v0++) {
    let v1 = undefined;
    function f3() {
        return 9;
    }
    const v4 = [-2147483648,1073741825,4294967295,-1810460340];
    const v7 = ("-789426228").constructor;
    v7.toString = f3;
    const v8 = v7.fromCharCode(12, v7, v4, "-789426228");
    const o15 = {
        n(a10, a11, a12) {
            const v13 = this;
            v1 = v13.parseInt(v8);
            return this;
        },
    };
    const t16 = o15.n;
    t16();
}
gc();
