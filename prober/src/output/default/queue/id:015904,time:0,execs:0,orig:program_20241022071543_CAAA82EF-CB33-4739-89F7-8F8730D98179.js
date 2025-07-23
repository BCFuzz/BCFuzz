function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
for (let v5 = 0; v5 < 5; v5++) {
    function F7(a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = a10.name;
        class C13 {
            constructor(a15, a16) {
                -a16;
                v12 in arguments;
            }
        }
        new C13(v4, v4);
        new C13(a9, v4);
    }
    new F7(196.25100004624983, F7);
}
gc();
