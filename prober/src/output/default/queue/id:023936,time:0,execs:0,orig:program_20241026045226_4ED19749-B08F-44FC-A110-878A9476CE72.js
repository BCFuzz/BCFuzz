const v2 = new Uint8ClampedArray();
const v3 = `
    function f4(a5, a6, a7) {
        return v2;
    }
`;
const v8 = v3.split(v2);
v8.reverse();
try { v8.flatMap(eval); } catch (e) {}
gc();
