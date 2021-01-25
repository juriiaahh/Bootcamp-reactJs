const { program } = require("@caporal/core")

// program.action(({ logger }) => {
//     console.log('xapiens');
    
//   logger.info("Hello, world!")
// })

program
.argument('<message>','Description')
.argument('<name>', 'Description', {default: 'Stranger'})
.action(({args, logger}) =>{
    logger.info(args.message)
    logger.info(args.name)
})

program.run()

//caporal.io untuk membuat cli app dengan library nya
