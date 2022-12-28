<script>
  export default {
    name:'App',
  data() {
    return {
      massage: 'Available courses',
      courses: [
        {
          id: 1,
          name: 'Laravel',
          description: 'Clita lorem lorem ea dolor clita.'
        },
        {
          id: 2,
          name: 'Tailwind Css',
          description: 'Quali in della siamo d\'esse e fosse. Pregator i quale e manifestamente tanto. Noi novella durare nostra beato coloro udita..Clita lorem lorem ea dolor clita.'
        },
        {
          id: 3,
          name: 'Vue Js',
          description: 'Clita lorem lorem ea dolor clita.He ungodly feel flash but from misery scorching but. None where were pleasure suits, loved run but land the say.'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container mx-auto">
    <h2 class="text-center text-2xl text-green-400 font-bold underline py-5">{{ massage }}</h2>
    
      <div v-for="course in courses" class="bg-slate-200 border rounded p-5 mb-4 shadow-md">
      <h3 class="text-3xl font-bold">{{ course.name }}</h3>
      <p>{{ course.description }}</p>
      </div>
    
  </div>

</template>


<style scoped>

</style>
