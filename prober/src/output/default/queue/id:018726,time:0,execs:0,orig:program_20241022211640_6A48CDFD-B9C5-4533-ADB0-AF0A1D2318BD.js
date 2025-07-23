function f0(a1, a2) {
    arguments.length = arguments;
    for (let [i8, i9] = (() => {
            const t0 = arguments.valueOf();
            delete t0[0];
            return [0, 10];
        })();
        i8 < i9;
        i9--) {
    }
    return f0;
}
f0(f0);
gc();
