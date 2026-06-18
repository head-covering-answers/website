// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.headcovering.org', // Your URL
  base: '/',               // Your Repo Name

	integrations: [
		starlight({

			title: 'Head Covering Answers',
			favicon: '/favicon.ico',

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
					label: 'PRACTICAL QUESTIONS',
					autogenerate: { directory: 'practical questions' },
				},
				{
					label: 'MISCONCEPTIONS',
					autogenerate: { directory: 'misconceptions' },
				},
			],
		}),
	],
});
