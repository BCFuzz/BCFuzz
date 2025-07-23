const v1 = /(?:a+)?l(?:ab){4,7}/gsu;
function f2() {
    return Date;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2 });
v1.exec(v1);
gc();
