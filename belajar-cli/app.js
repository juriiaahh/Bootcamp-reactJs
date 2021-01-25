const { program } = require("@caporal/core")

// program.action(({ logger }) => {
//     console.log('xapiens');
    
//   logger.info("Hello, world!")
// })

program
// .argument('<message>','Description')
// .argument('<name>', 'Description', {default: 'Stranger'})
// .action(({args, logger}) =>{
//     logger.info(args.message)
//     logger.info(args.name)
// })

// menerima argument yg tidak terbatas
.argument('number...','Description')
.action(({args, logger})=>{
    let total = 0
    for(let number of args.number){
        total = total + number
    }
    logger.info(total)
})

//options = sesuatu yg di tambahkan bebas
// .argument('message', 'Description')
// // .option('-u, --uppercase', 'Description')
// .option('-t, --type [name]', 'Description')
// .action(({args, options, logger})=>{
//     // if(options.uppercase){
//     //     logger.info(args.message.toUpperCase())
//     // }else{
//     //     logger.info(args.message)
//     // }
//     // console.log(options.type);
//     if(options.type === 'uppercase'){
//         logger.info(args.message.toUpperCase())
//     }else{
//         logger.info(args.message)
//     }
    
// })

// beda args dan option
// args hrs di tambahkan
// option tidak harus di tambahkan


//commands
    // .command('install', 'Description')
    // .alias('i')
    // .action(({logger})=>{
    //     logger.info('install')
    // })
    // .command('uninstall', 'Description')
    // .alias('u')
    // .action(({logger})=>{
    //     logger.info('uninstall')
    // })

    // .command('info', 'Description')
    // .default()
    // .action(({logger})=>{
    //     logger.info('info')
    // })

//kombinasi arguments dan option
    // .command('instal', ' Description')
    // .argument('path', '')
    // .alias('i')
    // .action(({logger, args}) => {
    //     logger.info('instal')
    //     logger.info(args.path)
    // })






program.run()

//caporal.io untuk membuat cli app dengan library nya
