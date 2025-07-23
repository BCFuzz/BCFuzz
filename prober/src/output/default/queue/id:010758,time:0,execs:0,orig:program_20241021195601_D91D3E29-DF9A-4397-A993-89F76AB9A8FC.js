Math.cosh(Math);
class C2 {
}
new WeakSet();
new Int16Array(C2, Uint8ClampedArray);
const v9 = ("1191154859").trimStart();
const o12 = {
};
function f13(a14, a15, a16, a17) {
    const o18 = {
        [a14]: a17,
    };
    return o18;
}
const v20 = f13("string", f13(), "a", o12);
const v21 = v20.string;
const v22 = `
    const v23 = v20["string"];
    function f24() {
        return v23;
    }
    function f25(a26) {
        for (let v27 = 0; v27 < 250; v27++) {
            v9.toString("string", "string", f24);
            v21[f25] ||= v27;
        }
        return a26;
    }
    Object.defineProperty(v23, "length", { enumerable: true, get: f24, set: f25 });
    v23.length = 2;
`;
eval(v22);
gc();
