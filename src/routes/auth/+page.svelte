<script lang="ts">
	import { redirect } from '@sveltejs/kit';
  import { login, type Form } from './actions'

  let form: Form = {
    email: '',
    password: ''
  }
  let loading: boolean = false


  const submitForm = async () => {
    loading = true

    await login(form)

    loading = false

    redirect(304, '/')
  }
</script>

<div class="grid grid-cols-6 grid-rows-3 gap-4">
  <form method="post" on:submit|preventDefault={submitForm}>
    <div>
      <label for="">Title</label>
      <input type="email" bind:value={form.email} placeholder="email" required/>
    </div>

    <div>
      <label for="">Password</label>
      <input type="password" bind:value={form.password} placeholder="password" required>
    </div>

    <button type="submit">{ loading ? 'Wait...' : 'Submit' }</button>
  </form>
</div>

<style lang="postcss">
form {
  @apply border shadow-lg py-5 px-4 col-start-2 col-span-4 row-start-2;

  > div {
    @apply mb-3 grid;

    label {
      @apply mb-2;
    }

    input {
      @apply py-2 px-3;
    }
  }

  button {
    @apply px-7 py-2 bg-green-600 text-white rounded-md border-green-600 hover:bg-green-800 hover:border-green-800;
  }
}
</style>