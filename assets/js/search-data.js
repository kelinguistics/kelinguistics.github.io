// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-talks",
          title: "talks",
          description: "This page is being updated with related abstracts and slides.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. generated by jekyll-scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-won-2nd-place-at-georgetown-s-three-minute-thesis-3mt-competition",
          title: 'Won 2nd place at Georgetown’s Three Minute Thesis (3MT) competition!',
          description: "",
          section: "News",},{id: "news-passed-my-second-qualifying-review",
          title: 'Passed my second Qualifying Review!',
          description: "",
          section: "News",},{id: "news-attended-vila5-in-brussels-and-presented-a-poster-on-audience-effect-on-vot-convergence",
          title: 'Attended ViLA5 in Brussels🇧🇪 and presented a poster on audience effect on VOT...',
          description: "",
          section: "News",},{id: "news-attended-icphs-in-prague-and-presented-my-poster-on-mandarin-listeners-perception-of-english-ing",
          title: 'Attended ICPhS in Prague 🇨🇿 and presented my poster on Mandarin listeners’ perception...',
          description: "",
          section: "News",},{id: "news-attended-nwav-51-and-gave-a-talk-on-vot-convergence-patterns-exhibited-by-mandarin-speakers-of-l2-english-in-a-contextualized-shadow-task",
          title: 'Attended NWAV(51) and gave a talk on VOT convergence patterns exhibited by Mandarin...',
          description: "",
          section: "News",},{id: "news-awarded-a-fall-2023-conference-travel-grant",
          title: 'Awarded a Fall 2023 Conference Travel Grant!',
          description: "",
          section: "News",},{id: "news-paper-on-the-linguistic-landscape-of-uyghur-restaurants-in-the-dmv-accepted-as-a-talk-at-the-15th-linguistic-landscape-ll15-to-be-held-in-new-zealand-in-june",
          title: 'Paper on the linguistic landscape of Uyghur restaurants in the DMV accepted as...',
          description: "",
          section: "News",},{id: "news-attended-lsa-s-annual-meeting-and-presented-a-poster-methods-in-assessing-vot-convergence-patterns-in-l2-english-speech",
          title: 'Attended LSA’s Annual Meeting and presented a poster, Methods in assessing VOT convergence...',
          description: "",
          section: "News",},{id: "news-abstract-on-vot-perception-accepted-as-a-poster-to-iclave12",
          title: 'Abstract on VOT perception accepted as a poster to ICLaVE12. 🇦🇹',
          description: "",
          section: "News",},{id: "news-abstract-on-vot-convergence-accepted-as-a-talk-at-plc48",
          title: 'Abstract on VOT convergence accepted as a talk at PLC48.',
          description: "",
          section: "News",},{id: "news-passed-my-dissertation-proposal-defense",
          title: 'Passed my dissertation proposal defense! 🙏🏁',
          description: "",
          section: "News",},{id: "news-attended-plc48-in-my-hometown-philadelphia-i-presented-my-project-on-l2-vot-convergence-and-discussed-possible-social-and-psychological-factors-motivating-the-results-i-found",
          title: 'Attended PLC48 in my hometown Philadelphia🔔! I presented my project on L2 VOT...',
          description: "",
          section: "News",},{id: "news-presented-some-preliminary-findings-from-my-ongoing-project-on-russian-english-social-speech-perception-study-at-masc-sll-at-john-hopkins-university",
          title: 'Presented some preliminary findings from my ongoing project on Russian-English social speech perception...',
          description: "",
          section: "News",},{id: "news-presented-a-paper-on-the-linguistic-landscape-of-dc-based-uyghur-restaurants-at-ll15",
          title: 'Presented a paper on the Linguistic Landscape of DC-based Uyghur restaurants at LL15....',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-socially-conditioned-voicing-contrast-perception-at-iclave12in-vienna-austria",
          title: 'Presented a poster on socially conditioned voicing contrast perception at IClaVE12in Vienna, Austria!...',
          description: "",
          section: "News",},{id: "news-presented-two-projects-at-nwav52-a-talk-assessing-bilinguals-speech-processing-via-vas-and-a-project-launch-poster-on-eye-tracking-implicit-social-speech-perception",
          title: 'Presented two projects at NWAV52: a talk assessing bilinguals’ speech processing via VAS...',
          description: "",
          section: "News",},{id: "news-ran-my-first-marathon-race-with-2024-eod-from-georgetown",
          title: 'Ran my first marathon race with 2024 EOD from Georgetown!',
          description: "",
          section: "News",},{id: "news-attending-lsa2025-annual-meeting-jan-9th-to-jan-12th-in-philadelphia-come-check-out-my-poster-on-sunday-or-chat-about-experimental-design-in-social-speech-perception",
          title: 'Attending LSA2025 Annual Meeting Jan. 9th to Jan. 12th in Philadelphia! Come check...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6C%38%36%33@%67%65%6F%72%67%65%74%6F%77%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kelinguistics", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/kelinguistics", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gRRbzDMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
