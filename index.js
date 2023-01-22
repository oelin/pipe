export default call => {

        const composable = x => call(x)

        composable.call = call
        composable.then = other => seq(x => other(call(x)))

        return composable
}
