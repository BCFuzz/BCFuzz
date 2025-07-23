function f1(a2, a3) {
    arguments[0] = arguments;
    for (let [i8, i9] = (() => {
            eval.e = eval;
            return [0, 10];
        })();
        i8 < i9;
        i9--) {
    }
    return a2;
}
f1(f1).hasOwnProperty(0);
gc();
