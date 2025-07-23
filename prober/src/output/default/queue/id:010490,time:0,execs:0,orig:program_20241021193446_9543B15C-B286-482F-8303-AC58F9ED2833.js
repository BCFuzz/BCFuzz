class C0 {
}
const v1 = new C0();
const v2 = [v1,v1];
const v3 = [v1];
const v7 = Symbol.iterator;
const o38 = {
    [v7]() {
        let v9 = 10;
        const o37 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "e": v2,
                    "c": undefined,
                    __proto__: v3,
                    ...this,
                    3: v1,
                    "done": v13,
                };
                class C15 {
                }
                C15.prototype;
                new C15();
                function f18(a19, a20) {
                    return f18;
                }
                f18(0, this);
                const o22 = {
                };
                o22.__lookupSetter__;
                for (let [i28, i29] = (() => {
                        -10;
                        return [0, 10];
                    })();
                    i28 < i29;
                    i29--) {
                    i28 /= 8;
                    for (let v36 = 0; v36 < 25; v36++) {
                    }
                }
                return o14;
            },
        };
        return o37;
    },
};
Reflect.construct(Uint8ClampedArray, [o38]);
gc();
