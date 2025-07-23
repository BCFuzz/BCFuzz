const v1 = ([11,-1,4294967297,-9223372036854775808]).entries();
const v2 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
function f3(a4, a5) {
    Reflect.defineProperty(Uint8Array, a4, v2);
    return v2;
}
const t6 = f3.call();
t6.writable = v1;
f3();
gc();
