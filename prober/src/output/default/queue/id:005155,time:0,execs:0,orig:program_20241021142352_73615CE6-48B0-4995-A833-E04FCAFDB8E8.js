const v2 = new Int8Array();
const v4 = new Uint8ClampedArray();
let v5;
try { v5 = v4.slice(v2, 6n); } catch (e) {}
function f6() {
    const v8 = new Int16Array(v2, v5, v5);
    function f9(a10, a11) {
        let {"byteLength":v12,"byteOffset":v13,} = v8;
        return v12--;
    }
    for (let v15 = 0; v15 < 5; v15++) {
        f9();
    }
    return f9;
}
f6();
f6();
gc();
