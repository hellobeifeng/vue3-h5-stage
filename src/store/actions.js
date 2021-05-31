export default {
    async add100(ctx) {
        ctx.commit('add', {
            count: 100
        })
    }
}