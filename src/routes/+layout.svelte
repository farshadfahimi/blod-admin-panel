<script lang="ts">
import Toaster from '../components/Toast/index.svelte';
import '../assets/app.css'
import Navbar from '../components/MainNav/index.svelte'
import { isLoggedIn } from '@/lib/Auth'
</script>


{#if $isLoggedIn }

<Navbar />

<div class="px-2">
  <slot></slot>
</div>

{ :else }

<slot></slot>

{/if}

<Toaster />