const v1 = /(\2)(\1)/md.exec();
const v2 = [-4294967295,6,4294967296,536870888,11,65535,1161135588,-14];
for (let v3 = 0; v3 < 100; v3++) {
    const v4 = v2.__proto__;
    function f5(a6) {
        return a6;
    }
    Object.defineProperty(v4, "e", { configurable: true, enumerable: true, set: f5 });
}
new Uint8ClampedArray(v1);
gc();
