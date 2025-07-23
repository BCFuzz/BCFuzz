function f2(a3, a4, a5) {
    a4[1] = a4;
    const o6 = {
    };
    return o6;
}
const v7 = f2("4294967296", "number");
v7[Symbol.species] = f2;
const v11 = new Float32Array();
v11.constructor = v7;
try { v11.slice(); } catch (e) {}
gc();
