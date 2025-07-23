function f1(a2, a3) {
    const v5 = Symbol.iterator;
    for (let [i13, i14] = (() => {
            const v8 = arguments.valueOf();
            v8.constructor.freeze(v8);
            delete v8[0];
            a3 = v5;
            return [0, 10];
        })();
        "HPf" < i14;
        ) {
    }
    return "HPf";
}
f1(f1);
gc();
