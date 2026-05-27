import { useState } from '#app';

export const useL10n = () => {
  const locale = useState<'en' | 'mr' | 'hi'>('locale', () => 'en');

  const translations = {
    en: {
      // Hero
      heroTitle: "Find every government scheme you qualify for —",
      heroHighlight: "in 60 seconds",
      heroSub: "AgriAssist AI checks 20+ central and state schemes for your crop, land size, and district — powered by Nemotron AI.",
      cta: "Check my eligibility →",
      demo: "Watch demo",
      phase: "Phase 1 Live",
      news: "What's new",
      bottomCta: "Your schemes are waiting — check in 60 seconds",
      bottomSub: "Stop leaving money on the table. Join 5,000+ farmers using AgriAssist AI.",

      // Problem Stats
      statsTitle: "Why this matters",
      statsSub: "The complexity of government schemes often prevents those who need them most from accessing support.",
      stat1Title: "Unclaimed Subsidies",
      stat1Val: "₹2 Lakh Crore",
      stat1Sub: "in unclaimed farm subsidies annually across India.",
      stat2Title: "Awareness Gap",
      stat2Val: "60%",
      stat2Sub: "of eligible farmers are unaware of PM-KISAN benefits.",
      stat3Title: "Fragmented Data",
      stat3Val: "20+ Schemes",
      stat3Sub: "scattered across 5+ different government portals.",

      // How it works
      howTitle: "How it works",
      howSub: "Get your personalized eligibility report in three simple steps.",
      how1Title: "Enter your farm profile",
      how1Sub: "Crop type, land size, district, and income — takes less than 60 seconds.",
      how2Title: "AI checks 20+ schemes",
      how2Sub: "Nemotron AI reads official govt PDFs and matches your profile in real-time.",
      how3Title: "Get your report",
      how3Sub: "See schemes, documents needed, and application links — all in one printable checklist.",

      // Features
      featTitle: "Comprehensive Support",
      featSub: "Everything you need to navigate government support and optimize your farming operations.",
      feat1: "Scheme Eligibility",
      feat1Sub: "Instant match across 20+ central and state schemes.",
      feat2: "Printable Checklist",
      feat2Sub: "Take a clear document list to your nearest CSC office.",
      feat3: "Weather Advisory",
      feat3Sub: "Weekly crop tips specifically for your region and soil.",
      feat4: "Location-Based",
      feat4Sub: "Hyper-local results based on your specific district.",
      feat5: "Crop-Specific",
      feat5Sub: "Tailored advice for Rice, Cotton, Wheat, and more.",
      feat6: "RAG Grounded",
      feat6Sub: "AI answers derived strictly from official government documents.",

      // Schemes
      schemesTitle: "Schemes Covered",
      schemesSub: "Our AI is trained on 20+ central and state government schemes.",
      moreSoon: "+ more coming soon",

      // Roadmap
      roadTitle: "Product Roadmap",
      roadSub: "We are committed to building the most comprehensive digital tool for Indian farmers.",
      road1: "Phase 1: Eligibility",
      road1Sub: "Scheme eligibility checker + printable checklist + official document links.",
      road2: "Phase 2: Advisory",
      road2Sub: "Weekly weather advisory + SMS alerts + AI-driven crop protection tips.",
      road3: "Phase 3: Deep Insights",
      road3Sub: "Location-based fertilizer & soil guide + market price forecasting.",

      // Tech
      techTitle: "Powered By",
      techSub: "Modern technology bringing precision and speed to agricultural support.",
      tech1: "NVIDIA AI reasoning",
      tech1Sub: "Complex logic and document understanding.",
      tech2: "Grounded Accuracy",
      tech2Sub: "Verified answers from official PDFs.",
      tech3: "Scalable Stack",
      tech3Sub: "Fast, responsive, and secure web platform."
    },
    mr: {
      // Hero
      heroTitle: "तुम्ही पात्र असलेल्या सर्व सरकारी योजना शोधा —",
      heroHighlight: "६० सेकंदात",
      heroSub: "AgriAssist AI तुमच्या पिकासाठी, जमिनीच्या आकारासाठी आणि जिल्ह्यासाठी २०+ केंद्र आणि राज्य योजना तपासते — Nemotron AI द्वारे समर्थित.",
      cta: "माझी पात्रता तपासा →",
      demo: "डेमो पहा",
      phase: "फेज १ लाईव्ह",
      news: "नवीन काय आहे",
      bottomCta: "तुमच्या योजना तुमची वाट पाहत आहेत — ६० सेकंदात तपासा",
      bottomSub: "मिळणारा फायदा सोडू नका. AgriAssist AI वापरणाऱ्या ५,०००+ शेतकऱ्यांमध्ये सामील व्हा.",

      // Problem Stats
      statsTitle: "हे महत्त्वाचे का आहे",
      statsSub: "सरकारी योजनांच्या गुंतागुंतीमुळे अनेकदा ज्यांना गरज आहे त्यांना मदत मिळत नाही.",
      stat1Title: "दावा न केलेले अनुदान",
      stat1Val: "₹२ लाख कोटी",
      stat1Sub: "भारतात दरवर्षी शेती अनुदानाचा दावा केला जात नाही.",
      stat2Title: "जागरूकतेचा अभाव",
      stat2Val: "६०%",
      stat2Sub: "पात्र शेतकऱ्यांना PM-KISAN च्या फायद्यांविषयी माहिती नाही.",
      stat3Title: "विखुरलेली माहिती",
      stat3Val: "२०+ योजना",
      stat3Sub: "५+ वेगवेगळ्या सरकारी पोर्टलवर माहिती विखुरलेली आहे.",

      // How it works
      howTitle: "हे कसे कार्य करते",
      howSub: "तीन सोप्या चरणांमध्ये तुमचा वैयक्तिक पात्रता अहवाल मिळवा.",
      how1Title: "तुमची शेती माहिती भरा",
      how1Sub: "पिकाचा प्रकार, जमिनीचा आकार, जिल्हा आणि उत्पन्न — ६० सेकंदांपेक्षा कमी वेळ लागतो.",
      how2Title: "AI २०+ योजना तपासते",
      how2Sub: "Nemotron AI अधिकृत सरकारी PDF वाचते आणि तुमच्या माहितीशी जुळवते.",
      how3Title: "तुमचा अहवाल मिळवा",
      how3Sub: "योजना, आवश्यक कागदपत्रे आणि अर्जाच्या लिंक्स पहा — सर्व एकाच चेकलिस्टमध्ये.",

      // Features
      featTitle: "सर्वसमावेशक मदत",
      featSub: "सरकारी मदत मिळवण्यासाठी आणि तुमची शेती सुधारण्यासाठी आवश्यक सर्व काही.",
      feat1: "योजना पात्रता",
      feat1Sub: "२०+ केंद्र आणि राज्य योजनांमध्ये त्वरित जुळणी.",
      feat2: "प्रिंट करण्यायोग्य चेकलिस्ट",
      feat2Sub: "तुमच्या जवळच्या CSC केंद्रावर नेण्यासाठी कागदपत्रांची यादी.",
      feat3: "हवामान सल्ला",
      feat3Sub: "तुमच्या भागासाठी आणि मातीसाठी साप्ताहिक पीक टिप्स.",
      feat4: "स्थान-आधारित",
      feat4Sub: "तुमच्या जिल्ह्यानुसार अचूक निकाल.",
      feat5: "पीक-विशिष्ट",
      feat5Sub: "भात, कापूस, गहू आणि अधिकसाठी खास सल्ला.",
      feat6: "RAG आधारित",
      feat6Sub: "अधिकृत सरकारी कागदपत्रांमधून मिळालेली अचूक उत्तरे.",

      // Schemes
      schemesTitle: "समाविष्ट योजना",
      schemesSub: "आमचे AI २०+ केंद्र आणि राज्य सरकारी योजनांवर प्रशिक्षित आहे.",
      moreSoon: "+ अधिक लवकरच येत आहेत",

      // Roadmap
      roadTitle: "भविष्यकालीन योजना",
      roadSub: "आम्ही भारतीय शेतकऱ्यांसाठी सर्वात व्यापक डिजिटल साधन तयार करण्यासाठी वचनबद्ध आहोत.",
      road1: "फेज १: पात्रता",
      road1Sub: "योजना पात्रता तपासक + चेकलिस्ट + अधिकृत कागदपत्रांच्या लिंक्स.",
      road2: "फेज २: सल्लागार",
      road2Sub: "साप्ताहिक हवामान सल्ला + SMS अलर्ट + AI पीक संरक्षण टिप्स.",
      road3: "फेज ३: सखोल माहिती",
      road3Sub: "खत आणि माती मार्गदर्शन + बाजारभाव अंदाज.",

      // Tech
      techTitle: "तंत्रज्ञान",
      techSub: "शेती मदतीमध्ये अचूकता आणि गती आणणारे आधुनिक तंत्रज्ञान.",
      tech1: "NVIDIA AI तर्कक्षमता",
      tech1Sub: "गुंतागुंतीचे तर्क आणि कागदपत्रे समजून घेण्याची क्षमता.",
      tech2: "अचूकता",
      tech2Sub: "अधिकृत PDF मधून पडताळलेली उत्तरे.",
      tech3: "वेगवान प्लॅटफॉर्म",
      tech3Sub: "वेगवान, सुरक्षित आणि आधुनिक वेब प्लॅटफॉर्म."
    },
    hi: {
      // Hero
      heroTitle: "उन सभी सरकारी योजनाओं को खोजें जिनके लिए आप पात्र हैं —",
      heroHighlight: "६० सेकंड में",
      heroSub: "AgriAssist AI आपकी फसल, भूमि के आकार और जिले के लिए २०+ केंद्रीय और राज्य योजनाओं की जांच करता है — Nemotron AI द्वारा संचालित।",
      cta: "मेरी पात्रता जांचें →",
      demo: "डेमो देखें",
      phase: "फेज १ लाइव",
      news: "नया क्या है",
      bottomCta: "आपकी योजनाएं प्रतीक्षा कर रही हैं — ६० सेकंड में जांचें",
      bottomSub: "अपना लाभ न खोएं। AgriAssist AI का उपयोग करने वाले ५,०००+ किसानों में शामिल हों।",

      // Problem Stats
      statsTitle: "यह क्यों महत्वपूर्ण है",
      statsSub: "सरकारी योजनाओं की जटिलता अक्सर उन लोगों को मदद लेने से रोकती है जिन्हें इसकी सबसे अधिक आवश्यकता है।",
      stat1Title: "बिना दावा की गई सब्सिडी",
      stat1Val: "₹२ लाख करोड़",
      stat1Sub: "भारत में हर साल कृषि सब्सिडी का दावा नहीं किया जाता है।",
      stat2Title: "जागरूकता की कमी",
      stat2Val: "६०%",
      stat2Sub: "पात्र किसानों को PM-KISAN के लाभों के बारे में जानकारी नहीं है।",
      stat3Title: "बिखरी हुई जानकारी",
      stat3Val: "२०+ योजनाएं",
      stat3Sub: "५+ अलग-अलग सरकारी पोर्टलों पर जानकारी बिखरी हुई है।",

      // How it works
      howTitle: "यह कैसे काम करता है",
      howSub: "तीन आसान चरणों में अपनी व्यक्तिगत पात्रता रिपोर्ट प्राप्त करें।",
      how1Title: "अपनी खेती की जानकारी भरें",
      how1Sub: "फसल का प्रकार, भूमि का आकार, जिला और आय — ६० सेकंड से भी कम समय लगता है।",
      how2Title: "AI २०+ योजनाओं की जांच करता है",
      how2Sub: "Nemotron AI आधिकारिक सरकारी PDF पढ़ता है और आपकी जानकारी से मेल खाता है।",
      how3Title: "अपनी रिपोर्ट प्राप्त करें",
      how3Sub: "योजनाएं, आवश्यक दस्तावेज और आवेदन लिंक देखें — सभी एक ही चेकलिस्ट में।",

      // Features
      featTitle: "व्यापक सहायता",
      featSub: "सरकारी सहायता प्राप्त करने और अपनी खेती को बेहतर बनाने के लिए आवश्यक सब कुछ।",
      feat1: "योजना पात्रता",
      feat1Sub: "२०+ केंद्रीय और राज्य योजनाओं में त्वरित मिलान।",
      feat2: "प्रिंट करने योग्य चेकलिस्ट",
      feat2Sub: "अपने नजदीकी CSC केंद्र पर ले जाने के लिए दस्तावेजों की सूची।",
      feat3: "मौसम सलाह",
      feat3Sub: "आपके क्षेत्र और मिट्टी के लिए साप्ताहिक फसल टिप्स।",
      feat4: "स्थान-आधारित",
      feat4Sub: "आपके जिले के अनुसार सटीक परिणाम।",
      feat5: "फसल-विशिष्ट",
      feat5Sub: "चावल, कपास, गेहूं और अधिक के लिए विशेष सलाह।",
      feat6: "RAG आधारित",
      feat6Sub: "आधिकारिक सरकारी दस्तावेजों से प्राप्त सटीक उत्तर।",

      // Schemes
      schemesTitle: "शामिल योजनाएं",
      schemesSub: "हमारा AI २०+ केंद्रीय और राज्य सरकारी योजनाओं पर प्रशिक्षित है।",
      moreSoon: "+ और जल्द ही आ रहे हैं",

      // Roadmap
      roadTitle: "भविष्य की योजनाएं",
      roadSub: "हम भारतीय किसानों के लिए सबसे व्यापक डिजिटल टूल बनाने के लिए प्रतिबद्ध हैं।",
      road1: "फेज १: पात्रता",
      road1Sub: "योजना पात्रता चेकर + चेकलिस्ट + आधिकारिक दस्तावेज लिंक।",
      road2: "फेज २: सलाह",
      road2Sub: "साप्ताहिक मौसम सलाह + SMS अलर्ट + AI फसल सुरक्षा टिप्स।",
      road3: "फेज ३: गहरी जानकारी",
      road3Sub: "उर्वरक और मिट्टी मार्गदर्शन + बाजार मूल्य पूर्वानुमान।",

      // Tech
      techTitle: "तकनीकी",
      techSub: "खेती की सहायता में सटीकता और गति लाने वाली आधुनिक तकनीक।",
      tech1: "NVIDIA AI तर्क क्षमता",
      tech1Sub: "जटिल तर्क और दस्तावेजों को समझने की क्षमता।",
      tech2: "सटीकता",
      tech2Sub: "आधिकारिक PDF से सत्यापित उत्तर।",
      tech3: "स्केलेबल प्लेटफॉर्म",
      tech3Sub: "तेज, सुरक्षित और आधुनिक वेब प्लेटफॉर्म।"
    }
  };

  const t = (key: keyof typeof translations['en']) => {
    return translations[locale.value][key] || translations['en'][key];
  };

  const setLocale = (newLocale: 'en' | 'mr' | 'hi') => {
    locale.value = newLocale;
  };

  return {
    locale,
    t,
    setLocale
  };
};
