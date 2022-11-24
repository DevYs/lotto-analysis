<script>
	import { generate2 } from '$lib/js/generator';

	const lottoList = generate2();
	console.log(lottoList);
</script>

<svelte:head>
    <title>Lotto number generator</title>
    <meta name="description" content="Lotto number generator" />
</svelte:head>

<section>
    {#each lottoList as lotto, i}
        {#if i == 5}
            <br />
        {/if}

        <ul>
            {#each lotto as num, i}
                {#if 1 <= num && num <= 10}
                    <li class="type-10">{num}</li>
                {:else if 11 <= num && num <= 20}
                    <li class="type-20">{num}</li>
                {:else if 21 <= num && num <= 30}
                    <li class="type-30">{num}</li>
                {:else if 31 <= num && num <= 40}
                    <li class="type-40">{num}</li>
                {:else if 41 <= num && num <= 45}
                    <li class="type-45">{num}</li>
                {/if}
            {/each}
        </ul>
    {/each}
</section>

<style>
    section {
        margin: 0 auto;
        width: 100%;
    }

    ul {
        padding: 5px 0;
        width: 100%;
        text-align: center;
    }
    ul li {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 41px;
        border-radius: 40px;
        display: inline-block;
        margin: 0 2px;
    }

    .type-10 { border:1px solid #fbc400; background-color: #fbc400; }
    .type-20 { border:1px solid #69c8f2; background-color: #69c8f2; }
    .type-30 { border:1px solid #ff7272; background-color: #ff7272; }
    .type-40 { border:1px solid #aaa; background-color: #aaa; }
    .type-45 { border:1px solid #b0d840; background-color: #b0d840; }
</style>
