function f0() {
    const o8 = {
        "g": "h",
        set b(a5) {
            a5 % 1.3270737560222753e+308;
            super.valueOf();
        },
        "e": 1.3270737560222753e+308,
        ..."h",
        "d": 512,
    };
    return o8;
}
f0();
const v10 = f0();
const v11 = f0();
class C12 extends f0 {
    #n(a14, a15) {
        function f16() {
            return a15;
        }
        return v11;
    }
    static #d = v11;
    [v10] = v10;
    [v11] = v11;
    1000 = v11;
    static 1 = v11;
}
2 == [128,-625813692,536870889,-536870912,2882,32451,-128,9,-4294967296,-13];
new C12();
class C21 {
}
function f22() {
}
class C23 extends f22 {
}
gc();
