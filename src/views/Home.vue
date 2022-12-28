<template>
    <h3 class="text-2xl text-center underline font-bold mb-4">Home Page</h3>
    <div class="container mx-auto columns-4 gap-8">
        <div v-for="photo in photos" class="mt-5 border-gray-400 shadow h-full">
            <img class="aspect-video w-full" :src="photo.thumbnailUrl" :alt="photo.title">
            <h2 class="text-xl font-semibold py-2">{{ photo.title  }}</h2>
        </div>
       
    </div>

</template>
<script>
    export default{
        name: 'Home',
        data(){
            return {
                photos: [],
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => this.photos = json)
        }
    }
</script>