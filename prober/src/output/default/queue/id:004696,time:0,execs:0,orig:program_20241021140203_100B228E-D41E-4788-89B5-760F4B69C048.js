const v1 = gc();
function f2(a3) {
    const o18 = {
        valueOf(a5) {
            new Uint8Array(this);
            for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
            }
            return v1;
        },
    };
    return o18;
}
class C19 extends f2 {
}
const v20 = new C19();
v20.valueOf();
gc();
