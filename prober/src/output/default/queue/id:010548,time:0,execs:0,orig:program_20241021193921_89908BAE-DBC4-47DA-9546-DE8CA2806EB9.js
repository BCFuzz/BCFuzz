const v1 = `
    class C2 {
    }
    function f3() {
        return C2;
    }
    async function f4(a5, a6) {
        const o7 = {
        };
        o7.h = C2;
        const o8 = {
        };
        o8.h = C2;
        o8.d = -1.7976931348623157e+308;
        const o9 = {
        };
        o9.h = C2;
        o9.d = -1.7976931348623157e+308;
        o9.e = a5;
        const o10 = {
        };
        o10.h = C2;
        o10.d = -1.7976931348623157e+308;
        o10.e = f3;
        await o9;
        return -1.7976931348623157e+308;
    }
    f4();
    /\u{12345}/myvis;
`;
eval(v1);
gc();
