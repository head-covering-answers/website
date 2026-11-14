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

social: [
        {
          icon: 'facebook',
          label: 'Facebook Page',
          href: 'https://www.facebook.com/HeadcoveringForEvangelicals',
        },
        {
          icon: 'instagram',
          label: 'Instagram',
          href: 'https://www.instagram.com/headcovering_for_evangelicals/',
        },
      ],
      
			favicon: '/favicon.ico',

			head: [
				{
					tag: 'script',
					attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-SDKJ3XEQTT' },
				},
				{
					tag: 'script',
					content: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-SDKJ3XEQTT');",
				},
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
