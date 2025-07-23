const v3 = `
    function f4() {
        class C5 extends Float32Array {
            static #d;
            static #d = 255;
        }
        /\u{12345}/myvis;
        return f4;
    }
`;
const v7 = v3.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
