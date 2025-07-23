function f0(a1, a2) {
    for (let [i8, i9] = (() => {
            eval();
            return [0, 10];
        })();
        (() => {
            const v10 = i8 < i9;
            for (const v11 in arguments) {
                Object.defineProperty(arguments, v11, { writable: true, value: i9 });
            }
            --i9;
            return v10;
        })();
        ) {
    }
    return a1;
}
f0(f0);
gc();
