<script>
 export default {
    props: ['winCount', 'loseCount']
 }
</script>

<template>
    <section>
        Player <span>{{this.winCount}}</span> x <span>{{this.loseCount}}</span> Computer
    </section>
</template>