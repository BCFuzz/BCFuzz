function f0(a1, a2) {
    Object.defineProperty(arguments, "length", { writable: true, enumerable: true, value: arguments });
    for (let [i8, i9] = (() => {
            eval(a2);
            return [0, 10];
        })();
        i8 < i9;
        i9--) {
    }
    return f0;
}
f0(f0, f0);
gc();
