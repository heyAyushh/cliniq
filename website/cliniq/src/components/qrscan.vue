<template>
    <div>
        <vue-qr-reader v-on:code-scanned="codeArrived" />
    </div>
</template>

<script>
    import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js';
    export default {
        components: {
            VueQrReader
        },
        methods: {
            codeArrived (code) {
                console.log(code);
            }
        }
    }
</script>