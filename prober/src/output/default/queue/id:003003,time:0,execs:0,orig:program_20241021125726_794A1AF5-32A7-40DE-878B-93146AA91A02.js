function f1(a2, a3) {
    let v4 = 44485;
    for (let i = 0; i < 500; i++) {
        v4--;
    }
    return v4;
}
Uint8ClampedArray[Symbol.toPrimitive] = f1;
new Uint8ClampedArray([Uint8ClampedArray,Uint8ClampedArray,Uint8ClampedArray]);
gc();
