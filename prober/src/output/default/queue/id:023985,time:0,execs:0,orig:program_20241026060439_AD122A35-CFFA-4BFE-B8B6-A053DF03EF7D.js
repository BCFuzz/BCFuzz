const v1 = [44682,-1171204458,0,257,-14];
function f2() {
    for (let i6 = 0, i7 = 10;
        (() => {
            const v8 = i6 < i7;
            for (const v9 in arguments) {
                Object.defineProperty(arguments, v9, { writable: true, value: i7 });
            }
            --i7;
            return v8;
        })();
        ) {
    }
}
v1[Symbol.toPrimitive] = f2;
v1.copyWithin(4, v1);
gc();
