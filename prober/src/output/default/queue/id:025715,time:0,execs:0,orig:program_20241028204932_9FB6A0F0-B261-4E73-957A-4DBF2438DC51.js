const v1 = 16 != 16;
function f3() {
    return v1;
}
URIError[Symbol.toPrimitive] = f3;
const v6 = URIError(URIError);
eval(v6 + v6);
gc();
