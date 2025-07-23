let v0 = 2369;
const v2 = `
    function f3() {
        let v4 = Uint8Array(v0, v0, v0);
        let v5 = undefined;
        ({"buffer":v0,"byteLength":v4,"e":v5,...v5} = v4);
        return f3;
    }
    /\u{12345}/myvis;
    class C7 {
        constructor(a9, a10) {
        }
    }
`;
eval(v2);
gc();
