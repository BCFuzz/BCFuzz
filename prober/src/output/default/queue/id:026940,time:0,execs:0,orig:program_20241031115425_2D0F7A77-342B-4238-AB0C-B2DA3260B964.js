const v3 = `
    function f4() {
        class C5 extends Float32Array {
            static #d;
            static #d = 255;
        }
        return 255;
    }
`;
const v6 = v3.split();
try { v6.flatMap(eval); } catch (e) {}
gc();
