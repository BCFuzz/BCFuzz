const v1 = /i(?<a>.)\k<a>[\c~]?/mygi;
function f2() {
    return Date;
}
function f3(a4) {
    return f2;
}
Object.defineProperty(v1, "toString", { enumerable: true, get: f2, set: f3 });
v1.test(v1);
gc();
