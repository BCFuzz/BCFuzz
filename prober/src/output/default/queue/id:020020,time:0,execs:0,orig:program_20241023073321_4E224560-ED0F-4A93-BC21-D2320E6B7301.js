class C0 {
}
const v1 = new C0();
function f4() {
    function f6() {
        for (let v7 = 0; v7 < 5; v7++) {
            const v8 = [v1,v1];
            [v8,C0,Uint8Array,v1,v8];
        }
        return f4;
    }
    const v10 = f6.apply(BigInt64Array, arguments);
    try { v10(f4, v10); } catch (e) {}
}
f4();
gc();
