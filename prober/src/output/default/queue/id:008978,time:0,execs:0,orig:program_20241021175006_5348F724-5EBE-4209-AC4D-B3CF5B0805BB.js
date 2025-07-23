const v2 = ([Float32Array,Float32Array,Float32Array,Float32Array,Float32Array]).unshift;
try { v2.call(Float32Array); } catch (e) {}
gc();
