import fs from 'fs';
import https from 'https';

const options = {
    hostname: 'api.github.com',
    path: '/users/SafwanIrfan/repos?sort=updated&per_page=100',
    method: 'GET',
    headers: {
        'User-Agent': 'Node.js/Portfolio-App'
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            try {
                const repos = JSON.parse(data);
                const projects = repos.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description || 'No description provided.',
                    url: repo.html_url,
                    homepage: repo.homepage,
                    language: repo.language,
                    updated_at: repo.updated_at,
                    topics: repo.topics || []
                }));

                const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;
                fs.writeFileSync('src/data/projects.js', fileContent);
                console.log('Successfully fetched and saved projects.');
            } catch (err) {
                console.error('Error parsing JSON:', err);
            }
        } else {
            console.error(`API Error: ${res.statusCode} ${res.statusMessage}`);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
