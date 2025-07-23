function f0(a1, a2) {
    for (let [i10, i11] = (() => {
            const v5 = arguments.valueOf();
            const v6 = v5.constructor;
            v6.defineProperties(arguments, v5);
            v6.freeze(v5);
            return [0, 10];
        })();
        i10 < i11;
        i11--) {
    }
    return f0;
}
f0(f0);
gc();
