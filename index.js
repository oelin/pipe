const pipe = call => {

        const callable = x => call(x)

        callable.call = call
        callable.pipe = other => pipe(x => other(call(x)))

        return callable
}


export default pipe
