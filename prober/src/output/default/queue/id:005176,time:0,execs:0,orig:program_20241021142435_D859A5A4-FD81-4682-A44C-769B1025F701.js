function f0() {
    const o13 = {
        "a": "h",
        "f": "undefined",
        get d() {
            this[Symbol.toStringTag] = f0;
            function F7(a9) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = this;
                this.e = this;
                this.c = this;
            }
            new F7("4xWa");
            new F7(F7);
            const v12 = new F7("h");
            return v12;
        },
        ..."4xWa",
        "g": "4xWa",
    };
    return o13;
}
const v14 = f0();
const v15 = f0();
v15[Symbol.toPrimitive] = f0;
const v18 = f0();
v18[Symbol.toPrimitive] = Symbol;
function f24() {
    return v18;
}
const v25 = [1073741823,-2143730404,255,-2147483648,-3,-1566130631,254593109,1652223024,441510219,536870889];
const v26 = [-5];
[24230,-9007199254740992];
function f28(a29, a30, a31) {
    function f32() {
        const v34 = Symbol.iterator;
        const o43 = {
            [v34]() {
                let v36 = 10;
                const o42 = {
                    next() {
                        v36--;
                        const v40 = v36 == 0;
                        const o41 = {
                            "done": v40,
                            "value": v36,
                        };
                        return o41;
                    },
                };
                return o42;
            },
        };
        return -5.0;
    }
    a31[Symbol.toPrimitive] = f32;
    const o53 = {
        "h": v15,
        3: v26,
        "d": v25,
        ...a31,
        get c() {
            let v46 = this;
            super[v46];
            --v46;
            const v50 = [];
            Reflect.apply(v25.entries, v14, v50);
            return v25;
        },
        [a31]: v25,
        "f": v14,
    };
    return o53;
}
f28(-5.0, -5.0, v15);
f28(-5.0, -5.0, v18);
f28(NaN, -5.0, v18);
const o59 = {
    "maxByteLength": 2057,
};
const v61 = new ArrayBuffer(1000, o59);
new Uint32Array(v61);
gc();
