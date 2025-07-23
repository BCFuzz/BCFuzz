const v1 = /i(?<a>.)\k<a>[\c~]?/mygi;
function f2() {
    return Date;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(v1, "multiline", { enumerable: true, get: f2, set: f3 });
v1.test(v1);
gc();
