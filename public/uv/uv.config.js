/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',        // keep if used
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/src/uv.handler.js',
    client: '/uv/src/client/uv.client.js',   // if you have uv.client.js in client folder
    bundle: '/uv/src/uv.bundle.js',          // if you have a bundle
    config: '/uv/uv.config.js',
    sw: '/uv/src/uv.sw.js',
};
