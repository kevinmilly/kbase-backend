var google = require('google')
 
google.resultsPerPage = 25
var nextCounter = 0


exports.getResults = async (req,res,next) => {

        const searchTerm = req.params.term;

        const resources = [];

        const response = await google(searchTerm); 
    
        for (let i = 0; i < response.links.length; ++i) {
            resources.push({
                title: link.title,
                link: link.href,
            })
        };

         res.status(200).json(resources);
    
    
        // google(searchTerm, function (err, res) {
        //     if (err) console.error(err)
        //     console.dir(res);

        //     for (let i = 0; i < res.links.length; ++i) {
        //         resources.push({
        //             title: link.title,
        //             link: link.href,
        //         })
        //     };

            
        //     if (nextCounter < 4) {
        //         nextCounter += 1
        //         if (res.next) res.next()
        //     }

        //     res.status(200).json(resources);
    
        //  })

}