const v0 = [];
const v1 = [];
const v2 = [];
const v6 = new Float32Array();
let v9;
try { v9 = Float32Array(); } catch (e) {}
const v10 = `
    Object.defineProperty(v0, "e", { writable: true, configurable: true, enumerable: true, value: v9 });
    Object.defineProperty(v2, 256, { writable: true, enumerable: true, value: BigInt64Array });
    v6[Uint16Array] = 1;
    const v11 = Uint16Array == v1;
    v11 && v11;
`;
try { v10.trimStart(); } catch (e) {}
eval(v10);
gc();
