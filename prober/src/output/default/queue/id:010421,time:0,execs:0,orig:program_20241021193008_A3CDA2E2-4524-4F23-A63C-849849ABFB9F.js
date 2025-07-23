function f1() {
    return Date;
}
function f2(a3) {
    return f1;
}
Object.defineProperty(Date, Symbol.split, { get: f1, set: f2 });
for (let [v7,v8,,v9] of "-1073741824") {
    v7.split(Date);
}
gc();
