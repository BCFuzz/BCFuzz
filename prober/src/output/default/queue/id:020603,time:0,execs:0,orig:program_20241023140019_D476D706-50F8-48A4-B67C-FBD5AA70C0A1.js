function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        const v2 = [-1.626456057319253e+308,870574.5617304447,-1000000000000.0,0.3151261051508967];
        function f3(a4) {
        }
        const t5 = [v2];
        t5[Symbol.toPrimitive] = f0;
        const v8 = [];
        v8.valueOf = f3;
        -23471n == v8;
        v1 **= v1;
    }
}
const v13 = new Uint16Array(1000);
v13["some"](f0);
gc();
