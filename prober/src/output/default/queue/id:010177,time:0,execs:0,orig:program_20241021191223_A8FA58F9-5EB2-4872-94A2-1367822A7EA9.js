function f1(a2, a3) {
    arguments[0] = arguments;
    for (let [i9, i10] = (() => {
            eval.apply(0, a2);
            return [0, 10];
        })();
        i9 < i10;
        i10--) {
    }
    return a2;
}
f1(f1);
gc();
