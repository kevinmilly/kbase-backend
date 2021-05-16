const fetch = require('node-fetch');
const env = require('../env')

const key = env.gapikey;
const id = env.id;

exports.getResults = async (req, res) => {

    const searchTerm = req.params.term;

    try {
        const searchUrl = `https://customsearch.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${id}&key=${key}`;

        const focusedResults = [];
        fetch(searchUrl)
            .then(response => response.json())
            .then(results => {
                results = [...results.items];
                // console.dir(results[0].pagemap.cse_thumbnail);
                for(let r = 0; r<results.length - 1; r++) {
                    focusedResults.push({
                        title: results[r].title,
                        link: results[r].link,
                        content: results[r].snippet,
                        image: results[r].pagemap.cse_thumbnail && results[r].pagemap.cse_thumbnail[0].src,
                        source: results[r].displayLink,
                    })
                }

                res.send(focusedResults);
            });

        
      
    } catch(e) {
    
    }
  

}

