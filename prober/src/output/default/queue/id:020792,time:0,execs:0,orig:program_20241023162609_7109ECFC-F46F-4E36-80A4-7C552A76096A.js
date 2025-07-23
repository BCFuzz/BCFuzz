Int8Array.e = Int8Array;
const v5 = new Int8Array(255);
try { v5.set(Int8Array); } catch (e) {}
let v8;
try {
const t0 = 3;
v8 = t0(v5, 255, Int8Array, 3);
} catch (e) {}
function f9() {
    return v8;
}
v8 = 4294967295;
const v11 = new Float32Array(3, -1662184890, Int8Array, v5);
const v14 = new Int32Array(255);
v14.length = v14;
const v15 = `
    const v17 = new ArrayBuffer(ArrayBuffer);
    v17.maxByteLength = v17;
    let v18;
    try { v18 = v17(v17, ArrayBuffer, v17); } catch (e) {}
    for (let [i25, i26] = (() => {
            const v19 = ArrayBuffer instanceof Float32Array;
            try { ArrayBuffer.isView(...v11, ...v19, v19, v18); } catch (e) {}
            v11.byteOffset;
            v5.buffer = v17;
            const o23 = {
            };
            return [0, 10];
        })();
        v18;
        ) {
    }
`;
try { eval(Int8Array); } catch (e) {}
eval(v15);
gc();
