const fs = require('fs');
const html = fs.readFileSync('C:/Users/Asjaduzzaman/.gemini/antigravity-ide/brain/a1b1a8be-14b8-4256-8a4f-72fee78f7760/.system_generated/steps/330/content.md', 'utf8');

const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, ' ')
                 .replace(/\s+/g, ' ')
                 .trim();

console.log(text.substring(text.indexOf('4. Disclosure of Data'), text.indexOf('4. Disclosure of Data') + 4000));
