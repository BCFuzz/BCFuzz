function f0(a1, a2) {
    for (let [i11, i12] = (() => {
            const v5 = arguments.valueOf();
            const v6 = v5.constructor;
            v6(a1);
            v6.defineProperties(arguments, v5);
            v6.freeze(v5);
            return [0, 10];
        })();
        i11 < i12;
        i11++) {
    }
    return f0;
}
f0(f0);
gc();
