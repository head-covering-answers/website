// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://head-covering-answers.github.io', // Your URL
  base: '/website',               // Your Repo Name
	integrations: [
		starlight({
			title: 'Head Covering Answers',
//			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
//				{
//					label: 'About',
//					items: [
//						// Each item here is one entry in the navigation menu.
//						{ label: 'About', slug: 'guides/example' },
//					],
//				},
    { slug: 'start here/welcome' },
				{
					label: 'Start Here',
					autogenerate: { directory: 'start here' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
