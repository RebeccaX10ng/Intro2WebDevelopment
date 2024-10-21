const languages = [
    "English", "中文", "हिन्दी", "Español", "العربية", "Português", "বাংলা", "Русский", "日本語", "ਪੰਜਾਬੀ",
    "Deutsch", "한국어", "Français", "Türkçe", "Italiano", "ไทย", "ગુજરાતી", "Українська", "اُردُو", "فارسی",
    "Polski", "Ελληνικά", "Tiếng Việt", "עִבְרִית", "Română", "Suomi", "Nederlands", "Magyar", "Svenska",
    "Čeština", "ქართული", "Српски", "Basa Jawa", "Filipino", "Bahasa Indonesia", "Bahasa Melayu", "Norsk",
    "Diné Bizaad", "ಕನ್ನಡ", "മലയാളം", "සිංහල", "کوردی", "עברית", "Kiswahili", "Հայերեն", "Euskara", "Shqip",
    "Беларуская", "Монгол", "Afrikaans", "Basa Sunda", "བོད་ཡིག", "རྫོང་ཁ", "Shona", "Slovenčina", "Slovenščina",
    "ភាសាខ្មែរ", "Malagasy", "Māori", "Қазақ", "ລາວ", "Bosanski", "Shqip", "Tonga", "Zulu", "Sesotho", "Chichewa",
    "Oromoo", "Hausa", "Igbo", "Yorùbá", "Xitsonga", "Tswana", "Wolof", "Dinka", "Luganda", "Tshivenda", "Pashto",
    "Bashkir", "Kyrgyz", "Tatar", "Uyghur", "Tamazight", "Quechua", "Nahuatl", "Guarani", "Aymara", "Inuktitut",
    "Hawaiian", "Samoan", "Fijian", "Tahitian", "Tongan", "Māori", "Cree", "Ojibwe", "Cherokee", "Greenlandic",
    "Chamorro", "Palauan", "Bislama", "Papiamento", "Nauruan", "Marshallese", "Tok Pisin", "Hmong", "Haitian Creole",
    "Sardinian", "Breton", "Welsh", "Scottish Gaelic", "Irish", "Manx", "Cornish", "Luxembourgish", "Fijian", "Maltese"
];

const background = document.getElementById('background');


function generateRandomLanguage() {
    const language = document.createElement('div');
    language.classList.add('language');

    const randomIndex = Math.floor(Math.random() * languages.length);
    language.textContent = languages[randomIndex];

    const fontSize = Math.floor(Math.random() * 40) + 20;
    language.style.fontSize = `${fontSize}px`;

    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    language.style.left = `${x}px`;
    language.style.top = `${y}px`;

    background.appendChild(language);
}

for (let i = 0; i < 120; i++) {
    generateRandomLanguage();
}
