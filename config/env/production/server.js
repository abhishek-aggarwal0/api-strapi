module.exports = ({ env }) => ({
    url: env("RENDER_EXTERNAL_URL"),
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'U417naanFUcEX82djXFOww=='),
      },
      apiToken: {
        salt: env('API_TOKEN_SALT', 'agyx5AoYWdoXLhvSRnt0Dg=='),
      },
    dirs: {
        public: "/data/public"
    },
});