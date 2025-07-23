const v2 = new Uint32Array("number", Uint32Array, "number");
const v3 = `
    function f4(a5, a6, a7) {
        Object.defineProperty(v2, ("number").length, { value: a6 });
        return a5;
    }
`;
for (let v9 = 0; v9 < 10; v9++) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        v3.replace("p", v3);
    }
    new F11();
}
gc();
