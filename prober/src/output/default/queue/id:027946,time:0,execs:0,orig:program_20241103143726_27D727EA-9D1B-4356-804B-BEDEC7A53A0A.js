for (let v1 = 0; v1 < 25; v1++) {
    function f2() {
        const v3 = [2147483649,10,43461,10,8,489747048,-55639,-646099385];
        function f4() {
            return v1;
        }
        const o5 = {
            "getOwnPropertyDescriptor": f4,
        };
        const v6 = delete o5.getOwnPropertyDescriptor;
        new Proxy(v3, o5);
        return v6;
    }
    for (let i = 0; i < 5; i++) {
        new Uint8ClampedArray(4294967296);
        f2();
    }
}
gc();
