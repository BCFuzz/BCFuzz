function f0(a1, a2) {
    for (let [i11, i12] = (() => {
            eval();
            const o8 = {
            };
            const v10 = new Proxy(arguments, o8);
            v10[0] = v10;
            return [0, 10];
        })();
        i11 < i12;
        i12--) {
    }
    return a2;
}
f0(f0);
gc();
