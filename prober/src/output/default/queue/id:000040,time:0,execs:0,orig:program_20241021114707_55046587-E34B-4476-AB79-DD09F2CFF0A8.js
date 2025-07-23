function f3(a4) {
    const o11 = {
        ...6n,
        __proto__: 6n,
        set d(a6) {
            return a6;
            const v7 = a6 ** a4;
            a4 = -16n;
            let v8;
            try { v8 = this.valueOf(a4, 6n, this, v7); } catch (e) {}
            super[v8]?.h;
        },
        "b": a4,
        [a4]: 6n,
        [-16n]: 6n,
        ...6n,
        642: a4,
    };
    return o11;
}
f3(6n);
const v13 = f3(6n);
const v14 = f3(-16n);
const v15 = [v14,v14];
[v15,v15,v15,v13];
[6n,6n,v13,6n,6n];
function f21(a22) {
    return a22;
}
class C23 extends f21 {
    [6n];
    static #g = "bigint";
    static #c = 6n;
}
C23.d <<= 9;
gc();
