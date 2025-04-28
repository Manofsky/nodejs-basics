const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    const parsedArgs = args.reduce((acc, cv, index) => {
        if (cv.startsWith('--')) {
            acc.push(`${cv.slice(2)} is ${args[index + 1]}`)
        }
        return acc;
    }, []);

    console.log(parsedArgs.join(', '));
};

parseArgs();