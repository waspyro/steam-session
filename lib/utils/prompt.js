import readline from 'readline'

//todo: password prompts
//todo: ctrl-c handler
//todo: drain stream before asking question?

const queue = []
let running = false
function addItemToQueue(cb) {
  queue.push(cb)
  if(running) return
  (function run() {
    const next = queue.shift()
    if(!next) return running = false
    running = true
    next(run)
  })()
}

export default function prompt(msg, cb) {
  addItemToQueue(runNextItemInQueue => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(msg, answer => {
      cb(answer)
      rl.close();
      setImmediate(runNextItemInQueue)
    });
  })
}

prompt.preset = msg => cb => prompt(msg, cb)
prompt.Promise = msg => new Promise(resolve => prompt(msg, resolve))
