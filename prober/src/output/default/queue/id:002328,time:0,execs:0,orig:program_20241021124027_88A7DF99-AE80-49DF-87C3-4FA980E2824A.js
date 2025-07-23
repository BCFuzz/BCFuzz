function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 268435441;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o24 = {
        __proto__: "J",
        "b": F0,
        "h": a10,
        get c() {
            const v14 = a11 << this;
            new Uint8ClampedArray(257);
            new Int8Array(16);
            new Uint16Array(47);
            return v14;
        },
    };
    if (v3 !== v5) {
    } else {
        ("e")["indexOf"](v5, a10);
    }
    return o24;
}
const v31 = f9(v5, v4, v4);
f9(v31, v31, F0);
f9(v5, v31, f9);
new Array(127);
function f37() {
    function f41() {
        arguments.length **= 8;
        return arguments;
    }
    f41();
    const o44 = {
        "h": 7.672670323597263,
        "b": 7.672670323597263,
        [Infinity]: f37,
        ..."e",
        ..."e",
        "g": v5,
        "e": Infinity,
        "c": "valueOf",
    };
    return o44;
}
const v45 = f37();
const t49 = v45.Infinity;
const v47 = t49();
function f48(a49) {
    const v51 = Symbol.iterator;
    const o60 = {
        [v51]() {
            let v53 = 10;
            const o59 = {
                next() {
                    v53--;
                    const v57 = v53 == 0;
                    const o58 = {
                        "done": v57,
                        "value": v53,
                    };
                    return o58;
                },
            };
            return o59;
        },
    };
    return v47;
}
const v61 = f48();
const v62 = f48(v47);
const v63 = f48();
function f64(a65, a66, a67, a68) {
    const o69 = {
        ...a67,
        __proto__: a67,
    };
    return a68;
}
f64(v45, v63, v61);
f64(v63, v62, v61);
gc();
