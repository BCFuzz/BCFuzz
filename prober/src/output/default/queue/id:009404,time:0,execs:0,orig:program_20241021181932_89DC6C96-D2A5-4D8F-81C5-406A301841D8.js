try { JSON.stringify(13, Int32Array, "maxByteLength"); } catch (e) {}
gc();
