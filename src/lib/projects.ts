export interface ProjectConfig {
	id: string;
	tag: string;
	title: string;
	shortDescription: string;
	description: string[];
	thumbnail: string;
	gallery: string[];
	githubRepo?: string;
	liveDemo?: string;
}

const projects: ProjectConfig[] = [
	{
		id: 'scrapcad',
		tag: 'Node.js',
		title: 'ScrapCad',
		shortDescription: 'Lagerbaserat voxelmodelleringsprogram.',
		description: [
			'Först utvecklades applikationen som ett verktyg för att importera anpassade skapelser till datorspelet Scrap Mechanic, ett spel där spelaren bygger egna fordon och uppfinningar av olika byggmaterial och elektriska komponenter. Med den första versionen av appen kunde spelaren importera byggmaterial i färger som vanligtvis inte är tillgängliga i spelet, vilket möjliggjorde skapelser som till exempel pixelart.',
			'Efter den första versionen flyttades appens fokus till att istället bli en mer generell voxelmodellbyggare, med en egen 3D-vy som gör det möjligt att panorera runt modellen. Applikationen är helt modul- och pluginbaserad, där både selektionsverktyg och modifieringsverktyg för de individuella voxlarna är modulära och utbyggbara. Appen är utvecklad i Node.js med Electron, Vue och Three.js.'
		],
		thumbnail: '/projects/scrapcad/thumbnail.webp',
		gallery: [
			'/projects/scrapcad/1-screen.webp',
			'/projects/scrapcad/2-screen.webp',
			'/projects/scrapcad/3-screen.webp',
			'/projects/scrapcad/4-screen.webp'
		],
		githubRepo: 'https://github.com/Octaphous/Scrapcad'
	},
	{
		id: 'tusentiocms',
		tag: 'SvelteKit',
		title: 'Tusentio CMS',
		shortDescription: 'Anpassningsbart innehållshanteringssystem.',
		description: [
			'Ett anpassat innehållshanteringssystem utvecklades för att ge full kontroll över kundupplevelsen och ett enhetligt inloggningssystem som gör det möjligt för alla kunder att nå sitt innehåll. Innehållet hämtas från användarens innehållsdatabas via ett REST-API, vilket gör det enkelt att integrera med deras egen webbplats eller applikation. I appen finns även en mediautforskare för bilder, ljud och video, samt stöd för webhook-deployments.'
		],
		thumbnail: '/projects/tusentiocms/thumbnail.webp',
		gallery: [
			'/projects/tusentiocms/1-screen.webp',
			'/projects/tusentiocms/2-screen.webp',
			'/projects/tusentiocms/3-screen.webp',
			'/projects/tusentiocms/4-screen.webp'
		],
		liveDemo: 'https://kund.tusent.io'
	},

	{
		id: 'memoatlas',
		tag: 'C# ASP.NET',
		title: 'MemoAtlas',
		shortDescription: 'Journal, spårning och statistik.',
		description: [
			'MemoAtlas är ett nytänkande journalsystem där användaren kan välja att spåra data om sitt liv kopplat till "Memos", vilket är samlade datapunkter per dag. Det är upp till användaren att konfigurera vilka punkter som ska spåras, för att sedan få statistiken presenterad i tidsuppdelade rapporter. Applikationens backend är utvecklad i C# med ramverket ASP.NET.'
		],
		thumbnail: '/projects/memoatlas/thumbnail.webp',
		gallery: [
			'/projects/memoatlas/1.webp',
			'/projects/memoatlas/2.webp',
			'/projects/memoatlas/3.webp',
			'/projects/memoatlas/4.webp'
		],
		githubRepo: 'https://github.com/Octaphous/MemoAtlas-Backend-ASP'
	},
	{
		id: 'max',
		tag: 'C# WPF',
		title: 'Max',
		shortDescription: 'Ljudspelare för Windows med spellistor',
		description: [
			'En enkel ljudspelare för Windows där användare kan skapa egna spellistor, eller "Bibliotek", fyllda med deras musik och tillhörande data. Appen har stöd för uppspelning i bakgrunden och erbjuder olika spellägen som användaren kan välja mellan. Applikationen är skriven i C# och skapades först med WinForms, men utvecklades senare i en ny version med hjälp av WPF.'
		],
		thumbnail: '/projects/max/thumbnail.webp',
		gallery: ['/projects/max/1-screen.webp', '/projects/max/2-screen.webp']
	},
	{
		id: 'hembilder',
		tag: 'SvelteKit',
		title: 'Hembilder',
		shortDescription: 'Bokningssystem och tjänster för mäklarfotografering.',
		description: [
			'Hembilder Västernorrland AB behövde ett verktyg för att förenkla bokningen av företagets mäklarfotograferingstjänster, samt en informationssida om vilka tjänster och rabatter som erbjuds. Applikationen utvecklades i SvelteKit och kopplades till vårt anpassade innehållshanteringssystem.'
		],
		thumbnail: '/projects/hembilder/thumbnail.webp',
		gallery: [
			'/projects/hembilder/1-screen.webp',
			'/projects/hembilder/2-screen.webp',
			'/projects/hembilder/3-screen.webp',
			'/projects/hembilder/4-screen.webp'
		],
		liveDemo: 'https://hembilder.se'
	},
	{
		id: 'pleasurablelearning',
		tag: 'Next.js',
		title: 'Pleasurable Learning',
		shortDescription: 'AI-baserad läsplattform för mellanstadieelever.',
		description: [
			'Under min utbildning fick jag, tillsammans med tre andra studenter, i uppdrag av en lärare på en närliggande grundskola att digitalisera hennes interaktiva läromaterial. Materialet hade som mål att göra läsförståelse roligare genom korta utmaningar och lekar som höll eleverna engagerade, och fanns tidigare endast i pappersformat. Vårt mål var att ta fram en digital prototyp av detta koncept.',
			'I plattformen kan elever läsa material både från sin lärare och från grundutbudet som är inbyggt i plattformen. Läsuppgifterna är uppbyggda i små quiz-segment, med korta utmaningar eller belöningar som kan genomföras mellan läsnivåerna.',
			'Plattformen är byggd med React-ramverket Next.js och är kopplad till en MongoDB-databas. I projektet var mitt uppdrag att stödja frontend- och databasteamet, planera appens struktur samt integrera automatisk generering av läsmaterial med hjälp av OpenAIs API.'
		],
		thumbnail: '/projects/pleasurablelearning/thumbnail.webp',
		gallery: [
			'/projects/pleasurablelearning/1-screen.webp',
			'/projects/pleasurablelearning/2-screen.webp',
			'/projects/pleasurablelearning/3-screen.webp',
			'/projects/pleasurablelearning/4-screen.webp',
			'/projects/pleasurablelearning/5-screen.webp',
			'/projects/pleasurablelearning/6-screen.webp'
		]
	},
	{
		id: 'lucasfrisk',
		tag: 'Nuxt',
		title: 'Lucas Frisk',
		shortDescription: 'Personlig webbplats med portfolio och blogg.',
		description: [
			'Lucas Frisk behövde en portfolio och blogg för sina fotograferingsprojekt. En ritning och prototyp planerades och designades först tillsammans med kunden i layoutprogrammet Figma, och byggdes senare som färdig produkt med Vue-ramverket Nuxt. Den är kopplad till det Git-baserade innehållshanteringssystemet Decap.'
		],
		thumbnail: '/projects/lucasfrisk/thumbnail.webp',
		gallery: ['/projects/lucasfrisk/1-screen.webp', '/projects/lucasfrisk/2-screen.webp'],
		liveDemo: 'https://lucasfrisk.se'
	}
];

export default projects;
