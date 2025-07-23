const v0 = [-834220189,-9007199254740992,37961,792073846];
const v1 = [5,22833,127,-1024];
function f2() {
    function f3(a4, a5) {
        return v0;
    }
    return f3;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2 });
for (let i10 = 0, i11 = 10;
    i10 < i11;
    (() => {
        i11--;
        const o25 = {
            n(a17, a18, a19) {
                const v20 = this;
                const t4 = v20.Intl.DateTimeFormat;
                return t4().format(v1);
            },
        };
        const v26 = o25.n;
        try { v26(v26); } catch (e) {}
    })()) {
}
for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
}
gc();
