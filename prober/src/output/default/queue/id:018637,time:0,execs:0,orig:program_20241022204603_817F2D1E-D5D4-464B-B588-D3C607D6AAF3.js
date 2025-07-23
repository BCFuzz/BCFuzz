class C1 {
}
const v2 = new C1();
function f3(a4, a5, a6, a7) {
    let v9 = a6 >>> 2147483649;
    new Uint8Array();
    new Uint16Array(C1, a7);
    with (a4) {
        c = Uint8Array;
        const o13 = {
        };
        o13.d = v2;
        const o14 = {
        };
        o14.d = v2;
        o14.f = a7;
        const o15 = {
        };
        o15.d = v2;
        o15.f = a7;
        o15.c = Uint8Array;
        const o16 = {
        };
        o16.d = v2;
        o16.f = a7;
        o16.c = Uint8Array;
    }
    let v17 = v9--;
    --v17;
    try { a4(); } catch (e) {}
    return C1;
}
for (let v20 = 0; v20 < 10; v20++) {
    f3(f3);
}
gc();
