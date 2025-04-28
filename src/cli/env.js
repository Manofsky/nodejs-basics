const envPrefix = 'RSS_';

const parseEnv = () => {
    // Write your code here 
    const rssVariables = [];
    for (const key in process.env) {
        if (key.startsWith(envPrefix)) {
            rssVariables.push(`${key}=${process.env[key]}`);
        }
    }

    console.log(rssVariables.join('; '));
};

parseEnv();