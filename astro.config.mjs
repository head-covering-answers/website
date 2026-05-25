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
        			
			      ],

			components: {
        			// Adding footer code which includes Bible reference tagger.
        			Footer: './src/components/Footer.astro',
      				},

			customCss: ['./src/styles/custom.css'],

			//social: [{ icon: 'facebook', label: 'home', href: '/website' }],

			sidebar: [
				{
					label: 'START HERE',
					autogenerate: { directory: 'start here' },
				},
				{
					label: 'BIBLICAL BASIS',
					autogenerate: { directory: 'biblical basis' },
				},
				{
					label: 'PRACTICAL TOPICS',
					autogenerate: { directory: 'practical topics' },
				},
				{
					label: 'MISCONCEPTIONS',
					autogenerate: { directory: 'misconceptions' },
				},
			],
		}),
	],
});
