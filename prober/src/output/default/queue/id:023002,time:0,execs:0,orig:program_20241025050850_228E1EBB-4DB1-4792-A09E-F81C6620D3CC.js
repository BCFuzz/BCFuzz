for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    (() => {
        for (let v14 = 0; v14 < 10; v14++) {
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                const v20 = [-2147483647,536870889,21578,-2147483648];
                function f21() {
                    return f21;
                }
                function f22(a23) {
                    return a23;
                }
                Object.defineProperty(v20, Symbol.toPrimitive, { get: f21, set: f22 });
                function F26(a28, a29, a30, a31) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f32() {
                        a28[Symbol.toPrimitive] = 0.10072205427111425;
                        return arguments;
                    }
                    f32();
                }
                new F26(F26);
                new F26(v20);
            }
            new F16();
        }
        i13--;
        return i12 < i13;
    })();
    ) {
}
gc();
