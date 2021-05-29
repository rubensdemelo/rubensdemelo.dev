<script context="module">
	export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const modules = await import.meta.glob('../../../_posts/*.md');

		for (let [path, resolver] of Object.entries(modules)) {
			console.log(await resolver());
			console.log(
				modules[path]().then((post) => {
					console.log(post);
				})
			);
		}

		return {
			status: 200
		};
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Rubens de Melo</h1>
<p>This pages tells you about stuff!</p>
