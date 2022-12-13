

<template>
    <div>
        '<div id="coord" class="col-xs-4">' +
                '<h2>Coordinates</h2>' +
                '<p><strong>Lng</strong> {{ coord.lon }}</p>' +
                '<p><strong>Lat</strong> {{ coord.lat }}</p></div>'
    </div>
</template>

<script>
export default {
    name: 'coord',
    props: ['coord'],

}
</script>
