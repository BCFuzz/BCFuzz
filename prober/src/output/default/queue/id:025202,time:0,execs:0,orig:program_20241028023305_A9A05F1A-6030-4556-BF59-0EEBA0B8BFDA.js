const v2 = new Date("-9223372036854775807");
const v3 = v2.getFullYear();
const v4 = /i(?<a>.)\k<a>[\c~]?/mygi;
function f5() {
    return v3;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(v4, "multiline", { enumerable: true, get: f5, set: f6 });
v4.test(v4);
gc();
