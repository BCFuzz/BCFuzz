function f0(a1, a2) {
    for (let [i10, i11] = (() => {
            const v5 = arguments.valueOf();
            v5.constructor.freeze(v5);
            delete v5[0];
            return [0, 10];
        })();
        i10 < i11;
        i11--) {
    }
    return arguments;
}
f0(f0);
gc();
