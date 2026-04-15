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
			head: [
        			//{
          			//	tag: 'script',
          			//	attrs: { src: 'https://www.biblegateway.com/public/link-to-us/tooltips/bglinks.js', defer: true },
        			//},
			      ],
			components: {
        			// Custom footer = regular footer + BibleGateway reference tagger, which uses the script listed a few lines above this line, but which need to be called near the bottom of the page (footer) in order to work
        			Footer: './src/components/Footer.astro',
      				},
			customCss: ['./src/styles/custom.css'],
//			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
//				{
//					label: 'About',
//					items: [
//						// Each item here is one entry in the navigation menu.
//						{ label: 'About', slug: 'guides/example' },
//					],
//				},
				{
					label: 'START HERE',
					autogenerate: { directory: 'start here' },
				},
				{
					label: 'BIBLICAL BASIS',
					autogenerate: { directory: 'biblical basis' },
				},
				{
					label: 'MISCONCEPTIONS',
					autogenerate: { directory: 'misconceptions' },
				},
			],
		}),
	],
});
