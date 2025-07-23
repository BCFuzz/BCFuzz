function f0() {
    const o6 = {
        [1000]: 1000,
        "d": "h",
        "e": 848.1919486217294,
        "b": "h",
        [1000](a5) {
            this.d = a5;
            return this;
        },
    };
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
function f10(a11, a12) {
    const o13 = {
        "f": a11,
        "c": v7,
        "d": v7,
        "g": v9,
        "e": v8,
        "a": a12,
        [v8]: v8,
        "h": a11,
        1: v8,
        ...a12,
        [v9]: v9,
    };
    return a11;
}
const v14 = f10(v9, v7);
const v15 = f10(v8, v14);
const v16 = f10(v9, v7);
[v9,v9,v14];
const v18 = [v8,v16];
const v19 = [v16,v7,v9,f0];
function f20(a21, a22, a23, a24) {
    const o30 = {
        1023679388: v18,
        "b": a21,
        get h() {
            super.g;
            a24 / f0;
            v19[536870887] = v7;
            return v9;
        },
        "c": v15,
        "a": a23,
    };
    return o30;
}
f20(v14, v18, f20(v15, v19, v8));
f20(v16, v18, v14);
const v34 = [-1073741824,1073741825,-2,-2147483648,7];
let v35 = [28774,-17506,-2147483649,-536870912,10000,-128];
class C36 {
    static 8 = v35;
    static {
        this[8] = this;
        this[10] = this;
        super[this];
        for (let i40 = 0; i40 < 21768; i40++) {
            v35 ^= v34;
        }
    }
}
gc();
