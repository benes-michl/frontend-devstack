module.exports = (env) => {
  console.log(env.enviro);
  return require(`./webpack.config.${env.enviro}.js`)
}