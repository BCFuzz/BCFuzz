const v1 = 51078n << 51078n;
const v2 = /(?<a>.)*/u;
function f3() {
    return v1;
}
v2.toString = f3;
v2.exec(v2);
gc();
