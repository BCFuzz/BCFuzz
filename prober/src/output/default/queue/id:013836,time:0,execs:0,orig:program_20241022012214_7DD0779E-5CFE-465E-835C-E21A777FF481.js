function f1(a2, a3) {
    Object.defineProperty(arguments, 1, { writable: true, configurable: true, enumerable: true, value: undefined });
    arguments[9];
    for (let [i10, i11] = (() => {
            eval(a2);
            return [0, 10];
        })();
        i10 < i11;
        i11--) {
    }
    return undefined;
}
f1();
gc();
