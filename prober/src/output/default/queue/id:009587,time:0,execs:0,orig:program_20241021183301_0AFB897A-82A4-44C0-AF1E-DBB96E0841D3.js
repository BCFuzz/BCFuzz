const v1 = new Uint8Array();
const v2 = [Uint8Array,Uint8Array,Uint8Array,Uint8Array,Uint8Array];
function f3(a4, a5) {
    return a4;
}
const v7 = Date();
function f9(a10, a11) {
    arguments.length = arguments;
    function f13(a14) {
        return a11;
    }
    f3(v2, ...v1, v7, ...arguments);
}
Float32Array.toString = f9;
const t14 = SharedArrayBuffer.constructor;
t14(Float32Array);
gc();
