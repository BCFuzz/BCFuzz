function f3(a4, a5) {
    const o8 = {
        ...a4,
        [2n]: a5,
        [a5]: f3,
        128: a4,
        ...a4,
        set f(a7) {
        },
    };
    return o8;
}
const v9 = f3(462505212n, 462505212n);
f3(-6n, 2n);
f3(v9);
const v12 = [268435456,-924754394,13,-54297,536870887,1073741824,8,1073741825,11,10000];
for (let v13 = 0; v13 < 10; v13++) {
    f3();
}
Object.defineProperty(v12, 6, { configurable: true, enumerable: true, get: f3 });
gc();
